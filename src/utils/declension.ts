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

  // Use base form (singular) if available, otherwise usage form
  const workingWord = word.baseRu || word.ru;
  const workingGender = word.gender || 'm'; // default m if unknown, but should be set

  const stem = getStem(workingWord, workingGender, word.special);
  const endings = getEndings(workingWord, workingGender, word.animate);

  return {
    singular: endings.singular.map(end => applyEnding(stem.singular, end)),
    plural: endings.plural.map(end => applyEnding(stem.plural, end))
  };
};

function getStem(word: string, gender: string = 'm', special?: string) {
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
  }

  // Irregular plurals stems (hardcoded for known vocab)
  // Most irregulars are handled by full override in getEndings to avoid complex stem switching
  if (word === 'Цветок') stemPl = 'Цвет'; 
  
  return { singular: stemSg, plural: stemPl };
}

function applyEnding(stem: string, ending: string) {
  // If ending starts with 'OVERRIDE:', replace stem entirely
  if (ending.startsWith('OVERRIDE:')) {
      return ending.split('OVERRIDE:')[1];
  }
  return stem + ending;
}

function getEndings(word: string, gender: string = 'm', animate: boolean = false) {
  // Defaults
  let sg = Array(6).fill('');
  let pl = Array(6).fill('');

  const lastChar = word.slice(-1);
  
  // --- MASCULINE ---
  if (gender === 'm') {
    let s = ['','а','у','','ом','е'];
    let p = ['ы','ов','ам','','ами','ах'];

    if (lastChar === 'й') {
       s = ['й','я','ю','й','ем','е'];
       p = ['и','ев','ям','и','ями','ях'];
    } else if (lastChar === 'ь') {
       s = ['ь','я','ю','ь','ем','е'];
       p = ['и','ей','ям','и','ями','ях'];
    } else if (isVelar(word.slice(-1))) { 
       p[0] = 'и'; 
    }

    s[3] = animate ? s[1] : s[0];
    p[3] = animate ? p[1] : p[0];

    sg = s;
    pl = p;
  }

  // --- FEMININE ---
  else if (gender === 'f') {
    let s = ['а','ы','е','у','ой','е'];
    let p = ['ы','','ам','ы','ами','ах'];

    if (lastChar === 'я') {
        s = ['я','и','е','ю','ей','е'];
        p = ['и','ь','ям','и','ями','ях'];
        if (word.endsWith('ия')) {
            s[2] = 'и';
            s[5] = 'и';
            p[1] = 'й';
        }
    } 
    else if (lastChar === 'ь') {
        s = ['ь','и','и','ь','ью','и'];
        p = ['и','ей','ям','и','ями','ях'];
    }
    else if (isVelar(word.slice(-2, -1))) {
        s[1] = 'и';
        p[0] = 'и';
    }

    p[3] = animate ? p[1] : p[0];

    sg = s;
    pl = p;
  }

  // --- NEUTER ---
  else if (gender === 'n') {
    let s = ['о','а','у','о','ом','е'];
    let p = ['а','','ам','а','ами','ах'];

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
      }
      sg = Array(6).fill('-'); // No singular
      pl = p;
  }

  // --- MANUAL OVERRIDES (using OVERRIDE: prefix to bypass stem attachment) ---
  // This allows us to handle fleeting vowels and irregulars perfectly without complex logic
  
  const override = (s: string[], p: string[]) => {
      sg = s.map(x => 'OVERRIDE:' + x);
      pl = p.map(x => 'OVERRIDE:' + x);
  };

  if (word === 'Рот') { 
      override(['Рот','Рта','Рту','Рот','Ртом','Рту'], ['Рты','Ртов','Ртам','Рты','Ртами','Ртах']);
  }
  if (word === 'Цветок') { 
      override(['Цветок','Цветка','Цветку','Цветок','Цветком','Цветке'], ['Цветы','Цветов','Цветам','Цветы','Цветами','Цветах']);
  }
  if (word === 'День рождения') {
      override(['День рождения','Дня рождения','Дню рождения','День рождения','Днём рождения','Дне рождения'], ['Дни рождения','Дней рождения','Дням рождения','Дни рождения','Днями рождения','Днях рождения']);
  }
  if (word === 'Ботинок') {
      override(['Ботинок','Ботинка','Ботинку','Ботинок','Ботинком','Ботинке'], ['Ботинки','Ботинок','Ботинкам','Ботинки','Ботинками','Ботинках']);
  }
  if (word === 'Носок') {
      override(['Носок','Носка','Носку','Носок','Носком','Носке'], ['Носки','Носков','Носкам','Носки','Носками','Носках']); // Gen pl 'Noskov' is standard now? Or 'Nosok'? 'Nosok' is traditional, 'Noskov' accepted. I'll use Noskov for regularity or Nosok. Let's stick to standard modern. Actually 'paru noskov'.
  }
  if (word === 'Палец') {
      override(['Палец','Пальца','Пальцу','Палец','Пальцем','Пальце'], ['Пальцы','Пальцев','Пальцам','Пальцы','Пальцами','Пальцах']);
  }
  if (word === 'Глаз') {
      override(['Глаз','Глаза','Глазу','Глаз','Глазом','Глазе'], ['Глаза','Глаз','Глазам','Глаза','Глазами','Глазах']);
  }
  if (word === 'Ухо') {
      override(['Ухо','Уха','Уху','Ухо','Ухом','Ухе'], ['Уши','Ушей','Ушам','Уши','Ушами','Ушах']);
  }
  if (word === 'Волос') {
      override(['Волос','Волоса','Волосу','Волос','Волосом','Волосе'], ['Волосы','Волос','Волосам','Волосы','Волосами','Волосах']);
  }
  if (word === 'Ребёнок') {
      override(['Ребёнок','Ребёнка','Ребёнку','Ребёнка','Ребёнком','Ребёнке'], ['Дети','Детей','Детям','Детей','Детьми','Детях']);
  }
  if (word === 'Человек') {
      override(['Человек','Человека','Человеку','Человека','Человеком','Человеке'], ['Люди','Людей','Людям','Людей','Людьми','Людях']);
  }
  if (word === 'Друг') {
      override(['Друг','Друга','Другу','Друга','Другом','Друге'], ['Друзья','Друзей','Друзьям','Друзей','Друзьями','Друзьях']);
  }
  if (word === 'Брат') {
      override(['Брат','Брата','Брату','Брата','Братом','Брате'], ['Братья','Братьев','Братьям','Братьев','Братьями','Братьях']);
  }
  if (word === 'Стул') {
      override(['Стул','Стула','Стулу','Стул','Стулом','Стуле'], ['Стулья','Стульев','Стульям','Стулья','Стульями','Стульях']);
  }
  if (word === 'Дерево') {
      override(['Дерево','Дерева','Дереву','Дерево','Деревом','Дереве'], ['Деревья','Деревьев','Деревьям','Деревья','Деревьями','Деревьях']);
  }
  if (word === 'Носки') { // Just in case singular override missing or needed specific
      // Gen Plural check: modern usage accepts 'noskov', traditional 'nosok'. I used 'noskov' above.
  }

  return { singular: sg, plural: pl };
}
