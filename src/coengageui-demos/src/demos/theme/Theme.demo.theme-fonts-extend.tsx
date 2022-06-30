import React from 'react';
import {
  Group,
  Button,
  Code,
  Title,
  CoengageUIProvider,
  useCoengageUIColorScheme,
} from '@coengageui/core';

const code = `
import { Button, Code, Title, CoengageUIProvider } from '@coengageui/core';

function Demo() {
  return (
    <CoengageUIProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Inter, sans-serif' },
      }}
    >
      <Title order={3}>Inter or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </CoengageUIProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useCoengageUIColorScheme();

  return (
    <CoengageUIProvider
      theme={{
        colorScheme,
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Inter, sans-serif' },
      }}
    >
      <Title style={{ textAlign: 'center', marginBottom: 10 }} order={3}>
        Inter or sans-serif title
      </Title>

      <Group position="center">
        <Button>Verdana button</Button>
        <Code>Monaco, Courier Code</Code>
      </Group>
    </CoengageUIProvider>
  );
}

export const themeFontsExtend: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
