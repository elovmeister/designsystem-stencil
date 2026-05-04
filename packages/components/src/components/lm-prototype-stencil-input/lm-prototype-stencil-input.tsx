/*
import {
    Component,
    Host,
    h,
    Prop,
    State,
    Element,
    Event,
    EventEmitter,
    AttachInternals,
    Watch
} from '@stencil/core';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
    tag: 'lm-prototype-stencil-input',
    styleUrl: 'lm-prototype-stencil-input.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeStencilInput {
    @Element() el: HTMLElement;
    @AttachInternals() internals: ElementInternals;

    @Prop() label?: string;
    @Prop({ mutable: true, reflect: true }) value = '';
    @Prop() name?: string;
    @Prop() type: InputType = 'text';
    @Prop() placeholder = '';
    @Prop({ reflect: true }) size: InputSize = 'md';
    @Prop() icon?: string;
    @Prop() iconEnd?: string;
    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) required = false;
    @Prop({ reflect: true }) readonly = false;

    @State() focused = false;

    @Event({ eventName: 'lmInput' }) lmInput: EventEmitter<string>;
    @Event({ eventName: 'lmChange' }) lmChange: EventEmitter<string>;

    private inputId = `lm-input-${Math.random().toString(36).substring(2, 9)}`;

    @Watch('value')
    valueChanged(newValue: string) {
        this.internals.setFormValue(newValue);
    }

    componentWillLoad() {
        this.internals.setFormValue(this.value);
    }

    formResetCallback() {
        this.value = this.el.getAttribute('value') || '';
        this.internals.setFormValue(this.value);
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
                        class={{
                            'input-wrapper': true,
                            'input-wrapper--focused': this.focused,
                            'input-wrapper--disabled': this.disabled
                        }}
                        part="wrapper"
                    >
                        <slot name="start" class="input__slot">
                            {this.icon && (
                                <lm-prototype-stencil-icon
                                    name={this.icon as any}
                                    style={{ marginLeft: 'var(--_px)' }}
                                ></lm-prototype-stencil-icon>
                            )}
                        </slot>

                        <input
                            id={this.inputId}
                            class="input"
                            part="input"
                            type={this.type}
                            value={this.value}
                            name={this.name}
                            placeholder={this.placeholder}
                            disabled={this.disabled}
                            required={this.required}
                            readOnly={this.readonly}
                            aria-label={fwdAriaLabel}
                            aria-labelledby={fwdAriaLabelledby}
                            aria-describedby={fwdAriaDescribedby}
                            aria-invalid={fwdAriaInvalid}
                            onInput={this.handleInput}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />

                        <slot name="end" class="input__slot">
                            {this.iconEnd && (
                                <lm-prototype-stencil-icon
                                    name={this.iconEnd as any}
                                    style={{ marginRight: 'var(--_px)' }}
                                ></lm-prototype-stencil-icon>
                            )}
                        </slot>
                    </div>
                </div>
            </Host>
        );
    }
}

 */