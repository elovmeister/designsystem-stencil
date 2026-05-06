import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LmPrototypeStencilButton, LmPrototypeStencilDropdown, LmPrototypeStencilDropdownItem } from '@lm-prototype-stencil/components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LmPrototypeStencilButton, LmPrototypeStencilDropdown, LmPrototypeStencilDropdownItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `

    <div class="app">
      <header class="app-header">
        <h1>Design System with Stencil — Angular Test App</h1>
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
            <lm-prototype-stencil-button variant="primary" icon="arrow-right">
              Continue
            </lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="secondary" icon="check">
              Save
            </lm-prototype-stencil-button>
            <lm-prototype-stencil-button variant="danger" icon="x">
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
            <lm-prototype-stencil-button disabled="true">Disabled</lm-prototype-stencil-button>
            <lm-prototype-stencil-button loading="true">Always loading</lm-prototype-stencil-button>
          </div>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">Form Participation</h2>
          <form (submit)="onSubmit($event)" class="demo-form">
            <input
              name="q"
              placeholder="Type something…"
              class="demo-input"
            />
            <lm-prototype-stencil-button type="submit">Submit</lm-prototype-stencil-button>
            <lm-prototype-stencil-button type="reset" variant="tertiary">Reset</lm-prototype-stencil-button>
          </form>
        </section>

        <section class="demo-section">
          <h2 class="demo-title">Dropdown</h2>
          <lm-prototype-stencil-dropdown placeholder="Välj ett item">
            <lm-prototype-stencil-dropdown-item value="item-1">
            item 1
            </lm-prototype-stencil-dropdown-item>
            <lm-prototype-stencil-dropdown-item value="item-2">
              item 2
            </lm-prototype-stencil-dropdown-item>
            <lm-prototype-stencil-dropdown-item value="item-3">
              item 3
            </lm-prototype-stencil-dropdown-item>
          </lm-prototype-stencil-dropdown>
        </section>


      </main>
    </div>
  `,
  styles: [`
    .app { padding: 40px; min-height: 100vh; background: var(--lm-prototype-stencil-color-surface-default, #fff); color: var(--lm-prototype-stencil-color-text-primary, #000); }
    .app-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid var(--lm-prototype-stencil-color-border-default, #eee); }
    h1 { font-size: 24px; font-weight: 700; margin: 0; }
    .demo-section { margin-bottom: 32px; }
    .demo-title { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--lm-prototyp-stencil-color-text-secondary, #666); margin: 0 0 12px; }
    .demo-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
    .demo-form { display: flex; gap: 8px; align-items: center; }
    .demo-input { padding: 8px 12px; border: 1px solid var(--lm-prototype-stencil-color-border-default, #ccc); border-radius: 4px; background: var(--lm-prototype-stencil-color-surface-raised, #f9f9f9); color: inherit; }

    .dropdown-content { padding: 8px; display: flex; flex-direction: column; gap: 4px; min-width: 180px; }
    .dropdown-content a { padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 14px; color: inherit; text-decoration: none; }
    .dropdown-content a:hover { background: var(--lm-prototype-stencil-color-surface-hover, #eee); }
    .dropdown-content a.danger { color: #dc2626; }
    .dropdown-content hr { border: 0; border-top: 1px solid var(--lm-prototype-stencil-color-border-default, #eee); margin: 4px 0; }
  `],
})
export class AppComponent {
  darkMode = false;
  loading = false;
  hasDropdown = false;

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
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    alert('hejsan');
  }
}

