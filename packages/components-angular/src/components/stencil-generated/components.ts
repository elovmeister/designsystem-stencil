/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@lm-prototype-stencil/components';


@ProxyCmp({
  inputs: ['disabled', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'lm-prototype-stencil-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'loading', 'size', 'type', 'variant'],
  standalone: false
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
  inputs: ['disabled', 'icon', 'iconEnd', 'label', 'name', 'open', 'placeholder', 'required', 'size', 'value', 'variant']
})
@Component({
  selector: 'lm-prototype-stencil-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'iconEnd', 'label', 'name', 'open', 'placeholder', 'required', 'size', 'value', 'variant'],
  outputs: ['lmChange'],
  standalone: false
})
export class LmPrototypeStencilDropdown {
  protected el: HTMLLmPrototypeStencilDropdownElement;
  @Output() lmChange = new EventEmitter<CustomEvent<{ value: string; label: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilDropdown extends Components.LmPrototypeStencilDropdown {

  lmChange: EventEmitter<CustomEvent<{ value: string; label: string }>>;
}


@ProxyCmp({
  inputs: ['icon', 'iconEnd', 'value']
})
@Component({
  selector: 'lm-prototype-stencil-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconEnd', 'value'],
  outputs: ['lm-dropdown-item-select'],
  standalone: false
})
export class LmPrototypeStencilDropdownItem {
  protected el: HTMLLmPrototypeStencilDropdownItemElement;
  @Output() lmDropdownItemSelect = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilDropdownItem extends Components.LmPrototypeStencilDropdownItem {

  'lm-dropdown-item-select': EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['label', 'name']
})
@Component({
  selector: 'lm-prototype-stencil-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', { name: 'name', required: true }],
  standalone: false
})
export class LmPrototypeStencilIcon {
  protected el: HTMLLmPrototypeStencilIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilIcon extends Components.LmPrototypeStencilIcon {}


