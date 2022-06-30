import React from 'react';
import { Badge } from 'coengageui_core';

const code = `
import { Badge } from 'coengageui_core';
function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 120 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 120, marginLeft: 15 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </div>
  );
}

export const overflow: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
