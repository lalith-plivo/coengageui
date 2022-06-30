import React from 'react';
import { Text, Title } from '@coengageui/core';

const code = `
import { Text, Title } from '@coengageui/core';

function Demo() {
  return <Title order={3}>Highlight <Text color="blue" inherit component="span">something</Text>in title</Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text color="blue" inherit component="span">
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

export const inherit: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
