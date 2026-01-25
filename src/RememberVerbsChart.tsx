import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, History, Bell, Save, AlertCircle } from 'lucide-react';
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
  exampleRu: string;
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

const rememberVerbs: VerbData[] = [
  {
    id: 'pomnit',
    verb: 'Помнить',
    exampleRu: 'Я по́мню этот день.',
    icon: Brain,
    imperfective: {
      verb: 'Помнить',
      conjugation: {
        presentFuture: ['по́мню', 'по́мнишь', 'по́мнит', 'по́мним', 'по́мните', 'по́мнят'],
        past: ['по́мнил', 'по́мнила', 'по́мнило', 'по́мнили']
      }
    }
  },
  {
    id: 'zapominat_zapomnit',
    verb: 'Запоминать / Запомнить',
    exampleRu: 'Я легко́ запомина́ю но́вые слова́.',
    icon: Save,
    imperfective: {
      verb: 'Запоминать',
      conjugation: {
        presentFuture: ['запомина́ю', 'запомина́ешь', 'запомина́ет', 'запомина́ем', 'запомина́ете', 'запомина́ют'],
        past: ['запомина́л', 'запомина́ла', 'запомина́ло', 'запомина́ли']
      }
    },
    perfective: {
      verb: 'Запомнить',
      conjugation: {
        presentFuture: ['запо́мню', 'запо́мнишь', 'запо́мнит', 'запо́мним', 'запо́мните', 'запо́мнят'],
        past: ['запо́мнил', 'запо́мнила', 'запо́мнило', 'запо́мнили']
      }
    }
  },
  {
    id: 'vspominat_vspomnit',
    verb: 'Вспоминать / Вспомнить',
    exampleRu: 'Вдруг я вспо́мнил его́ и́мя.',
    icon: History,
    imperfective: {
      verb: 'Вспоминать',
      conjugation: {
        presentFuture: ['вспомина́ю', 'вспомина́ешь', 'вспомина́ет', 'вспомина́ем', 'вспомина́ете', 'вспомина́ют'],
        past: ['вспомина́л', 'вспомина́ла', 'вспомина́ло', 'вспомина́ли']
      }
    },
    perfective: {
      verb: 'Вспомнить',
      conjugation: {
        presentFuture: ['вспо́мню', 'вспо́мнишь', 'вспо́мнит', 'вспо́мним', 'вспо́мните', 'вспо́мнят'],
        past: ['вспо́мнил', 'вспо́мнила', 'вспо́мнило', 'вспо́мнили']
      }
    }
  },
  {
    id: 'napominat_napomnit',
    verb: 'Напоминать / Напомнить',
    exampleRu: 'Напо́мни мне купи́ть хлеб.',
    icon: Bell,
    imperfective: {
      verb: 'Напоминать',
      conjugation: {
        presentFuture: ['напомина́ю', 'напомина́ешь', 'напомина́ет', 'напомина́ем', 'напомина́ете', 'напомина́ют'],
        past: ['напомина́л', 'напомина́ла', 'напомина́ло', 'напомина́ли']
      }
    },
    perfective: {
      verb: 'Напомнить',
      conjugation: {
        presentFuture: ['напо́мню', 'напо́мнишь', 'напо́мнит', 'напо́мним', 'напо́мните', 'напо́мнят'],
        past: ['напо́мнил', 'напо́мнила', 'напо́мнило', 'напо́мнили']
      }
    }
  }
];

