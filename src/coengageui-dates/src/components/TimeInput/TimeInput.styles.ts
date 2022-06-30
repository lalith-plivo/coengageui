import { createStyles, INPUT_SIZES, CoengageUISize } from '@coengageui/core';

export interface TimeInputStylesParams {
  size: CoengageUISize;
}

export default createStyles((theme, { size }: TimeInputStylesParams) => ({
  timeInput: {},
  amPmInput: {},

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    // -2 for border offset
    height: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
  },
}));
