import { type VocabItem } from '../vocabularyData';

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

const isVelar = (char: string) => ['г', 'к', 'х', 'ж', 'ч', 'ш', 'щ'].includes(char);

// Basic declension logic
export const getDeclension = (word: VocabItem): DeclensionResult | null => {
  if (word.noDeclension) return null;
  if (word.indeclinable) {
    const arr = Array(6).fill(word.ru);
    return { singular: arr, plural: arr };
  }

  const stem = getStem(word.ru, word.gender, word.special);
  const endings = getEndings(word.ru, word.gender, word.animate);

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
        // Very basic heuristic
        if (word === 'Рот') { stemSg = 'Рт'; stemPl = 'Рт'; }
        else if (word === 'Подарок') { stemSg = 'Подарк'; stemPl = 'Подарк'; }
        else if (word === 'Цветок') { stemSg = 'Цветк'; stemPl = 'Цвет'; }
        else if (word === 'Палец') { stemSg = 'Пальц'; stemPl = 'Пальц'; }
    }
  }

  // Irregular plurals stems (hardcoded for known vocab)
  if (word === 'Дерево') stemPl = 'Деревь';
  if (word === 'Брат') stemPl = 'Брат'; 
  if (word === 'Стул') stemPl = 'Стуль';
  if (word === 'Друг') stemPl = 'Друзь';
  if (word === 'Человек') stemPl = 'Люд';
  if (word === 'Ребёнок') stemPl = 'Дет';
  if (word === 'Цветок') stemPl = 'Цвет'; 
  
  return { singular: stemSg, plural: stemPl };
}

function applyEnding(stem: string, ending: string) {
  return stem + ending;
}

function getEndings(word: string, gender: string = 'm', animate: boolean = false) {
  // Defaults
  let sg = Array(6).fill('');
  let pl = Array(6).fill('');

  const lastChar = word.slice(-1);
  
  // --- MASCULINE ---
  if (gender === 'm') {
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
    if (word === 'Цветок') {
        s[0] = 'ок';
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
        if (word.endsWith('ия')) {
            s[2] = 'и';
            s[5] = 'и';
            p[1] = 'й';
        }
    } 
    // Soft Sign (Ночь)
    else if (lastChar === 'ь') {
        s = ['ь','и','и','ь','ью','и'];
        p = ['и','ей','ям','и','ями','ях'];
    }
    // Velar rule
    else if (isVelar(word.slice(-2, -1))) {
        s[1] = 'и';
        p[0] = 'и';
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
            s[5] = 'и';
            p[1] = 'й';
        }
    }
    
    sg = s;
    pl = p;
  }
  
  // --- PLURAL ONLY ---
  else if (gender === 'pl') {
      let p = ['ы','ов','ам','ы','ами','ах'];
      if (word.endsWith('и')) {
          p = ['и','ов','ам','и','ами','ах'];
          if (word === 'Носки') p[1] = '';
      }
      sg = Array(6).fill('-');
      pl = p;
  }

  // Fix overrides
  if (word === 'Рот') { sg = ['Рот','Рта','Рту','Рот','Ртом','Рту']; }
  if (word === 'Цветок') { 
      sg = ['Цветок','Цветка','Цветку','Цветок','Цветком','Цветке'];
      pl = ['Цветы','Цветов','Цветам','Цветы','Цветами','Цветах'];
  }
  if (word === 'День рождения') {
      sg = ['День рождения','Дня рождения','Дню рождения','День рождения','Днём рождения','Дне рождения'];
      pl = ['Дни рождения','Дней рождения','Дням рождения','Дни рождения','Днями рождения','Днях рождения'];
  }

  return { singular: sg, plural: pl };
}