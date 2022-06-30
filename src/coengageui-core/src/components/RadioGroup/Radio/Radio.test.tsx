import React from 'react';
import {
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
} from 'coengageui_tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('coengageui_core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: 'coengageui_core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
