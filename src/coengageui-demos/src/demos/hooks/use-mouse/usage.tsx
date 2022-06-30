import React from 'react';
import { Text, Code } from '@coengageui/core';
import { useMouse } from '@coengageui/hooks';

const code = `
import { Text, Code } from '@coengageui/core';
import { useMouse } from '@coengageui/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
