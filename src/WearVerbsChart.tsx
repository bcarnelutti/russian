import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, User, ArrowDownCircle, ArrowUpCircle, RefreshCw, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { underlineStress } from './utils/textUtils';
import { translations } from './translations';

const it = translations.it;

interface VerbConjugation {
  presentFuture: string[];
  past: string[];
}

interface VerbData {
  id: string;
  verb: string;
  icon: React.ElementType;
  imperfective: {
    verb: string;
    conjugation: VerbConjugation;
  };
  perfective?: {
    verb: string;
    conjugation: VerbConjugation;
  };
}

const wearPairs: VerbData[] = [
  {
    id: 'nosit',
    verb: 'Носить',
    icon: Shirt,
    imperfective: {
      verb: 'Носить',
      conjugation: {
        presentFuture: ['ношу́', 'но́сишь', 'но́сит', 'но́сим', 'но́сите', 'но́сят'],
        past: ['носи́л', 'носи́ла', 'носи́ло', 'носи́ли']
      }
    }
  },
  {
    id: 'nadevat',
    verb: 'Надевать / Надеть',
    icon: ArrowDownCircle,
    imperfective: {
      verb: 'Надевать',
      conjugation: {
        presentFuture: ['надева́ю', 'надева́ешь', 'надева́ет', 'надева́ем', 'надева́ете', 'надева́ют'],
        past: ['надева́л', 'надева́ла', 'надева́ло', 'надева́ли']
      }
    },
    perfective: {
      verb: 'Надеть',
      conjugation: {
        presentFuture: ['наде́ну', 'наде́нешь', 'наде́нет', 'наде́нем', 'наде́нете', 'наде́нут'],
        past: ['наде́л', 'наде́ла', 'наде́ло', 'наде́ли']
      }
    }
  },
  {
    id: 'odevat',
    verb: 'Одевать / Одеть',
    icon: User,
    imperfective: {
      verb: 'Одевать',
      conjugation: {
        presentFuture: ['одева́ю', 'одева́ешь', 'одева́ет', 'одева́ем', 'одева́ете', 'одева́ют'],
        past: ['одева́л', 'одева́ла', 'одева́ло', 'одева́ли']
      }
    },
    perfective: {
      verb: 'Одеть',
      conjugation: {
        presentFuture: ['оде́ну', 'оде́нешь', 'оде́нет', 'оде́нем', 'оде́нете', 'оде́нут'],
        past: ['оде́л', 'оде́ла', 'оде́ло', 'оде́ли']
      }
    }
  },
  {
    id: 'odevatsya',
    verb: 'Одеваться / Одеться',
    icon: RefreshCw,
    imperfective: {
      verb: 'Одеваться',
      conjugation: {
        presentFuture: ['одева́юсь', 'одева́ешься', 'одева́ется', 'одева́емся', 'одева́етесь', 'одева́ются'],
        past: ['одева́лся', 'одева́лась', 'одева́лось', 'одева́лись']
      }
    },
    perfective: {
      verb: 'Одеться',
      conjugation: {
        presentFuture: ['оде́нусь', 'оде́нешься', 'оде́нется', 'оде́немся', 'оде́нетесь', 'оде́нутся'],
        past: ['оде́лся', 'оде́лась', 'оде́лось', 'оде́лись']
      }
    }
  },
  {
    id: 'snimat',
    verb: 'Снимать / Снять',
    icon: ArrowUpCircle,
    imperfective: {
      verb: 'Снимать',
      conjugation: {
        presentFuture: ['снима́ю', 'снима́ешь', 'снима́ет', 'снима́ем', 'снима́ете', 'снима́ют'],
        past: ['снима́л', 'снима́ла', 'снима́ло', 'снима́ли']
      }
    },
    perfective: {
      verb: 'Снять',
      conjugation: {
        presentFuture: ['сниму́', 'сни́мешь', 'сни́мет', 'сни́мем', 'сни́мете', 'сни́мут'],
        past: ['снял', 'сняла́', 'сня́ло', 'сня́ли']
      }
    }
  }
];

