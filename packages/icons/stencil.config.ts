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
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        }
    ],
};