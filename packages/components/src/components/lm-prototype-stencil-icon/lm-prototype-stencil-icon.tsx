import { Component, Prop, h, Host } from '@stencil/core';
import { iconRegistry, IconName } from '../../utils/icon-registry';

@Component({
    tag: 'lm-prototype-stencil-icon',
    styleUrl: 'lm-prototype-stencil-icon.css',
    shadow: true,
})
export class DsIcon {
    @Prop() name!: IconName;
    @Prop() label?: string;

    render() {
        const paths = this.name ? iconRegistry[this.name] : undefined;

        if (!paths) {
            return <slot></slot>;
        }

        const svgContent = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${paths}
      </svg>
    `;

        return (
            <Host
                aria-hidden={this.label ? null : 'true'}
                aria-label={this.label ? this.label : null}
                role={this.label ? 'img' : null}
            >
                <span class="svg-wrapper" innerHTML={svgContent}></span>
            </Host>
        );
    }
}