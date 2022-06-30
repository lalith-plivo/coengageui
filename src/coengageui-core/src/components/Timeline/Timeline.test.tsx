import React from 'react';
import { render } from '@testing-library/react';
import { itFiltersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem/TimelineItem';

const defaultProps = {
  children: [
    <Timeline.Item key="1" title="Hello" bullet="$">
      1
    </Timeline.Item>,
    <Timeline.Item key="2">2</Timeline.Item>,
    <Timeline.Item key="3">3</Timeline.Item>,
  ],
};

describe('coengageui_core/Timeline', () => {
  itSupportsSystemProps({
    component: Timeline,
    props: defaultProps,
    excludePadding: true,
    displayName: 'coengageui_core/Timeline',
    refType: HTMLDivElement,
  });

  itFiltersChildren(Timeline, defaultProps, '.coengageui-Timeline-item', [
    <Timeline.Item>Child 1</Timeline.Item>,
    <Timeline.Item>Child 2</Timeline.Item>,
  ]);

  it('handles active item correctly', () => {
    const { container: secondActive } = render(<Timeline {...defaultProps} active={1} />);
    const { container: thirdActive } = render(<Timeline {...defaultProps} active={2} />);

    expect(secondActive.querySelectorAll('.coengageui-Timeline-itemActive')).toHaveLength(2);
    expect(secondActive.querySelectorAll('.coengageui-Timeline-itemLineActive')).toHaveLength(1);

    expect(thirdActive.querySelectorAll('.coengageui-Timeline-itemActive')).toHaveLength(3);
    expect(thirdActive.querySelectorAll('.coengageui-Timeline-itemLineActive')).toHaveLength(2);
  });

  it('exposes TimelineItem as Timeline.Item', () => {
    expect(Timeline.Item).toBe(TimelineItem);
  });
});
