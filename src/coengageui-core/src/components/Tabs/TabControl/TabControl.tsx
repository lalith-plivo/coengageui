import React, { forwardRef } from 'react';
import { DefaultProps, CoengageUIColor, Selectors } from 'coengageui_styles';
import { mergeRefs } from 'coengageui_hooks';
import { Box } from '../../Box';
import type { TabsVariant } from '../Tabs';
import useStyles from './TabControl.styles';

export type TabControlStylesNames = Exclude<Selectors<typeof useStyles>, TabsVariant>;

export interface TabControlProps
  extends DefaultProps<TabControlStylesNames>,
  React.ComponentPropsWithRef<'button'> {
  active?: boolean;
  color?: CoengageUIColor;
  variant?: TabsVariant;
  orientation?: 'horizontal' | 'vertical';
  icon?: React.ReactNode;
  tabKey?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export const TabControl = forwardRef<HTMLButtonElement, TabControlProps>(
  (
    {
      className,
      active,
      color,
      variant = 'default',
      classNames,
      styles,
      orientation = 'horizontal',
      icon: __,
      label,
      icon,
      tabKey,
      color: overrideColor,
      elementRef,
      ...others
    }: TabControlProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { color: overrideColor || color, orientation },
      { classNames, styles, name: 'Tabs' }
    );

    return (
      <Box
        {...others}
        component="button"
        tabIndex={active ? 0 : -1}
        className={cx(
          classes.tabControl,
          classes[variant],
          { [classes.tabActive]: active },
          className
        )}
        type="button"
        role="tab"
        aria-selected={active}
        ref={mergeRefs(ref, elementRef)}
      >
        <div className={classes.tabInner}>
          {icon && <div className={classes.tabIcon}>{icon}</div>}
          {label && <div className={classes.tabLabel}>{label}</div>}
        </div>
      </Box>
    );
  }
);

TabControl.displayName = 'coengageui_core/TabControl';
