import React, { useRef } from 'react';
import { Button, Group } from '@coengageui/core';
import { BaseDemo } from './_base';

const code = `
import { useRef } from 'react';
import { Button, Group } from '@coengageui/core';
import { Dropzone } from '@coengageui/dropzone';

function Demo() {
  const openRef = useRef<() => void>();

  return (
    <>
      <Dropzone openRef={openRef}>
        {/* children */}
      </Dropzone>

      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>();

  return (
    <>
      <BaseDemo openRef={openRef} />
      <Group position="center" mt="md">
        <Button onClick={() => openRef.current()}>Select files</Button>
      </Group>
    </>
  );
}

export const manual: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
