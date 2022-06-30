import React from 'react';
import { ColorInput } from '@coengageui/core';

const code = `
import { ColorInput } from '@coengageui/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput disallowInput placeholder="Pick color" label="Your favorite color" />
    </div>
  );
}

export const readOnly: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
