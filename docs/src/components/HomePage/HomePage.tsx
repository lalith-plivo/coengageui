import React from 'react';
import { useCoengageUITheme, Container, Box } from '@coengageui/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Footer } from '../Footer/Footer';
import { CoengageUIBanner } from '../CoengageUIBanner/CoengageUI';
import { Community } from './Community/Community';
import { Customize } from './Customize/Customize';
import { Usage } from './Usage/Usage';
import { Explore } from './Explore/Explore';

export function HomePage() {
  const theme = useCoengageUITheme();
  return (
    <div>
      <Head title="CoengageUI" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />

        <Explore />
        <Box
          sx={{
            paddingTop: 120,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          }}
        >
          <Container size={1100}>
            <CoengageUIBanner />
          </Container>
        </Box>
        <Customize />
        <Usage />
        <Community />
      </div>
      <Footer />
    </div>
  );
}
