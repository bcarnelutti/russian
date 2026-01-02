export interface VocabItem {
  id: string;
  ru: string;
  baseRu?: string; // Singular form if 'ru' is plural
  gender?: 'm' | 'f' | 'n' | 'pl';
  animate?: boolean;
  indeclinable?: boolean;
  noDeclension?: boolean;
  special?: 'fleeting_vowel' | 'irregular_pl';
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
    { id: 'v_wear', ru: 'Носить', noDeclension: true },
    { id: 'v_buy', ru: 'Покупать', noDeclension: true },
    { id: 'v_try_on', ru: 'Мерить', noDeclension: true },
    { id: 'v_wash', ru: 'Стирать', noDeclension: true }
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
    // Verbs
    { id: 'v_treat', ru: 'Лечить', noDeclension: true },
    { id: 'v_hurt', ru: 'Болеть', noDeclension: true },
    { id: 'v_recover', ru: 'Выздоравливать', noDeclension: true },
    { id: 'v_call_doc', ru: 'Вызывать', noDeclension: true }
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
    // Verbs
    { id: 'v_travel', ru: 'Путешествовать', noDeclension: true },
    { id: 'v_fly', ru: 'Летать', noDeclension: true },
    { id: 'v_arrive', ru: 'Приезжать', noDeclension: true },
    { id: 'v_depart', ru: 'Уезжать', noDeclension: true },
    { id: 'v_book', ru: 'Бронировать', noDeclension: true }
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
    // Verbs
    { id: 'v_read', ru: 'Читать', noDeclension: true },
    { id: 'v_write', ru: 'Писать', noDeclension: true },
    { id: 'v_listen', ru: 'Слушать', noDeclension: true },
    { id: 'v_understand', ru: 'Понимать', noDeclension: true },
    { id: 'v_ask', ru: 'Спрашивать', noDeclension: true }
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
    // Verbs
    { id: 'v_see', ru: 'Видеть', noDeclension: true },
    { id: 'v_hear', ru: 'Слышать', noDeclension: true },
    { id: 'v_breathe', ru: 'Дышать', noDeclension: true },
    { id: 'v_touch', ru: 'Трогать', noDeclension: true }
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
    // Verbs
    { id: 'v_grow', ru: 'Расти', noDeclension: true },
    { id: 'v_shine', ru: 'Светить', noDeclension: true },
    { id: 'v_bloom', ru: 'Цвести', noDeclension: true }
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
    // Verbs
    { id: 'v_celebrate', ru: 'Праздновать', noDeclension: true },
    { id: 'v_congratulate', ru: 'Поздравлять', noDeclension: true },
    { id: 'v_wish', ru: 'Желать', noDeclension: true },
    { id: 'v_give_gift', ru: 'Дарить', noDeclension: true },
    { id: 'v_invite', ru: 'Приглашать', noDeclension: true }
  ]
};