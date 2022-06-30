import React, { createElement, forwardRef } from 'react';
import {
  DefaultProps,
  CoengageUISize,
  Selectors,
  useCoengageUIDefaultProps,
} from 'coengageui_styles';
import { Text } from '../Text';
import { Box } from '../Box';
import useStyles from './InputWrapper.styles';

export type InputWrapperStylesNames = Selectors<typeof useStyles>;

export interface InputWrapperBaseProps {
  /** Input label, displayed before input */
  label?: React.ReactNode;

  /** Input description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;

  /** Adds red asterisk on the right side of label */
  required?: boolean;

  /** Props spread to label element */
  labelProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };

  /** Props spread to description element */
  descriptionProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Props spread to error element */
  errorProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };
}

export interface InputWrapperProps
  extends DefaultProps<InputWrapperStylesNames>,
  InputWrapperBaseProps,
  React.ComponentPropsWithoutRef<'div'> {
  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor label prop */
  id?: string;

  /** Render label as label with htmlFor or as div */
  labelElement?: 'label' | 'div';

  /** Controls all elements font-size */
  size?: CoengageUISize;

  /** Static css selector base */
  __staticSelector?: string;
}

const defaultProps: Partial<InputWrapperProps> = {
  labelElement: 'label',
  size: 'sm',
  __staticSelector: 'InputWrapper',
};

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  (props: InputWrapperProps, ref) => {
    const {
      className,
      label,
      children,
      required,
      id,
      error,
      description,
      labelElement,
      labelProps,
      descriptionProps,
      errorProps,
      classNames,
      styles,
      size,
      __staticSelector,
      ...others
    } = useCoengageUIDefaultProps('InputWrapper', defaultProps, props);

    const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });
    const _labelProps = labelElement === 'label' ? { htmlFor: id } : {};
    const inputLabel = createElement(
      labelElement,
      {
        ..._labelProps,
        ...labelProps,
        id: id ? `${id}-label` : undefined,
        className: classes.label,
      },
      <>
        {label}
        {required && (
          <span className={classes.required} aria-hidden>
            {' *'}
          </span>
        )}
      </>
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {label && inputLabel}
        {children}
        {description && (
          <Text {...descriptionProps} className={classes.description}>
            {description}
          </Text>
        )}
        {typeof error !== 'boolean' && error && (
          <Text {...errorProps} size={size} className={classes.error}>
            {error}
          </Text>
        )}
      </Box>
    );
  }
);

InputWrapper.displayName = 'coengageui_core/InputWrapper';
