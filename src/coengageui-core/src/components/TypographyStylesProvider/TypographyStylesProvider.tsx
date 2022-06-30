import React, { forwardRef } from 'react';
import { DefaultProps, useCoengageUIDefaultProps } from 'coengageui_styles';
import { Box } from '../Box';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
  React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add CoengageUI typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  (props: TypographyStylesProviderProps, ref) => {
    const { className, ...others } = useCoengageUIDefaultProps(
      'TypographyStylesProvider',
      {},
      props
    );
    const { classes, cx } = useStyles(null, { name: 'TypographyStylesProvider' });
    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

TypographyStylesProvider.displayName = 'coengageui_core/TypographyStylesProvider';
