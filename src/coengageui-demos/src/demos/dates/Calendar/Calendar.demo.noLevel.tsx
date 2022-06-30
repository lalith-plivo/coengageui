import React from 'react';
import { Group } from 'coengageui_core';
import { Calendar } from 'coengageui_dates';

const code = `
import { Calendar } from 'coengageui_dates';

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
