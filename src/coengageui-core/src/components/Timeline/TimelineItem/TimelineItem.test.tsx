import React from 'react';
import { render, screen } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

const defaultProps: TimelineItemProps = {};

describe('coengageui_core/TimelineItem', () => {
  itRendersChildren(TimelineItem, defaultProps);
  itSupportsSystemProps({
    component: TimelineItem,
    props: defaultProps,
    displayName: 'coengageui_core/TimelineItem',
  });

  it('renders given bullet', () => {
    render(<TimelineItem bullet="test-bullet" />);
    expect(screen.getByText('test-bullet')).toBeInTheDocument();
  });

  it('renders given title', () => {
    render(<TimelineItem title="test-title" />);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });
});
