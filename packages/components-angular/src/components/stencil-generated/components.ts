/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@lm-prototype-stencil/components/components';

import { defineCustomElement as defineLmPrototypeStencilButton } from '@lm-prototype-stencil/components/components/lm-prototype-stencil-button.js';
import { defineCustomElement as defineLmPrototypeStencilIcon } from '@lm-prototype-stencil/components/components/lm-prototype-stencil-icon.js';
@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilButton,
  inputs: ['disabled', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'lm-prototype-stencil-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'loading', 'size', 'type', 'variant'],
})
export class LmPrototypeStencilButton {
  protected el: HTMLLmPrototypeStencilButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilButton extends Components.LmPrototypeStencilButton {}


@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilIcon,
  inputs: ['label', 'name']
})
@Component({
  selector: 'lm-prototype-stencil-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', { name: 'name', required: true }],
})
export class LmPrototypeStencilIcon {
  protected el: HTMLLmPrototypeStencilIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilIcon extends Components.LmPrototypeStencilIcon {}


