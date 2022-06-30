import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: 'Hooks/use-local-storage',
};

export function Usage() {
  const [value, setValue] = useLocalStorage<string>({
    key: '@coengageui/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export function SerializeJson() {
  const [value, setValue] = useLocalStorage<{ coengage: string }>({
    key: '@coengageui/localStorage/val',
    defaultValue: { coengage: 'is awesome' },
  });

  const [value2, setValue2] = useLocalStorage<{ coengage: string }>({
    key: '@coengageui/localStorage/val',
    defaultValue: { coengage: 'is awesome' },
  });

  const [value3, setValue3] = useLocalStorage<{ coengage: string }>({
    key: '@coengageui/localStorage/another-value',
    defaultValue: { coengage: 'is awesome' },
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        value={value.coengage}
        onChange={(event) => setValue({ coengage: event.target.value })}
      />
      <input
        value={value2.coengage}
        onChange={(event) => setValue2({ coengage: event.target.value })}
      />
      <input
        value={value3.coengage}
        onChange={(event) => setValue3({ coengage: event.target.value })}
      />
    </div>
  );
}

export function SerializeBoolean() {
  const [value, setValue] = useLocalStorage<boolean>({
    key: '@coengageui/localStorage/val',
    defaultValue: true,
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => {
          setValue(event.currentTarget.checked);
        }}
      />
    </div>
  );
}

export function MultipleHooks() {
  const [value, setValue] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  const [value2] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <input value={value2} readOnly />
    </div>
  );
}
