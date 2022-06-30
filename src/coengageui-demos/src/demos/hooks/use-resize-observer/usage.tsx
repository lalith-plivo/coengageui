import React from 'react';
import { useCoengageUITheme, Text, Group, Code } from 'coengageui_core';
import { useResizeObserver } from 'coengageui_hooks';

const code = `
import { Text, Code } from 'coengageui_core';
import { useResizeObserver } from 'coengageui_hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <Text align="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useCoengageUITheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text align="center" size="sm" style={{ marginBottom: theme.spacing.xs }}>
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group position="center">
        <textarea
          ref={ref}
          style={{
            width: 400,
            height: 120,
            border: 'none',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
            position: 'relative',
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
