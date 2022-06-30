export const PACKAGES_DATA = [
  {
    package: 'coengageui_hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['coengageui_hooks'],
  },
  {
    package: 'coengageui_core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['coengageui_hooks', 'coengageui_core'],
  },
  {
    package: 'coengageui_form',
    description: 'Form management library',
    dependencies: ['coengageui_form'],
  },
  {
    package: 'coengageui_dates',
    description: 'Date inputs, calendars',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_dates', 'dayjs'],
  },
  {
    package: 'coengageui_notifications',
    description: 'Notifications system',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_notifications'],
  },
  {
    package: 'coengageui_prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_prism'],
  },
  {
    package: 'coengageui_rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_rte'],
  },
  {
    package: 'coengageui_dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_dropzone'],
  },
  {
    package: 'coengageui_modals',
    description: 'Centralized modals manager',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_modals'],
  },
  {
    package: 'coengageui_spotlight',
    description: 'Overlay command center',
    dependencies: ['coengageui_hooks', 'coengageui_core', 'coengageui_spotlight'],
  },
];
