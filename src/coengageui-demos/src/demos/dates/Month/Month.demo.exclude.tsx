import React, { useState } from 'react';
import { Group } from '@coengageui/core';
import { Month } from '@coengageui/dates';

const code = `
import { useState } from 'react';
import { Month } from '@coengageui/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month
        month={value}
        value={value}
        onChange={setValue}
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Group>
  );
}

export const exclude: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
