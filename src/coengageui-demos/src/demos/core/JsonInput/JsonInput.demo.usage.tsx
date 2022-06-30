import React from 'react';
import { JsonInput } from 'coengageui_core';

const code = `
import { JsonInput } from 'coengageui_core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid json"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <JsonInput
        label="Your package.json"
        placeholder="Textarea will autosize to fit the content"
        validationError="Invalid json"
        formatOnBlur
        autosize
        minRows={4}
      />
    </div>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
