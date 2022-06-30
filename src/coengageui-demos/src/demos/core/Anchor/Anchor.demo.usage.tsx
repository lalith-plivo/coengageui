import React from 'react';
import { Anchor } from '@coengageui/core';

const code = `
import { Anchor } from '@coengageui/core';

function Demo() {
  return (
    <Anchor href="https://coengage.dev/" target="_blank">
      CoengageUI docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://coengage.dev/" target="_blank">
      CoengageUI docs
    </Anchor>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
