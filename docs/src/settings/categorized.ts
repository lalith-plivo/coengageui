import { coengage_CORE_CATEGORIES, coengage_CORE_ORDER } from './coengageui-core';
import { coengage_HOOKS_ORDER, coengage_HOOKS_CATEGORIES } from './coengageui-hooks';

export const coengage_HOOKS_CATEGORIZED = {
  group: 'coengageui-hooks',
  categories: coengage_HOOKS_CATEGORIES,
  order: coengage_HOOKS_ORDER,
};

export const coengage_CORE_CATEGORIZED = {
  group: 'coengageui-core',
  categories: coengage_CORE_CATEGORIES,
  order: coengage_CORE_ORDER,
};

export const CATEGORIZED = [
  { group: 'theming', categories: {}, order: [] },
  coengage_HOOKS_CATEGORIZED,
  { group: 'coengageui-form', categories: {}, order: [] },
  coengage_CORE_CATEGORIZED,
  { group: 'coengageui-dates', categories: {}, order: [] },
  { group: 'Other packages', categories: {}, order: [] },
  { group: 'changelog', categories: {}, order: [] },
];
