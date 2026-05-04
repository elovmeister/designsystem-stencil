import {
    Component,
    Host,
    h,
    Prop,
    State,
    Element,
    Listen,
    AttachInternals,
    Event,
    EventEmitter
} from '@stencil/core';

export type DropdownVariant = 'primary' | 'secondary' | 'tertiary';
export type DropdownSize = 'sm' | 'md' | 'lg';
export type IconName = "check" | "arrow-right" | "chevron-down" | "loader" | "x";

@Component({
    tag: 'lm-prototype-stencil-dropdown',
    styleUrl: 'lm-prototype-stencil-dropdown.css',
    shadow: true,
    formAssociated: true
})
export class LmPrototypeStencilDropdown {
    @Element() el: HTMLElement;
    @AttachInternals() internals: ElementInternals;

    @Prop({ mutable: true, reflect: true }) open = false;
    @Prop({ reflect: true }) variant: DropdownVariant = 'secondary';
    @Prop({ reflect: true }) size: DropdownSize = 'md';
    @Prop({ reflect: true }) disabled = false;
    @Prop({ reflect: true }) required = false;

    @Prop({ mutable: true, reflect: true }) value = '';
    @Prop() label?: string;
    @Prop() placeholder = 'Välj alternativ...';
    @Prop() name?: string;

    @Prop() icon?: IconName;
    @Prop() iconEnd?: IconName;

    @State() selectedLabel = '';

    @Event({ eventName: 'lmChange' }) lmChange: EventEmitter<{ value: string; label: string }>;

    @Listen('click', { target: 'document' })
    handleDocumentClick(e: MouseEvent) {
        if (!this.open) return;
        if (!e.composedPath().includes(this.el)) {
            this.open = false;
        }
    }

    @Listen('lm-dropdown-item-select')
    handleItemSelect(e: CustomEvent) {
        const item = e.target as HTMLElement & { value: string };
        this.value = item.value;
        this.selectedLabel = item.textContent?.trim() || '';
        this.open = false;

        this.internals.setFormValue(this.value);

        this.lmChange.emit({ value: this.value, label: this.selectedLabel });
    }

    toggleDropdown = () => {
        if (this.disabled) return;
        this.open = !this.open;
    };

    render() {
        const fwdAriaLabel = this.el.getAttribute('aria-label');
        const fwdAriaInvalid = this.el.getAttribute('aria-invalid');
        const displayLabel = this.selectedLabel || this.placeholder;

        return (
            <Host>
                <div class="dropdown" part="base">
                    {this.label && <label class="label">{this.label}</label>}

                    <button
                        class="trigger"
                        part="trigger"
                        type="button"
                        disabled={this.disabled}
                        aria-haspopup="listbox"
                        aria-expanded={this.open ? 'true' : 'false'}
                        aria-label={fwdAriaLabel}
                        aria-invalid={fwdAriaInvalid}
                        onClick={this.toggleDropdown}
                    >
                        <slot name="start">
                            {this.icon && (
                                <lm-prototype-stencil-icon name={this.icon as any} style={{ marginRight: '8px' }}></lm-prototype-stencil-icon>
                            )}
                        </slot>
                        <span class="trigger__text">{displayLabel}</span>
                        <span class="trigger__icon trigger__icon--chevron">
              <lm-prototype-stencil-icon name="chevron-down"></lm-prototype-stencil-icon>
            </span>
                    </button>

                    <div class="panel" part="panel" role="listbox" aria-hidden={this.open ? 'false' : 'true'}>
                        <div class="panel__content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }
}