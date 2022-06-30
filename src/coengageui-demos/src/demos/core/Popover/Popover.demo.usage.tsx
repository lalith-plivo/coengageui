import React, { useState } from 'react';
import { Popover, Text, Button, Group, Image } from '@coengageui/core';

const code = `
import { useState } from 'react';
import { Popover, Text, Button, Image } from '@coengageui/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      width={260}
      position="bottom"
      withArrow
    >
      <div style={{ display: 'flex' }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          sx={{ minWidth: 30 }}
          mr="md"
        />
        <Text size="sm">Thanks for stopping by and checking CoengageUI, you are awesome!</Text>
      </div>
    </Popover>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center">
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
        width={260}
        position="bottom"
        withArrow
        trapFocus={false}
      >
        <div style={{ display: 'flex' }}>
          <Image
            src="https://raw.githubusercontent.com/coengagedev/coengage/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg"
            width={30}
            height={30}
            sx={{ minWidth: 30 }}
            mr="md"
          />
          <Text size="sm">Thanks for stopping by and checking CoengageUI, you are awesome!</Text>
        </div>
      </Popover>
    </Group>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
