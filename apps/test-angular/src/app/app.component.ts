import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LmPrototypeStencilButton, LmPrototypeStencilIcon } from '@lm-prototype-stencil/components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LmPrototypeStencilButton, LmPrototypeStencilIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
