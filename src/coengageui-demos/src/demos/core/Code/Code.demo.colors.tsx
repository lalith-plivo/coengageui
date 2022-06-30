import React from 'react';
import { Code, Group } from '@coengageui/core';

const code = `
import { Code } from '@coengageui/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
