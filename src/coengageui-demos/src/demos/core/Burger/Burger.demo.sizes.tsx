import React from 'react';
import { COENGAGEUI_SIZES, Group } from 'coengageui_core';
import { DemoBase } from './_base';

const items = COENGAGEUI_SIZES.map((size) => <DemoBase size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
