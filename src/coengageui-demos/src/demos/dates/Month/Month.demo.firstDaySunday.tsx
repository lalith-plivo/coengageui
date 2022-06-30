import React from 'react';
import { Group } from '@coengageui/core';
import { Month } from '@coengageui/dates';

const code = `
import { Month } from '@coengageui/dates';

function Demo() {
  return <Month month={new Date()} firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
