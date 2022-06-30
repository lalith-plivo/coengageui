import React from 'react';
import { useViewportSize } from '@coengageui/hooks';
import { Text } from '@coengageui/core';

const code = `
import { useViewportSize } from '@coengageui/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
