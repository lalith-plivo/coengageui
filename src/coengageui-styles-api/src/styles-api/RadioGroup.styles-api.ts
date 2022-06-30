import type { RadioGroupStylesNames } from 'coengageui_core';
import { InputWrapper } from './InputWrapper.styles-api';

export const RadioGroup: Record<RadioGroupStylesNames, string> = {
  radioWrapper: 'Wrapper for label and radio button',
  label: 'Radio element',
  radio: 'Radio button',
  inner: 'Radio button inner, contains input and icon',
  icon: 'Radio button icon (svg)',
  ...InputWrapper,
};
