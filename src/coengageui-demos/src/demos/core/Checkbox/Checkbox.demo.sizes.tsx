import React from 'react';
import { Checkbox, coengage_SIZES, Group } from '@coengageui/core';

function Demo() {
  const items = coengage_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} />
  ));

  return (
    <Group direction="column" spacing="sm">
      {items}
    </Group>
  );
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
