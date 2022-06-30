import React from 'react';
import { Group, Badge } from 'coengageui_core';
import { useReducedMotion } from 'coengageui_hooks';

const code = `
import { Badge } from 'coengageui_core';
import { useReducedMotion } from 'coengageui_hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;

function Demo() {
  const reduceMotion = useReducedMotion();
  return (
    <Group position="center">
      <Badge
        color={reduceMotion ? 'red' : 'teal'}
        style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
        variant="filled"
      >
        {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
      </Badge>
    </Group>
  );
}

export const useReducedMotionDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
