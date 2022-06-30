import React from 'react';
import { useCoengageUITheme } from 'coengageui_core';
import { RichTextEditorDemos } from 'coengageui_demos';

export function RichTextDemo() {
  const theme = useCoengageUITheme();
  const Component = RichTextEditorDemos.usage.component as any;
  return (
    <Component
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        borderColor: 'transparent',
        boxShadow: theme.shadows.md,
      }}
      controls={[
        ['bold', 'italic', 'underline', 'strike', 'clean'],
        ['h1', 'h2', 'h3', 'h4'],
        ['unorderedList', 'orderedList'],
        ['link', 'image', 'video', 'blockquote'],
        ['alignLeft', 'alignCenter', 'alignRight'],
      ]}
    />
  );
}
