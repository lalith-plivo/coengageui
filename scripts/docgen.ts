import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  '../src/coengageui-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/coengageui-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/coengageui-core/src/Menu/MenuLabel/MenuLabel.tsx',
  '../src/coengageui-core/src/RadioGroup/Radio/Radio.tsx',
  '../src/coengageui-core/src/components/Chips/Chip/Chip.tsx',
  '../src/coengageui-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../src/coengageui-core/src/components/Slider/Slider/Slider.tsx',
  '../src/coengageui-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../src/coengageui-core/src/components/Stepper/Step/Step.tsx',
  '../src/coengageui-core/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../src/coengageui-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../src/coengageui-core/src/components/AppShell/Header/Header.tsx',
  '../src/coengageui-core/src/components/AppShell/Footer/Footer.tsx',
  '../src/coengageui-core/src/components/AppShell/Aside/Aside.tsx',
  '../src/coengageui-core/src/components/Grid/Col/Col.tsx',
  '../src/coengageui-prism/src/Prism.tsx',
  '../src/coengageui-spotlight/src/SpotlightProvider.tsx',
  '../src/coengageui-modals/src/ModalsProvider.tsx',
  '../src/coengageui-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/coengageui-core/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/coengageui-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/coengageui-dropzone/src') },
  { type: 'package', path: path.join(__dirname, '../src/coengageui-labs/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
