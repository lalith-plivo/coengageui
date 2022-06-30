import React, { useState } from 'react';
import { Select } from 'coengageui_core';

const code = `
import { useState } from 'react';
import { Select } from 'coengageui_core';

export function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <Select
      label="Creatable Select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => setData((current) => [...current, query])}
    />
  );
}
`;

export function Demo() {
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Creatable Select"
        data={data}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
      />
    </div>
  );
}

export const creatable: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
