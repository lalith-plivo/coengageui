import { createStyles } from 'coengageui_core';

export default createStyles((theme) => ({
  wrapper: {
    '& + &': {
      marginLeft: 60,
    },

    '@media (max-width: 1000px)': {
      '& + &': {
        marginLeft: 40,
      },
    },
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Inter, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
