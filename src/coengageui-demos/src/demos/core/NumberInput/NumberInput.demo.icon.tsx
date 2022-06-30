import React from 'react';
import { Medal } from 'tabler-icons-react';
import { NumberInput } from 'coengageui_core';

const code = `
import { NumberInput } from 'coengageui_core';
import { Medal } from 'tabler-icons-react';

function Demo() {
  return (
    <NumberInput
      label="Age when you graduated"
      placeholder="Age when you graduated"
      defaultValue={22}
      min={0}
      max={120}
      icon={<Medal size={18} />}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NumberInput
        label="Age when you graduated"
        placeholder="Age when you graduated"
        defaultValue={22}
        min={0}
        max={120}
        icon={<Medal size={18} />}
      />
    </div>
  );
}

export const icon: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
