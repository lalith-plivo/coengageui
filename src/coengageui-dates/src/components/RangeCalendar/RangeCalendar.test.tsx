import { itSupportsSystemProps } from '@coengageui/tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@coengageui/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@coengageui/dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
