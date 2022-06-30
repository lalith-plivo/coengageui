export const PACKAGES_DATA = [
  {
    package: '@coengageui/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@coengageui/hooks'],
  },
  {
    package: '@coengageui/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@coengageui/hooks', '@coengageui/core'],
  },
  {
    package: '@coengageui/form',
    description: 'Form management library',
    dependencies: ['@coengageui/form'],
  },
  {
    package: '@coengageui/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/dates', 'dayjs'],
  },
  {
    package: '@coengageui/notifications',
    description: 'Notifications system',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/notifications'],
  },
  {
    package: '@coengageui/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/prism'],
  },
  {
    package: '@coengageui/rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/rte'],
  },
  {
    package: '@coengageui/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/dropzone'],
  },
  {
    package: '@coengageui/modals',
    description: 'Centralized modals manager',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/modals'],
  },
  {
    package: '@coengageui/spotlight',
    description: 'Overlay command center',
    dependencies: ['@coengageui/hooks', '@coengageui/core', '@coengageui/spotlight'],
  },
];
