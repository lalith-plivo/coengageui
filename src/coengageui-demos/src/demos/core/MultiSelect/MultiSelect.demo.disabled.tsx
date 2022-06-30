import React from 'react';
import { MultiSelect } from 'coengageui_core';
import { data } from './_data';

const code = `
import { MultiSelect } from 'coengageui_core';

function Demo() {
  return <MultiSelect disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Disabled without value"
        placeholder="Won't pick anything"
        disabled
        defaultValue={[]}
      />

      <MultiSelect
        style={{ marginTop: 15 }}
        data={data}
        label="Disabled with values"
        placeholder="Won't pick anything"
        disabled
        defaultValue={['react', 'vue']}
      />
    </div>
  );
}

export const disabled: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
