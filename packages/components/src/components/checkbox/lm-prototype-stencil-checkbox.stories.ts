import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/Checkbox',
    component: 'lm-prototype-stencil-checkbox',
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        label: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj;

const Template = (args: any) => html`
    <lm-prototype-stencil-checkbox
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?required=${args.required}
        label=${args.label || undefined}
        value="on"
    ></lm-prototype-stencil-checkbox>
`;

export const Default: Story = {
    render: Template,
    args: {
        checked: false,
        disabled: false,
        required: false,
        label: 'Godkänn användarvillkoren',
    },
};

export const DisabledAndChecked: Story = {
    render: Template,
    args: {
        checked: true,
        disabled: true,
        required: false,
        label: 'Du kan inte ändra detta',
    },
};