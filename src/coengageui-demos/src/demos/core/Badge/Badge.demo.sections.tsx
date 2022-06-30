import React from 'react';
import { X } from 'tabler-icons-react';
import { Group, Badge, ActionIcon, Avatar } from 'coengageui_core';

const code = `
import { ActionIcon, Avatar, Badge, Group } from 'coengageui_core';
import { X } from 'tabler-icons-react';

function Demo() {
  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={24}
      mr={5}
      src="image-link"
    />
  );

  const removeButton = (
    <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
      <X size={10} />
    </ActionIcon>
  );

  return (
    <Group>
      <Badge sx={{ paddingLeft: 0 }} size="lg" radius="xl" color="teal" leftSection={avatar}>
        Badge with Avatar
      </Badge>

      <Badge variant="outline" sx={{ paddingRight: 3 }} rightSection={removeButton}>
        Badge with right section
      </Badge>

      <Badge variant="outline" sx={{ paddingLeft: 3 }} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}
`;

const avatar = (
  <Avatar
    alt="Avatar for badge"
    size={24}
    mr={5}
    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
  />
);

const removeButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <X size={10} />
  </ActionIcon>
);

function Demo() {
  return (
    <Group>
      <Badge sx={{ paddingLeft: 0 }} size="lg" color="teal" radius="xl" leftSection={avatar}>
        Badge with Avatar
      </Badge>
      <Badge variant="outline" sx={{ paddingRight: 3 }} rightSection={removeButton}>
        Badge with right section
      </Badge>
      <Badge variant="outline" sx={{ paddingLeft: 3 }} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}

export const sections: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
