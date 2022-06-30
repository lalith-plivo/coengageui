import React, { useState } from 'react';
import { useLogger } from '@coengageui/hooks';
import { Button, Group } from '@coengageui/core';

const code = `
import { useState } from 'react';
import { useLogger } from '@coengageui/hooks';
import { Button } from '@coengageui/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);

  return (
    <Group position="center">
      <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>
    </Group>
  );
}

export const useLoggerDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
