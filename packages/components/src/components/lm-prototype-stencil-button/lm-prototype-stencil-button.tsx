import { Component, Prop, h, Host } from '@stencil/core';

@Component({
    tag: 'lm-prototype-stencil-button',
    styleUrl: 'lm-prototype-stencil-button.css',
    shadow: true,
})
export class LmPrototypeStencilButton {
    @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'danger' = 'primary';

    @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

    @Prop() type: 'button' | 'submit' | 'reset' = 'button';

    @Prop({ reflect: true }) disabled = false;

    @Prop({ reflect: true }) loading = false;

    render() {
        const isBlocked = this.disabled || this.loading;

        return (
            <Host>
                <button
                    class="btn"
                    type={this.type}
                    disabled={isBlocked}
                    aria-busy={this.loading ? 'true' : null}
                >
                    {this.loading ? (
                        <span class="btn__icon btn__icon--spinner" aria-hidden="true">
                            ⏳
                        </span>
                    ) : (
                        <span class="btn__icon">
                            <slot name="start"></slot>
                        </span>
                    )}

                    <span class="btn__label">
                        <slot></slot>
                    </span>

                    <span class="btn__icon">
                        <slot name="end"></slot>
                    </span>
                </button>
            </Host>
        );
    }
}