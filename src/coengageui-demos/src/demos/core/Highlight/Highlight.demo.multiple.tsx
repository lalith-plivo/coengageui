import React from 'react';
import { Highlight } from '@coengageui/core';

const code = `
import { Highlight } from '@coengageui/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
