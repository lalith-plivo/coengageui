import React from 'react';
import { Progress } from '@coengageui/core';

const code = `
import { Progress } from '@coengageui/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Label,
};
