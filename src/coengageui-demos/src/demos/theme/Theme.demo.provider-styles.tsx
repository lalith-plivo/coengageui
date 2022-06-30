import React from 'react';
import {
  CoengageUIProvider,
  Button,
  Badge,
  Group,
  useCoengageUIColorScheme,
  ButtonStylesParams,
} from 'coengageui_core';

const code = `
import { CoengageUIProvider, Button, Badge, ButtonStylesParams } from 'coengageui_core';

function Demo() {
  return (
    <CoengageUIProvider
      styles={{
        Button: (theme, params: ButtonStylesParams) => ({
          // Shared button styles are applied to all buttons
          root: { height: 42, padding: '0 30px' },

          filled: {
            // subscribe to component params
            color: theme.colors[params.color || theme.primaryColor][1],
          },

          // These styles are applied only to buttons with outline variant
          outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          },
        }),

        // Use raw styles object if you do not need theme dependency
        Badge: {
          dot: {
            borderWidth: 2,
          },
        },
      }}
    >
      <Button variant="outline">Outline button</Button>
      <Button variant="filled" color="cyan">Filled button</Button>
      <Badge variant="dot">Dot badge</Badge>
    </CoengageUIProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useCoengageUIColorScheme();

  return (
    <CoengageUIProvider
      theme={{ colorScheme }}
      styles={{
        Button: (theme, params: ButtonStylesParams) => ({
          // Shared button styles are applied to all buttons
          root: { height: 42, padding: '0 30px' },

          filled: {
            // subscribe to component params
            color: theme.colors[params.color || theme.primaryColor][1],
          },

          // These styles are applied only to buttons with outline variant
          outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          },
        }),

        // Use raw styles object if you do not need theme dependency
        Badge: {
          dot: {
            borderWidth: 2,
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="cyan">
          Filled button
        </Button>
        <Badge variant="dot">Dot badge</Badge>
      </Group>
    </CoengageUIProvider>
  );
}

export const providerStyles: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
