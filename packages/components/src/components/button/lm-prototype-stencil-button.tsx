import { Component, Prop, h, Host, Element, AttachInternals } from '@stencil/core';
import '@lm-prototype-stencil/icons/lm-prototype-stencil-icon';
import type { IconName } from '@lm-prototype-stencil/icons';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    tag: 'lm-prototype-stencil-button',
    styleUrl: 'lm-prototype-stencil-button.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeButton {
    @Element() el: HTMLElement;

    @AttachInternals() internals: ElementInternals;

    @Prop({ reflect: true }) variant: ButtonVariant = 'primary';
    @Prop({ reflect: true }) size: ButtonSize = 'md';
    @Prop() type: ButtonType = 'button';
    @Prop() name?: string;
    @Prop() value?: string;
    @Prop() icon?: IconName;
    @Prop({ attribute: 'icon-end' }) iconEnd?: IconName;
    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) loading = false;

    private handleClick = (ev: Event) => {
        if (this.disabled || this.loading) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }

        if (this.type === 'submit' && this.internals.form) {
            this.internals.form.requestSubmit();
        }
        if (this.type === 'reset' && this.internals.form) {
            this.internals.form.reset();
        }
    };

    render() {
        const isBlocked = this.disabled || this.loading;

        const fwdAriaLabel = this.el.getAttribute('aria-label');
        const fwdAriaLabelledby = this.el.getAttribute('aria-labelledby');
        const fwdAriaDescribedby = this.el.getAttribute('aria-describedby');
        const fwdAriaExpanded = this.el.getAttribute('aria-expanded');
        const fwdAriaPressed = this.el.getAttribute('aria-pressed');
        const fwdAriaControls = this.el.getAttribute('aria-controls');
        const fwdAriaHaspopup = this.el.getAttribute('aria-haspopup');

        return (
            <Host>
                <button
                    class="btn"
                    part="base"
                    type={this.type}
                    disabled={this.disabled}
                    aria-busy={this.loading ? 'true' : null}
                    aria-disabled={isBlocked ? 'true' : null}
                    aria-label={fwdAriaLabel}
                    aria-labelledby={fwdAriaLabelledby}
                    aria-describedby={fwdAriaDescribedby}
                    aria-expanded={fwdAriaExpanded}
                    aria-pressed={fwdAriaPressed}
                    aria-controls={fwdAriaControls}
                    aria-haspopup={fwdAriaHaspopup}
                    onClick={this.handleClick}
                >
                    {this.loading ? (
                        <span class="btn__icon btn__icon--spinner" aria-hidden="true">
                            <lm-prototype-stencil-icon name="loader" style={{ '--lm-prototype-icon-size': '1em' }}></lm-prototype-stencil-icon>
                        </span>
                    ) : (
                        <span class="btn__icon">

                                {this.icon && <lm-prototype-stencil-icon name={this.icon}></lm-prototype-stencil-icon>}

                        </span>
                    )}

                    <span class="btn__label"><slot></slot></span>

                    <span class="btn__icon">
                        <slot name="end">
                            {this.iconEnd && <lm-prototype-stencil-icon name={this.iconEnd}></lm-prototype-stencil-icon>}
                        </slot>
                    </span>
                </button>
            </Host>
        );
    }
}