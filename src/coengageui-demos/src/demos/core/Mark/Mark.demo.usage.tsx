import React from 'react';
import { Mark, Text } from '@coengageui/core';

const code = `
import { Mark, Text } from '@coengageui/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>CoengageUI</Mark>, you are awesome!
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>CoengageUI</Mark>, you are awesome!
    </Text>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
