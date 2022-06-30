import React from 'react';
import { DatePicker } from '@coengageui/dates';

const code = `
import { DatePicker } from '@coengageui/dates';

function Demo() {
  return <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />
    </div>
  );
}

export const noLevel: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
