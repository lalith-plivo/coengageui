import React from 'react';
import { Input, COENGAGEUI_SIZES } from 'coengageui_core';

function Demo() {
  const inputs = COENGAGEUI_SIZES.map((size, index) => (
    <Input
      style={{ marginTop: index === 0 ? 0 : 15 }}
      size={size}
      key={size}
      placeholder={`${size} input size`}
    />
  ));
  return <>{inputs}</>;
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
