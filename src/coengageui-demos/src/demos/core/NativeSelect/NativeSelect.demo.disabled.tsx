import React from 'react';
import { NativeSelect } from 'coengageui_core';

const code = `
import { NativeSelect } from 'coengageui_core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled select"
        placeholder="Pick one that you like"
        disabled
      />
    </div>
  );
}

export const disabled: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
