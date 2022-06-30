import React from 'react';
import { Group } from '@coengageui/core';
import { Month } from '@coengageui/dates';

const code = `
import { Month } from '@coengageui/dates';

function Demo() {
  return <Month hideWeekdays month={new Date()} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} hideWeekdays />
    </Group>
  );
}

export const weekdays: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
