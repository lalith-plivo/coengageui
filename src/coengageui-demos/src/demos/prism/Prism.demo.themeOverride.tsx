import React from 'react';
import { Prism } from 'coengageui_prism';

const demoCode = `
import { Button } from 'coengageui_core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from 'coengageui_prism';

function Demo() {
  return <Prism colorScheme="dark" language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
