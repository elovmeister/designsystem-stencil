import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Grundinställningar för Storybook
const meta: Meta = {
    title: 'Components/Button',
    component: 'lm-prototype-stencil-button', // Namnet på din web component
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger'],
        },
        disabled: {
            control: 'boolean',
        },
        text: {
            control: 'text',
            description: 'Texten inuti knappen (Slot)',
        }
    },
};
export default meta;

type Story = StoryObj;

// En mall för hur knappen ska ritas upp
const Template = (args: any) => html`
  <lm-prototype-stencil-button 
    variant="${args.variant}" 
    ?disabled="${args.disabled}"
  >
    ${args.text}
  </lm-prototype-stencil-button>
`;

// Vår "Primary" (standard) knapp
export const Primary: Story = {
    render: Template,
    args: {
        variant: 'primary',
        disabled: false,
        text: 'Klicka här',
    },
};

// En variant för att visa en inaktiverad knapp
export const Disabled: Story = {
    render: Template,
    args: {
        variant: 'primary',
        disabled: true,
        text: 'Går ej att klicka',
    },
};