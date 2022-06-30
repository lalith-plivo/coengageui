import React from 'react';
import { useOs } from '@coengageui/hooks';
import { Text } from '@coengageui/core';

const code = `
import { useOs } from '@coengageui/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
