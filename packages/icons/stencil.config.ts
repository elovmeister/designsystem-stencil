import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

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
        reactOutputTarget({
            outDir: '../components-react/src/components/stencil-generated/icons',
            customElementsDir: 'dist/components',
        }),
    ],
};