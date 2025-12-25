import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Repeat, Footprints, Car, Plane, Waves, Package, Briefcase, User, ChevronDown } from 'lucide-react';

interface VerbPair {
  id: string;
  italian: string;
  icon: React.ElementType;
  unidirectional: {
    infinitive: string;
    conjugation: string[];
    past: string[]; // [Masculine, Feminine, Neuter, Plural]
  };
  multidirectional: {
    infinitive: string;
    conjugation: string[];
    past: string[];
  };
}

const intransitivePairs: VerbPair[] = [
  {
    id: 'foot',
    italian: 'Andare (a piedi)',
    icon: Footprints,
    unidirectional: {
      infinitive: 'Идти́',
      conjugation: ['иду́', 'идёшь', 'идёт', 'идём', 'идёте', 'иду́т'],
      past: ['шёл', 'шла', 'шло', 'шли']
    },
    multidirectional: {
      infinitive: 'Ходи́ть',
      conjugation: ['хожу́', 'хо́дишь', 'хо́дит', 'хо́дим', 'хо́дите', 'хо́дят'],
      past: ['ходи́л', 'ходи́ла', 'ходи́ло', 'ходи́ли']
    }
  },
  {
    id: 'transport',
    italian: 'Andare (con mezzo)',
    icon: Car,
    unidirectional: {
      infinitive: 'Е́хать',
      conjugation: ['е́ду', 'е́дешь', 'е́дет', 'е́дем', 'е́дете', 'е́дут'],
      past: ['е́хал', 'е́хала', 'е́хало', 'е́хали']
    },
    multidirectional: {
      infinitive: 'Е́здить',
      conjugation: ['е́зжу', 'е́здишь', 'е́здит', 'е́здим', 'е́здите', 'е́здят'],
      past: ['е́здил', 'е́здила', 'е́здило', 'е́здили']
    }
  },
  {
    id: 'run',
    italian: 'Correre',
    icon: ArrowRight,
    unidirectional: {
      infinitive: 'Бежа́ть',
      conjugation: ['бегу́', 'бежи́шь', 'бежи́т', 'бежи́м', 'бежи́те', 'бегу́т'],
      past: ['бежа́л', 'бежа́ла', 'бежа́ло', 'бежа́ли']
    },
    multidirectional: {
      infinitive: 'Бе́гать',
      conjugation: ['бе́гаю', 'бе́гаешь', 'бе́гает', 'бе́гаем', 'бе́гаете', 'бе́гают'],
      past: ['бе́гал', 'бе́гала', 'бе́гало', 'бе́гали']
    }
  },
  {
    id: 'fly',
    italian: 'Volare',
    icon: Plane,
    unidirectional: {
      infinitive: 'Лете́ть',
      conjugation: ['лечу́', 'лети́шь', 'лети́т', 'лети́м', 'лети́те', 'летя́т'],
      past: ['лете́л', 'лете́ла', 'лете́ло', 'лете́ли']
    },
    multidirectional: {
      infinitive: 'Лета́ть',
      conjugation: ['лета́ю', 'лета́ешь', 'лета́ет', 'лета́ем', 'лета́ете', 'лета́ют'],
      past: ['лета́л', 'лета́ла', 'лета́ло', 'лета́ли']
    }
  },
  {
    id: 'swim',
    italian: 'Nuotare',
    icon: Waves,
    unidirectional: {
      infinitive: 'Плыть',
      conjugation: ['плыву́', 'плывёшь', 'плывёт', 'плывём', 'плывёте', 'плыву́т'],
      past: ['плыл', 'плыла́', 'плы́ло', 'плы́ли']
    },
    multidirectional: {
      infinitive: 'Пла́вать',
      conjugation: ['пла́ваю', 'пла́ваешь', 'пла́вает', 'пла́ваем', 'пла́ваете', 'пла́вают'],
      past: ['пла́вал', 'пла́вала', 'пла́вало', 'пла́вали']
    }
  },
];

