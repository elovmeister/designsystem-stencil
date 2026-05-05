import {
    Component,
    Prop,
    Event,
    EventEmitter,
    h,
    Host
} from '@stencil/core';
import type { IconName } from '@lm-prototype-stencil/icons';

@Component({
    tag: 'lm-prototype-stencil-dropdown-item',
    styleUrl: 'lm-prototype-stencil-dropdown-item.css',
    shadow: true
})
export class LmPrototypeStencilDropdownItem {
    @Prop() value = '';
    @Prop() icon?: IconName;
    @Prop({ attribute: 'icon-end' }) iconEnd?: IconName;

    @Event({ eventName: 'lm-dropdown-item-select', bubbles: true, composed: true })
    lmDropdownItemSelect!: EventEmitter<void>;

    private handleSelect = () => {
        this.lmDropdownItemSelect.emit();
    };

    render() {
        return (
            <Host>
                <div class="item" role="option" onClick={this.handleSelect}>

                    <span class="item__icon">
                        <slot name="start">
                            {this.icon && <lm-prototype-stencil-icon name={this.icon} />}
                        </slot>
                    </span>

                    <span class="item__text">
                        <slot></slot>
                    </span>

                    <span class="item__icon">
                        <slot name="end">
                            {this.iconEnd && <lm-prototype-stencil-icon name={this.iconEnd} />}
                        </slot>
                    </span>

                </div>
            </Host>
        );
    }
}