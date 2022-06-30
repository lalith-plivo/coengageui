import React from 'react';
import { Text, Container, Divider, createStyles, CoengageUIProvider } from 'coengageui_core';
import * as StylesAPI from 'coengageui_styles-api';
import { generateBorderStyles } from '../generate-border-styles';

interface SectionProps {
  withDivider?: boolean;
  name: string;
  children: React.ReactNode;
}

function Section({ withDivider = true, name, children }: SectionProps) {
  return (
    <>
      {withDivider && <Divider mt="md" />}

      <Text mb="xs" mt="xs" size="sm">
        Styles added with {name}
      </Text>

      <div>{children}</div>
    </>
  );
}

interface StylesAPIStoryProps {
  name: string;
  props: Record<string, any>;
  component: any;
  withInputProps?: boolean;
  maxWidth?: number;
  withPadding?: boolean;
}

const rootStyles = {
  backgroundColor: '#ffcfcc',
  border: '1px solid #d93c32',
};

const useRootStyles = createStyles({ root: rootStyles });

const inputProps = {
  label: 'Label',
  description: 'Description',
  error: 'Error',
  icon: '$',
  placeholder: 'Placeholder',
};

export function StylesAPIStory({
  name,
  component: Component,
  props: _props,
  maxWidth = 400,
  withPadding = true,
  withInputProps = false,
}: StylesAPIStoryProps) {
  const selectors = name in StylesAPI ? StylesAPI[name] : { root: '' };
  const styles = generateBorderStyles(selectors);
  const classNames = createStyles(styles)().classes;
  const { root } = useRootStyles().classes;
  const props = withInputProps ? { ...inputProps, ..._props } : _props;

  return (
    <Container py={withPadding ? 20 : 0} size={maxWidth}>
      <Section name="sx" withDivider={false}>
        <Component {...props} sx={rootStyles} />
      </Section>

      <Section name="className">
        <Component {...props} className={root} />
      </Section>

      <Section name="styles">
        <Component {...props} styles={styles} />
      </Section>

      <Section name="classNames">
        <Component {...props} classNames={classNames} />
      </Section>

      <Section name="CoengageUIProvider styles">
        <CoengageUIProvider styles={{ [name]: styles }}>
          <Component {...props} />
        </CoengageUIProvider>
      </Section>
    </Container>
  );
}
