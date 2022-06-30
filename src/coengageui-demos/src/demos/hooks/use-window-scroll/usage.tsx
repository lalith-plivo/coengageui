import React from 'react';
import { useWindowScroll } from 'coengageui_hooks';
import { Button, Text, Group } from 'coengageui_core';

const code = `
import { useWindowScroll } from 'coengageui_hooks';
import { Button, Text, Group } from 'coengageui_core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
