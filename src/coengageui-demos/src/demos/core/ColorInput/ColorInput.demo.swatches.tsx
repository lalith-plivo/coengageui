import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@coengageui/core';

const code = `
import { ColorInput } from '@coengageui/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </div>
  );
}

export const swatches: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
