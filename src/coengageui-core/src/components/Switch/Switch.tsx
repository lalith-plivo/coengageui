import React, { forwardRef } from 'react';
import { useUuid } from 'coengageui_hooks';
import {
  DefaultProps,
  CoengageUINumberSize,
  CoengageUISize,
  CoengageUIColor,
  Selectors,
  extractSystemStyles,
  useCoengageUIDefaultProps,
} from 'coengageui_styles';
import { Box } from '../Box';
import useStyles from './Switch.styles';

export type SwitchStylesNames = Selectors<typeof useStyles>;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: string;

  /** Inner label when Switch is in checked state */
  onLabel?: string;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: CoengageUIColor;

  /** Predefined size value */
  size?: CoengageUISize;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: CoengageUINumberSize;

  /** Props spread to wrapper element */
  wrapperProps?: { [key: string]: any };
}

const defaultProps: Partial<SwitchProps> = {
  offLabel: '',
  onLabel: '',
  size: 'sm',
  radius: 'xl',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props: SwitchProps, ref) => {
  const {
    className,
    color,
    label,
    offLabel,
    onLabel,
    id,
    style,
    size,
    radius,
    wrapperProps,
    children,
    classNames,
    styles,
    sx,
    ...others
  } = useCoengageUIDefaultProps('Switch', defaultProps, props);

  const { classes, cx } = useStyles(
    { size, color, radius, offLabel, onLabel },
    { classNames, styles, name: 'Switch' }
  );

  const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useUuid(id);

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <input {...rest} id={uuid} ref={ref} type="checkbox" className={classes.input} />

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Switch.displayName = 'coengageui_core/Switch';
