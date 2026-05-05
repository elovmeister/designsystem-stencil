/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@lm-prototype-stencil/components/dist/components';

import { defineCustomElement as defineLmPrototypeStencilButton } from '@lm-prototype-stencil/components/dist/components/lm-prototype-stencil-button.js';
import { defineCustomElement as defineLmPrototypeStencilCheckbox } from '@lm-prototype-stencil/components/dist/components/lm-prototype-stencil-checkbox.js';
import { defineCustomElement as defineLmPrototypeStencilDropdown } from '@lm-prototype-stencil/components/dist/components/lm-prototype-stencil-dropdown.js';
import { defineCustomElement as defineLmPrototypeStencilDropdownItem } from '@lm-prototype-stencil/components/dist/components/lm-prototype-stencil-dropdown-item.js';
import { defineCustomElement as defineLmPrototypeStencilInput } from '@lm-prototype-stencil/components/dist/components/lm-prototype-stencil-input.js';
@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilButton,
  inputs: ['disabled', 'icon', 'iconEnd', 'loading', 'name', 'size', 'type', 'value', 'variant']
})
@Component({
  selector: 'lm-prototype-stencil-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'iconEnd', 'loading', 'name', 'size', 'type', 'value', 'variant'],
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
  defineCustomElementFn: defineLmPrototypeStencilCheckbox,
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'lm-prototype-stencil-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value'],
  outputs: ['change'],
})
export class LmPrototypeStencilCheckbox {
  protected el: HTMLLmPrototypeStencilCheckboxElement;
  @Output() change = new EventEmitter<CustomEvent<{ checked: boolean; value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilCheckbox extends Components.LmPrototypeStencilCheckbox {

  change: EventEmitter<CustomEvent<{ checked: boolean; value: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilDropdown,
  inputs: ['disabled', 'icon', 'label', 'name', 'open', 'placeholder', 'required', 'size', 'value', 'variant']
})
@Component({
  selector: 'lm-prototype-stencil-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'label', 'name', 'open', 'placeholder', 'required', 'size', 'value', 'variant'],
  outputs: ['change'],
})
export class LmPrototypeStencilDropdown {
  protected el: HTMLLmPrototypeStencilDropdownElement;
  @Output() change = new EventEmitter<CustomEvent<{ value: string; label: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilDropdown extends Components.LmPrototypeStencilDropdown {

  change: EventEmitter<CustomEvent<{ value: string; label: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineLmPrototypeStencilDropdownItem,
  inputs: ['icon', 'iconEnd', 'value']
})
@Component({
  selector: 'lm-prototype-stencil-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'iconEnd', 'value'],
  outputs: ['lm-dropdown-item-select'],
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
  defineCustomElementFn: defineLmPrototypeStencilInput,
  inputs: ['disabled', 'icon', 'iconEnd', 'label', 'name', 'placeholder', 'readonly', 'required', 'size', 'type', 'value']
})
@Component({
  selector: 'lm-prototype-stencil-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'iconEnd', 'label', 'name', 'placeholder', 'readonly', 'required', 'size', 'type', 'value'],
  outputs: ['lm-input', 'lm-change'],
})
export class LmPrototypeStencilInput {
  protected el: HTMLLmPrototypeStencilInputElement;
  @Output() lmInput = new EventEmitter<CustomEvent<string>>();
  @Output() lmChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LmPrototypeStencilInput extends Components.LmPrototypeStencilInput {

  'lm-input': EventEmitter<CustomEvent<string>>;

  'lm-change': EventEmitter<CustomEvent<string>>;
}


