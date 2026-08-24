import type { Locale } from '../i18n';
import { en, type Dict } from './en';
import { es } from './es';

const dicts: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

export type { Dict };
