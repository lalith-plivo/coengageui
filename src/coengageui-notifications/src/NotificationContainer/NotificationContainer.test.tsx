import { itSupportsClassName, itSupportsSx } from 'coengageui_tests';
import NotificationContainer from './NotificationContainer';

const defaultProps = {
  notification: { id: 'test', message: 'test-message' },
  onHide: () => { },
  autoClose: false,
  innerRef: undefined,
} as const;

describe('coengageui_notifications/NotificationContainer', () => {
  itSupportsSx(NotificationContainer, defaultProps);
  itSupportsClassName(NotificationContainer, defaultProps);

  it('has correct displayName', () => {
    expect(NotificationContainer.displayName).toStrictEqual(
      'coengageui_notifications/NotificationContainer'
    );
  });
});
