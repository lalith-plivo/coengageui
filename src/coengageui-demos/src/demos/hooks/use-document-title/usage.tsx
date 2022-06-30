import React, { useState } from 'react';
import { useDocumentTitle, randomId } from 'coengageui_hooks';
import { Group, Button } from 'coengageui_core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from 'coengageui_hooks';
import { Button } from 'coengageui_core';

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
