import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

export type IconName = "check" | "arrow-right" | "chevron-down" | "loader" | "x";

@Component({
    tag: 'lm-prototype-stencil-dropdown-item',
    styleUrl: 'lm-prototype-stencil-dropdown-item.css',
    shadow: true
})
export class LmPrototypeStencilDropdownItem {
    @Prop() value = '';

    @Prop() icon?: IconName;
    @Prop() iconEnd?: IconName;

    @Event({ eventName: 'lm-dropdown-item-select', bubbles: true, composed: true })
    itemSelect: EventEmitter<void>;

    handleSelect = () => {
        this.itemSelect.emit();
    };

    render() {
        return (
            <Host>
                <slot name="start">
                    {this.icon && <lm-prototype-stencil-icon name={this.icon as any}></lm-prototype-stencil-icon>}
                </slot>

                <div class="item" role="option" onClick={this.handleSelect}>
                    <slot></slot>
                </div>

                <slot name="end">
                    {this.iconEnd && <lm-prototype-stencil-icon name={this.iconEnd as any}></lm-prototype-stencil-icon>}
                </slot>
            </Host>
        );
    }
}