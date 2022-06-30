import React from 'react';
import { Prism } from '@coengageui/prism';

const demoCode = `
import { Button } from '@coengageui/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@coengageui/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
