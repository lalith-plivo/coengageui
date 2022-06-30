import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
} from 'coengageui_tests';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  label: 'test-label',
};

describe('coengageui_core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: 'coengageui_core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});
