import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronDown, Utensils, Gift, Heart, Activity, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface VerbData {
  id: string;
  verb: string;
  icon: React.ElementType;
  conjugation: string[]; // 6 forms: Ya, Ty, On, My, Vy, Oni
}

const irregularVerbs: VerbData[] = [
  {
    id: 'khotet',
    verb: 'Хотеть',
    icon: Heart,
    conjugation: ['хочу́', 'хо́чешь', 'хо́чет', 'хоти́м', 'хоти́те', 'хотя́т']
  },
  {
    id: 'moch',
    verb: 'Мочь',
    icon: Zap,
    conjugation: ['могу́', 'мо́жешь', 'мо́жет', 'мо́жем', 'мо́жете', 'мо́гут']
  },
  {
    id: 'zhit',
    verb: 'Жить',
    icon: Activity,
    conjugation: ['живу́', 'живёшь', 'живёт', 'живём', 'живёте', 'живу́т']
  },
  {
    id: 'est',
    verb: 'Есть',
    icon: Utensils,
    conjugation: ['ем', 'ешь', 'ест', 'еди́м', 'еди́те', 'едя́т']
  },
  {
    id: 'dat',
    verb: 'Дать',
    icon: Gift,
    conjugation: ['дам', 'дашь', 'даст', 'дади́м', 'дади́те', 'даду́т']
  }
];

const VerbCard = ({ item }: { item: VerbData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  
  const translation = t(`irregularVerbs.verbs.${item.id}.translation`);
  const note = t(`irregularVerbs.verbs.${item.id}.note`);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border-2 border-amber-100 shadow-sm overflow-hidden"
    >
      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 cursor-pointer hover:bg-amber-50/50 transition-colors"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100/50 rounded-full text-amber-700">
                <item.icon size={24} />
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-800">
                    {item.verb}
                </h3>
                <span className="text-base font-bold text-amber-700 block">
                    {translation}
                </span>
            </div>
          </div>
          <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>

        <div className="mt-2 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100/50">
            <AlertTriangle size={16} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-700 font-medium italic leading-tight">
                {note}
            </p>
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
            <div className="p-5">
                <div className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-12 gap-y-2 text-sm max-w-md mx-auto">
                    {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
                        <div key={pronoun} className="flex justify-between items-baseline border-b border-gray-200 pb-1">
                            <span className="text-gray-400 font-medium w-16">{pronoun}</span>
                            <span className="font-bold text-slate-800 text-lg">{item.conjugation[idx]}</span>
                        </div>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const IrregularVerbsChart = () => {
  const { t } = useLanguage();

  return (
    <section className="my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-amber-500 underline-offset-8">
        {t('irregularVerbs.title')}
      </h2>
      <p className="text-center text-gray-500 mb-12 text-lg">
        {t('irregularVerbs.subtitle')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {irregularVerbs.map((verb) => (
            <VerbCard key={verb.id} item={verb} />
        ))}
      </div>
    </section>
  );
};

export default IrregularVerbsChart;