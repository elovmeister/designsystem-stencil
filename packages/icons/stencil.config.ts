import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
        angularOutputTarget({
            componentCorePackage: '@lm-prototype-stencil/icons',
            outputType: 'standalone',
            customElementsDir: 'dist/components',
            directivesProxyFile: '../components-angular/src/components/stencil-generated/icons.ts',
            directivesArrayFile: '../components-angular/src/components/stencil-generated/icons-index.ts',
        }),
    ],
};