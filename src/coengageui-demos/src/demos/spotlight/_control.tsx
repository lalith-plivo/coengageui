import React from 'react';
import { Button, Group } from 'coengageui_core';
import { useSpotlight } from 'coengageui_spotlight';

export function SpotlightControl({ buttonLabel }: { buttonLabel?: string }) {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>{buttonLabel || 'Open spotlight'}</Button>
    </Group>
  );
}
