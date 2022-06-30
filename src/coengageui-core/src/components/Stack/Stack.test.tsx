import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@coengageui/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@coengageui/core/Stack',
    refType: HTMLDivElement,
  });
});
