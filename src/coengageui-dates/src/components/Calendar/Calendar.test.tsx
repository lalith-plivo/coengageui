import { itSupportsSystemProps } from '@coengageui/tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('@coengageui/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: '@coengageui/dates/Calendar',
  });
});
