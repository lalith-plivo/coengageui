import React from 'react';
import { TimeInput } from 'coengageui_dates';

const code = `
import { TimeInput } from 'coengageui_dates';

function Demo() {
  return <TimeInput label="Pick time" format="12" defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" format="12" defaultValue={new Date()} />
    </div>
  );
}

export const format: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
