import React from 'react';
import { Divider } from 'coengageui_core';

const code = `
import { Divider } from 'coengageui_core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
