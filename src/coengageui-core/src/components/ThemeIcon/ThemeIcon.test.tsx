import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('coengageui_core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: 'coengageui_core/ThemeIcon',
    refType: HTMLDivElement,
  });
});
