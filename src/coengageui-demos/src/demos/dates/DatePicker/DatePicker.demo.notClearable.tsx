import React from 'react';
import { DatePicker } from '@coengageui/dates';

const code = `
import { DatePicker } from '@coengageui/dates';

function Demo() {
  return <DatePicker clearable={false} placeholder="Pick date" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" clearable={false} />
    </div>
  );
}

export const notClearable: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
