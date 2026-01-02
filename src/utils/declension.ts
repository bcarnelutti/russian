import { VocabItem } from '../vocabularyData';

export interface DeclensionResult {
  singular: string[];
  plural: string[];
}

export const CASES = [
  'Nominativo',
  'Genitivo',
  'Dativo',
  'Accusativo',
  'Strumentale',
  'Prepositivo'
];

const isVowel = (char: string) => ['а', 'я', 'э', 'е', 'о', 'ё', 'и', 'ы', 'у', 'ю'].includes(char);
const isVelar = (char: string) => ['г', 'к', 'х', 'ж', 'ч', 'ш', 'щ'].includes(char);
const isSibilant = (char: string) => ['ж', 'ч', 'ш', 'щ'].includes(char);

// Basic declension logic
export const getDeclension = (word: VocabItem): DeclensionResult | null => {
  if (word.noDeclension) return null;
  if (word.indeclinable) {
    const arr = Array(6).fill(word.ru);
    return { singular: arr, plural: arr };
  }

  const stem = getStem(word.ru, word.gender, word.special);
  const endings = getEndings(word.ru, word.gender, word.animate, word.special);

  return {
    singular: endings.singular.map(end => applyEnding(stem.singular, end)),
    plural: endings.plural.map(end => applyEnding(stem.plural, end))
  };
};

function getStem(word: string, gender?: string, special?: string) {
  let stemSg = word;
  let stemPl = word;

  // Simple stem extraction based on Nom Sg ending
  if (gender === 'f' || (gender === 'm' && (word.endsWith('а') || word.endsWith('я')))) {
    stemSg = word.slice(0, -1);
    stemPl = stemSg;
  } else if (gender === 'n') {
    stemSg = word.slice(0, -1);
    stemPl = stemSg;
  } else if (gender === 'm') {
    if (word.endsWith('й') || word.endsWith('ь')) {
      stemSg = word.slice(0, -1);
    }
    stemPl = stemSg;
    
    // Fleeting vowel for Masc (Nom Sg has it, others don't)
    if (special === 'fleeting_vowel') {
        // Very basic heuristic: remove the vowel before the last char
        // E.g. 'подарок' -> 'подарк', 'рот' -> 'рт', 'палец' -> 'пальц' (soft sign might change?)
        // Custom logic for known words
        if (word === 'Рот') { stemSg = 'Рт'; stemPl = 'Рт'; }
        else if (word === 'Подарок') { stemSg = 'Подарк'; stemPl = 'Подарк'; }
        else if (word === 'Цветок') { stemSg = 'Цветк'; stemPl = 'Цвет'; } // Irreg plural
        else if (word === 'Палец') { stemSg = 'Пальц'; stemPl = 'Пальц'; }
    }
  }

  // Irregular plurals stems (hardcoded for known vocab)
  if (word === 'Дерево') stemPl = 'Деревь';
  if (word === 'Брат') stemPl = 'Брат'; // Bratiya
  if (word === 'Стул') stemPl = 'Стуль';
  if (word === 'Друг') stemPl = 'Друзь';
  if (word === 'Человек') stemPl = 'Люд'; // suppletive
  if (word === 'Ребёнок') stemPl = 'Дет'; // suppletive
  if (word === 'Цветок') stemPl = 'Цвет'; 
  
  return { singular: stemSg, plural: stemPl };
}

function applyEnding(stem: string, ending: string) {
  // Hard/Soft matching logic could be here, but we pass pre-calculated endings usually
  return stem + ending;
}

