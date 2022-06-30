import React from 'react';
import { NumberInput } from 'coengageui_core';

const code = `
import { NumberInput } from 'coengageui_core';

function Demo() {
  return (
    <NumberInput
      label="Number input with decimal steps"
      defaultValue={0.05}
      precision={2}
      min={-1}
      step={0.05}
      max={1}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        label="Number input with decimal steps"
        placeholder="Decimal steps"
        defaultValue={0.05}
        precision={2}
        min={-1}
        step={0.05}
        max={1}
      />
    </div>
  );
}

export const decimal: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
