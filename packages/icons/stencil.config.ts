import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'lm-prototype-icons',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            dir: 'dist/components',
            customElementsExportBehavior: 'single-export-module',
            externalRuntime: false,
        },
    ],
};
