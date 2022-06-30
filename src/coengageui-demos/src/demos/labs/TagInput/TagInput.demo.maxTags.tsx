import React from 'react';
import { TagInput } from '@coengageui/labs';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add up to 5"
  maxTags={5}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add up to 5"
        maxTags={5}
      />
    </div>
  );
}

export const maxTags: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
