import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { Card, CardProps } from './Card';
import { CardSection } from './CardSection/CardSection';

const defaultProps: CardProps<'div'> = {
  children: 'test-card',
};

describe('@coengageui/core/Card', () => {
  itRendersChildren(Card, defaultProps);
  itIsPolymorphic(Card, defaultProps);
  itSupportsSystemProps({
    component: Card,
    props: defaultProps,
    displayName: '@coengageui/core/Card',
    refType: HTMLDivElement,
  });

  it('exposes CardSection as Card.Section', () => {
    expect(Card.Section).toBe(CardSection);
  });
});
