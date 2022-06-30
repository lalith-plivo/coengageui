import React, { useState } from 'react';
import { Container } from 'coengageui_core';
import { Footer } from '../Footer/Footer';
import Head from '../Head/Head';
import { Installation } from './Installation/Installation';
import { Guides } from './Guides/Guides';
import { NextSteps } from './NextSteps/NextSteps';
import { CoengageUIBanner } from '../CoengageUIBanner/CoengageUI';
import useStyles from './GettingStarted.styles';

export function GettingStarted() {
  const { classes } = useStyles();
  const [dependencies, setDependencies] = useState('coengageui_hooks coengageui_core');

  return (
    <>
      <Head title="Getting started" />

      <div className={classes.wrapper}>
        <Container px={null} className={classes.container} size={1100}>
          <Installation setDependencies={setDependencies} />
          <Guides dependencies={dependencies} />
          <NextSteps />
          <CoengageUIBanner />
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
