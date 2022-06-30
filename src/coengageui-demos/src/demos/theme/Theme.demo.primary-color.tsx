import React from 'react';
import { Group, Button, CoengageUIProvider, useCoengageUITheme } from '@coengageui/core';

const code = `
import { Button, CoengageUIProvider } from '@coengageui/core';

function Demo() {
  return (
    <CoengageUIProvider theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
      },
      primaryColor: 'brand',
    }}
    >
      <Button>Primary button</Button>
      <Button color="blue">Blue button</Button>
    </CoengageUIProvider>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <CoengageUIProvider
      theme={{
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
        primaryColor: 'brand',
        colorScheme: theme.colorScheme,
      }}
    >
      <Group position="center">
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </CoengageUIProvider>
  );
}

export const primaryColor: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
