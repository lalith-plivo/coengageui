import React from 'react';
import { upperFirst } from '@coengageui/hooks';
import { Tooltip, Badge, Group, coengage_COLORS } from '@coengageui/core';

export function Demo() {
  const colors = coengage_COLORS.map((color) => (
    <Tooltip key={color} color={color} label={upperFirst(color)} withArrow>
      <Badge color={color}>{upperFirst(color)}</Badge>
    </Tooltip>
  ));

  return <Group position="center">{colors}</Group>;
}

export const colors: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
