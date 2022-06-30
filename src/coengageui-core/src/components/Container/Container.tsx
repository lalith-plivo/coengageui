import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CoengageUINumberSize,
  useCoengageUIDefaultProps,
  CoengageUISize,
} from '@coengageui/styles';
import { Box } from '../Box';
import useStyles from './Container.styles';

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: CoengageUINumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;

  /** Container sizes */
  sizes?: Record<CoengageUISize, number>;
}

const defaultProps: Partial<ContainerProps> = {
  sizes: {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1140,
    xl: 1320,
  },
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => {
    const { className, fluid, size, styles, classNames, sizes, ...others } =
      useCoengageUIDefaultProps('Container', defaultProps, props);

    const { classes, cx } = useStyles(
      { fluid, size, sizes },
      { styles, classNames, name: 'Container' }
    );

    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

Container.displayName = '@coengageui/core/Container';
