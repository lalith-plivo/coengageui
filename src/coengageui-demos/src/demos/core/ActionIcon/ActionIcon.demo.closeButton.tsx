import React from 'react';
import { CloseButton, Group } from 'coengageui_core';

const code = `
import { CloseButton, Group } from 'coengageui_core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}

export const closeButton: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
