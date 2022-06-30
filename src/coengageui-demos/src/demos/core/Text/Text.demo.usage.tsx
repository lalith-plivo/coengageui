import React from 'react';
import { Text } from '@coengageui/core';

const code = `
import { Text } from '@coengageui/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Default text </Text>
      <Text size="md">Medium text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text underline>Underlined</Text>
      <Text variant="link" component="a" href="https://coengage.dev">Link variant</Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Default text </Text>
      <Text size="md">Medium text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text underline>Underlined</Text>
      <Text variant="link" component="a" href="https://coengage.dev">
        Link variant
      </Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
