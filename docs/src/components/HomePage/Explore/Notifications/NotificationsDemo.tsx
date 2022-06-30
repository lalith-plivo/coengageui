import React from 'react';
import { Paper, createStyles } from 'coengageui_core';
import { Prism } from 'coengageui_prism';
import { NotificationsDemos, Demo } from 'coengageui_demos';

const code = `import { Button } from 'coengageui_core';
import { useNotifications } from 'coengageui_notifications';

function Demo() {
  const notifications = useNotifications();
  const showNotification = () => notifications.showNotification({
    title: 'Default notification',
    message: 'Hey there, your code is awesome! 🤥',
  });

  return (
    <Button onClick={showNotification}>
      Show notification
    </Button>
  );
}`;

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 0,
      paddingBottom: 0,
      marginLeft: -30,
      marginRight: -30,
    },
  },
}));

export function NotificationsDemo() {
  const { classes } = useStyles();
  return (
    <Paper shadow="md" p={30} radius="md">
      <Demo data={NotificationsDemos.root} demoProps={{ inline: true }} />
      <Prism noCopy language="tsx" className={classes.prism} mt="xl">
        {code}
      </Prism>
    </Paper>
  );
}
