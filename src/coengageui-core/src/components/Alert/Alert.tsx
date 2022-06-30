import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CoengageUIColor,
  Selectors,
  CoengageUINumberSize,
  useCoengageUIDefaultProps,
} from 'coengageui_styles';
import { useUuid } from 'coengageui_hooks';
import { CloseButton } from '../ActionIcon';
import { Box } from '../Box';
import useStyles from './Alert.styles';

export type AlertStyleType = 'filled' | 'outline' | 'light';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export type AlertStylesNames = Selectors<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  /** Controls Alert style light */
  type?: AlertStyleType;

  /** Controls Alert background, color and border styles, defaults to light */
  variant?: AlertVariant;

  /** Alert message */
  children: React.ReactNode;

  /** Color from theme.colors */
  color?: CoengageUIColor;

  /** Icon displayed next to title */
  icon?: React.ReactNode;

  /** True to display close button */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Radius from theme.radius, or number to set border-radius in px, defaults to theme.defaultRadius */
  radius?: CoengageUINumberSize;
}

const defaultProps: Partial<AlertProps> = {
  type: 'light',
  variant: 'info',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props: AlertProps, ref) => {
  const {
    id,
    className,
    title,
    variant,
    children,
    color,
    classNames,
    icon,
    styles,
    onClose,
    radius,
    withCloseButton,
    closeButtonLabel,
    type,
    ...others
  } = useCoengageUIDefaultProps('Alert', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, radius, variant, type },
    { classNames, styles, name: 'Alert' }
  );

  const rootId = useUuid(id);

  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      role="alert"
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className={cx(classes.root, classes[`${variant}__${type}`], className)}
      ref={ref}
      {...others}
    >
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.titlewrapper}>
            {icon && <div className={classes.icon}>{icon}</div>}
            {title && (
              <div className={classes.title}>
                <span id={titleId} className={classes.label}>
                  {title}
                </span>
              </div>
            )}
          </div>
          {withCloseButton && (
            <CloseButton
              className={classes.closeButton}
              onClick={() => onClose?.()}
              variant="transparent"
              size={20}
              iconSize={20}
              aria-label={closeButtonLabel}
            />
          )}
        </div>
        <div className={classes.body}>
          <div id={bodyId} className={classes.message}>
            {children}
          </div>
        </div>
      </div>
    </Box>
  );
});

Alert.displayName = 'coengageui_core/Alert';
