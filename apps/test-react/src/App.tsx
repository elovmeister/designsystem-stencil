// Importera de autogenererade React-komponenterna
import { LmPrototypeStencilButton, LmPrototypeStencilIcon } from '@lm-prototype-stencil/components-react';

// Importera din CSS-fil med tokens (så variablerna får sina värden)
import '@lm-prototype-stencil/tokens/themes/light.css';

export default function App() {
  return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h1>Hej Stencil + React! 🚀</h1>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>

          {/* Vår knapp */}
          <LmPrototypeStencilButton
              variant="primary"
              onClick={() => alert('Det fungerar!')}
          >
            Klicka på mig
          </LmPrototypeStencilButton>

          {/* Vår ikon */}
          <LmPrototypeStencilIcon name="check" style={{ fontSize: '24px', color: 'green' }} />

        </div>
      </div>
  );
}