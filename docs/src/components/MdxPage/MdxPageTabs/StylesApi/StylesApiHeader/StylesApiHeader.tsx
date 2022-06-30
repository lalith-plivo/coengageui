import React from 'react';
import { Title, Text } from 'coengageui_core';
import { Prism } from 'coengageui_prism';
import { generateRootCode } from '../generate-styles-code';
import GatsbyLink from '../../../MdxProvider/GatsbyLink/GatsbyLink';

interface StylesApiHeaderProps {
  component: string;
  singleNode: boolean;
}

export function StylesApiHeader({ component, singleNode }: StylesApiHeaderProps) {
  return (
    <>
      <Title order={2} sx={{ fontWeight: 600 }} mb="md">
        {singleNode ? `${component} styles API` : 'CoengageUI styles API'}
      </Title>

      {singleNode ? (
        <Text mb="md">
          {component} renders single node, use className, sx or style props to override styles:
        </Text>
      ) : (
        <Text sx={{ maxWidth: 600 }} mb={30}>
          CoengageUI components support styling of individual elements by adding your classes or
          inline styles to any element inside component. For more information see{' '}
          <GatsbyLink to="/theming/styles-api/">styles API guide</GatsbyLink>.
        </Text>
      )}

      {!singleNode && (
        <Text weight={500} mb="md">
          Add styles to root element with className, style or sx:
        </Text>
      )}

      <Prism language="tsx">{generateRootCode(component)}</Prism>
    </>
  );
}
