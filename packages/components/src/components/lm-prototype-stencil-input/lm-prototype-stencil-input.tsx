/*
import { Component, Prop, State, Event, EventEmitter, AttachInternals, Watch, Element, h, Host } from '@stencil/core';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
export type InputSize = 'sm' | 'md' | 'lg';


@Component({
    tag: 'lm-prototype-input',
    styleUrl: 'lm-prototype-input.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeInput {
    @Element() el!: HTMLElement;

    @AttachInternals() internals!: ElementInternals;

    @Prop() label?: string;
    @Prop({ mutable: true }) value = '';
    @Prop() name?: string;
    @Prop() type: InputType = 'text';
    @Prop() placeholder = '';
    @Prop({ reflect: true }) size: InputSize = 'md';
    @Prop() icon?: string;
    @Prop({ attribute: 'icon-end' }) iconEnd?: string;
    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) required = false;
    @Prop() readonly = false;

    // 4. Internt state
    @State() private _focused = false;

    // 5. Custom Events (Styr namnen explicit så de matchar ert tidigare bygge)
    @Event({ eventName: 'input', bubbles: true, composed: true }) inputEvent!: EventEmitter<string>;
    @Event({ eventName: 'change', bubbles: true, composed: true }) changeEvent!: EventEmitter<string>;

    private readonly _inputId = `lm-input-${Math.random().toString(36).substring(2, 9)}`;

    // 6. Watcher: Körs automatiskt när value ändras (motsvarar 'updated' i Lit)
    @Watch('value')
    valueChanged(newValue: string) {
        this.internals.setFormValue(newValue);
    }

    // Körs en gång när komponenten laddas
    componentWillLoad() {
        this.internals.setFormValue(this.value);
    }

    // Formulär-hooks (Stencil ropar på dessa automatiskt)
    formResetCallback() {
        this.value = this.el.getAttribute('value') || '';
        this.internals.setFormValue(this.value);
    }

    formDisabledCallback(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    // 7. Event-handlers med pilfunktioner (så vi inte tappar 'this')
    private _handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.inputEvent.emit(this.value); // emit skickar iväg CustomEvent:et
    };

    private _handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.value = target.value;
        this.changeEvent.emit(this.value);
    };

    private _handleFocus = () => {
        this._focused = true;
    };

    private _handleBlur = () => {
        this._focused = false;
    };

    render() {
        // Plocka ut ARIA-attributen från host-elementet
        const fwdAriaLabel = this.el.getAttribute('aria-label');
        const fwdAriaLabelledby = this.el.getAttribute('aria-labelledby');
        const fwdAriaDescribedby = this.el.getAttribute('aria-describedby');
        const fwdAriaInvalid = this.el.getAttribute('aria-invalid');

        return (
            <Host>
                <div class="form-control" part="base">
                    {this.label ? (
                        // I JSX skriver man 'htmlFor' istället för 'for' på etiketter
                        <label class="label" htmlFor={this._inputId} part="label">
                            {this.label}
                        </label>
                    ) : null}

                    <div
                        // I Stencil/JSX kan man skicka in ett objekt för att villkorsstyra klasser, vilket är superrent!
                        class={{
                            'input-wrapper': true,
                            'input-wrapper--focused': this._focused,
                            'input-wrapper--disabled': this.disabled,
                        }}
                        part="wrapper"
                    >
                        <slot name="start" class="input__slot">
                            {this.icon ? <lm-prototype-icon name={this.icon} style={{ marginLeft: 'var(--_px)' }}></lm-prototype-icon> : null}
                        </slot>

                        <input
                            id={this._inputId}
                            class="input"
                            part="input"
                            type={this.type}
                            value={this.value}
                            name={this.name}
                            placeholder={this.placeholder}
                            disabled={this.disabled}
                            required={this.required}
                            readOnly={this.readonly} // CamelCase i JSX
                            aria-label={fwdAriaLabel}
                            aria-labelledby={fwdAriaLabelledby}
                            aria-describedby={fwdAriaDescribedby}
                            aria-invalid={fwdAriaInvalid}
                            onInput={this._handleInput}
                            onChange={this._handleChange}
                            onFocus={this._handleFocus}
                            onBlur={this._handleBlur}
                        />

                        <slot name="end" class="input__slot">
                            {this.iconEnd ? <lm-prototype-icon name={this.iconEnd} style={{ marginRight: 'var(--_px)' }}></lm-prototype-icon> : null}
                        </slot>
                    </div>
                </div>
            </Host>
        );
    }
}

 */