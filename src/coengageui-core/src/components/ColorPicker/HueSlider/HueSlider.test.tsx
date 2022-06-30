import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@coengageui/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => { },
  size: 'sm',
};

describe('@coengageui/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@coengageui/core/HueSlider',
    refType: HTMLDivElement,
  });
});
