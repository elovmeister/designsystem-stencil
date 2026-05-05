import { readFileSync, writeFileSync } from 'fs';

const reactFilePath = '../components-react/src/components/stencil-generated/icons/components.ts';
let reactContent = readFileSync(reactFilePath, 'utf8');
reactContent = reactContent.replace(
    'import type { JSX } from "@lm-prototype-stencil/icons/dist/components";',
    'import type { JSX } from "@lm-prototype-stencil/icons/dist/types/components";'
);
writeFileSync(reactFilePath, reactContent);
console.log('✅ Fixed JSX import in icons React components');

const angularFilePath = '../components-angular/src/components/stencil-generated/icons.ts';
let angularContent = readFileSync(angularFilePath, 'utf8');
angularContent = angularContent.replace(
    "import type { Components } from '@lm-prototype-stencil/icons/dist/components';",
    "import type { Components } from '@lm-prototype-stencil/icons/dist/types/components';"
);
writeFileSync(angularFilePath, angularContent);
console.log('✅ Fixed Components import in icons Angular components');