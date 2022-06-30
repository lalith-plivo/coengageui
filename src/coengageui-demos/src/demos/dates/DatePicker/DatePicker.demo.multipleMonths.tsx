import React from 'react';
import { DatePicker } from 'coengageui_dates';

const code = `
import { DatePicker } from 'coengageui_dates';

function Demo() {
  return (
    <>
      <DatePicker amountOfMonths={2} label="2 months" />
      <DatePicker amountOfMonths={3} label="3 months" />
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker amountOfMonths={2} label="2 months" placeholder="Two months" />
      <DatePicker amountOfMonths={3} label="3 months" placeholder="Three months" mt="md" />
    </div>
  );
}

export const multipleMonths: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
