import React from 'react';
import { useCoengageUITheme, Breadcrumbs, Anchor } from 'coengageui_core';

const code = `
import { Breadcrumbs, Anchor } from 'coengageui_core';

const items = [
  { title: 'CoengageUI', href: '#' },
  { title: 'CoengageUI hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'CoengageUI', href: 'https://coengage.dev' },
  { title: 'CoengageUI hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} style={{ marginTop: 10 }}>
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
