import React from 'react';
import { coengage_COLORS } from '@coengageui/styles';
import { Button } from './Button';
import { Group } from '../Group';

export default { title: 'Button' };

export const Colors = () => {
  const items = coengage_COLORS.map((color) => (
    <Group mt="xl" key={color}>
      <Button color={color}>Filled button</Button>
      <Button color={color} variant="light">
        Light button
      </Button>
      <Button color={color} variant="outline">
        Outline button
      </Button>
      <Button color={color} variant="gradient">
        Gradient button
      </Button>
    </Group>
  ));

  return <div style={{ padding: 40 }}>{items}</div>;
};
