import React from 'react';
import { PinInput } from 'coengageui_labs';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
