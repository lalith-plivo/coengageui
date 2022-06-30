import React from 'react';
import { Autocomplete } from 'coengageui_core';

const code = `
import { Autocomplete } from 'coengageui_core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
