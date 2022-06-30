/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Group, useCoengageUITheme } from '@coengageui/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@coengageui/dropzone';
import { dropzoneChildren } from './_base';

const code = `
import { useState } from 'react';
import { Button } from '@coengageui/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@coengageui/dropzone';

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
        {disabled ? 'Enable' : 'Disable'} full screen dropzone
      </Button>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {/* See dropzone children in previous demo */}
      </FullScreenDropzone>
    </>
  );
}
`;

function Demo() {
  const [disabled, setDisabled] = useState(true);
  const theme = useCoengageUITheme();

  return (
    <>
      <Group position="center">
        <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
          {disabled ? 'Enable' : 'Disable'} full screen dropzone
        </Button>
      </Group>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {(status) => dropzoneChildren(status, theme)}
      </FullScreenDropzone>
    </>
  );
}

export const fullScreen: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
