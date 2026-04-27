import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    async viteFinal(config) {
        return {
            ...config,
            server: {
                ...config.server,
                fs: {
                    allow: ['../..'],
                },
            },
        };
    },
};
export default config;