import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
    namespace: 'lm-prototype-stencil-components',
    taskQueue: 'async',
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
        {
            type: 'docs-readme',
        },
        reactOutputTarget({
            outDir: '../components-react/src/components/stencil-generated/',
        }),
        angularOutputTarget({
            componentCorePackage: '@lm-prototype-stencil/components',
            outputType: 'standalone',
            directivesProxyFile: '../components-angular/src/components/stencil-generated/components.ts',
            directivesArrayFile: '../components-angular/src/components/stencil-generated/index.ts',
        }),
    ],
};