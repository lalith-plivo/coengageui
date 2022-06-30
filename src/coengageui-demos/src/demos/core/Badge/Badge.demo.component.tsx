import React from 'react';
import { Group, Badge } from 'coengageui_core';

const code = `
import { Badge } from 'coengageui_core';

const CustomComponent = ({ pads, children, ...others }: { pads: string; children: React.ReactNode; }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <>
      <Badge component="a" href="https://coengage.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </>
  );
}
`;

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://coengage.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}

export const component: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
