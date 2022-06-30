import React from 'react';
import { Text } from 'coengageui_core';
import { Prism } from 'coengageui_prism';

const code = `
import { Text } from 'coengageui_core';
import { Prism } from 'coengageui_prism';

const longCode = \`
<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>
\`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>

      <Text mb={5} mt="xl">With native scrollbars:</Text>
      <Prism language="tsx" scrollAreaComponent="div">{longCode}</Prism>
    </>
  );
}
`;

const longCode = `<p>
  Long code that will force Prism to have a horizontal scrollbar, by default, scroll behavior is handled by ScrollArea component, but it can be changed to native browser scrollbars
</p>`;

function Demo() {
  return (
    <>
      <Text mb={5}>With ScrollArea component (default):</Text>
      <Prism language="tsx">{longCode}</Prism>
      <Text mb={5} mt="xl">
        With native scrollbars:
      </Text>
      <Prism language="tsx" scrollAreaComponent="div">
        {longCode}
      </Prism>
    </>
  );
}

export const scrollbars: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
