import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from '@lm-prototype-stencil/components/loader';
import { defineCustomElements as defineIconElements } from '@lm-prototype-stencil/icons/loader';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

defineCustomElements(window);
defineIconElements(window);
