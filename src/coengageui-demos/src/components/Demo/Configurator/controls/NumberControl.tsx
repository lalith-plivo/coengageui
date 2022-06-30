import React from 'react';
import { NumberInput } from 'coengageui_core';
import { upperFirst } from 'coengageui_hooks';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  return <NumberInput {...others} label={upperFirst(label)} value={value} onChange={onChange} />;
}

NumberControl.initialValue = 0;
