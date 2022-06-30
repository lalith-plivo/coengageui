import React from 'react';
import { Hash } from 'tabler-icons-react';
import { NativeSelect } from 'coengageui_core';

const code = `
import { NativeSelect } from 'coengageui_core';
import { Hash } from 'tabler-icons-react';

function Demo() {
  return (
    <NativeSelect
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<Hash size={14} />}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<Hash size={14} />}
      />
    </div>
  );
}

export const icon: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
