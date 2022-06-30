import React from 'react';
import { COENGAGEUI_SIZES } from '@coengageui/core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = COENGAGEUI_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} />
    </div>
  ));

  return <>{items}</>;
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
