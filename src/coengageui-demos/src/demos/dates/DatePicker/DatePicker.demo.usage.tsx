import React from 'react';
import { DatePicker } from 'coengageui_dates';

const code = `
import { DatePicker } from 'coengageui_dates';

function Demo() {
  return <DatePicker placeholder="Pick date" label="Event date" required />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" required />
    </div>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
