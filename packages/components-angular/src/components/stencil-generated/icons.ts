/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@lm-prototype-stencil/icons/dist/types/components';

import { defineCustomElement as defineLmPrototypeStencilIcon } from '@lm-prototype-stencil/icons/dist/components/lm-prototype-stencil-icon.js';
@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilIcon,
  inputs: ['label', 'name']
})
@Component({
  selector: 'lm-prototype-stencil-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'name'],
})
export class LmPrototypeStencilIcon {
  protected el: HTMLLmPrototypeStencilIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilIcon extends Components.LmPrototypeStencilIcon {}


