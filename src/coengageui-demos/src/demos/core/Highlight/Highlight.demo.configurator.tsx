import React from 'react';
import { Highlight, HighlightProps } from '@coengageui/core';

function Wrapper(props: HighlightProps<'div'>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Highlight {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Highlight } from '@coengageui/core';

function Demo() {
  return (
    <Highlight${props}>
      ${children}
    </Highlight>
  );
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'highlightColor', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' },
    { name: 'highlight', type: 'string', initialValue: 'this' },
    {
      name: 'children',
      type: 'string',
      initialValue: 'Highlight This, definitely THIS and also this!',
    },
  ],
};
