import React from 'react';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@coengageui/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