const transitivePairs: VerbPair[] = [
  {
    id: 'lead',
    italian: 'Condurre / Guidare',
    icon: User,
    unidirectional: {
      infinitive: 'Вести́',
      conjugation: ['веду́', 'ведёшь', 'ведёт', 'ведём', 'ведёте', 'веду́т'],
      past: ['вёл', 'вела́', 'ве́ло', 'ве́ли']
    },
    multidirectional: {
      infinitive: 'Води́ть',
      conjugation: ['вожу́', 'во́дишь', 'во́дит', 'во́дим', 'во́дите', 'во́дят'],
      past: ['води́л', 'води́ла', 'води́ло', 'води́ли']
    }
  },
  {
    id: 'carry_hand',
    italian: 'Portare (a mano)',
    icon: Package,
    unidirectional: {
      infinitive: 'Нести́',
      conjugation: ['несу́', 'несёшь', 'несёт', 'несём', 'несёте', 'несу́т'],
      past: ['нёс', 'несла́', 'несло́', 'несли́']
    },
    multidirectional: {
      infinitive: 'Носи́ть',
      conjugation: ['ношу́', 'но́сишь', 'но́сит', 'но́сим', 'но́сите', 'но́сят'],
      past: ['носи́л', 'носи́ла', 'носи́ло', 'носи́ли']
    }
  },
  {
    id: 'carry_transport',
    italian: 'Trasportare (con mezzo)',
    icon: Briefcase,
    unidirectional: {
      infinitive: 'Везти́',
      conjugation: ['везу́', 'везёшь', 'везёт', 'везём', 'везёте', 'везу́т'],
      past: ['вёз', 'везла́', 'везло́', 'везли́']
    },
    multidirectional: {
      infinitive: 'Вози́ть',
      conjugation: ['вожу́', 'во́зишь', 'во́зит', 'во́зим', 'во́зите', 'во́зят'],
      past: ['вози́л', 'вози́ла', 'вози́ло', 'вози́ли']
    }
  },
];

