import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Navbar, NavbarProps } from './Navbar';
import { HorizontalSection } from '../HorizontalSection/HorizontalSection';

const defaultProps: NavbarProps = { children: 'test-navbar' };

describe('coengageui_core/Navbar', () => {
  itRendersChildren(Navbar, defaultProps);
  itSupportsSystemProps({
    component: Navbar,
    props: defaultProps,
    displayName: 'coengageui_core/Navbar',
    refType: HTMLElement,
  });

  it('exposes HorizontalSection.HorizontalSection as Navbar.Section', () => {
    expect(Navbar.Section).toBe(HorizontalSection.Section);
  });
});
