import React from 'react';
import { DatePicker } from 'coengageui_dates';

const code = `
import { DatePicker } from 'coengageui_dates';

function Demo() {
  return <DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" label="Event date" />
    </div>
  );
}

export const modal: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
