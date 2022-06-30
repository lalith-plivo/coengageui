import React from 'react';
import { Select } from 'coengageui_core';

const code = `
import { Select } from 'coengageui_core';

function Demo() {
  return (
    <Select
      label="Select with disabled items"
      placeholder="Select something"
      data={[
        { value: 'react', label: 'React', disabled: true },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}
`;

export function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Select with disabled items"
        placeholder="Select something"
        data={[
          { value: 'react', label: 'React', disabled: true },
          { value: 'ng', label: 'Angular', disabled: true },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

export const disabledItems: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
