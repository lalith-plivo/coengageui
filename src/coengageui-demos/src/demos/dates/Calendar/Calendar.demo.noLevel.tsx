import React from 'react';
import { Group } from '@coengageui/core';
import { Calendar } from '@coengageui/dates';

const code = `
import { Calendar } from '@coengageui/dates';

function Demo() {
  return <Calendar allowLevelChange={false} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

export const noLevel: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
