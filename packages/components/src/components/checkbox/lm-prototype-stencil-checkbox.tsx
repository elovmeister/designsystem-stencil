import {
    Component,
    Prop,
    h,
    Host,
    Element,
    AttachInternals,
    Event,
    EventEmitter,
    Watch
} from '@stencil/core';

@Component({
    tag: 'lm-prototype-stencil-checkbox',
    styleUrl: 'lm-prototype-stencil-checkbox.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeStencilCheckbox {
    @Element() el!: HTMLElement;
    @AttachInternals() internals!: ElementInternals;

    @Prop({ mutable: true, reflect: true }) checked = false;
    @Prop({ mutable: true, reflect: true }) disabled = false;
    @Prop({ reflect: true }) required = false;
    @Prop() label?: string;
    @Prop() value = 'on';
    @Prop() name?: string;

    @Event({ eventName: 'change', bubbles: true, composed: true })
    lmChange!: EventEmitter<{ checked: boolean; value: string }>;

    private inputId = `lm-checkbox-${Math.random().toString(36).substring(2, 9)}`;

    @Watch('checked')
    @Watch('value')
    syncFormValue() {
        this.internals.setFormValue(this.checked ? this.value : null);
    }

    componentDidLoad() {
        this.syncFormValue();
    }

    formDisabledCallback(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    formResetCallback(): void {
        this.checked = this.el.hasAttribute('checked');
    }

    private handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.checked = target.checked;

        this.lmChange.emit({ checked: this.checked, value: this.value });
    };

    render() {
        const fwdAriaLabel = this.el.getAttribute('aria-label');
        const fwdAriaDescribedby = this.el.getAttribute('aria-describedby');
        const fwdAriaInvalid = this.el.getAttribute('aria-invalid');

        return (
            <Host>
                <label class="checkbox" part="base" htmlFor={this.inputId}>
                    <input
                        id={this.inputId}
                        class="checkbox__input"
                        type="checkbox"
                        checked={this.checked}
                        disabled={this.disabled}
                        required={this.required}
                        name={this.name}
                        value={this.value}
                        aria-label={fwdAriaLabel || undefined}
                        aria-describedby={fwdAriaDescribedby || undefined}
                        aria-invalid={fwdAriaInvalid || undefined}
                        onChange={this.handleChange}
                    />
                    <div class="checkbox__control" part="control" aria-hidden="true">
                        <span class="checkbox__icon">
                            <lm-prototype-stencil-icon name="check" style={{ '--lm-prototype-icon-size': '14px' }}></lm-prototype-stencil-icon>
                        </span>
                    </div>
                    {this.label ? (
                        <span class="checkbox__label" part="label">{this.label}</span>
                    ) : (
                        <span class="checkbox__label" part="label">
                            <slot></slot>
                        </span>
                    )}
                </label>
            </Host>
        );
    }
}