import en from '@/messages/en.json';
import de from '@/messages/de.json';

const messages = { en, de };

export type Locale = 'en' | 'de';

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.en;
}