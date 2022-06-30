import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
} from '@coengageui/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps<'button'> = {};

describe('@coengageui/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@coengageui/core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});
