import React, { useState } from 'react';
import { X } from 'tabler-icons-react';
import { Tooltip, Button, ActionIcon, Text, Box, useCoengageUITheme } from 'coengageui_core';

const code = `
import { useState } from 'react';
import { Tooltip, Button, ActionIcon, Text, useCoengageUITheme } from 'coengageui_core';
import { X } from 'tabler-icons-react';

function Demo() {
  const [opened, setOpened] = useState(true);
  const theme = useCoengageUITheme();

  const tooltip = (
    <div style={{ display: 'flex', marginRight: -5 }}>
      <Text
        size="xs"
        style={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white }}
      >
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <ActionIcon
        ml={5}
        style={{ color: theme.colorScheme === 'dark' ? theme.black : theme.white }}
        size="xs"
        onClick={() => setOpened(false)}
      >
        <X size={12} />
      </ActionIcon>
    </div>
  );

  return (
    <>
      <Tooltip
        label={tooltip}
        opened={opened}
        allowPointerEvents
        withArrow
        wrapLines
        transition="rotate-left"
        transitionDuration={250}
        width={220}
        gutter={theme.spacing.xs}
      >
        <Button onClick={() => setOpened(false)}>Save to profile</Button>
      </Tooltip>

      {!opened && (
        <Button
          variant="light"
          color="gray"
          style={{ marginTop: theme.spacing.xs }}
          onClick={() => setOpened(true)}
        >
          Reopen tooltip
        </Button>
      )}
    </>
  );
}`;

function Demo() {
  const [opened, setOpened] = useState(true);
  const theme = useCoengageUITheme();

  const tooltip = (
    <Box sx={{ display: 'flex' }} mr={-5}>
      <Text
        size="xs"
        sx={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white }}
      >
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <ActionIcon
        variant="transparent"
        sx={{ color: theme.colorScheme === 'dark' ? theme.black : theme.white }}
        mr={5}
        size="xs"
        onClick={() => setOpened(false)}
      >
        <X size={12} />
      </ActionIcon>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingBottom: opened ? 44 : 0,
        }}
      >
        <Tooltip
          label={tooltip}
          opened={opened}
          allowPointerEvents
          withArrow
          wrapLines
          transition="rotate-left"
          transitionDuration={250}
          width={220}
          gutter={theme.spacing.xs}
        >
          <Button onClick={() => setOpened(false)}>Save to profile</Button>
        </Tooltip>
        {!opened && (
          <Button variant="light" mt="xs" onClick={() => setOpened(true)}>
            Reopen tooltip
          </Button>
        )}
      </Box>
    </>
  );
}

export const pointerEvents: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
