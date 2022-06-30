import React from 'react';
import { COENGAGEUI_SIZES } from 'coengageui_core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = COENGAGEUI_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} />
    </div>
  ));

  return <>{items}</>;
}

export const radius: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
