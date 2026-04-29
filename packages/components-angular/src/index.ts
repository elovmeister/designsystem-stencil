import { NgModule } from '@angular/core';
import { DIRECTIVES } from './components/stencil-generated/index';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class LmPrototypeStencilComponentsModule {}

export * from './components/stencil-generated/components';
export * from './components/stencil-generated/index';
