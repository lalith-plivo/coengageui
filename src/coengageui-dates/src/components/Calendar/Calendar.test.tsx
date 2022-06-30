import { itSupportsSystemProps } from 'coengageui_tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('coengageui_dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: 'coengageui_dates/Calendar',
  });
});
