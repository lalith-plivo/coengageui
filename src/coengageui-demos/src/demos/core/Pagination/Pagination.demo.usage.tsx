import React from 'react';
import { Pagination } from 'coengageui_core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
