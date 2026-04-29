import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LmPrototypeStencilComponentsModule} from '@lm-prototype-stencil/components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LmPrototypeStencilComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
