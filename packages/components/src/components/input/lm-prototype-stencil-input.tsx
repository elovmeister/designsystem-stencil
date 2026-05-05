import {
    Component,
    Prop,
    State,
    Element,
    AttachInternals,
    Event,
    EventEmitter,
    Watch,
    h,
    Host
} from '@stencil/core';
import type { IconName } from '@lm-prototype-stencil/icons';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
    tag: 'lm-prototype-stencil-input',
    styleUrl: 'lm-prototype-stencil-input.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeStencilInput {
    @Element() el!: HTMLElement;
    @AttachInternals() internals!: ElementInternals;

    @Prop() label?: string;
    @Prop({ mutable: true, reflect: true }) value = '';
    @Prop() name?: string;
    @Prop() type: InputType = 'text';
    @Prop() placeholder = '';
    @Prop({ reflect: true }) size: InputSize = 'md';

    @Prop() icon?: IconName;
    @Prop({ attribute: 'icon-end' }) iconEnd?: IconName;

    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) required = false;
    @Prop({ reflect: true }) readonly = false;

    @State() focused = false;

    @Event({ eventName: 'lm-input', bubbles: true, composed: true }) lmInput!: EventEmitter<string>;
    @Event({ eventName: 'lm-change', bubbles: true, composed: true }) lmChange!: EventEmitter<string>;

    private inputId = `lm-input-${Math.random().toString(36).substring(2, 9)}`;

    @Watch('value')
    syncFormValue() {
        this.internals.setFormValue(this.value);
    }

    componentDidLoad() {
        this.syncFormValue();
    }

    formDisabledCallback(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    formResetCallback(): void {
        this.value = this.el.getAttribute('value') || '';
    }

    private handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.lmInput.emit(this.value);
    };

    private handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.lmChange.emit(this.value);
    };

    private handleFocus = () => {
        this.focused = true;
    };

    private handleBlur = () => {
        this.focused = false;
    };

    render() {
        const fwdAriaLabel = this.el.getAttribute('aria-label');
        const fwdAriaLabelledby = this.el.getAttribute('aria-labelledby');
        const fwdAriaDescribedby = this.el.getAttribute('aria-describedby');
        const fwdAriaInvalid = this.el.getAttribute('aria-invalid');

        return (
            <Host>
                <div class="form-control" part="base">
                    {this.label && (
                        <label class="label" htmlFor={this.inputId} part="label">
                            {this.label}
                        </label>
                    )}

                    <div
                        class={`input-wrapper ${this.focused ? 'input-wrapper--focused' : ''} ${this.disabled ? 'input-wrapper--disabled' : ''}`}
                        part="wrapper"
                    >
                        <span class="input__slot">
                            <slot name="start">
                                {this.icon && (
                                    <lm-prototype-stencil-icon
                                        name={this.icon}
                                        style={{ marginLeft: 'var(--_px)' }}
                                    ></lm-prototype-stencil-icon>
                                )}
                            </slot>
                        </span>

                        <input
                            id={this.inputId}
                            class="input"
                            part="input"
                            type={this.type}
                            value={this.value}
                            name={this.name}
                            placeholder={this.placeholder || undefined}
                            disabled={this.disabled}
                            required={this.required}
                            readOnly={this.readonly}
                            aria-label={fwdAriaLabel || undefined}
                            aria-labelledby={fwdAriaLabelledby || undefined}
                            aria-describedby={fwdAriaDescribedby || undefined}
                            aria-invalid={fwdAriaInvalid || undefined}
                            onInput={this.handleInput}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />

                        <span class="input__slot">
                            <slot name="end">
                                {this.iconEnd && (
                                    <lm-prototype-stencil-icon
                                        name={this.iconEnd}
                                        style={{ marginRight: 'var(--_px)' }}
                                    ></lm-prototype-stencil-icon>
                                )}
                            </slot>
                        </span>
                    </div>
                </div>
            </Host>
        );
    }
}