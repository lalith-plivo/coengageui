import React, { useState, useEffect } from 'react';
import { Title, SimpleGrid, useCoengageUITheme } from '@coengageui/core';
import { PACKAGES_DATA } from './data';
import { CheckboxCard } from './CheckboxCard';

interface InstallationProps {
  setDependencies(dependencies: string): void;
}

export function Installation({ setDependencies }: InstallationProps) {
  const theme = useCoengageUITheme();

  const [values, setValues] = useState({
    '@coengageui/hooks': true,
    '@coengageui/core': true,
    '@coengageui/dates': false,
    '@coengageui/notifications': false,
    '@coengageui/prism': false,
    '@coengageui/rte': false,
    '@coengageui/dropzone': false,
  });

  const items = PACKAGES_DATA.map((item) => (
    <CheckboxCard
      key={item.package}
      checked={values[item.package]}
      title={item.package}
      description={item.description}
      onChange={() => setValues((c) => ({ ...c, [item.package]: !c[item.package] }))}
      style={{ minHeight: 90 }}
    />
  ));

  const dependencies = Array.from(
    new Set(
      PACKAGES_DATA.reduce((acc, item) => {
        if (values[item.package]) {
          acc.push(...item.dependencies);
        }

        return acc;
      }, [])
    )
  )
    .sort()
    .reverse();

  useEffect(() => {
    setDependencies(dependencies.join(' '));
  }, [dependencies]);

  return (
    <div style={{ marginBottom: 50 }}>
      <Title
        order={2}
        mb="lg"
        sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
      >
        Choose packages
      </Title>

      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
        {items}
      </SimpleGrid>
    </div>
  );
}
