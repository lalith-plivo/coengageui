import React from 'react';
import { Code } from 'coengageui_core';

const code = `
import { Code } from 'coengageui_core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
