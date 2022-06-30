import React from 'react';
import { Prism } from '@coengageui/prism';

export const demoCode = `
import { Button } from '@coengageui/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@coengageui/prism';

const demoCode = \`import { Button } from '@coengageui/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
