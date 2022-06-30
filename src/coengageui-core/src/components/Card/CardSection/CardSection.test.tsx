import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('coengageui_core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: 'coengageui_core/CardSection',
    refType: HTMLDivElement,
  });
});
