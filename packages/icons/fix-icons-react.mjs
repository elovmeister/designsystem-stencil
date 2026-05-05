import { readFileSync, writeFileSync } from 'fs';

const filePath = '../components-react/src/components/stencil-generated/icons/components.ts';
let content = readFileSync(filePath, 'utf8');

content = content.replace(
    'import type { JSX } from "@lm-prototype-stencil/icons/dist/components";',
    'import type { JSX } from "@lm-prototype-stencil/icons/dist/types/components";'
);

writeFileSync(filePath, content);
console.log('✅ Fixed JSX import in icons React components');
