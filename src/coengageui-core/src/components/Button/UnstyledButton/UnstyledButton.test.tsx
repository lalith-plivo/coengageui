import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
} from 'coengageui_tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps<'button'> = {};

describe('coengageui_core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: 'coengageui_core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});
