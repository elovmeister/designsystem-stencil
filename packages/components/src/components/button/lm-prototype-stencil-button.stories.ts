import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/Button',
    component: 'lm-prototype-stencil-button',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'danger']
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset']
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        text: {
            control: 'text',
            description: 'Texten inuti knappen (Slot)'
        },
        icon: {
            control: 'text',
            description: 'Namn på start-ikonen'
        },
        'icon-end': {
            control: 'text',
            description: 'Namn på slut-ikonen'
        },
    },
};
export default meta;

type Story = StoryObj;

const Template = (args: any) => html`
    <lm-prototype-stencil-button
        variant=${args.variant}
        size=${args.size}
        type=${args.type}
        ?disabled=${args.disabled}
        ?loading=${args.loading}
        icon=${args.icon || undefined}
        icon-end=${args['icon-end'] || undefined}
    >
        ${args.text}
    </lm-prototype-stencil-button>
`;

export const Primary: Story = {
    render: Template,
    args: {
        variant: 'primary',
        size: 'md',
        type: 'button',
        disabled: false,
        loading: false,
        text: 'Klicka här',
    },
};

export const SecondaryWithIcon: Story = {
    render: Template,
    args: {
        ...Primary.args,
        variant: 'secondary',
        text: 'Inställningar',
        icon: 'check',
    },
};

export const DangerWithEndIcon: Story = {
    render: Template,
    args: {
        ...Primary.args,
        variant: 'danger',
        text: 'Ta bort konto',
        'icon-end': 'x',
    },
};

export const LoadingState: Story = {
    render: Template,
    args: {
        ...Primary.args,
        loading: true,
        text: 'Sparar...',
    },
};