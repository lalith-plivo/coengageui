import React from 'react';
import { Group } from '@coengageui/core';
import { Calendar } from '@coengageui/dates';

const code = `
import { Calendar } from '@coengageui/dates';

function Demo() {
  return <Calendar firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
