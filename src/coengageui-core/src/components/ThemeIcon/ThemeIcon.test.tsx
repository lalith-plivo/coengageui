import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@coengageui/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@coengageui/core/ThemeIcon',
    refType: HTMLDivElement,
  });
});
