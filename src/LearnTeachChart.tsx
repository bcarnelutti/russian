import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, School, Brain, PenTool, Users, ChevronDown } from 'lucide-react';

interface VerbConjugation {
  presentFuture: string[];
  past: string[];
}

interface VerbData {
  verb: string;
  translation: string;
  usage: string;
  exampleRu: string;
  exampleIt: string;
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

const aspectPairs: VerbData[] = [
  {
    verb: 'Учить / Выучить',
    translation: 'Imparare / Studiare (specifico)',
    usage: 'Accusativo (что?). Studio di una materia o imparare a memoria (poesie, parole).',
    exampleRu: 'Я учу новые слова каждый день.',
    exampleIt: 'Imparo nuove parole ogni giorno.',
    icon: Brain,
    imperfective: {
      verb: 'Учить',
      conjugation: {
        presentFuture: ['учу́', 'у́чишь', 'у́чит', 'у́чим', 'у́чите', 'у́чат'],
        past: ['учи́л', 'учи́ла', 'учи́ло', 'учи́ли']
      }
    },
    perfective: {
      verb: 'Выучить',
      conjugation: {
        presentFuture: ['вы́учу', 'вы́учишь', 'вы́учит', 'вы́учим', 'вы́учите', 'вы́учат'],
        past: ['вы́учил', 'вы́учила', 'вы́учило', 'вы́учили']
      }
    }
  },
  {
    verb: 'Изучать / Изучить',
    translation: 'Studiare (approfonditamente)',
    usage: 'Accusativo (что?). Studio profondo, accademico. Più formale di учить.',
    exampleRu: 'Учёные изучают космос.',
    exampleIt: 'Gli scienziati studiano lo spazio.',
    icon: BookOpen,
    imperfective: {
      verb: 'Изучать',
      conjugation: {
        presentFuture: ['изуча́ю', 'изуча́ешь', 'изуча́ет', 'изуча́ем', 'изуча́ете', 'изуча́ют'],
        past: ['изуча́л', 'изуча́ла', 'изуча́ло', 'изуча́ли']
      }
    },
    perfective: {
      verb: 'Изучить',
      conjugation: {
        presentFuture: ['изучу́', 'изу́чишь', 'изу́чит', 'изу́чим', 'изу́чите', 'изу́чат'],
        past: ['изучи́л', 'изучи́ла', 'изучи́ло', 'изучи́ли']
      }
    }
  },
  {
    verb: 'Учить / Научить',
    translation: 'Insegnare (a qualcuno)',
    usage: 'Accusativo (кого? - pers.) + Dativo (чему? - materia) O Infinito.',
    exampleRu: 'Отец учит сына плавать.',
    exampleIt: 'Il padre insegna al figlio a nuotare.',
    icon: Users,
    imperfective: {
      verb: 'Учить',
      conjugation: {
        presentFuture: ['учу́', 'у́чишь', 'у́чит', 'у́чим', 'у́чите', 'у́чат'],
        past: ['учи́л', 'учи́ла', 'учи́ло', 'учи́ли']
      }
    },
    perfective: {
      verb: 'Научить',
      conjugation: {
        presentFuture: ['научу́', 'нау́чишь', 'нау́чит', 'нау́чим', 'нау́чите', 'нау́чат'],
        past: ['научи́л', 'научи́ла', 'научи́ло', 'научи́ли']
      }
    }
  }
];

const imperfectiveOnly: VerbData[] = [
  {
    verb: 'Учиться',
    translation: 'Studiare (essere studente)',
    usage: '1. Luogo (где?): univ/scuola. 2. Modo (как?): bene/male. 3. + Inf: Imparare a.',
    exampleRu: 'Мой брат учится в университете.',
    exampleIt: 'Mio fratello studia all\'università.',
    icon: School,
    imperfective: {
      verb: 'Учиться',
      conjugation: {
        presentFuture: ['учу́сь', 'у́чишься', 'у́чится', 'у́чимся', 'у́читесь', 'у́чатся'],
        past: ['учи́лся', 'учи́лась', 'учи́лось', 'учи́лись']
      }
    }
  },
  {
    verb: 'Заниматься',
    translation: 'Studiare (fare i compiti)',
    usage: '1. Studiare sui libri. 2. Strumentale (чем?): Praticare sport/musica.',
    exampleRu: 'Я занимаюсь в библиотеке каждый вечер.',
    exampleIt: 'Studio in biblioteca ogni sera.',
    icon: PenTool,
    imperfective: {
      verb: 'Заниматься',
      conjugation: {
        presentFuture: ['занима́юсь', 'занима́ешься', 'занима́ется', 'занима́емся', 'занима́етесь', 'занима́ются'],
        past: ['занима́лся', 'занима́лась', 'занима́лось', 'занима́лись']
      }
    }
  },
  {
    verb: 'Преподавать',
    translation: 'Insegnare (professione)',
    usage: 'Accusativo (что? - materia) o senza oggetto. Attività del docente.',
    exampleRu: 'Она преподаёт русский язык в школе.',
    exampleIt: 'Lei insegna russo a scuola.',
    icon: GraduationCap,
    imperfective: {
      verb: 'Преподавать',
      conjugation: {
        presentFuture: ['преподаю́', 'преподаёшь', 'преподаёт', 'преподаём', 'преподаёте', 'преподаю́т'],
        past: ['преподава́л', 'преподава́ла', 'преподава́ло', 'преподава́ли']
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
      <div className={`font-bold uppercase tracking-wider mb-2 ${headerColor} border-b ${isBlue ? 'border-blue-100' : 'border-red-100'} pb-1`}>
        {title}
      </div>
      
      <div className="mb-4">
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>Presente / Futuro</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
            <div key={pronoun} className="flex justify-between items-baseline border-b border-dashed border-gray-100 last:border-0 pb-0.5">
              <span className="text-xs text-gray-400 mr-2">{pronoun}</span>
              <span className="font-medium text-slate-800">{data.presentFuture[idx]}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`text-[10px] font-bold uppercase mb-1 opacity-70 ${subHeaderColor}`}>Passato</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Он</span>
            <span className="font-medium text-slate-800">{data.past[0]}</span>
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Она</span>
            <span className="font-medium text-slate-800">{data.past[1]}</span>
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Оно</span>
            <span className="font-medium text-slate-800">{data.past[2]}</span>
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-0.5">
            <span className="text-xs text-gray-400 mr-2">Они</span>
            <span className="font-medium text-slate-800">{data.past[3]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VerbCard = ({ item, colorTheme }: { item: VerbData, colorTheme: 'blue' | 'red' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isBlue = colorTheme === 'blue';
  const colorClass = isBlue 
    ? 'bg-blue-50/50 border-blue-200 text-blue-900' 
    : 'bg-red-50/50 border-red-200 text-red-900';
  const iconColor = isBlue ? 'text-blue-700' : 'text-red-700';

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
          <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
            {item.verb}
            <ChevronDown size={18} className={`transition-transform duration-300 opacity-40 ${isExpanded ? 'rotate-180' : ''}`} />
          </h3>
          <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
            <item.icon size={20} className={iconColor} />
          </div>
        </div>

        <div className="mb-3">
          <span className="text-base font-bold text-slate-700 block mb-1 border-b border-slate-50 pb-1">
            {item.translation}
          </span>
          <p className="text-xs text-slate-600 leading-snug whitespace-pre-line">
            {item.usage}
          </p>
        </div>

        <div className="mt-auto bg-slate-50/50 p-3 rounded-lg border border-slate-100">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Esempio</div>
          <div className="text-sm font-medium text-slate-800">{item.exampleRu}</div>
          <div className="text-xs italic text-slate-500">{item.exampleIt}</div>
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
                colorTheme={isBlue ? 'blue' : 'red'} // Imperfective is always left
              />
              {item.perfective && (
                <ConjugationTable 
                  title={item.perfective.verb} 
                  data={item.perfective.conjugation} 
                  colorTheme="blue" // Perfective is always blue/right in pairs
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const LearnTeachChart = () => {
  return (
    <section className="my-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-2 text-gray-800 underline decoration-teal-500 underline-offset-8">
        Imparare e Insegnare
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm italic">
        (Учиться и Учить)
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Aspectual Pairs Column (Blue) */}
        <div>
          <div className="mb-6 sticky top-4 z-10 bg-white pb-2 pt-2">
            <h3 className="text-xl font-bold text-blue-900 bg-blue-100/50 py-2 rounded-lg border-2 border-blue-200 text-center shadow-sm">
              Coppie Aspettuali
            </h3>
          </div>
          <div className="space-y-4">
            {aspectPairs.map((verb) => (
              <VerbCard key={verb.verb} item={verb} colorTheme="blue" />
            ))}
          </div>
        </div>

        {/* Imperfective Only Column (Red) */}
        <div>
          <div className="mb-6 sticky top-4 z-10 bg-white pb-2 pt-2">
            <h3 className="text-xl font-bold text-red-900 bg-red-100/50 py-2 rounded-lg border-2 border-red-200 text-center shadow-sm">
              Solo Imperfettivo
            </h3>
          </div>
          <div className="space-y-4">
            {imperfectiveOnly.map((verb) => (
              <VerbCard key={verb.verb} item={verb} colorTheme="red" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearnTeachChart;