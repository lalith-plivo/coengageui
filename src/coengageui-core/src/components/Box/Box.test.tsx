import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps<'div'> = {};

describe('@coengageui/core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@coengageui/core/Box',
    refType: HTMLDivElement,
  });
});
