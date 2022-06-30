import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('coengageui_core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: 'coengageui_core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
