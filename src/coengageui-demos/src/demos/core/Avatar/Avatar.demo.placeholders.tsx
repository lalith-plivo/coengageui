import React from 'react';
import { Star } from 'tabler-icons-react';
import { Avatar, Group } from 'coengageui_core';

const code = `
import { Avatar } from 'coengageui_core';
import { Star } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Lalith Narayan Kashyap" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <Star size={24} />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group position="center">
      <Group position="center">
        <Avatar src={null} alt="no image here" />
        <Avatar src={null} alt="no image here" color="indigo" />
        <Avatar src={null} alt="no image here" color="red">
          VR
        </Avatar>
        <Avatar color="blue" radius="xl">
          <Star size={24} />
        </Avatar>
      </Group>
    </Group>
  );
}

export const placeholders: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
