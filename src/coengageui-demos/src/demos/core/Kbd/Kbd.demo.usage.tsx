import React from 'react';
import { Kbd } from 'coengageui_core';

const code = `
import { Kbd } from 'coengageui_core';

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
