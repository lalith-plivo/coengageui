import React from 'react';
import { DatePicker } from 'coengageui_dates';

const code = `
import { DatePicker } from 'coengageui_dates';

function Demo() {
  return <DatePicker excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </div>
  );
}

export const exclude: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
