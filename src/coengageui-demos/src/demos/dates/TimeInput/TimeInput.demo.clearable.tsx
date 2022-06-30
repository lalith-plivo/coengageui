import React from 'react';
import { TimeInput } from 'coengageui_dates';

const code = `
import { TimeInput } from 'coengageui_dates';

function Demo() {
  return <TimeInput clearable defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
    </div>
  );
}

export const clearable: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
