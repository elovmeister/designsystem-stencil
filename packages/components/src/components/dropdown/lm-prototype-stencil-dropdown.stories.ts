import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/Dropdown',
    component: 'lm-prototype-stencil-dropdown',
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        icon: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: (args) => html`
        <div style="min-height: 250px; padding: 1rem;">
            <lm-prototype-stencil-dropdown
                variant=${args.variant}
                size=${args.size}
                ?disabled=${args.disabled}
                label=${args.label || undefined}
                placeholder=${args.placeholder || undefined}
                icon=${args.icon || undefined}
            >
                <lm-prototype-stencil-dropdown-item value="profil" icon="user">
                    Min Profil
                </lm-prototype-stencil-dropdown-item>
                
                <lm-prototype-stencil-dropdown-item value="inställningar" icon="settings">
                    Inställningar
                </lm-prototype-stencil-dropdown-item>
                
                <lm-prototype-stencil-dropdown-item value="logga-ut" icon="log-out" icon-end="chevron-right">
                    Logga ut
                </lm-prototype-stencil-dropdown-item>
                
            </lm-prototype-stencil-dropdown>
        </div>
    `,
    args: {
        variant: 'secondary',
        size: 'md',
        disabled: false,
        label: 'Användarmeny',
        placeholder: 'Välj ett alternativ...',
    },
};