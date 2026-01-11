export function underlineStress(text: string): string {
  if (typeof text !== 'string') return text;
  // Russian vowels: а, е, ё, и, о, у, ы, э, ю, я (and uppercase)
  // Stress mark: \u0301
  // We replace vowel + stress mark with <u>vowel</u>
  // Note: the accent mark is \u0301
  return text.replace(/([аеёиоуыэюяАЕЁИОУЫЭЮЯ])\u0301/g, '<u>$1</u>');
}
