import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Input } from '@coengageui/core';

const code = `
import { Input } from '@coengageui/core';

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input component="select" rightSection={<ChevronDownIcon />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

`;

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input style={{ marginTop: 15 }} component="select" rightSection={<ChevronDownIcon />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

export const component: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
