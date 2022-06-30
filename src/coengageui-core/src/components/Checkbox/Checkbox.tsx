import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CoengageUISize,
  CoengageUIColor,
  Selectors,
  extractSystemStyles,
  CoengageUINumberSize,
  useCoengageUIDefaultProps,
} from 'coengageui_styles';
import { useUuid } from 'coengageui_hooks';
import { Box } from '../Box';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames>,
  Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  color?: CoengageUIColor;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: CoengageUINumberSize;

  /** Predefined label font-size and checkbox width and height in px */
  size?: CoengageUISize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: { [key: string]: any };

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Check/uncheck transition duration, set to 0 to disable all transitions */
  transitionDuration?: number;

  /** Replace default icon */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;

  /** Static selector base */
  __staticSelector?: string;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  __staticSelector: 'Checkbox',
  transitionDuration: 100,
  icon: CheckboxIcon,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const {
    className,
    style,
    sx,
    checked,
    color,
    label,
    indeterminate,
    id,
    size,
    radius,
    wrapperProps,
    children,
    classNames,
    styles,
    transitionDuration,
    icon: Icon,
    __staticSelector,
    ...others
  } = useCoengageUIDefaultProps('Checkbox', defaultProps, props);

  const uuid = useUuid(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const { classes, cx } = useStyles(
    { size, radius, color, transitionDuration },
    { classNames, styles, name: __staticSelector }
  );

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div className={classes.inner}>
        <input
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.input}
          checked={indeterminate || checked}
          {...rest}
        />

        <Icon indeterminate={indeterminate} className={classes.icon} />
      </div>

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Checkbox.displayName = 'coengageui_core/Checkbox';
