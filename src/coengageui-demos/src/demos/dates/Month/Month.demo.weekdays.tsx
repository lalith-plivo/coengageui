import React from 'react';
import { Group } from 'coengageui_core';
import { Month } from 'coengageui_dates';

const code = `
import { Month } from 'coengageui_dates';

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