const ConjugationTable = ({ data, title, colorTheme }: { data: VerbConjugation, title: string, colorTheme: 'blue' | 'red' | 'purple' }) => {
  const isBlue = colorTheme === 'blue';
  const isPurple = colorTheme === 'purple';
  
  let headerColor = 'text-red-800';
  let subHeaderColor = 'text-red-600';
  let borderColor = 'border-red-100';

  if (isBlue) {
    headerColor = 'text-blue-800';
    subHeaderColor = 'text-blue-600';
    borderColor = 'border-blue-100';
  } else if (isPurple) {
    headerColor = 'text-purple-800';
    subHeaderColor = 'text-purple-600';
    borderColor = 'border-purple-100';
  }

  return (
    <div className="text-sm">
      <div className={`font-bold uppercase tracking-wider mb-2 ${headerColor} border-b ${borderColor} pb-1`} dangerouslySetInnerHTML={{ __html: underlineStress(title) }} />
      
      <div className="mb-4">
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>{it.learnTeach.presentFuture}</div>
        <div className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-2 gap-y-1">
          {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
            <div key={pronoun} className="flex justify-between items-baseline border-b border-dashed border-gray-100 last:border-0 pb-0.5">
              <span className="text-xs text-gray-400 mr-2">{pronoun}</span>
              <span className="font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(data.presentFuture[idx]) }} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>{it.learnTeach.past}</div>
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

const VerbCard = ({ item }: { item: VerbData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  
  // Theme logic based on if it's a pair or single
  const isSingle = !item.perfective;
  const colorClass = isSingle
    ? 'bg-purple-50/50 border-purple-200 text-purple-900'
    : 'bg-blue-50/50 border-blue-200 text-blue-900';
  const iconColor = isSingle ? 'text-purple-700' : 'text-blue-700';

  const translation = t(`rememberVerbs.verbs.${item.id}.translation`);
  const usage = t(`rememberVerbs.verbs.${item.id}.usage`);
  const exampleIt = t(`rememberVerbs.verbs.${item.id}.exampleIt`);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border-2 ${colorClass} shadow-sm bg-white mb-4 overflow-hidden`}
    >
      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 cursor-pointer hover:bg-opacity-50 transition-colors"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-black text-slate-800 flex items-center gap-2" dangerouslySetInnerHTML={{ __html: underlineStress(item.verb) + '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-300 opacity-40 ' + (isExpanded ? 'rotate-180' : '') + '"><path d="m6 9 6 6 6-6"/></svg>' }} />
          <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
            <item.icon size={20} className={iconColor} />
          </div>
        </div>

        <div className="mb-3">
          <span className="text-base font-bold text-slate-700 block mb-1 border-b border-slate-50 pb-1">
            {translation}
          </span>
          <p className="text-xs text-slate-600 leading-snug whitespace-pre-line">
            {usage}
          </p>
        </div>

        <div className="mt-auto bg-slate-50/50 p-3 rounded-lg border border-slate-100">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">{it.learnTeach.example}</div>
          <div className="text-sm font-medium text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(item.exampleRu) }} />
          <div className="text-xs italic text-slate-500">{exampleIt}</div>
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
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConjugationTable 
                title={item.imperfective.verb} 
                data={item.imperfective.conjugation} 
                colorTheme={isSingle ? 'purple' : 'blue'} // Imperfective
              />
              {item.perfective && (
                <ConjugationTable 
                  title={item.perfective.verb} 
                  data={item.perfective.conjugation} 
                  colorTheme="red" // Perfective
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RememberVerbsChart = () => {
  const { t } = useLanguage();

  return (
    <section className="my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-2 text-gray-800 underline decoration-indigo-500 underline-offset-8">
        {t('rememberVerbs.title')}
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm italic">
        {t('rememberVerbs.subtitle')}
      </p>

      {/* Intro Box */}
      <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
        <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
        <div className="text-sm text-amber-900">
          <p className="font-bold mb-1">{t('rememberVerbs.noteTitle')}</p>
          <ul className="list-disc pl-4 space-y-1 opacity-90">
             <li dangerouslySetInnerHTML={{ __html: t('rememberVerbs.note1') }} />
             <li dangerouslySetInnerHTML={{ __html: t('rememberVerbs.note2') }} />
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {rememberVerbs.map((verb) => (
           <VerbCard key={verb.id} item={verb} />
        ))}
      </div>
    </section>
  );
};

export default RememberVerbsChart;