import React, { useRef } from 'react';
import { useIntersection } from '@coengageui/hooks';
import { Text, Paper, useCoengageUITheme } from '@coengageui/core';

const code = `
import { useRef } from 'react';
import { useIntersection } from '@coengageui/hooks';
import { Paper, Text, useCoengageUITheme } from '@coengageui/core';

function Demo() {
  const containerRef = useRef();
  const theme = useCoengageUITheme();
  const [ref, observedEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: observedEntry?.isIntersecting
              ? theme.colors.green[9]
              : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observedEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const theme = useCoengageUITheme();
  const [ref, observedEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: observedEntry?.isIntersecting
              ? theme.colors.green[9]
              : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observedEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}

export const useIntersectionDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
