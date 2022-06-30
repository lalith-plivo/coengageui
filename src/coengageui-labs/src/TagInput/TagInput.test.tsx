import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@coengageui/tests';
import { TagInput, TagInputProps } from './TagInput';

const defaultProps: TagInputProps = {
  label: 'test-tag-input',
  defaultValue: ['react', 'ng'],
  placeholder: 'Input Tag',
  id: 'test-tag-input',
};

describe('@coengageui/labs/TagInput', () => {
  checkAccessibility([<TagInput {...defaultProps} />]);
  itSupportsFocusEvents(TagInput, defaultProps, '#test-tag-input');
  itSupportsInputIcon(TagInput, defaultProps);
  itSupportsInputRightSection(TagInput, defaultProps);
  itSupportsWrapperProps(TagInput, defaultProps);
  itConnectsLabelAndInput(TagInput, defaultProps);
  itSupportsSystemProps({
    component: TagInput,
    props: defaultProps,
    displayName: '@coengageui/labs/TagInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
