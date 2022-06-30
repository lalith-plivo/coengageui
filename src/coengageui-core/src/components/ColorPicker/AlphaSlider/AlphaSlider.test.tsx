import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@coengageui/tests';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider';

const defaultProps: AlphaSliderProps = {
  value: 0.5,
  onChange: () => { },
  color: '#FF00FF',
  size: 'sm',
};

describe('@coengageui/core/AlphaSlider', () => {
  checkAccessibility([<AlphaSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: AlphaSlider,
    props: defaultProps,
    displayName: '@coengageui/core/AlphaSlider',
    refType: HTMLDivElement,
  });
});
