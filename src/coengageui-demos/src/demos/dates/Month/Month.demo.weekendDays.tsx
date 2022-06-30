import React, { useState } from 'react';
import { Group } from 'coengageui_core';
import { Month } from 'coengageui_dates';

const code = `
import { useState } from 'react';
import { Month } from 'coengageui_dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      weekendDays={[5, 6]}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} weekendDays={[5, 6]} />
    </Group>
  );
}

export const weekendDays: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
