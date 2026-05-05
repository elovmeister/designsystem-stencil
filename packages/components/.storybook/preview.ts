import type { Preview } from "@storybook/web-components";
//@ts-ignore
import '@lm-prototype-stencil/tokens/themes/light.css';

import { defineCustomElements } from '../loader/index.js';

defineCustomElements();

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