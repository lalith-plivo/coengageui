import React, { useState } from 'react';
import { Group } from '@coengageui/core';
import { Calendar } from '@coengageui/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@coengageui/dates';

function Demo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />;
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />
    </Group>
  );
}

export const format: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
