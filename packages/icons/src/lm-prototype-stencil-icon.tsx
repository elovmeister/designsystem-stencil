import { Component, Prop, h, Host } from '@stencil/core';
import { iconRegistry, type IconName } from './registry';

@Component({
    tag: 'lm-prototype-stencil-icon',
    styleUrl: 'lm-prototype-stencil-icon.css',
    shadow: true,
})
export class LmPrototypeStencilIcon {

    @Prop() name: IconName | '' = '';

    @Prop() label?: string;

    render() {
        const paths = this.name ? iconRegistry[this.name as IconName] : undefined;

        if (!paths) {
            return (
                <Host>
                    <slot></slot>
                </Host>
            );
        }

        return (
            <Host>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden={this.label ? undefined : 'true'}
                    aria-label={this.label || undefined}
                    role={this.label ? 'img' : undefined}
                    {... ({ innerHTML: paths } as any )}
                ></svg>
            </Host>
        );
    }
}