import React from 'react';
import { Group, coengage_COLORS, Badge } from '@coengageui/core';

function Demo() {
  const items = coengage_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot">
      {color}
    </Badge>
  ));

  return <Group position="center">{items}</Group>;
}

export const dots: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
