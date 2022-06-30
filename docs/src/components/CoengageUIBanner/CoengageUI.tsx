import React from 'react';
import { Title, Overlay, Text, Button, Group } from 'coengageui_core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './CoengageUIBanner.styles';

interface CoengageUIBannerProps extends React.ComponentPropsWithoutRef<'div'> { }

export function CoengageUIBanner({ className, ...others }: CoengageUIBannerProps) {
  const { classes, cx, theme } = useStyles();
  return (
    <div className={cx(classes.root, className)} {...others}>
      <Overlay
        gradient={`linear-gradient(45deg, ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
        opacity={0.5}
        zIndex={0}
        radius="md"
      />
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Explore <span className={classes.highlight}>CoengageUI UI</span>
        </Title>

        <Text size="sm" sx={{ lineHeight: 1.7 }}>
          CoengageUI UI is a set of more than 120 responsive components built with CoengageUI. All
          components support dark/light color scheme and CoengageUI theme customizations. CoengageUI
          UI is free for everyone.
        </Text>
        <Group mt="xl">
          <Button component="a" href="https://ui.coengage.dev/">
            View components
          </Button>
          <Button
            className={classes.secondaryControl}
            component="a"
            href="https://github.com/coengagedev/ui.coengage.dev"
            variant="default"
            leftIcon={<MarkGithubIcon size={14} />}
          >
            Source code
          </Button>
        </Group>
      </div>
    </div>
  );
}
