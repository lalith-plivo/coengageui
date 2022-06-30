import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Aside, AsideProps } from './Aside';
import { HorizontalSection } from '../HorizontalSection/HorizontalSection';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('@coengageui/core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: '@coengageui/core/Aside',
    refType: HTMLElement,
  });

  it('exposes HorizontalSection.HorizontalSection as Aside.Section', () => {
    expect(Aside.Section).toBe(HorizontalSection.Section);
  });
});
