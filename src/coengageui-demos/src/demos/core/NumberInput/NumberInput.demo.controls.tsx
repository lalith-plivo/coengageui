import React from 'react';
import { NumberInput } from 'coengageui_core';

const code = `
import { NumberInput } from 'coengageui_core';

function Demo() {
  return (
    <>
      <NumberInput label="By default controls are visible" />

      <NumberInput
        hideControls
        label="Disable them with hideControls prop"
      />

      <NumberInput
        label="Disabled"
        disabled
        label="Controls also not rendered when input is disabled"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput label="By default controls are visible" placeholder="Controls are visible" />

      <NumberInput
        style={{ marginTop: 15 }}
        hideControls
        label="Disable them with hideControls prop"
        placeholder="Controls are disabled"
      />
      <NumberInput
        style={{ marginTop: 15 }}
        disabled
        label="Controls also not rendered when input is disabled"
        placeholder="Input disabled"
      />
    </div>
  );
}

export const controls: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
