import React, { forwardRef } from 'react';
import { DefaultProps, useCoengageUIDefaultProps } from 'coengageui_styles';
import { Box } from '../Box';
import useStyles from './Kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  /** Keyboard key */
  children: React.ReactNode;
}

export const Kbd = forwardRef<HTMLElement, KbdProps>((props: KbdProps, ref) => {
  const { className, children, ...others } = useCoengageUIDefaultProps('Kbd', {}, props);
  const { classes, cx } = useStyles(null, { name: 'Kbd' });

  return (
    <Box component="kbd" className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Kbd.displayName = 'coengageui_core/Kbd';
