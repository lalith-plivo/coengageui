import React from 'react';
import { useCoengageUITheme, Button, Box, Overlay } from '@coengageui/core';

const code = `
import { Overlay, Button, Box, useCoengageUITheme } from '@coengageui/core';

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={\`linear-gradient(105deg, \${theme.black} 20%, #312f2f 50%, \${theme.colors.gray[4]} 100%)\`}
      />
    </Box>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
      />
    </Box>
  );
}

export const gradient: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
