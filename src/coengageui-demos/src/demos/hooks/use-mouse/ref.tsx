import React from 'react';
import { useCoengageUITheme, Group, Text, Code } from 'coengageui_core';
import { useMouse } from 'coengageui_hooks';

const code = `
import { useCoengageUITheme, Text, Code, Group } from 'coengageui_core';
import { useMouse } from 'coengageui_hooks';

function Demo() {
  const theme = useCoengageUITheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
