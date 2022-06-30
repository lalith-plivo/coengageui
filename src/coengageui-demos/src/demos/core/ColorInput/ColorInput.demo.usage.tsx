import React from 'react';
import { ColorInput } from 'coengageui_core';

const code = `
import { ColorInput } from 'coengageui_core';

function Demo() {
  return <ColorInput placeholder="Pick color" label="Your favorite color" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Pick color" label="Your favorite color" defaultValue="#ffffff" />
    </div>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
