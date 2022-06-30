import React from 'react';
import { MediaQuery, Text } from 'coengageui_core';

const code = `
import { MediaQuery, Text } from 'coengageui_core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: 1200px) and (min-width: 800px)"
      styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
    </MediaQuery>
  );
}
`;

function Demo() {
  return (
    <MediaQuery
      query="(max-width: 1200px) and (min-width: 800px)"
      styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
    </MediaQuery>
  );
}

export const query: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
