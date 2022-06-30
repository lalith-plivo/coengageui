import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@coengageui/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@coengageui/core/Header',
    refType: HTMLElement,
  });
});
