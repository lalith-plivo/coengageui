import React from 'react';
import { upperFirst } from 'coengageui_hooks';
import { Tooltip, Badge, Group, COENGAGEUI_COLORS } from 'coengageui_core';

export function Demo() {
  const colors = COENGAGEUI_COLORS.map((color) => (
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
