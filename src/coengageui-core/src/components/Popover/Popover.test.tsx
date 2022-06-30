import React from 'react';
import { itSupportsSystemProps } from 'coengageui_tests';
import { Popover, PopoverProps } from './Popover';

const defaultProps: PopoverProps = {
  opened: true,
  onClose: () => {},
  withinPortal: false,
  target: <div>target</div>,
  children: 'test-content',
  title: 'test-title',
  transitionDuration: 0,
};

describe('coengageui_core/Popover', () => {
  itSupportsSystemProps({
    component: Popover,
    props: defaultProps,
    displayName: 'coengageui_core/Popover',
  });
});
