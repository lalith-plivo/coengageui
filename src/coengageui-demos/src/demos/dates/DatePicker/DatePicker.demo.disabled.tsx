import React from 'react';
import { DatePicker } from '@coengageui/dates';

const code = `
import { DatePicker } from '@coengageui/dates';

function Demo() {
  return <DatePicker disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker label="Disabled without value" placeholder="Your birthday" disabled />

      <DatePicker
        mt="md"
        label="Disabled with value"
        placeholder="Your birthday"
        disabled
        value={new Date()}
      />
    </div>
  );
}

export const disabled: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
