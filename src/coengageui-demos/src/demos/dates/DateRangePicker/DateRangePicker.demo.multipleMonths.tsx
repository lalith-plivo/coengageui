import React from 'react';
import { DateRangePicker } from 'coengageui_dates';

const code = `
import { DateRangePicker } from 'coengageui_dates';

function Demo() {
  return (
    <>
      <DateRangePicker amountOfMonths={2} label="2 months" />
      <DateRangePicker amountOfMonths={3} label="3 months" />
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DateRangePicker amountOfMonths={2} label="2 months" placeholder="Two months" />
      <DateRangePicker amountOfMonths={3} label="3 months" placeholder="Three months" mt="md" />
    </div>
  );
}

export const multipleMonths: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
