import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('@coengageui/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@coengageui/core/CardSection',
    refType: HTMLDivElement,
  });
});
