import React, { Children } from 'react';
import { CoengageUINumberSize, CSSObject, useCoengageUIDefaultProps } from '@coengageui/styles';
import useStyles from './MediaQuery.styles';

export interface MediaQueryProps {
  className?: string;

  /** Child that should be shown at given breakpoint, it must accept className prop */
  children: React.ReactNode;

  /** Styles applied to child when viewport is smaller than given breakpoint */
  smallerThan?: CoengageUINumberSize;

  /** Styles applied to child when viewport is larger than given breakpoint */
  largerThan?: CoengageUINumberSize;

  /** Any other media query */
  query?: string;

  /** Styles applied to child when breakpoint matches */
  styles: CSSObject;
}

export function MediaQuery(props: MediaQueryProps) {
  const { children, smallerThan, largerThan, query, styles, className } = useCoengageUIDefaultProps(
    'MediaQuery',
    {},
    props
  );

  const { classes, cx } = useStyles(
    { smallerThan, largerThan, query, styles },
    { name: 'MediaQuery' }
  );

  const child = Children.only(children) as React.ReactElement;

  if (typeof child === 'object' && child !== null && 'props' in child) {
    return React.cloneElement(child, {
      className: cx(classes.media, child.props?.className, className),
    });
  }

  return child;
}

MediaQuery.displayName = '@coengageui/core/MediaQuery';
