export interface VerbConjugation {
  presentFuture: string[];
  past: string[];
}

export interface AspectPair {
  imp: string;
  perf: string;
  impConjugation: VerbConjugation;
  perfConjugation: VerbConjugation;
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
  conjugation?: VerbConjugation; // For single aspect verbs
  aspects?: AspectPair; // For aspect pairs
}

export const vocabularyData: Record<string, VocabItem[]> = {
  clothing: [
    { id: 'shirt', ru: 'Руба́шка', gender: 'f' },
    { id: 'tshirt', ru: 'Футбо́лка', gender: 'f' },
    { id: 'pants', ru: 'Брю́ки', gender: 'pl' },
    { id: 'jeans', ru: 'Джи́нсы', gender: 'pl' },
    { id: 'dress', ru: 'Пла́тье', gender: 'n' },
    { id: 'skirt', ru: 'Ю́бка', gender: 'f' },
    { id: 'sweater', ru: 'Сви́тер', gender: 'm' },
    { id: 'jacket', ru: 'Ку́ртка', gender: 'f' },
    { id: 'coat', ru: 'Пальто́', gender: 'n', indeclinable: true },
    { id: 'shoes', ru: 'О́бувь', gender: 'f' },
    { id: 'boots', ru: 'Боти́нки', gender: 'm', baseRu: 'Боти́нок', special: 'fleeting_vowel' },
    { id: 'sneakers', ru: 'Кроссо́вки', gender: 'f', baseRu: 'Кроссо́вка' },
    { id: 'hat', ru: 'Ша́пка', gender: 'f' },
    { id: 'scarf', ru: 'Шарф', gender: 'm' },
    { id: 'gloves', ru: 'Перча́тки', gender: 'f', baseRu: 'Перча́тка' },
    { id: 'socks', ru: 'Носки́', gender: 'm', baseRu: 'Носо́к', special: 'fleeting_vowel' },
    { 
      id: 'v_wear', ru: 'Носи́ть', noDeclension: true,
      conjugation: {
        presentFuture: ['ношу́', 'но́сишь', 'но́сит', 'но́сим', 'но́сите', 'но́сят'],
        past: ['носи́л', 'носи́ла', 'носи́ло', 'носи́ли']
      }
    },
    { 
      id: 'v_buy', ru: 'Покупа́ть / Купи́ть', noDeclension: true,
      aspects: {
        imp: 'Покупа́ть', perf: 'Купи́ть',
        impConjugation: {
          presentFuture: ['покупа́ю', 'покупа́ешь', 'покупа́ет', 'покупа́ем', 'покупа́ете', 'покупа́ют'],
          past: ['покупа́л', 'покупа́ла', 'покупа́ло', 'покупа́ли']
        },
        perfConjugation: {
          presentFuture: ['куплю́', 'ку́пишь', 'ку́пит', 'ку́пим', 'ку́пите', 'ку́пят'],
          past: ['купи́л', 'купи́ла', 'купи́ло', 'купи́ли']
        }
      }
    },
    { 
      id: 'v_try_on', ru: 'Ме́рить / Поме́рить', noDeclension: true,
      aspects: {
        imp: 'Ме́рить', perf: 'Поме́рить',
        impConjugation: {
          presentFuture: ['ме́рю', 'ме́ришь', 'méрит', 'ме́рим', 'ме́рите', 'ме́рят'],
          past: ['ме́рил', 'ме́рила', 'ме́рило', 'ме́рили']
        },
        perfConjugation: {
          presentFuture: ['поме́рю', 'поме́ришь', 'поме́рит', 'поме́рим', 'поме́рите', 'поме́рят'],
          past: ['поме́рил', 'поме́рила', 'поме́рило', 'поме́рили']
        }
      }
    },
    { 
      id: 'v_wash', ru: 'Стира́ть / Постира́ть', noDeclension: true,
      aspects: {
        imp: 'Стира́ть', perf: 'Постира́ть',
        impConjugation: {
          presentFuture: ['стира́ю', 'стира́ешь', 'стира́ет', 'стира́ем', 'стира́ете', 'стира́ют'],
          past: ['стира́л', 'стира́ла', 'стира́ло', 'стира́ли']
        },
        perfConjugation: {
          presentFuture: ['постира́ю', 'постира́ешь', 'постира́ет', 'постира́ем', 'постира́ете', 'постира́ют'],
          past: ['постира́л', 'постира́ла', 'постира́ло', 'постира́ли']
        }
      }
    },
    { id: 'fashion', ru: 'Мо́да', gender: 'f' },
    { id: 'suit', ru: 'Костю́м', gender: 'm' },
    { id: 'blazer', ru: 'Пиджа́к', gender: 'm' },
    { id: 'cardigan', ru: 'Ко́фта', gender: 'f' },
    { id: 'hoodie', ru: 'Толсто́вка', gender: 'f' },
    { id: 'sweatpants', ru: 'Тре́ники', gender: 'pl' },
    { id: 'hat_brim', ru: 'Шля́па', gender: 'f' },
    { id: 'shorts', ru: 'Шо́рты', gender: 'pl' },
    { id: 'blouse', ru: 'Блу́зка', gender: 'f' },
    { id: 'raincoat', ru: 'Пла́щ', gender: 'm' },
    { id: 'fur_coat', ru: 'Шу́ба', gender: 'f' },
    { id: 'tights', ru: 'Колго́тки', gender: 'pl' },
    { id: 'underpants', ru: 'Трусы́', gender: 'pl' },
    { id: 'tie', ru: 'Га́лстук', gender: 'm' },
    { id: 'swimsuit', ru: 'Купа́льник', gender: 'm' },
    { id: 'pyjamas', ru: 'Пижа́ма', gender: 'f' },
    { id: 'pumps', ru: 'Ту́фли', gender: 'pl' },
    { id: 'sandals', ru: 'Босоно́жки', gender: 'pl' },
    { id: 'boots_high', ru: 'Сапоги́', gender: 'pl' },
    { id: 'moccasins', ru: 'Мокаси́ны', gender: 'pl' },
    { id: 'slippers_colloq', ru: 'Та́пки', gender: 'pl' },
    { id: 'eyelet', ru: 'Глазо́к', gender: 'm' },
    { id: 'sole', ru: 'Подо́шва', gender: 'f' },
    { id: 'heel_part', ru: 'Каблу́к', gender: 'm' },
    { id: 'glasses', ru: 'Очки́', gender: 'pl' },
    { id: 'briefcase', ru: 'Портфе́ль', gender: 'm' },
    { id: 'backpack', ru: 'Рюкза́к', gender: 'm' },
    { id: 'bag', ru: 'Су́мка', gender: 'f' },
    { id: 'v_put_on', ru: 'Надева́ть / Наде́ть', noDeclension: true,
      aspects: {
        imp: 'Надева́ть', perf: 'Наде́ть',
        impConjugation: { presentFuture: ['надева́ю', 'надева́ешь', 'надева́ет', 'надева́ем', 'надева́ете', 'надева́ют'], past: ['надева́л', 'надева́ла', 'надева́ло', 'надева́ли'] },
        perfConjugation: { presentFuture: ['наде́ну', 'наде́нешь', 'наде́нет', 'наде́нем', 'наде́нете', 'наде́нут'], past: ['наде́л', 'наде́ла', 'наде́ло', 'наде́ли'] }
      }
    },
    { id: 'v_dress_someone', ru: 'Одева́ть / Оде́ть', noDeclension: true,
      aspects: {
        imp: 'Одева́ть', perf: 'Оде́ть',
        impConjugation: { presentFuture: ['одева́ю', 'одева́ешь', 'одева́ет', 'одева́ем', 'одева́ете', 'одева́ют'], past: ['одева́л', 'одева́ла', 'одева́ло', 'одева́ли'] },
        perfConjugation: { presentFuture: ['оде́ну', 'оде́нешь', 'оде́нет', 'оде́нем', 'оде́нете', 'оде́нут'], past: ['оде́л', 'оде́ла', 'оде́ло', 'оде́ли'] }
      }
    },
    { id: 'v_dress_self', ru: 'Одева́ться / Оде́ться', noDeclension: true,
      aspects: {
        imp: 'Одева́ться', perf: 'Оде́ться',
        impConjugation: { presentFuture: ['одева́юсь', 'одева́ешься', 'одева́ется', 'одева́емся', 'одева́етесь', 'одева́ются'], past: ['одева́лся', 'одева́лась', 'одева́лось', 'одева́лись'] },
        perfConjugation: { presentFuture: ['оде́нусь', 'оде́нешься', 'оде́нется', 'оде́немся', 'оде́нетесь', 'оде́нутся'], past: ['оде́лся', 'оде́лась', 'оде́лось', 'оде́ли'] }
      }
    },
    { id: 'v_take_off_shoes', ru: 'Разува́ться / Разу́ться', noDeclension: true,
      aspects: {
        imp: 'Разува́ться', perf: 'Разу́ться',
        impConjugation: { presentFuture: ['разува́юсь', 'разува́ешься', 'разува́ется', 'разува́емся', 'разува́етесь', 'разува́ются'], past: ['разува́лся', 'разува́лась', 'разува́лось', 'разува́лись'] },
        perfConjugation: { presentFuture: ['разу́юсь', 'разу́ешься', 'разу́ется', 'разу́емся', 'разу́етесь', 'разу́ются'], past: ['разу́лся', 'разу́лась', 'разу́лось', 'разу́лись'] }
      }
    },
    { id: 'v_take_off', ru: 'Снима́ть / Снять', noDeclension: true,
      aspects: {
        imp: 'Снима́ть', perf: 'Снять',
        impConjugation: { presentFuture: ['снима́ю', 'снима́ешь', 'снима́ет', 'снима́ем', 'снима́ете', 'снима́ют'], past: ['снима́л', 'снима́ла', 'снима́ло', 'снима́ли'] },
        perfConjugation: { presentFuture: ['сниму́', 'сни́мешь', 'сни́мет', 'сни́мем', 'сни́мете', 'сни́мут'], past: ['снял', 'сняла́', 'сняло́', 'сняли́'] }
      }
    },
    { id: 'modern', ru: 'Совреме́нный', noDeclension: true },
    { id: 'fashionable', ru: 'Мо́дный', noDeclension: true },
    { id: 'old_fashioned', ru: 'Старомо́дный', noDeclension: true },
    { id: 'business_style', ru: 'Делово́й', noDeclension: true },
    { id: 'sporty_style', ru: 'Спорти́вный', noDeclension: true },
    { id: 'evening_style', ru: 'Вече́рний', noDeclension: true },
    { id: 'classic', ru: 'Класси́ческий', noDeclension: true },
    { id: 'comfortable', ru: 'Удо́бный', noDeclension: true },
    { id: 'expensive', ru: 'Дорого́й', noDeclension: true },
    { id: 'cheap', ru: 'Дешёвый', noDeclension: true },
    { id: 'fashionably', ru: 'Мо́дно', noDeclension: true },
    { id: 'stylishly', ru: 'Сти́льно', noDeclension: true },
    { id: 'elegant', ru: 'Элега́нтный', noDeclension: true },
    { id: 'winter_adj', ru: 'Зи́мний', noDeclension: true },
    { id: 'warm', ru: 'Тёплый', noDeclension: true },
    { id: 'beautiful', ru: 'Краси́вый', noDeclension: true },
    { id: 'comfortably', ru: 'Удо́бно', noDeclension: true }
  ],
    health: [
      { id: 'doctor', ru: 'Врач', gender: 'm', animate: true },
      { id: 'hospital', ru: 'Больни́ца', gender: 'f' },
      { id: 'pharmacy', ru: 'Апте́ка', gender: 'f' },
      { id: 'medicine', ru: 'Лека́рство', gender: 'n' },
      { id: 'pain', ru: 'Боль', gender: 'f' },
      { id: 'temperature', ru: 'Температу́ра', gender: 'f' },
      { id: 'fever', ru: 'Жар', gender: 'm' },
      { id: 'cold', ru: 'Просту́да', gender: 'f' },
      { id: 'cough', ru: 'Ка́шель', gender: 'm' },
      { id: 'headache', ru: 'Головна́я боль', noDeclension: true },
      { id: 'ambulance', ru: 'Ско́рая по́мощь', noDeclension: true },
      { id: 'help_me', ru: 'Помоги́те мне', noDeclension: true },
      { id: 'i_feel_bad', ru: 'Я пло́хо себя́ чу́вствую', noDeclension: true },
      { 
        id: 'v_treat', ru: 'Лечи́ть / Вы́лечить', noDeclension: true,
        aspects: {
          imp: 'Лечи́ть', perf: 'Вы́лечить',
          impConjugation: {
            presentFuture: ['лечу́', 'ле́чишь', 'ле́чит', 'ле́чим', 'ле́чите', 'ле́чат'],
            past: ['лечи́л', 'лечи́ла', 'лечи́ло', 'лечи́ли']
          },
          perfConjugation: {
            presentFuture: ['вы́лечу', 'вы́лечишь', 'вы́лечит', 'вы́лечим', 'вы́лечите', 'вы́лечат'],
            past: ['вы́лечил', 'вы́лечила', 'вы́лечило', 'вы́лечили']
          }
        }
      },
      { 
        id: 'v_hurt', ru: 'Боле́ть / Заболе́ть', noDeclension: true,
        aspects: {
          imp: 'Боле́ть', perf: 'Заболе́ть',
          impConjugation: {
            presentFuture: ['боле́ю', 'боле́ешь', 'боле́ет', 'боле́ем', 'боле́ете', 'боле́ют'],
            past: ['боле́л', 'боле́ла', 'боле́ло', 'боле́ли']
          },
          perfConjugation: {
            presentFuture: ['заболе́ю', 'заболе́ешь', 'заболе́ет', 'заболе́ем', 'заболе́ете', 'заболе́ют'],
            past: ['заболе́л', 'заболе́ла', 'заболе́ло', 'заболе́ли']
          }
        }
      },
      { 
        id: 'v_recover', ru: 'Выздора́вливать / Вы́здороветь', noDeclension: true,
        aspects: {
          imp: 'Выздора́вливать', perf: 'Вы́здороветь',
          impConjugation: {
            presentFuture: ['выздора́вливаю', 'выздора́вливаешь', 'выздора́вливает', 'выздора́вливаем', 'выздора́вливаете', 'выздора́вливают'],
            past: ['выздора́вливал', 'выздора́вливала', 'выздора́вливало', 'выздора́вливали']
          },
          perfConjugation: {
            presentFuture: ['вы́здоровею', 'вы́здоровеешь', 'вы́здоровеет', 'вы́здоровеем', 'вы́здоровеете', 'вы́здоровеют'],
            past: ['вы́здоровел', 'вы́здоровела', 'вы́здоровело', 'вы́здоровели']
          }
        }
      },
          {
            id: 'v_call_doc', ru: 'Вызыва́ть / Вы́звать', noDeclension: true,
            aspects: {
              imp: 'Вызыва́ть', perf: 'Вы́звать',
              impConjugation: {
                presentFuture: ['вызыва́ю', 'вызыва́ешь', 'вызыва́ет', 'вызыва́ем', 'вызыва́ете', 'вызыва́ют'],
                past: ['вызыва́л', 'вызыва́ла', 'вызыва́ло', 'вызыва́ли']
              },
              perfConjugation: {
                presentFuture: ['вы́зову', 'вы́зовешь', 'вы́зовет', 'вы́зовем', 'вы́зовете', 'вы́зовут'],
                past: ['вы́звал', 'вы́звала', 'вы́звало', 'вы́звали']
              }
            }
          },
          // Illnesses
          { id: 'flu', ru: 'Грипп', gender: 'm' },
          { id: 'runny_nose', ru: 'На́сморк', gender: 'm' },
          { id: 'sore_throat', ru: 'Анги́на', gender: 'f' },
          { id: 'allergy', ru: 'Аллерги́я', gender: 'f' },
          { id: 'poisoning', ru: 'Отравле́ние', gender: 'n' },
          { id: 'diarrhea', ru: 'Диаре́я', gender: 'f' },
          { id: 'migraine', ru: 'Мигре́нь', gender: 'f' },
          { id: 'stroke', ru: 'Инсу́льт', gender: 'm' },
          { id: 'epilepsy', ru: 'Эпиле́псия', gender: 'f' },
          { id: 'diabetes', ru: 'Диабе́т', gender: 'm' },
          { id: 'eczema', ru: 'Экзе́ма', gender: 'f' },
          { id: 'measles', ru: 'Корь', gender: 'f' },
          { id: 'infection', ru: 'Инфе́кция', gender: 'f' },
          { id: 'virus', ru: 'Ви́рус', gender: 'm' },
          { id: 'stomach_ache', ru: 'Боль в желу́дке', gender: 'f' },
          // Symptoms / State
          { id: 'how_are_you_feeling', ru: 'Как вы себя́ чу́вствуете?', noDeclension: true },
          { id: 'feel_good', ru: 'Чу́вствовать себя́ хорошо́', noDeclension: true },
          { id: 'feel_bad', ru: 'Чу́вствовать себя́ пло́хо', noDeclension: true },
          { id: 'better', ru: 'Лу́чше', noDeclension: true },
          { id: 'worse', ru: 'Ху́же', noDeclension: true },
          { id: 'sneezing', ru: 'Чиха́нье', gender: 'n' },
          { id: 'snot', ru: 'Со́пли', gender: 'pl' },
          { id: 'throat', ru: 'Го́рло', gender: 'n' },
          { id: 'tooth', ru: 'Зуб', gender: 'm', special: 'irregular_pl' },
          { id: 'v_sneeze', ru: 'Чиха́ть / Чихну́ть', noDeclension: true,
            aspects: {
              imp: 'Чиха́ть', perf: 'Чихну́ть',
              impConjugation: { presentFuture: ['чиха́ю', 'чиха́ешь', 'чиха́ет', 'чиха́ем', 'чиха́ете', 'чиха́ют'], past: ['чиха́л', 'чиха́ла', 'чиха́ло', 'чиха́ли'] },
              perfConjugation: { presentFuture: ['чихну́', 'чихнёшь', 'чихнёт', 'чихнём', 'чихнёте', 'чихну́т'], past: ['чихну́л', 'чихну́ла', 'чихну́ло', 'чихну́ли'] }
            }
          },
          { id: 'v_cough', ru: 'Ка́шлять / Кашляну́ть', noDeclension: true,
            aspects: {
              imp: 'Ка́шлять', perf: 'Кашляну́ть',
              impConjugation: { presentFuture: ['ка́шляю', 'ка́шляешь', 'ка́шляет', 'ка́шляем', 'ка́шляете', 'ка́шляют'], past: ['ка́шлял', 'ка́шляла', 'ка́шляло', 'ка́шляли'] },
              perfConjugation: { presentFuture: ['кашляну́', 'кашлянёшь', 'кашлянёт', 'кашлянём', 'кашлянёте', 'кашляну́т'], past: ['кашляну́л', 'кашляну́ла', 'кашляну́ло', 'кашляну́ли'] }
            }
          },
          { id: 'v_blow_nose', ru: 'Сморка́ться / Вы́сморкаться', noDeclension: true,
            aspects: {
              imp: 'Сморка́ться', perf: 'Вы́сморкаться',
              impConjugation: { presentFuture: ['сморка́юсь', 'сморка́ешься', 'сморка́ется', 'сморка́емся', 'сморка́етесь', 'сморка́ются'], past: ['сморка́лся', 'сморка́лась', 'сморка́лось', 'сморка́лись'] },
              perfConjugation: { presentFuture: ['вы́сморкаюсь', 'вы́сморкаешься', 'вы́сморкается', 'вы́сморкаемся', 'вы́сморкаетесь', 'вы́сморкаются'], past: ['вы́сморкался', 'вы́сморкалась', 'вы́сморкалось', 'вы́сморкались'] }
            }
          },
          { id: 'v_vomit', ru: 'Страда́ть рво́той', noDeclension: true },
          { id: 'v_faint', ru: 'Потеря́ть созна́ние', noDeclension: true },
          { id: 'v_infect', ru: 'Заража́ть / Зарази́ть', noDeclension: true,
            aspects: {
              imp: 'Заража́ть', perf: 'Зарази́ть',
              impConjugation: { presentFuture: ['заража́ю', 'заража́ешь', 'заража́ет', 'заража́ем', 'заража́ете', 'заража́ют'], past: ['заража́л', 'заража́ла', 'заража́ло', 'заража́ли'] },
              perfConjugation: { presentFuture: ['заражу́', 'зарази́шь', 'зарази́т', 'зарази́м', 'зарази́те', 'заразя́т'], past: ['зарази́л', 'зарази́ла', 'зарази́ло', 'зарази́ли'] }
            }
          },
          // Remedies
          { id: 'take_medicine', ru: 'Пить лека́рства', noDeclension: true },
          { id: 'drops', ru: 'Ка́пли', gender: 'pl' },
          { id: 'pills', ru: 'Табле́тки', gender: 'pl' },
          { id: 'balm', ru: 'Бальза́м', gender: 'm' },
          { id: 'powder', ru: 'Порошо́к', gender: 'm', special: 'fleeting_vowel' },
          { id: 'lozenges', ru: 'Леденцы́', gender: 'pl' },
          { id: 'plaster', ru: 'Пла́стырь', gender: 'm' },
          { id: 'syrup', ru: 'Сиро́п', gender: 'm' },
          // Doctor related
          { id: 'to_doctor', ru: 'К врачу́', noDeclension: true },
          { id: 'call_doctor_context', ru: 'Позвони́ть врачу́', noDeclension: true },
          // Proverbs
          { id: 'get_well', ru: 'Выздора́вливай!', noDeclension: true },
          { id: 'get_better', ru: 'Поправля́йся!', noDeclension: true },
          { id: 'health', ru: 'Здоро́вье', gender: 'n' },
          { id: 'be_healthy', ru: 'Быть здоро́вым', noDeclension: true },
          { id: 'cleanliness_health', ru: 'Чистота́ — зало́г здоро́вья', noDeclension: true },
          { id: 'sleep_medicine', ru: 'Сон — лу́чшее лека́рство', noDeclension: true }
    ],  travel: [
    { id: 'ticket', ru: 'Биле́т', gender: 'm' },
    { id: 'passport', ru: 'Па́спорт', gender: 'm' },
    { id: 'luggage', ru: 'Бага́ж', gender: 'm' },
    { id: 'suitcase', ru: 'Чемода́н', gender: 'm' },
    { id: 'train', ru: 'По́езд', gender: 'm' },
    { id: 'plane', ru: 'Самолёт', gender: 'm' },
    { id: 'station', ru: 'Вокза́л', gender: 'm' },
    { id: 'airport', ru: 'Аэропо́рт', gender: 'm' },
    { id: 'platform', ru: 'Платфо́рма', gender: 'f' },
    { id: 'gate', ru: 'Вы́ход на поса́дку', noDeclension: true },
    { id: 'departure', ru: 'Отправле́ние', gender: 'n' },
    { id: 'arrival', ru: 'Прибы́тие', gender: 'n' },
    { id: 'customs', ru: 'Тамо́жня', gender: 'f' },
    { id: 'visa', ru: 'Ви́за', gender: 'f' },
    { id: 'seat', ru: 'Ме́сто', gender: 'n' },
    { 
      id: 'v_travel', ru: 'Путеше́ствовать', noDeclension: true,
      conjugation: {
        presentFuture: ['путеше́ствую', 'путеше́ствуешь', 'путеше́ствует', 'путеше́ствуем', 'путеше́ствуете', 'путеше́ствуют'],
        past: ['путеше́ствовал', 'путеше́ствовала', 'путеше́ствовало', 'путеше́ствовали']
      }
    },
    { 
      id: 'v_fly', ru: 'Лета́ть', noDeclension: true,
      conjugation: {
        presentFuture: ['лета́ю', 'лета́ешь', 'лета́ет', 'лета́ем', 'лета́ете', 'лета́ют'],
        past: ['лета́л', 'лета́ла', 'лета́ло', 'лета́ли']
      }
    },
    { 
      id: 'v_arrive', ru: 'Приезжа́ть / Прие́хать', noDeclension: true,
      aspects: {
        imp: 'Приезжа́ть', perf: 'Прие́хать',
        impConjugation: {
          presentFuture: ['приезжа́ю', 'приезжа́ешь', 'приезжа́ет', 'приезжа́ем', 'приезжа́ете', 'приезжа́ют'],
          past: ['приезжа́л', 'приезжа́ла', 'приезжа́ло', 'приезжа́ли']
        },
        perfConjugation: {
          presentFuture: ['прие́ду', 'прие́дешь', 'прие́дет', 'прие́дем', 'прие́дете', 'прие́дут'],
          past: ['прие́хал', 'прие́хала', 'прие́хало', 'прие́хали']
        }
      }
    },
    { 
      id: 'v_depart', ru: 'Уезжа́ть / Уе́хать', noDeclension: true,
      aspects: {
        imp: 'Уезжа́ть', perf: 'Уе́хать',
        impConjugation: {
          presentFuture: ['уезжа́ю', 'уезжа́ешь', 'уезжа́ет', 'уезжа́ем', 'уезжа́ете', 'уезжа́ют'],
          past: ['уезжа́л', 'уезжа́ла', 'уезжа́ло', 'уезжа́ли']
        },
        perfConjugation: {
          presentFuture: ['уе́ду', 'уе́дешь', 'уе́дет', 'уе́дем', 'уе́дете', 'уе́дут'],
          past: ['уе́хал', 'уе́хала', 'уе́хало', 'уе́хали']
        }
      }
    },
    { 
      id: 'v_book', ru: 'Брони́ровать / Заброни́ровать', noDeclension: true,
      aspects: {
        imp: 'Брони́ровать', perf: 'Заброни́ровать',
        impConjugation: {
          presentFuture: ['брони́рую', 'брони́руешь', 'брони́рует', 'брони́руем', 'брони́руете', 'брони́руют'],
          past: ['брони́ровал', 'брони́ровала', 'брони́ровало', 'брони́ровали']
        },
        perfConjugation: {
          presentFuture: ['заброни́рую', 'заброни́руешь', 'заброни́рует', 'заброни́руем', 'заброни́руете', 'заброни́руют'],
          past: ['заброни́ровал', 'заброни́ровала', 'заброни́ровало', 'заброни́ровали']
        }
      }
    }
  ],
  education: [
    { id: 'school', ru: 'Шко́ла', gender: 'f' },
    { id: 'university', ru: 'Университе́т', gender: 'm' },
    { id: 'student', ru: 'Студе́нт', gender: 'm', animate: true },
    { id: 'teacher', ru: 'Учи́тель', gender: 'm', animate: true },
    { id: 'professor', ru: 'Преподава́тель', gender: 'm', animate: true },
    { id: 'book', ru: 'Кни́га', gender: 'f' },
    { id: 'textbook', ru: 'Уче́бник', gender: 'm' },
    { id: 'notebook', ru: 'Тетра́дь', gender: 'f' },
    { id: 'pen', ru: 'Ру́чка', gender: 'f' },
    { id: 'exam', ru: 'Экза́мен', gender: 'm' },
    { id: 'lesson', ru: 'Уро́к', gender: 'm' },
    { id: 'homework', ru: 'Дома́шнее зада́ние', noDeclension: true },
    { id: 'grade', ru: 'Оце́нка', gender: 'f' },
    { id: 'library', ru: 'Библиоте́ка', gender: 'f' },
    { 
      id: 'v_read', ru: 'Чита́ть / Прочита́ть', noDeclension: true,
      aspects: {
        imp: 'Чита́ть', perf: 'Прочита́ть',
        impConjugation: {
          presentFuture: ['чита́ю', 'чита́ешь', 'чита́ет', 'чита́ем', 'чита́ете', 'чита́ют'],
          past: ['чита́л', 'чита́ла', 'чита́ло', 'чита́ли']
        },
        perfConjugation: {
          presentFuture: ['прочита́ю', 'прочита́ешь', 'прочита́ет', 'прочита́ем', 'прочита́ете', 'прочита́ют'],
          past: ['прочита́л', 'прочита́ла', 'прочита́ло', 'прочита́ли']
        }
      }
    },
    { 
      id: 'v_write', ru: 'Писа́ть / Написа́ть', noDeclension: true,
      aspects: {
        imp: 'Писа́ть', perf: 'Написа́ть',
        impConjugation: {
          presentFuture: ['пишу́', 'пи́шешь', 'пи́шет', 'пи́шем', 'пи́шете', 'пи́шут'],
          past: ['писа́л', 'писа́ла', 'писа́ло', 'писа́ли']
        },
        perfConjugation: {
          presentFuture: ['напишу́', 'напи́шешь', 'напи́шет', 'напи́шем', 'напи́шете', 'напи́шут'],
          past: ['написа́л', 'написа́ла', 'написа́ло', 'написа́ли']
        }
      }
    },
    { 
      id: 'v_listen', ru: 'Слу́шать / Послу́шать', noDeclension: true,
      aspects: {
        imp: 'Слу́шать', perf: 'Послу́шать',
        impConjugation: {
          presentFuture: ['слу́шаю', 'слу́шаешь', 'слу́шает', 'слу́шаем', 'слу́шаете', 'слу́шают'],
          past: ['слу́шал', 'слу́шала', 'слу́шало', 'слу́шали']
        },
        perfConjugation: {
          presentFuture: ['послу́шаю', 'послу́шаешь', 'послу́шает', 'послу́шаем', 'послу́шаете', 'послу́шают'],
          past: ['послу́шал', 'послу́шала', 'послу́шало', 'послу́шали']
        }
      }
    },
    { 
      id: 'v_understand', ru: 'Понима́ть / Поня́ть', noDeclension: true,
      aspects: {
        imp: 'Понима́ть', perf: 'Поня́ть',
        impConjugation: {
          presentFuture: ['понима́ю', 'понима́ешь', 'понима́ет', 'понима́ем', 'понима́ете', 'понима́ют'],
          past: ['понима́л', 'понима́ла', 'понима́ло', 'понима́ли']
        },
        perfConjugation: {
          presentFuture: ['пойму́', 'поймёшь', 'поймёт', 'поймём', 'поймёте', 'пойму́т'],
          past: ['по́нял', 'поняла́', 'по́няло', 'по́няли']
        }
      }
    },
    { 
      id: 'v_ask', ru: 'Спра́шивать / Спроси́ть', noDeclension: true,
      aspects: {
        imp: 'Спра́шивать', perf: 'Спроси́ть',
        impConjugation: {
          presentFuture: ['спра́шиваю', 'спра́шиваешь', 'спра́шивает', 'спра́шиваем', 'спра́шиваете', 'спра́шивают'],
          past: ['спра́шивал', 'спра́шивала', 'спра́шивало', 'спра́шивали']
        },
        perfConjugation: {
          presentFuture: ['спрошу́', 'спро́сишь', 'спро́сит', 'спро́сим', 'спро́сите', 'спро́сят'],
          past: ['спроси́л', 'спроси́ла', 'спроси́ло', 'спроси́ли']
        }
      }
    }
  ],
  body: [
    { id: 'body', ru: 'Те́ло', gender: 'n' },
    { id: 'head', ru: 'Голова́', gender: 'f' },
    { id: 'face', ru: 'Лицо́', gender: 'n' },
    { id: 'eye', ru: 'Глаз', gender: 'm' },
    { id: 'eyes', ru: 'Глаза́', gender: 'm', baseRu: 'Глаз' },
    { id: 'nose', ru: 'Нос', gender: 'm' },
    { id: 'mouth', ru: 'Рот', gender: 'm', special: 'fleeting_vowel' },
    { id: 'ear', ru: 'У́хо', gender: 'n' },
    { id: 'ears', ru: 'У́ши', gender: 'n', baseRu: 'У́хо' },
    { id: 'hair', ru: 'Во́лосы', gender: 'm', baseRu: 'Во́лос' },
    { id: 'arm_hand', ru: 'Рука́', gender: 'f' },
    { id: 'leg_foot', ru: 'Нога́', gender: 'f' },
    { id: 'finger', ru: 'Па́лец', gender: 'm', special: 'fleeting_vowel' },
    { id: 'stomach', ru: 'Живо́т', gender: 'm' },
    { id: 'heart', ru: 'Се́рдце', gender: 'n' },
    { id: 'back', ru: 'Спина́', gender: 'f' },
    { 
      id: 'v_see', ru: 'Ви́деть / Уви́деть', noDeclension: true,
      aspects: {
        imp: 'Ви́деть', perf: 'Уви́деть',
        impConjugation: {
          presentFuture: ['ви́жу', 'ви́дишь', 'ви́дит', 'ви́дим', 'ви́дите', 'ви́дят'],
          past: ['ви́дел', 'ви́дела', 'ви́дело', 'ви́дели']
        },
        perfConjugation: {
          presentFuture: ['уви́жу', 'уви́дишь', 'уви́дит', 'уви́дим', 'уви́дите', 'уви́дят'],
          past: ['уви́дел', 'уви́дела', 'уви́дело', 'уви́дели']
        }
      }
    },
    { 
      id: 'v_hear', ru: 'Слы́шать / Услы́шать', noDeclension: true,
      aspects: {
        imp: 'Слы́шать', perf: 'Услы́шать',
        impConjugation: {
          presentFuture: ['слы́шу', 'слы́шишь', 'слы́шит', 'слы́шим', 'слы́шите', 'слы́шат'],
          past: ['слы́шал', 'слы́шала', 'слы́шало', 'слы́шали']
        },
        perfConjugation: {
          presentFuture: ['услы́шу', 'услы́шишь', 'услы́шит', 'услы́шим', 'услы́шите', 'услы́шат'],
          past: ['услы́шал', 'услы́шала', 'услы́шало', 'услы́шали']
        }
      }
    },
    { 
      id: 'v_breathe', ru: 'Дыша́ть / Подыша́ть', noDeclension: true,
      aspects: {
        imp: 'Дыша́ть', perf: 'Подыша́ть',
        impConjugation: {
          presentFuture: ['дышу́', 'ды́шишь', 'ды́шит', 'ды́шим', 'ды́шите', 'ды́шат'],
          past: ['дыша́л', 'дыша́ла', 'дыша́ло', 'дыша́ли']
        },
        perfConjugation: {
          presentFuture: ['подышу́', 'поды́шишь', 'поды́шит', 'поды́шим', 'поды́шите', 'поды́шат'],
          past: ['подыша́л', 'подыша́ла', 'подыша́ло', 'подыша́ли']
        }
      }
    },
    { 
      id: 'v_touch', ru: 'Тро́гать / Тро́нуть', noDeclension: true,
      aspects: {
        imp: 'Тро́гать', perf: 'Тро́нуть',
        impConjugation: {
          presentFuture: ['тро́гаю', 'тро́гаешь', 'тро́гает', 'тро́гаем', 'тро́гаете', 'тро́гают'],
          past: ['тро́гал', 'тро́гала', 'тро́гало', 'тро́гали']
        },
        perfConjugation: {
          presentFuture: ['тро́ну', 'тро́нешь', 'тро́нет', 'тро́нем', 'тро́нете', 'тро́нут'],
          past: ['тро́нул', 'тро́нула', 'тро́нуло', 'тро́нули']
        }
      }
    }
  ],
  nature: [
    { id: 'nature', ru: 'Приро́да', gender: 'f' },
    { id: 'sun', ru: 'Со́лнце', gender: 'n' },
    { id: 'moon', ru: 'Луна́', gender: 'f' },
    { id: 'sky', ru: 'Не́бо', gender: 'n' },
    { id: 'star', ru: 'Звезда́', gender: 'f' },
    { id: 'cloud', ru: 'О́блако', gender: 'n' },
    { id: 'rain', ru: 'Дождь', gender: 'm' },
    { id: 'snow', ru: 'Снег', gender: 'm' },
    { id: 'wind', ru: 'Ве́тер', gender: 'm' },
    { id: 'tree', ru: 'Де́рево', gender: 'n' },
    { id: 'flower', ru: 'Цвето́к', gender: 'm', special: 'fleeting_vowel' },
    { id: 'forest', ru: 'Лес', gender: 'm' },
    { id: 'river', ru: 'Река́', gender: 'f' },
    { id: 'sea', ru: 'Мо́ре', gender: 'n' },
    { id: 'mountain', ru: 'Гора́', gender: 'f' },
    { 
      id: 'v_grow', ru: 'Расти́ / Вы́расти', noDeclension: true,
      aspects: {
        imp: 'Расти́', perf: 'Вы́расти',
        impConjugation: {
          presentFuture: ['расту́', 'растёшь', 'растёт', 'растём', 'растёте', 'расту́т'],
          past: ['рос', 'росла́', 'росло́', 'росли́']
        },
        perfConjugation: {
          presentFuture: ['вы́расту', 'вы́растешь', 'вы́растет', 'вы́растем', 'вы́растете', 'вы́растут'],
          past: ['вы́рос', 'вы́росла', 'вы́росло', 'вы́росли']
        }
      }
    },
    { 
      id: 'v_shine', ru: 'Свети́ть / Посвети́ть', noDeclension: true,
      aspects: {
        imp: 'Свети́ть', perf: 'Посвети́ть',
        impConjugation: {
          presentFuture: ['свечу́', 'све́тишь', 'све́тит', 'све́тим', 'све́тите', 'све́тят'],
          past: ['свети́л', 'свети́ла', 'свети́ло', 'свети́ли']
        },
        perfConjugation: {
          presentFuture: ['посвечу́', 'посве́тишь', 'посве́тит', 'посве́тим', 'посве́тите', 'посве́тят'],
          past: ['посвети́л', 'посвети́ла', 'посвети́ло', 'посвети́ли']
        }
      }
    },
    { 
      id: 'v_bloom', ru: 'Цвести́ / Расцвести́', noDeclension: true,
      aspects: {
        imp: 'Цвести́', perf: 'Расцвести́',
        impConjugation: {
          presentFuture: ['цвету́', 'цветёшь', 'цветёт', 'цветём', 'цветёте', 'цвету́т'],
          past: ['цвёл', 'цвела́', 'цвело́', 'цвели́']
        },
        perfConjugation: {
          presentFuture: ['расцвету́', 'расцветёшь', 'расцветёт', 'расцветём', 'расцветёте', 'расцвету́т'],
          past: ['расцвёл', 'расцвела́', 'расцвело́', 'расцвели́']
        }
      }
    }
  ],
  celebrations: [
    { id: 'holiday', ru: 'Пра́здник', gender: 'm' },
    { id: 'birthday', ru: 'День рожде́ния', noDeclension: true },
    { id: 'new_year', ru: 'Но́вый год', noDeclension: true },
    { id: 'christmas', ru: 'Рождество́', gender: 'n' },
    { id: 'easter', ru: 'Па́сха', gender: 'f' },
    { id: 'gift', ru: 'Пода́рок', gender: 'm', special: 'fleeting_vowel' },
    { id: 'party', ru: 'Вечери́нка', gender: 'f' },
    { id: 'guest', ru: 'Гость', gender: 'm', animate: true },
    { id: 'cake', ru: 'Торт', gender: 'm' },
    { id: 'flowers', ru: 'Цветы́', gender: 'm', baseRu: 'Цвето́к', special: 'fleeting_vowel' },
    { id: 'card', ru: 'Откры́тка', gender: 'f' },
    { id: 'congratulations', ru: 'Поздравля́ю', noDeclension: true },
    { id: 'cheers', ru: 'За здоро́вье', noDeclension: true },
    { 
      id: 'v_celebrate', ru: 'Пра́здновать / Отпра́здновать', noDeclension: true,
      aspects: {
        imp: 'Пра́здновать', perf: 'Отпра́здновать',
        impConjugation: {
          presentFuture: ['пра́здную', 'пра́зднуешь', 'пра́зднует', 'пра́зднуем', 'пра́зднуете', 'пра́зднуют'],
          past: ['пра́здновал', 'пра́здновала', 'пра́здновало', 'пра́здновали']
        },
        perfConjugation: {
          presentFuture: ['отпра́здную', 'отпра́зднуешь', 'отпра́зднует', 'отпра́зднуем', 'отпра́зднуете', 'отпра́зднуют'],
          past: ['отпра́здновал', 'отпра́здновала', 'отпра́здновало', 'отпра́здновали']
        }
      }
    },
    { 
      id: 'v_congratulate', ru: 'Поздравля́ть / Поздра́вить', noDeclension: true,
      aspects: {
        imp: 'Поздравля́ть', perf: 'Поздра́вить',
        impConjugation: {
          presentFuture: ['поздравля́ю', 'поздравля́ешь', 'поздравля́ет', 'поздравля́ем', 'поздравля́ете', 'поздравля́ют'],
          past: ['поздравля́л', 'поздравля́ла', 'поздравля́ло', 'поздравля́ли']
        },
        perfConjugation: {
          presentFuture: ['поздра́влю', 'поздра́вишь', 'поздра́вит', 'поздра́вим', 'поздра́вите', 'поздра́вят'],
          past: ['поздра́вил', 'поздра́вила', 'поздра́вило', 'поздра́вили']
        }
      }
    },
    { 
      id: 'v_wish', ru: 'Жела́ть / Пожела́ть', noDeclension: true,
      aspects: {
        imp: 'Жела́ть', perf: 'Пожела́ть',
        impConjugation: {
          presentFuture: ['жела́ю', 'жела́ешь', 'жела́ет', 'жела́ем', 'жела́ете', 'жела́ют'],
          past: ['жела́л', 'жела́ла', 'жела́ло', 'жела́ли']
        },
        perfConjugation: {
          presentFuture: ['пожела́ю', 'пожела́ешь', 'пожела́ет', 'пожела́ем', 'пожела́ете', 'пожела́ют'],
          past: ['пожела́л', 'пожела́ла', 'пожела́ло', 'пожела́ли']
        }
      }
    },
    { 
      id: 'v_give_gift', ru: 'Дари́ть / Подари́ть', noDeclension: true,
      aspects: {
        imp: 'Дари́ть', perf: 'Подари́ть',
        impConjugation: {
          presentFuture: ['дарю́', 'да́ришь', 'да́рит', 'да́рим', 'да́рите', 'да́рят'],
          past: ['дари́л', 'дари́ла', 'дари́ло', 'дари́ли']
        },
        perfConjugation: {
          presentFuture: ['подарю́', 'пода́ришь', 'пода́рит', 'пода́рим', 'пода́рите', 'пода́рят'],
          past: ['подари́л', 'подари́ла', 'подари́ло', 'подари́ли']
        }
      }
    },
    { 
      id: 'v_invite', ru: 'Приглаша́ть / Пригласи́ть', noDeclension: true,
      aspects: {
        imp: 'Приглаша́ть', perf: 'Пригласи́ть',
        impConjugation: {
          presentFuture: ['приглаша́ю', 'приглаша́ешь', 'приглаша́ет', 'приглаша́ем', 'приглаша́ете', 'приглаша́ют'],
          past: ['приглаша́л', 'приглаша́ла', 'приглаша́ло', 'приглаша́ли']
        },
        perfConjugation: {
          presentFuture: ['приглашу́', 'пригласи́шь', 'пригласи́т', 'пригласи́м', 'пригласи́те', 'приглася́т'],
          past: ['пригласи́л', 'пригласи́ла', 'пригласи́ло', 'пригласи́ли']
        }
      }
    }
  ],
  sports: [
    { id: 'sport', ru: 'Спорт', gender: 'm' },
    { id: 'football', ru: 'Футбо́л', gender: 'm' },
    { id: 'basketball', ru: 'Баскетбо́л', gender: 'm' },
    { id: 'tennis', ru: 'Те́ннис', gender: 'm' },
    { id: 'volleyball', ru: 'Волейбо́л', gender: 'm' },
    { id: 'hockey', ru: 'Хокке́й', gender: 'm' },
    { id: 'swimming', ru: 'Пла́вание', gender: 'n' },
    { id: 'running', ru: 'Бег', gender: 'm' },
    { id: 'mountain_climbing', ru: 'Альпини́зм', gender: 'm' },
    { id: 'gym', ru: 'Спортза́л', gender: 'm' },
    { id: 'match', ru: 'Матч', gender: 'm' },
    { id: 'team', ru: 'Кома́нда', gender: 'f' },
    { id: 'ball', ru: 'Мяч', gender: 'm' },
    { 
      id: 'v_play', ru: 'Игра́ть / Сыгра́ть', noDeclension: true,
      aspects: {
        imp: 'Игра́ть', perf: 'Сыгра́ть',
        impConjugation: {
          presentFuture: ['игра́ю', 'игра́ешь', 'игра́ет', 'игра́ем', 'игра́ете', 'игра́ют'],
          past: ['игра́л', 'игра́ла', 'игра́ло', 'игра́ли']
        },
        perfConjugation: {
          presentFuture: ['сыгра́ю', 'сыгра́ешь', 'сыгра́ет', 'сыгра́ем', 'сыгра́ете', 'сыгра́ют'],
          past: ['сыгра́л', 'сыгра́ла', 'сыгра́ло', 'сыгра́ли']
        }
      }
    },
    { 
      id: 'v_win', ru: 'Побежда́ть / Победи́ть', noDeclension: true,
      aspects: {
        imp: 'Побежда́ть', perf: 'Победи́ть',
        impConjugation: {
          presentFuture: ['побежда́ю', 'побежда́ешь', 'побежда́ет', 'побежда́ем', 'побежда́ете', 'побежда́ют'],
          past: ['побежда́л', 'побежда́ла', 'побежда́ло', 'побежда́ли']
        },
        perfConjugation: {
          presentFuture: ['-', 'победи́шь', 'победи́т', 'победи́м', 'победи́те', 'победя́т'], // No 1st sg
          past: ['победи́л', 'победи́ла', 'победи́ло', 'победи́ли']
        }
      }
    },
    { 
      id: 'v_lose', ru: 'Прои́грывать / Проигра́ть', noDeclension: true,
      aspects: {
        imp: 'Прои́грывать', perf: 'Проигра́ть',
        impConjugation: {
          presentFuture: ['прои́грываю', 'прои́грываешь', 'прои́грывает', 'прои́грываем', 'прои́грываете', 'прои́грывают'],
          past: ['прои́грывал', 'прои́грывала', 'прои́грывало', 'прои́грывали']
        },
        perfConjugation: {
          presentFuture: ['проигра́ю', 'проигра́ешь', 'проигра́ет', 'проигра́ем', 'проигра́ете', 'проигра́ют'],
          past: ['проигра́л', 'проигра́ла', 'проигра́ло', 'проигра́ли']
        }
      }
    },
    {
      id: 'v_train', ru: 'Тренирова́ться / Потренирова́ться', noDeclension: true,
      aspects: {
        imp: 'Тренирова́ться', perf: 'Потренирова́ться',
        impConjugation: {
          presentFuture: ['трениру́юсь', 'трениру́ешься', 'трениру́ется', 'трениру́емся', 'трениру́етесь', 'трениру́ются'],
          past: ['тренирова́лся', 'тренирова́лась', 'тренирова́лось', 'тренирова́лись']
        },
        perfConjugation: {
          presentFuture: ['потрениру́юсь', 'потрениру́ешься', 'потрениру́ется', 'потрениру́емся', 'потрениру́етесь', 'потрениру́ются'],
          past: ['потренирова́лся', 'потренирова́лась', 'потренирова́лось', 'потренирова́лись']
        }
      }
    },
    {
      id: 'v_watch', ru: 'Смотре́ть / Посмотре́ть', noDeclension: true,
      aspects: {
        imp: 'Смотре́ть', perf: 'Посмотре́ть',
        impConjugation: {
          presentFuture: ['смотрю́', 'смо́тришь', 'смо́трит', 'смо́трим', 'смо́трите', 'смо́трят'],
          past: ['смотре́л', 'смотре́ла', 'смотре́ло', 'смотре́ли']
        },
        perfConjugation: {
          presentFuture: ['посмотрю́', 'посмо́тришь', 'посмо́трит', 'посмо́трим', 'посмо́трите', 'посмо́трят'],
          past: ['посмотре́л', 'посмотре́ла', 'посмотре́ло', 'посмотре́ли']
        }
      }
    },
    {
      id: 'v_score', ru: 'Забива́ть / Заби́ть', noDeclension: true,
      aspects: {
        imp: 'Забива́ть', perf: 'Заби́ть',
        impConjugation: {
          presentFuture: ['забива́ю', 'забива́ешь', 'забива́ет', 'забива́ем', 'забива́ете', 'забива́ют'],
          past: ['забива́л', 'забива́ла', 'забива́ло', 'забива́ли']
        },
        perfConjugation: {
          presentFuture: ['забью́', 'забьёшь', 'забьёт', 'забьём', 'забьёте', 'забью́т'],
          past: ['заби́л', 'заби́ла', 'заби́ло', 'заби́ли']
        }
      }
    },
    {
      id: 'v_participate', ru: 'Уча́ствовать / Поуча́ствовать', noDeclension: true,
      aspects: {
        imp: 'Уча́ствовать', perf: 'Поуча́ствовать',
        impConjugation: {
          presentFuture: ['уча́ствую', 'уча́ствуешь', 'уча́ствует', 'уча́ствуем', 'уча́ствуете', 'уча́ствуют'],
          past: ['уча́ствовал', 'уча́ствовала', 'уча́ствовало', 'уча́ствовали']
        },
        perfConjugation: {
          presentFuture: ['поуча́ствую', 'поуча́ствуешь', 'поуча́ствует', 'поуча́ствуем', 'поуча́ствуете', 'поуча́ствуют'],
          past: ['поуча́ствовал', 'поуча́ствовала', 'поуча́ствовало', 'поуча́ствовали']
        }
      }
    }
  ]
};