function getEndings(word: string, gender: string = 'm', animate: boolean = false, special?: string) {
  // Defaults
  let sg = Array(6).fill('');
  let pl = Array(6).fill('');

  const lastChar = word.slice(-1);
  const isSoft = ['ь', 'й', 'я', 'е', 'ё', 'ю', 'и'].includes(lastChar);
  
  // --- MASCULINE ---
  if (gender === 'm') {
    // Singular
    sg[0] = ''; // Nom (stem ending already removed if soft?) No, stem logic handles it.
    // Wait, getStem returns the base.
    // If word is 'Стол', stem 'Стол'. Nom is Stem.
    // If word is 'Музей', stem 'Музе'. Nom is Stem + 'й'.
    
    // Let's adjust: getEndings returns the *suffix* to add to the *stem*.
    // And getStem handles removing the Nom suffix.
    
    // Standard Hard (Стол)
    let s = ['','а','у','','ом','е'];
    let p = ['ы','ов','ам','','ами','ах'];

    // Soft (Музей, Словарь)
    if (lastChar === 'й') {
       s = ['й','я','ю','й','ем','е'];
       p = ['и','ев','ям','и','ями','ях'];
    } else if (lastChar === 'ь') {
       s = ['ь','я','ю','ь','ем','е'];
       p = ['и','ей','ям','и','ями','ях'];
    } else if (isVelar(word.slice(-1))) { // Park -> Parki
       p[0] = 'и'; 
    }

    // Accusative Logic
    s[3] = animate ? s[1] : s[0];
    p[3] = animate ? p[1] : p[0];

    // Special irregulars
    if (word === 'Цветок') { // Nom Pl Цветок -> Цветы
        s[0] = 'ок'; // Stem is Цвет
        // Actually stem logic for Cvetok was 'Cvetk' for singular oblique?
        // Gen: Cvetk-a. Nom: Cvet-ok.
        // This simple engine is struggling with stem alternation.
        // Let's simplify: Return FULL forms for tricky words?
        // Or specific rules.
    }

    sg = s;
    pl = p;
  }

  // --- FEMININE ---
  else if (gender === 'f') {
    // Hard (Мама)
    let s = ['а','ы','е','у','ой','е'];
    let p = ['ы','','ам','ы','ами','ах'];

    // Soft (Неделя, Тетя)
    if (lastChar === 'я') {
        s = ['я','и','е','ю','ей','е'];
        p = ['и','ь','ям','и','ями','ях'];
        // If ends in -iya -> -ii in Dat/Prep
        if (word.endsWith('ия')) {
            s[2] = 'и'; // Dative
            s[5] = 'и'; // Prep
            p[1] = 'й'; // Gen Pl (Liniya -> Liniy)
        }
    } 
    // Soft Sign (Ночь - 3rd Declension)
    else if (lastChar === 'ь') {
        s = ['ь','и','и','ь','ью','и'];
        p = ['и','ей','ям','и','ями','ях'];
    }
    // Velar rule for Hard (Kniga -> Knigi)
    else if (isVelar(word.slice(-2, -1))) { // Check stem last char (before 'a')
        s[1] = 'и'; // Gen sg
        p[0] = 'и'; // Nom pl
    }

    // Accusative Plural
    p[3] = animate ? p[1] : p[0];

    sg = s;
    pl = p;
  }

  // --- NEUTER ---
  else if (gender === 'n') {
    // Hard (Окно)
    let s = ['о','а','у','о','ом','е'];
    let p = ['а','','ам','а','ами','ах'];

    // Soft (Море)
    if (lastChar === 'е') {
        s = ['е','я','ю','е','ем','е'];
        p = ['я','ей','ям','я','ями','ях'];
        if (word.endsWith('ие')) {
            s[5] = 'и'; // Prep (Zdanii)
            p[1] = 'й'; // Gen Pl (Zdaniy)
        }
    }
    
    sg = s;
    pl = p;
  }
  
  // --- PLURAL ONLY ---
  else if (gender === 'pl') {
      // Jeansy, Ochki
      // Assume hard ending -y
      let p = ['ы','ов','ам','ы','ами','ах'];
      if (word.endsWith('и')) {
          p = ['и','ов','ам','и','ами','ах']; // Defaulting genitive usually
          // Noski -> Noskov? No, Noski -> Nosok (Gen).
          if (word === 'Носки') p[1] = '';
      }
      sg = Array(6).fill('-');
      pl = p;
  }

  // Fix overrides manually for safety
  if (word === 'Рот') { sg = ['Рот','Рта','Рту','Рот','Ртом','Рту']; }
  if (word === 'Цветок') { 
      sg = ['Цветок','Цветка','Цветку','Цветок','Цветком','Цветке'];
      pl = ['Цветы','Цветов','Цветам','Цветы','Цветами','Цветах'];
  }
  if (word === 'День рождения') { // Only 'День' declines
      sg = ['День рождения','Дня рождения','Дню рождения','День рождения','Днём рождения','Дне рождения'];
      pl = ['Дни рождения','Дней рождения','Дням рождения','Дни рождения','Днями рождения','Днях рождения'];
  }

  return { singular: sg, plural: pl };
}
