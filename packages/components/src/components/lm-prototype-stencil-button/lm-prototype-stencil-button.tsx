import { Component, Prop, h, Host } from '@stencil/core';

@Component({
    tag: 'lm-prototype-stencil-button',
    styleUrl: 'lm-prototype-stencil-button.css',
    shadow: true,
})
export class DsButton {
    /** Vilken typ av knapp (primary, secondary etc) */
    @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'danger' = 'primary';

    /** Inaktiverar knappen */
    @Prop({ reflect: true }) disabled = false;

    render() {
        return (
            <Host>
                <button disabled={this.disabled}>
                    <slot></slot>
                </button>
            </Host>
        );
    }
}