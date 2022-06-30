import React from 'react';
import { DatePicker } from '@coengageui/dates';

const code = `
import { DatePicker } from '@coengageui/dates';

function Demo() {
  return (
    <DatePicker
      label="Sunday as first day of week"
      placeholder="Pick date"
      firstDayOfWeek="sunday"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        label="Sunday as first day of week"
        placeholder="Pick date"
        firstDayOfWeek="sunday"
      />
    </div>
  );
}

export const firstDaySunday: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
