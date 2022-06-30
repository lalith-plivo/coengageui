import React from 'react';
import { itSupportsSystemProps } from '@coengageui/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
};

describe('@coengageui/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@coengageui/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
