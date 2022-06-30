import React from 'react';
import type { RichTextEditorProps } from 'coengageui_rte';

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('coengageui_rte');
    return <RichTextEditor {...props} />;
  }

  return null;
}
