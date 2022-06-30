import { createStyles } from '@coengageui/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH } from '../settings';

export default createStyles((theme) => ({
  wrapper: {
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.md,
    position: 'sticky',
    top: theme.spacing.xl,
    right: 0,
    paddingTop: 55,
    flex: `0 0 ${TABLE_OF_CONTENTS_WIDTH - 20}px`,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      display: 'none',
    },
  },

  withTabs: {
    paddingTop: 0,
    top: 60 + theme.spacing.xl,
  },

  inner: {
    paddingTop: 0,
    paddingBottom: theme.spacing.xl,
    paddingLeft: theme.spacing.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  items: {
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.info[1] : theme.info[1]}`,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.info[2] : theme.info[2],
    borderLeft: '1px solid transparent',
    padding: `8px ${theme.spacing.md}px`,
    marginLeft: -1,
  },

  linkActive: {
    borderLeftColor: theme.info[2],
    backgroundColor: theme.colorScheme === 'dark' ? theme.info[0] : theme.info[0],
    color: theme.colorScheme === 'dark' ? theme.info[1] : theme.info[1],
    fontWeight: 600,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },

  title: {
    marginLeft: theme.spacing.md,
    fontWeight: 500,
    fontSize: theme.fontSize.lg,
  },
}));
