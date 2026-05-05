import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/Input',
    component: 'lm-prototype-stencil-input',
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        type: { control: 'select', options: ['text', 'email', 'password', 'search'] },
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        icon: { control: 'text' },
        'icon-end': { control: 'text' },
    },
};
export default meta;

type Story = StoryObj;

const Template = (args: any) => html`
    <lm-prototype-stencil-input
        size=${args.size}
        type=${args.type}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
        label=${args.label || undefined}
        placeholder=${args.placeholder || undefined}
        icon=${args.icon || undefined}
        icon-end=${args['icon-end'] || undefined}
    ></lm-prototype-stencil-input>
`;

export const Default: Story = {
    render: Template,
    args: {
        size: 'md',
        type: 'text',
        disabled: false,
        readonly: false,
        label: 'E-postadress',
        placeholder: 'namn@exempel.se',
    },
};

export const WithIcons: Story = {
    render: Template,
    args: {
        ...Default.args,
        label: 'Sök på sidan',
        placeholder: 'Sök...',
        type: 'search',
        icon: 'search',
        'icon-end': 'x',
    },
};