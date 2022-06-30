import React from 'react';
import { Text, Group } from '@coengageui/core';

const code = `
import { Text } from '@coengageui/core';

function Demo() {
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Indigo cyan gradient
    </Text>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Indigo cyan gradient
      </Text>
    </Group>
  );
}

export const gradient: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
