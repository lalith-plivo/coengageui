import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps<'div'> = {
  children: 'test-section',
};

describe('@coengageui/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);

  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@coengageui/core/Section',
    refType: HTMLDivElement,
  });
});
