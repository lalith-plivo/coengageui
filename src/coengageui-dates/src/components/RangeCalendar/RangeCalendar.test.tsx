import { itSupportsSystemProps } from 'coengageui_tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => { },
};

describe('coengageui_dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: 'coengageui_dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
