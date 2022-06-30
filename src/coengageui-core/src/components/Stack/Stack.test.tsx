import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('coengageui_core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: 'coengageui_core/Stack',
    refType: HTMLDivElement,
  });
});
