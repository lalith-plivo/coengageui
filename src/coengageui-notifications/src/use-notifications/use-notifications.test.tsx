import React from 'react';
import ReactDOM from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import { CoengageUIProvider } from 'coengageui_core';
import { useNotifications } from './use-notifications';
import { NotificationsProvider } from '../NotificationsProvider/NotificationsProvider';

describe('coengageui_notifications/use-notifications', () => {
  beforeAll(() => {
    // @ts-ignore
    ReactDOM.createPortal = jest.fn((element) => element);
  });

  afterEach(() => {
    // @ts-ignore
    ReactDOM.createPortal.mockClear();
  });

  it('throws error if called outside of NotificationsProvider', () => {
    const hook = renderHook(() => useNotifications());
    expect(hook.result.error).toStrictEqual(
      Error(
        'coengageui_notifications: use-notifications hook was called outside of NotificationsProvider context'
      )
    );
  });

  it('returns context value of NotificationsProvider', () => {
    const wrapper = ({ children }) => (
      <CoengageUIProvider>
        <NotificationsProvider>{children}</NotificationsProvider>
      </CoengageUIProvider>
    );

    const hook = renderHook(() => useNotifications(), { wrapper });
    const { current } = hook.result;

    expect(current.notifications).toBeDefined();
    expect(current.showNotification).toBeDefined();
    expect(current.hideNotification).toBeDefined();
    expect(current.updateNotification).toBeDefined();
  });
});
