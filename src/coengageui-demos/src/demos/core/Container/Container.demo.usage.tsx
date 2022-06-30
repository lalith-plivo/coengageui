import React from 'react';
import { useCoengageUITheme, Container } from 'coengageui_core';

const code = `
import { Container } from 'coengageui_core';

function Demo() {
  return (
    <>
      <Container>
        Default container
      </Container>

      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>

      <Container size={200} px={0}>
        200px container with 0px horizontal padding
      </Container>
    </>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0];

  return (
    <>
      <Container sx={{ backgroundColor: color, height: 50 }}>Default container</Container>

      <Container size="xs" px="xs" sx={{ backgroundColor: color, height: 50 }} mt={20}>
        xs container with xs horizontal padding
      </Container>

      <Container size={200} px={0} sx={{ backgroundColor: color, height: 50 }} mt={20}>
        200px container with 0px horizontal padding
      </Container>
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
