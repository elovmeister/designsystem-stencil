import { LmPrototypeStencilButton, LmPrototypeStencilIcon } from '@lm-prototype-stencil/components-react';

import '@lm-prototype-stencil/tokens/dist/themes/light.css';
export default function App() {
  return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h1>Hej Stencil + React! 🚀</h1>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>

          <LmPrototypeStencilButton
              variant="primary"
              onClick={() => alert('Det fungerar!')}
          >
            Klicka på mig
              <LmPrototypeStencilIcon name="check" style={{ fontSize: '24px', color: 'green' }} />
          </LmPrototypeStencilButton>



        </div>
      </div>
  );
}