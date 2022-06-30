import React, { useState } from 'react';
import { useCoengageUITheme, Group, Text } from 'coengageui_core';
import { useMove } from 'coengageui_hooks';

const code = `
import { useState } from 'react';
import { useCoengageUITheme, Group, Text } from 'coengageui_core';
import { useMove } from 'coengageui_hooks';

function Demo() {
  const theme = useCoengageUITheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: 16,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - 8px)\`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;

function Demo() {
  const theme = useCoengageUITheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: `${value * 100}%`,
              height: 16,
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: `calc(${value * 100}% - 8px)`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}

export const useMoveHorizontal: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