const ConjugationCard = ({ title, data, colorClass }: { title: string, data: { infinitive: string, conjugation: string[], past: string[] }, colorClass: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className={`p-4 rounded-xl border-2 ${colorClass} bg-white shadow-sm h-full`}
  >
    <h4 className="font-bold text-lg mb-2 text-center opacity-80">{title}</h4>
    <div className="text-2xl font-black text-center mb-6 text-slate-900">{data.infinitive}</div>
    
    <div className="mb-6">
      <div className="text-xs font-bold uppercase tracking-wider text-center mb-3 opacity-60">Presente</div>
      <div className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-8 gap-y-1 text-sm">
        {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
          <div key={pronoun} className="flex justify-between border-b border-gray-100 py-1">
            <span className="text-gray-400 font-medium mr-4">{pronoun}</span>
            <span className="font-bold">{data.conjugation[idx]}</span>
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-center mb-3 opacity-60">Passato</div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
        <div className="flex justify-between border-b border-gray-100 py-1">
          <span className="text-gray-400 font-medium mr-4">Он</span>
          <span className="font-bold">{data.past[0]}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1">
          <span className="text-gray-400 font-medium mr-4">Она</span>
          <span className="font-bold">{data.past[1]}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1">
          <span className="text-gray-400 font-medium mr-4">Оно</span>
          <span className="font-bold">{data.past[2]}</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1">
          <span className="text-gray-400 font-medium mr-4">Они</span>
          <span className="font-bold">{data.past[3]}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const VerbList = ({ pairs }: { pairs: VerbPair[] }) => {
  const [expandedStates, setExpandedStates] = useState<Record<string, { uni: boolean, multi: boolean }>>({});

  const toggleAspect = (pairId: string, aspect: 'uni' | 'multi') => {
    setExpandedStates(prev => {
      const current = prev[pairId] || { uni: false, multi: false };
      return {
        ...prev,
        [pairId]: {
          ...current,
          [aspect]: !current[aspect]
        }
      };
    });
  };

  return (
    <div className="space-y-6">
      {pairs.map((pair) => {
        const state = expandedStates[pair.id] || { uni: false, multi: false };
        const isAnyExpanded = state.uni || state.multi;

        return (
          <div 
            key={pair.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all"
          >
            <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-6 self-start md:self-center">
                <div className="p-3 bg-slate-100 rounded-full text-slate-600">
                  <pair.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{pair.italian}</h3>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleAspect(pair.id, 'uni')}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all min-w-[160px] ${
                    state.uni 
                      ? 'bg-blue-600 border-blue-700 text-white shadow-md' 
                      : 'bg-white border-blue-100 text-blue-600 hover:border-blue-300'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${state.uni ? 'text-blue-100' : 'text-blue-400'}`}>
                    Unidirezionale
                  </span>
                  <span className="text-2xl font-serif font-bold">{pair.unidirectional.infinitive}</span>
                  <ChevronDown className={`w-4 h-4 mt-1 transition-transform ${state.uni ? 'rotate-180' : ''}`} />
                </motion.button>

                <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleAspect(pair.id, 'multi')}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all min-w-[160px] ${
                    state.multi 
                      ? 'bg-orange-600 border-orange-700 text-white shadow-md' 
                      : 'bg-white border-orange-100 text-orange-600 hover:border-orange-300'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${state.multi ? 'text-orange-100' : 'text-orange-400'}`}>
                    Pluridirezionale
                  </span>
                  <span className="text-2xl font-serif font-bold">{pair.multidirectional.infinitive}</span>
                  <ChevronDown className={`w-4 h-4 mt-1 transition-transform ${state.multi ? 'rotate-180' : ''}`} />
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {isAnyExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-50 border-t border-gray-100"
                >
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {state.uni ? (
                      <ConjugationCard 
                        title="Unidirezionale" 
                        data={pair.unidirectional} 
                        colorClass="border-blue-200 text-blue-900"
                      />
                    ) : <div className="hidden md:block"></div>}
                    
                    {state.multi ? (
                      <ConjugationCard 
                        title="Pluridirezionale" 
                        data={pair.multidirectional} 
                        colorClass="border-orange-200 text-orange-900"
                      />
                    ) : <div className="hidden md:block"></div>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const MotionVerbsChart = () => {
  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[800px]">
      <h2 className="text-4xl font-serif text-center mb-8 text-gray-800 underline decoration-emerald-500 underline-offset-8">
        Verbi di Moto (Глаголы движения)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
          <div className="flex items-center mb-4">
            <ArrowRight className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">Unidirezionali</h3>
          </div>
          <p className="text-blue-800 mb-2 font-medium">Determinato / Concreto</p>
          <ul className="list-disc pl-5 text-blue-700/80 space-y-1 text-sm">
            <li>Movimento in una direzione specifica</li>
            <li>Azione in corso (sto andando)</li>
            <li>Futuro pianificato</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm">
          <div className="flex items-center mb-4">
            <Repeat className="w-8 h-8 text-orange-600 mr-3" />
            <h3 className="text-xl font-bold text-orange-900">Pluridirezionali</h3>
          </div>
          <p className="text-orange-800 mb-2 font-medium">Indeterminato / Astratto</p>
          <ul className="list-disc pl-5 text-orange-700/80 space-y-1 text-sm">
            <li>Movimento in più direzioni (andata e ritorno)</li>
            <li>Azione abituale o ripetuta</li>
            <li>Capacità generale</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-emerald-500 flex items-center">
            Intransitivi 
            <span className="text-sm font-normal text-slate-500 ml-4 bg-slate-100 px-3 py-1 rounded-full italic">
              Movimento del soggetto
            </span>
          </h3>
          <VerbList pairs={intransitivePairs} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-purple-500 flex items-center">
            Transitivi 
            <span className="text-sm font-normal text-slate-500 ml-4 bg-slate-100 px-3 py-1 rounded-full italic">
              Movimento dell'oggetto
            </span>
          </h3>
          <VerbList pairs={transitivePairs} />
        </div>
      </div>
    </section>
  );
};

export default MotionVerbsChart;
