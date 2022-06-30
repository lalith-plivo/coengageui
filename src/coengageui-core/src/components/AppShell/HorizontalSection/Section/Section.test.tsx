import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps<'div'> = {
  children: 'test-section',
};

describe('coengageui_core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);

  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: 'coengageui_core/Section',
    refType: HTMLDivElement,
  });
});
