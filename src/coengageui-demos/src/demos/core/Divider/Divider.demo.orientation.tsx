import React from 'react';
import { Divider, Group, Text } from 'coengageui_core';

const code = `
import React from 'react';
import { Divider, Group, Text } from 'coengageui_core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider sx={{ height: '24px' }} size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}

export const orientation: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
