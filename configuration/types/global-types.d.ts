type CoengageUIDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface CoengageUIDemoControlProps {
  type: CoengageUIDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface CoengageUIDemoBase {
  component?: React.FC;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface CoengageUICodeDemo extends CoengageUIDemoBase {
  type: 'demo';
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface CoengageUIConfiguratorDemo extends CoengageUIDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: CoengageUIDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type CoengageUIDemo = CoengageUICodeDemo | CoengageUIConfiguratorDemo;
