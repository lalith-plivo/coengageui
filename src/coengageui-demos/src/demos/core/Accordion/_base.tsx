import React from 'react';
import { Accordion, AccordionProps } from 'coengageui_core';
import { baseAccordionMockdata } from './_mockdata';

export const baseDemoItems = baseAccordionMockdata.map((item) => (
  <Accordion.Item label={item.label} key={item.label}>
    {item.content}
  </Accordion.Item>
));

export function BaseDemo(props: Partial<AccordionProps>) {
  return <Accordion {...props}>{baseDemoItems}</Accordion>;
}
