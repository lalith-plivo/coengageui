import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from 'coengageui_tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  size: 'sm',
};

describe('coengageui_core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: 'coengageui_core/HueSlider',
    refType: HTMLDivElement,
  });
});
