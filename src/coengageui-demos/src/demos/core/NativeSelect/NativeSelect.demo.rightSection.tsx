import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import { NativeSelect } from 'coengageui_core';

const code = `
import { NativeSelect } from 'coengageui_core';
import { ChevronDown } from 'tabler-icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite library/framework"
      placeholder="Your favorite library/framework"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      rightSection={<ChevronDown size={14} />}
      rightSectionWidth={40}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        label="Your favorite library/framework"
        placeholder="Your favorite library/framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        rightSection={<ChevronDown size={14} />}
        rightSectionWidth={30}
      />
    </div>
  );
}

export const rightSection: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
