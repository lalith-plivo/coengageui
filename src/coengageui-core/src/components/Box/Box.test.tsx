import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps<'div'> = {};

describe('coengageui_core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: 'coengageui_core/Box',
    refType: HTMLDivElement,
  });
});
