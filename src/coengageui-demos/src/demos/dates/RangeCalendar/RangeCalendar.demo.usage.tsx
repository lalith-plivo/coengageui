import React, { useState } from 'react';
import { Group } from '@coengageui/core';
import { RangeCalendar } from '@coengageui/dates';

const code = `
import { useState } from 'react';
import { RangeCalendar } from '@coengageui/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return <RangeCalendar value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <Group position="center">
      <RangeCalendar value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
