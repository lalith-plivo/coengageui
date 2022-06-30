import React, { useState } from 'react';
import { ColorPicker, Text, Group } from '@coengageui/core';

const code = `
import { useState } from 'react';
import { ColorPicker, Group, Text } from '@coengageui/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
