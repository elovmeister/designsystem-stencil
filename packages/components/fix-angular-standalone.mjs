import { readFileSync, writeFileSync } from 'fs';

const filePath = '../components-angular/src/components/stencil-generated/components.ts';
let content = readFileSync(filePath, 'utf8');

// Lägg till standalone: true efter changeDetection i varje @Component
content = content.replace(
  /(@Component\({[^}]*changeDetection: ChangeDetectionStrategy\.OnPush,)/g,
  '$1\n  standalone: true,'
);

writeFileSync(filePath, content);
console.log('✅ Added standalone: true to all Angular components');
