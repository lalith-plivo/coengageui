import React from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  useCoengageUIColorScheme,
} from '@coengageui/core';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import { Logo } from './_logo';

const code = `
import { AppShell, Navbar, Header } from '@coengageui/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
`;

function Demo() {
  const { colorScheme, toggleColorScheme } = useCoengageUIColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      Your application goes here
    </AppShell>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  demoProps: { spacing: false },
  code,
};
