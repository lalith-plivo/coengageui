import React from 'react';
import { Select } from 'coengageui_core';

const code = `
import { Select } from 'coengageui_core';

function Demo() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const searchable: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
