import React from 'react';
import { Select } from '@coengageui/core';

const code = `
import { Select } from '@coengageui/core';

function Demo() {
  return <Select allowDeselect />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        allowDeselect
        defaultValue="react"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

export const deselect: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
