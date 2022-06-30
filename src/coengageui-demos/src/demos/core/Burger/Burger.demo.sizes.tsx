import React from 'react';
import { coengage_SIZES, Group } from '@coengageui/core';
import { DemoBase } from './_base';

const items = coengage_SIZES.map((size) => <DemoBase size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
