import React from 'react';
import { checkAccessibility, itConnectsLabelAndInput, itSupportsSystemProps } from '@coengageui/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@coengageui/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@coengageui/core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
