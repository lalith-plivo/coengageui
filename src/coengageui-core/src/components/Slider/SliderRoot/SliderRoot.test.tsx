import React from 'react';
import { itSupportsSystemProps } from 'coengageui_tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
};

describe('coengageui_core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: 'coengageui_core/SliderRoot',
    refType: HTMLDivElement,
  });
});
