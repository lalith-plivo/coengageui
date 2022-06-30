import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('coengageui_core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: 'coengageui_core/Header',
    refType: HTMLElement,
  });
});
