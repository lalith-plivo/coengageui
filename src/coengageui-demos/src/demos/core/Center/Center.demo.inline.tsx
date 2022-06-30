import React from 'react';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { Center, useCoengageUITheme, Anchor, Box } from '@coengageui/core';

const code = `
import { Center, Anchor, Box } from '@coengageui/core';
import { ArrowLeft } from 'tabler-icons-react';

function Demo() {
  return (
    <Anchor href="https://coengage.dev" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
        <Box ml={5}>Back to CoengageUI website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  return (
    <Anchor href="https://coengage.dev" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        <Box ml={5}>Back to CoengageUI website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
