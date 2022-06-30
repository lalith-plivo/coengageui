import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { CoengageUIProvider, ColorSchemeProvider, Affix, ActionIcon } from '@coengageui/core';
import { useHotkeys } from '@coengageui/hooks';
import { NotificationsProvider } from '@coengageui/notifications';
import rtlPlugin from 'stylis-plugin-rtl';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: any) {
  const [rtl, setRtl] = useState(false);
  const toggleRtl = () => setRtl((r) => !r);
  useHotkeys([['mod + L', toggleRtl]]);

  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => { }}>
      <CoengageUIProvider
        theme={{
          dir: rtl ? 'rtl' : 'ltr',
          colorScheme: useDarkMode() ? 'dark' : 'light',
          headings: { fontFamily: 'Inter, sans-serif' },
        }}
        emotionOptions={
          rtl ? { key: 'coengageui-rtl', stylisPlugins: [rtlPlugin as any] } : { key: 'coengage' }
        }
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Affix position={{ right: rtl ? 'unset' : 0, left: rtl ? 0 : 'unset', bottom: 0 }}>
            <ActionIcon
              onClick={toggleRtl}
              variant="default"
              style={{
                borderBottom: 0,
                borderRight: 0,
                borderTopLeftRadius: 4,
                width: 60,
                fontWeight: 700,
              }}
              radius={0}
              size={30}
            >
              {rtl ? 'RTL' : 'LTR'}
            </ActionIcon>
          </Affix>
          <div dir={rtl ? 'rtl' : 'ltr'}>{props.children}</div>
        </NotificationsProvider>
      </CoengageUIProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
