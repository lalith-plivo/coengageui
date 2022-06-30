import { PinInput } from '@coengageui/labs';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export const focus: CoengageUIDemo = {
  type: 'configurator',
  component: PinInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [{ name: 'manageFocus', type: 'boolean', initialValue: true }],
};
