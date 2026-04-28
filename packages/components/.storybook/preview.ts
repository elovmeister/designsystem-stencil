import type { Preview } from "@storybook/web-components";

import '@lm-prototype-stencil/tokens/dist/themes/light.css';
import '@lm-prototype-stencil/tokens/dist/themes/dark.css';

import '../dist/components/index.js';
import '../dist/components/index.js';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;