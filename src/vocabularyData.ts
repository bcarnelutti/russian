export interface VerbConjugation {
  presentFuture: string[];
  past: string[];
}

export interface VocabItem {
  id: string;
  ru: string;
  baseRu?: string;
  gender?: 'm' | 'f' | 'n' | 'pl';
  animate?: boolean;
  indeclinable?: boolean;
  noDeclension?: boolean;
  special?: 'fleeting_vowel' | 'irregular_pl';
  conjugation?: VerbConjugation;
}

export const vocabularyData: Record<string, VocabItem[]> = {
  clothing: [
    { id: 'shirt', ru: 'Рубашка', gender: 'f' },
    { id: 'tshirt', ru: 'Футболка', gender: 'f' },
    { id: 'pants', ru: 'Брюки', gender: 'pl' },
    { id: 'jeans', ru: 'Джинсы', gender: 'pl' },
    { id: 'dress', ru: 'Платье', gender: 'n' },
    { id: 'skirt', ru: 'Юбка', gender: 'f' },
    { id: 'sweater', ru: 'Свитер', gender: 'm' },
    { id: 'jacket', ru: 'Куртка', gender: 'f' },
    { id: 'coat', ru: 'Пальто', gender: 'n', indeclinable: true },
    { id: 'shoes', ru: 'Обувь', gender: 'f' },
    { id: 'boots', ru: 'Ботинки', gender: 'm', baseRu: 'Ботинок', special: 'fleeting_vowel' },
    { id: 'sneakers', ru: 'Кроссовки', gender: 'f', baseRu: 'Кроссовка' },
    { id: 'hat', ru: 'Шапка', gender: 'f' },
    { id: 'scarf', ru: 'Шарф', gender: 'm' },
    { id: 'gloves', ru: 'Перчатки', gender: 'f', baseRu: 'Перчатка' },
    { id: 'socks', ru: 'Носки', gender: 'm', baseRu: 'Носок', special: 'fleeting_vowel' },
    // Verbs
    { 
      id: 'v_wear', ru: 'Носить', noDeclension: true,
      conjugation: {
        presentFuture: ['ношу́', 'но́сишь', 'но́сит', 'но́сим', 'но́сите', 'но́сят'],
        past: ['носи́л', 'носи́ла', 'носи́ло', 'носи́ли']
      }
    },
    { 
      id: 'v_buy', ru: 'Покупать', noDeclension: true,
      conjugation: {
        presentFuture: ['покупа́ю', 'покупа́ешь', 'покупа́ет', 'покупа́ем', 'покупа́ете', 'покупа́ют'],
        past: ['покупа́л', 'покупа́ла', 'покупа́ло', 'покупа́ли']
      }
    },
    { 
      id: 'v_try_on', ru: 'Мерить', noDeclension: true,
      conjugation: {
        presentFuture: ['ме́рю', 'ме́ришь', 'ме́рит', 'ме́рим', 'ме́рите', 'ме́рят'],
        past: ['ме́рил', 'ме́рила', 'ме́рило', 'ме́рили']
      }
    },
    { 
      id: 'v_wash', ru: 'Стирать', noDeclension: true,
      conjugation: {
        presentFuture: ['стира́ю', 'стира́ешь', 'стира́ет', 'стира́ем', 'стира́ете', 'стира́ют'],
        past: ['стира́л', 'стира́ла', 'стира́ло', 'стира́ли']
      }
    }
  ],
  health: [
    { id: 'doctor', ru: 'Врач', gender: 'm', animate: true },
    { id: 'hospital', ru: 'Больница', gender: 'f' },
    { id: 'pharmacy', ru: 'Аптека', gender: 'f' },
    { id: 'medicine', ru: 'Лекарство', gender: 'n' },
    { id: 'pain', ru: 'Боль', gender: 'f' },
    { id: 'temperature', ru: 'Температура', gender: 'f' },
    { id: 'fever', ru: 'Жар', gender: 'm' },
    { id: 'cold', ru: 'Простуда', gender: 'f' },
    { id: 'cough', ru: 'Кашель', gender: 'm' },
    { id: 'headache', ru: 'Головная боль', noDeclension: true },
    { id: 'ambulance', ru: 'Скорая помощь', noDeclension: true },
    { id: 'help_me', ru: 'Помогите мне', noDeclension: true },
    { id: 'i_feel_bad', ru: 'Я плохо себя чувствую', noDeclension: true },
    { 
      id: 'v_treat', ru: 'Лечить', noDeclension: true,
      conjugation: {
        presentFuture: ['лечу́', 'ле́чишь', 'ле́чит', 'ле́чим', 'ле́чите', 'ле́чат'],
        past: ['лечи́л', 'лечи́ла', 'лечи́ло', 'лечи́ли']
      }
    },
    { 
      id: 'v_hurt', ru: 'Болеть', noDeclension: true,
      conjugation: {
        presentFuture: ['боле́ю', 'боле́ешь', 'боле́ет', 'боле́ем', 'боле́ете', 'боле́ют'],
        past: ['боле́л', 'боле́ла', 'боле́ло', 'боле́ли']
      }
    },
    { 
      id: 'v_recover', ru: 'Выздоравливать', noDeclension: true,
      conjugation: {
        presentFuture: ['выздора́вливаю', 'выздора́вливаешь', 'выздора́вливает', 'выздора́вливаем', 'выздора́вливаете', 'выздора́вливают'],
        past: ['выздора́вливал', 'выздора́вливала', 'выздора́вливало', 'выздора́вливали']
      }
    },
    { 
      id: 'v_call_doc', ru: 'Вызывать', noDeclension: true,
      conjugation: {
        presentFuture: ['вызыва́ю', 'вызыва́ешь', 'вызыва́ет', 'вызыва́ем', 'вызыва́ете', 'вызыва́ют'],
        past: ['вызыва́л', 'вызыва́ла', 'вызыва́ло', 'вызыва́ли']
      }
    }
  ],
  travel: [
    { id: 'ticket', ru: 'Билет', gender: 'm' },
    { id: 'passport', ru: 'Паспорт', gender: 'm' },
    { id: 'luggage', ru: 'Багаж', gender: 'm' },
    { id: 'suitcase', ru: 'Чемодан', gender: 'm' },
    { id: 'train', ru: 'Поезд', gender: 'm' },
    { id: 'plane', ru: 'Самолёт', gender: 'm' },
    { id: 'station', ru: 'Вокзал', gender: 'm' },
    { id: 'airport', ru: 'Аэропорт', gender: 'm' },
    { id: 'platform', ru: 'Платформа', gender: 'f' },
    { id: 'gate', ru: 'Выход на посадку', noDeclension: true },
    { id: 'departure', ru: 'Отправление', gender: 'n' },
    { id: 'arrival', ru: 'Прибытие', gender: 'n' },
    { id: 'customs', ru: 'Таможня', gender: 'f' },
    { id: 'visa', ru: 'Виза', gender: 'f' },
    { id: 'seat', ru: 'Место', gender: 'n' },
    { 
      id: 'v_travel', ru: 'Путешествовать', noDeclension: true,
      conjugation: {
        presentFuture: ['путеше́ствую', 'путеше́ствуешь', 'путеше́ствует', 'путеше́ствуем', 'путеше́ствуете', 'путеше́ствуют'],
        past: ['путеше́ствовал', 'путеше́ствовала', 'путеше́ствовало', 'путеше́ствовали']
      }
    },
    { 
      id: 'v_fly', ru: 'Летать', noDeclension: true,
      conjugation: {
        presentFuture: ['лета́ю', 'лета́ешь', 'лета́ет', 'лета́ем', 'лета́ете', 'лета́ют'],
        past: ['лета́л', 'лета́ла', 'лета́ло', 'лета́ли']
      }
    },
    { 
      id: 'v_arrive', ru: 'Приезжать', noDeclension: true,
      conjugation: {
        presentFuture: ['приезжа́ю', 'приезжа́ешь', 'приезжа́ет', 'приезжа́ем', 'приезжа́ете', 'приезжа́ют'],
        past: ['приезжа́л', 'приезжа́ла', 'приезжа́ло', 'приезжа́ли']
      }
    },
    { 
      id: 'v_depart', ru: 'Уезжать', noDeclension: true,
      conjugation: {
        presentFuture: ['уезжа́ю', 'уезжа́ешь', 'уезжа́ет', 'уезжа́ем', 'уезжа́ете', 'уезжа́ют'],
        past: ['уезжа́л', 'уезжа́ла', 'уезжа́ло', 'уезжа́ли']
      }
    },
    { 
      id: 'v_book', ru: 'Бронировать', noDeclension: true,
      conjugation: {
        presentFuture: ['брони́рую', 'брони́руешь', 'брони́рует', 'брони́руем', 'брони́руете', 'брони́руют'],
        past: ['брони́ровал', 'брони́ровала', 'брони́ровало', 'брони́ровали']
      }
    }
  ],
  education: [
    { id: 'school', ru: 'Школа', gender: 'f' },
    { id: 'university', ru: 'Университет', gender: 'm' },
    { id: 'student', ru: 'Студент', gender: 'm', animate: true },
    { id: 'teacher', ru: 'Учитель', gender: 'm', animate: true },
    { id: 'professor', ru: 'Преподаватель', gender: 'm', animate: true },
    { id: 'book', ru: 'Книга', gender: 'f' },
    { id: 'textbook', ru: 'Учебник', gender: 'm' },
    { id: 'notebook', ru: 'Тетрадь', gender: 'f' },
    { id: 'pen', ru: 'Ручка', gender: 'f' },
    { id: 'exam', ru: 'Экзамен', gender: 'm' },
    { id: 'lesson', ru: 'Урок', gender: 'm' },
    { id: 'homework', ru: 'Домашнее задание', noDeclension: true },
    { id: 'grade', ru: 'Оценка', gender: 'f' },
    { id: 'library', ru: 'Библиотека', gender: 'f' },
    { 
      id: 'v_read', ru: 'Читать', noDeclension: true,
      conjugation: {
        presentFuture: ['чита́ю', 'чита́ешь', 'чита́ет', 'чита́ем', 'чита́ете', 'чита́ют'],
        past: ['чита́л', 'чита́ла', 'чита́ло', 'чита́ли']
      }
    },
    { 
      id: 'v_write', ru: 'Писать', noDeclension: true,
      conjugation: {
        presentFuture: ['пишу́', 'пи́шешь', 'пи́шет', 'пи́шем', 'пи́шете', 'пи́шут'],
        past: ['писа́л', 'писа́ла', 'писа́ло', 'писа́ли']
      }
    },
    { 
      id: 'v_listen', ru: 'Слушать', noDeclension: true,
      conjugation: {
        presentFuture: ['слу́шаю', 'слу́шаешь', 'слу́шает', 'слу́шаем', 'слу́шаете', 'слу́шают'],
        past: ['слу́шал', 'слу́шала', 'слу́шало', 'слу́шали']
      }
    },
    { 
      id: 'v_understand', ru: 'Понимать', noDeclension: true,
      conjugation: {
        presentFuture: ['понима́ю', 'понима́ешь', 'понима́ет', 'понима́ем', 'понима́ете', 'понима́ют'],
        past: ['понима́л', 'понима́ла', 'понима́ло', 'понима́ли']
      }
    },
    { 
      id: 'v_ask', ru: 'Спрашивать', noDeclension: true,
      conjugation: {
        presentFuture: ['спра́шиваю', 'спра́шиваешь', 'спра́шивает', 'спра́шиваем', 'спра́шиваете', 'спра́шивают'],
        past: ['спра́шивал', 'спра́шивала', 'спра́шивало', 'спра́шивали']
      }
    }
  ],
  body: [
    { id: 'body', ru: 'Тело', gender: 'n' },
    { id: 'head', ru: 'Голова', gender: 'f' },
    { id: 'face', ru: 'Лицо', gender: 'n' },
    { id: 'eye', ru: 'Глаз', gender: 'm' },
    { id: 'eyes', ru: 'Глаза', gender: 'm', baseRu: 'Глаз' },
    { id: 'nose', ru: 'Нос', gender: 'm' },
    { id: 'mouth', ru: 'Рот', gender: 'm', special: 'fleeting_vowel' },
    { id: 'ear', ru: 'Ухо', gender: 'n' },
    { id: 'ears', ru: 'Уши', gender: 'n', baseRu: 'Ухо' },
    { id: 'hair', ru: 'Волосы', gender: 'm', baseRu: 'Волос' },
    { id: 'arm_hand', ru: 'Рука', gender: 'f' },
    { id: 'leg_foot', ru: 'Нога', gender: 'f' },
    { id: 'finger', ru: 'Палец', gender: 'm', special: 'fleeting_vowel' },
    { id: 'stomach', ru: 'Живот', gender: 'm' },
    { id: 'heart', ru: 'Сердце', gender: 'n' },
    { id: 'back', ru: 'Спина', gender: 'f' },
    { 
      id: 'v_see', ru: 'Видеть', noDeclension: true,
      conjugation: {
        presentFuture: ['ви́жу', 'ви́дишь', 'ви́дит', 'ви́дим', 'ви́дите', 'ви́дят'],
        past: ['ви́дел', 'ви́дела', 'ви́дело', 'ви́дели']
      }
    },
    { 
      id: 'v_hear', ru: 'Слышать', noDeclension: true,
      conjugation: {
        presentFuture: ['слы́шу', 'слы́шишь', 'слы́шит', 'слы́шим', 'слы́шите', 'слы́шат'],
        past: ['слы́шал', 'слы́шала', 'слы́шало', 'слы́шали']
      }
    },
    { 
      id: 'v_breathe', ru: 'Дышать', noDeclension: true,
      conjugation: {
        presentFuture: ['дышу́', 'ды́шишь', 'ды́шит', 'ды́шим', 'ды́шите', 'ды́шат'],
        past: ['дыша́л', 'дыша́ла', 'дыша́ло', 'дыша́ли']
      }
    },
    { 
      id: 'v_touch', ru: 'Трогать', noDeclension: true,
      conjugation: {
        presentFuture: ['тро́гаю', 'тро́гаешь', 'тро́гает', 'тро́гаем', 'тро́гаете', 'тро́гают'],
        past: ['тро́гал', 'тро́гала', 'тро́гало', 'тро́гали']
      }
    }
  ],
  nature: [
    { id: 'nature', ru: 'Природа', gender: 'f' },
    { id: 'sun', ru: 'Солнце', gender: 'n' },
    { id: 'moon', ru: 'Луна', gender: 'f' },
    { id: 'sky', ru: 'Небо', gender: 'n' },
    { id: 'star', ru: 'Звезда', gender: 'f' },
    { id: 'cloud', ru: 'Облако', gender: 'n' },
    { id: 'rain', ru: 'Дождь', gender: 'm' },
    { id: 'snow', ru: 'Снег', gender: 'm' },
    { id: 'wind', ru: 'Ветер', gender: 'm' },
    { id: 'tree', ru: 'Дерево', gender: 'n' },
    { id: 'flower', ru: 'Цветок', gender: 'm', special: 'fleeting_vowel' },
    { id: 'forest', ru: 'Лес', gender: 'm' },
    { id: 'river', ru: 'Река', gender: 'f' },
    { id: 'sea', ru: 'Море', gender: 'n' },
    { id: 'mountain', ru: 'Гора', gender: 'f' },
    { 
      id: 'v_grow', ru: 'Расти', noDeclension: true,
      conjugation: {
        presentFuture: ['расту́', 'растёшь', 'растёт', 'растём', 'растёте', 'расту́т'],
        past: ['рос', 'росла́', 'росло́', 'росли́']
      }
    },
    { 
      id: 'v_shine', ru: 'Светить', noDeclension: true,
      conjugation: {
        presentFuture: ['свечу́', 'све́тишь', 'све́тит', 'све́тим', 'све́тите', 'све́тят'],
        past: ['свети́л', 'свети́ла', 'свети́ло', 'свети́ли']
      }
    },
    { 
      id: 'v_bloom', ru: 'Цвести', noDeclension: true,
      conjugation: {
        presentFuture: ['цвету́', 'цветёшь', 'цветёт', 'цветём', 'цветёте', 'цвету́т'],
        past: ['цвёл', 'цвела́', 'цвело́', 'цвели́']
      }
    }
  ],
  celebrations: [
    { id: 'holiday', ru: 'Праздник', gender: 'm' },
    { id: 'birthday', ru: 'День рождения', noDeclension: true },
    { id: 'new_year', ru: 'Новый год', noDeclension: true },
    { id: 'christmas', ru: 'Рождество', gender: 'n' },
    { id: 'easter', ru: 'Пасха', gender: 'f' },
    { id: 'gift', ru: 'Подарок', gender: 'm', special: 'fleeting_vowel' },
    { id: 'party', ru: 'Вечеринка', gender: 'f' },
    { id: 'guest', ru: 'Гость', gender: 'm', animate: true },
    { id: 'cake', ru: 'Торт', gender: 'm' },
    { id: 'flowers', ru: 'Цветы', gender: 'm', baseRu: 'Цветок', special: 'fleeting_vowel' },
    { id: 'card', ru: 'Открытка', gender: 'f' },
    { id: 'congratulations', ru: 'Поздравляю', noDeclension: true },
    { id: 'cheers', ru: 'За здоровье', noDeclension: true },
    { 
      id: 'v_celebrate', ru: 'Праздновать', noDeclension: true,
      conjugation: {
        presentFuture: ['пра́здную', 'пра́зднуешь', 'пра́зднует', 'пра́зднуем', 'пра́зднуете', 'пра́зднуют'],
        past: ['пра́здновал', 'пра́здновала', 'пра́здновало', 'пра́здновали']
      }
    },
    { 
      id: 'v_congratulate', ru: 'Поздравлять', noDeclension: true,
      conjugation: {
        presentFuture: ['поздравля́ю', 'поздравля́ешь', 'поздравля́ет', 'поздравля́ем', 'поздравля́ете', 'поздравля́ют'],
        past: ['поздравля́л', 'поздравля́ла', 'поздравля́ло', 'поздравля́ли']
      }
    },
    { 
      id: 'v_wish', ru: 'Желать', noDeclension: true,
      conjugation: {
        presentFuture: ['жела́ю', 'жела́ешь', 'жела́ет', 'жела́ем', 'жела́ете', 'жела́ют'],
        past: ['жела́л', 'жела́ла', 'жела́ло', 'жела́ли']
      }
    },
    { 
      id: 'v_give_gift', ru: 'Дарить', noDeclension: true,
      conjugation: {
        presentFuture: ['дарю́', 'да́ришь', 'да́рит', 'да́рим', 'да́рите', 'да́рят'],
        past: ['дари́л', 'дари́ла', 'дари́ло', 'дари́ли']
      }
    },
    { 
      id: 'v_invite', ru: 'Приглашать', noDeclension: true,
      conjugation: {
        presentFuture: ['приглаша́ю', 'приглаша́ешь', 'приглаша́ет', 'приглаша́ем', 'приглаша́ете', 'приглаша́ют'],
        past: ['приглаша́л', 'приглаша́ла', 'приглаша́ло', 'приглаша́ли']
      }
    }
  ]
};