const ConjugationTable = ({ data, title, colorTheme }: { data: VerbConjugation, title: string, colorTheme: 'blue' | 'red' }) => {
  const isBlue = colorTheme === 'blue';
  const headerColor = isBlue ? 'text-blue-800' : 'text-red-800';
  const subHeaderColor = isBlue ? 'text-blue-600' : 'text-red-600';

  return (
    <div className="text-sm">
      <div className={`font-bold uppercase tracking-wider mb-2 ${headerColor} border-b ${isBlue ? 'border-blue-100' : 'border-red-100'} pb-1`} dangerouslySetInnerHTML={{ __html: underlineStress(title) }} />
      
      <div className="mb-4">
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>{it.wearVerbs.presentFuture}</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
            <div key={pronoun} className="flex justify-between items-baseline border-b border-dashed border-gray-100 last:border-0 pb-0.5">
              <span className="text-xs text-gray-400 mr-2">{pronoun}</span>
              <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.presentFuture[idx]) }} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>{it.wearVerbs.past}</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Он</span>
            <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.past[0]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Она</span>
            <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.past[1]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Оно</span>
            <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.past[2]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Они</span>
            <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.past[3]) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const WearVerbCard = ({ item }: { item: VerbData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  
  const translation = t(`wearVerbs.verbs.${item.id}.translation`);
  const usage = t(`wearVerbs.verbs.${item.id}.usage`);
  const exampleIt = t(`wearVerbs.verbs.${item.id}.exampleIt`);
  const exampleRu = t(`wearVerbs.verbs.${item.id}.exampleRu`);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border-2 border-indigo-100 shadow-sm bg-white mb-6 overflow-hidden`}
    >
      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                <item.icon size={24} />
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(item.verb) }} />
                <span className="text-lg font-bold text-indigo-700 block">
                    {translation}
                </span>
            </div>
          </div>
          <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>

        <div className="ml-[60px]">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                <span className="font-bold text-slate-800 uppercase text-xs tracking-wider mr-2 bg-slate-100 px-2 py-0.5 rounded">Uso</span>
                {usage}
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{it.wearVerbs.example}</div>
                <div className="text-base font-medium text-slate-800 mb-0.5" dangerouslySetInnerHTML={{ __html: underlineStress(exampleRu) }} />
                <div className="text-sm italic text-slate-500">{exampleIt}</div>
            </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-slate-50 border-t border-slate-100"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <ConjugationTable 
                title={item.imperfective.verb} 
                data={item.imperfective.conjugation} 
                colorTheme="blue"
              />
              {item.perfective ? (
                <ConjugationTable 
                  title={item.perfective.verb} 
                  data={item.perfective.conjugation} 
                  colorTheme="red"
                />
              ) : (
                <div className="flex items-center justify-center text-slate-400 italic text-sm p-8 border-2 border-dashed border-slate-200 rounded-xl">
                   {it.wearVerbs.imperfOnly}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WearVerbsChart = () => {
  const { t } = useLanguage();

  return (
    <section className="my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-pink-500 underline-offset-8">
        {t('wearVerbs.title')}
      </h2>
      <p className="text-center text-gray-500 mb-12 text-lg">
        {t('wearVerbs.subtitle')}
      </p>
      
      <div className="space-y-4">
        {wearPairs.map((verb) => (
            <WearVerbCard key={verb.id} item={verb} />
        ))}
      </div>

       <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
            💡 {it.wearVerbs.mnemonicsTitle}
        </h3>
        <p className="text-yellow-800 text-lg font-medium text-center italic" dangerouslySetInnerHTML={{ __html: '"' + underlineStress(it.wearVerbs.mnemonicsText) + '"' }} />
        <p className="text-yellow-700/80 text-sm text-center mt-2">
            ({it.wearVerbs.mnemonicsDesc})
        </p>
      </div>
    </section>
  );
};

export default WearVerbsChart;
