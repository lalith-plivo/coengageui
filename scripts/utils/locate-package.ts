import path from 'path';
import fs from 'fs-extra';
import { Logger } from './Logger';

import chalk from 'chalk';
const logger = new Logger('test');

export default async function locatePackage(packageName: string) {
  const folder = packageName.replace('@', '').replace('_', '-');
  const packagePath = path.join(__dirname, '../../src', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
