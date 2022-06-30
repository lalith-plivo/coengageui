import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@coengageui/hooks';
import { Group, Button } from '@coengageui/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@coengageui/hooks';
import { Button } from '@coengageui/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
