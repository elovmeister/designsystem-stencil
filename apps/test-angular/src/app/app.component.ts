import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmPrototypeComponentsModule} from '@lm-prototype-stencil/components-angular';

interface ButtonDemo {
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger';
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LmPrototypeComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="app">
      <header class="app-header">
        <h1>Design System — Angular Test App</h1>
        <lm-prototype-stencil-button variant="tertiary" (click)="toggleTheme()">
          {{ darkMode ? '☀️ Light' : '🌙 Dark' }}
        </lm-prototype-stencil-button>
      </header>

      <main class="app-main">
        <section class="demo-section">
          <h2 class="demo-title">Variants</h2>
          <div class="demo-row">
            <lm-prototype-stencil-button variant="primary">Primary</lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="secondary">Secondary</lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="tertiary">Tertiary</lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="danger">Danger</lm-prototype-stencil-button>
          </div>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">Sizes</h2>
          <div class="demo-row">
            <lm-prototype-stencil-button size="sm">Small</lm-prototype-stencil-button>
            <lm-prototype-stencil-button size="md">Medium</lm-prototype-stencil-button>
            <lm-prototype-stencil-button size="lg">Large</lm-prototype-stencil-button>
          </div>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">With Icons</h2>
          <div class="demo-row">
            <lm-prototype-stencil-button variant="primary">
              <lm-prototype-stencil-icon slot="start" name="arrow-right"></lm-prototype-stencil-icon>
              Continue
            </lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="secondary">
              Save
              <lm-prototype-stencil-icon slot="end" name="check"></lm-prototype-stencil-icon>
            </lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="danger">
              <lm-prototype-stencil-icon slot="start" name="x"></lm-prototype-stencil-icon>
              Remove
            </lm-prototype-stencil-button>
          </div>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">States</h2>
          <div class="demo-row">
            <lm-prototype-stencil-button [loading]="loading" (click)="simulateAsync()">
              {{ loading ? 'Saving…' : 'Click to load (2s)' }}
            </lm-prototype-stencil-button>
            <lm-prototype-stencil-button disabled>Disabled</lm-prototype-stencil-button>
            <lm-prototype-stencil-button loading>Always loading</lm-prototype-stencil-button>
          </div>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">Form Participation</h2>
          <form #demoForm (submit)="onSubmit($event)" class="demo-form">
            <input
              name="q"
              placeholder="Type something…"
              class="demo-input"
            />
            <lm-prototype-stencil-button type="submit" (click)="demoForm.requestSubmit()">
              Submit
            </lm-prototype-stencil-button>

            <lm-prototype-stencil-button type="reset" variant="tertiary" (click)="demoForm.reset()">
              Reset
            </lm-prototype-stencil-button>
          </form>
        </section>

      </main>
    </div>
  `,
  styles: [`
    /* Dina stilar är perfekta, behåller dem precis som de är! */
    .app {
      padding: 40px;
      min-height: 100vh;
    }

    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--lm-prototype-stencil-color-border-default);
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }

    .demo-section {
      margin-bottom: 32px;
    }

    .demo-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--lm-prototype-stencil-color-text-secondary);
      margin: 0 0 12px;
    }

    .demo-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .demo-form {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .demo-input {
      padding: 8px 12px;
      border: 1px solid var(--lm-prototype-stencil-color-border-default);
      border-radius: var(--lm-prototype-stencil-radius-md);
      background: var(--lm-prototype-stencil-color-surface-raised);
      color: var(--lm-prototype-stencil-color-text-primary);
      font-size: var(--lm-prototype-stencil-font-size-md);
      font-family: inherit;
    }

    .demo-input:focus {
      outline: 2px solid var(--lm-prototype-stencil-color-border-focus);
      outline-offset: 2px;
    }
  `],
})
export class AppComponent {
  darkMode = false;
  loading = false;

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.documentElement.dataset['theme'] = this.darkMode ? 'dark' : '';
  }

  simulateAsync(): void {
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 2000);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    alert('Submitted: ' + JSON.stringify(Object.fromEntries(data as any)));
  }
}
