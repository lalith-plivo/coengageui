import React from 'react';
import { Text } from 'coengageui_core';

const code = `
import { Text } from 'coengageui_core';

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}
`;

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}

export const dimmed: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
