import React from 'react';
import { DatePicker } from '@coengageui/dates';

const code = `
import { DatePicker } from '@coengageui/dates';

function Demo() {
  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      inputFormat="MM/DD/YYYY"
      labelFormat="MM/YYYY"
      defaultValue={new Date()}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        inputFormat="MM/DD/YYYY"
        labelFormat="MM/YYYY"
        defaultValue={new Date()}
      />
    </div>
  );
}

export const format: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
