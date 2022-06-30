import React from 'react';
import { Lock } from 'tabler-icons-react';
import { PasswordInput } from '@coengageui/core';

const code = `
import { PasswordInput } from '@coengageui/core';
import { Lock } from 'tabler-icons-react';

function Demo() {
  return <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />
    </div>
  );
}

export const icon: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
