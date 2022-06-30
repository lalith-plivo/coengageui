import React from 'react';
import { useFullscreen } from 'coengageui_hooks';
import { Button, Group } from 'coengageui_core';

const code = `
import { useFullscreen } from 'coengageui_hooks';
import { Button } from 'coengageui_core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
