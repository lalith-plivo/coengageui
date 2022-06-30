import React from 'react';
import { Autocomplete } from 'coengageui_core';

const code = `
import { Autocomplete } from 'coengageui_core';

function Demo() {
  return <Autocomplete disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled without value"
        placeholder="Pick all that you like"
        disabled
      />

      <Autocomplete
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled with value"
        placeholder="Pick all that you like"
        disabled
        value="React"
      />
    </div>
  );
}

export const disabled: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
