import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Aside, AsideProps } from './Aside';
import { HorizontalSection } from '../HorizontalSection/HorizontalSection';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('coengageui_core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: 'coengageui_core/Aside',
    refType: HTMLElement,
  });

  it('exposes HorizontalSection.HorizontalSection as Aside.Section', () => {
    expect(Aside.Section).toBe(HorizontalSection.Section);
  });
});
