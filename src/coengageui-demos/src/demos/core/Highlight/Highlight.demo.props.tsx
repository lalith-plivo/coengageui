import React from 'react';
import { Highlight } from 'coengageui_core';

const code = `
import { Highlight } from 'coengageui_core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://coengage.dev"
      target="_blank"
      highlight="coengage"
      variant="link"
      weight={500}
    >
      CoengageUI website
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://coengage.dev"
      target="_blank"
      highlight="coengage"
      variant="link"
      weight={500}
    >
      CoengageUI website
    </Highlight>
  );
}

export const props: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
