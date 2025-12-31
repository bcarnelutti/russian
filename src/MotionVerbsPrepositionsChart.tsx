import { motion } from 'framer-motion';
import { 
  LogIn, LogOut, MapPin, ExternalLink, ArrowRightToLine, ArrowLeftFromLine, 
  Flag, ArrowRightLeft, StepForward, CornerDownRight, RotateCw
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface PrefixData {
  id: string;
  prefixDisplay: string;
  icon: React.ElementType;
  imp: string;
  perf: string;
  color: string;
}

const prefixes: PrefixData[] = [
  {
    id: 'v',
    prefixDisplay: 'В- (ВО-)', 
    icon: LogIn, 
    imp: 'Входить', 
    perf: 'Войти',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-900'
  },
  {
    id: 'vy',
    prefixDisplay: 'ВЫ-', 
    icon: LogOut, 
    imp: 'Выходить', 
    perf: 'Выйти',
    color: 'bg-rose-50 border-rose-200 text-rose-900'
  },
  {
    id: 'pri',
    prefixDisplay: 'ПРИ-', 
    icon: MapPin, 
    imp: 'Приходить', 
    perf: 'Прийти',
    color: 'bg-blue-50 border-blue-200 text-blue-900'
  },
  {
    id: 'u',
    prefixDisplay: 'У-', 
    icon: ExternalLink, 
    imp: 'Уходить', 
    perf: 'Уйти',
    color: 'bg-slate-50 border-slate-200 text-slate-900'
  },
  {
    id: 'pod',
    prefixDisplay: 'ПОД-', 
    icon: ArrowRightToLine, 
    imp: 'Подходить', 
    perf: 'Подойти',
    color: 'bg-teal-50 border-teal-200 text-teal-900'
  },
  {
    id: 'ot',
    prefixDisplay: 'ОТ-', 
    icon: ArrowLeftFromLine, 
    imp: 'Отходить', 
    perf: 'Отойти',
    color: 'bg-amber-50 border-amber-200 text-amber-900'
  },
  {
    id: 'do',
    prefixDisplay: 'ДО-', 
    icon: Flag, 
    imp: 'Доходить', 
    perf: 'Дойти',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-900'
  },
  {
    id: 'pere',
    prefixDisplay: 'ПЕРЕ-', 
    icon: ArrowRightLeft, 
    imp: 'Переходить', 
    perf: 'Перейти',
    color: 'bg-purple-50 border-purple-200 text-purple-900'
  },
  {
    id: 'pro',
    prefixDisplay: 'ПРО-', 
    icon: StepForward, 
    imp: 'Проходить', 
    perf: 'Пройти',
    color: 'bg-cyan-50 border-cyan-200 text-cyan-900'
  },
  {
    id: 'za',
    prefixDisplay: 'ЗА-', 
    icon: CornerDownRight, 
    imp: 'Заходить', 
    perf: 'Зайти',
    color: 'bg-lime-50 border-lime-200 text-lime-900'
  },
  {
    id: 'ob',
    prefixDisplay: 'ОБ-', 
    icon: RotateCw, 
    imp: 'Обходить', 
    perf: 'Обойти',
    color: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-900'
  },
];

const MotionVerbsPrepositionsChart = () => {
  const { t } = useLanguage();

  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[800px]">
      <h2 className="text-4xl font-serif text-center mb-6 text-gray-800 underline decoration-sky-500 underline-offset-8">
        {t('motionPrepositions.title')}
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
        {t('motionPrepositions.description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prefixes.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-2xl border-2 ${item.color} shadow-sm flex flex-col justify-between h-[280px]`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black opacity-80">{item.prefixDisplay}</span>
                <div className="p-3 bg-white rounded-full shadow-sm bg-opacity-60">
                  <item.icon size={28} className="opacity-80" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{t(`motionPrepositions.prefixes.${item.id}.meaning`)}</h3>
              <p className="text-sm font-medium opacity-70 italic mb-6">{t(`motionPrepositions.prefixes.${item.id}.desc`)}</p>
            </div>

            <div className="bg-white bg-opacity-60 rounded-xl p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-50 mb-1">{t('motionPrepositions.imperfectiveLabel')}</div>
                  <div className="font-bold text-lg">{item.imp}</div>
                </div>
                <div className="border-l border-gray-300/50">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-50 mb-1">{t('motionPrepositions.perfectiveLabel')}</div>
                  <div className="font-bold text-lg">{item.perf}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('motionPrepositions.formation')}</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-lg">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1 w-full text-center">
            <span className="block text-sm text-slate-500 mb-2 font-bold uppercase tracking-wider">{t('motionPrepositions.imperfectiveLabel')}</span>
            <span className="text-slate-800">{t('motionPrepositions.imperfectiveFormula')}</span>
            <div className="mt-2 text-sm text-slate-400">Es: в- + ходить = входить</div>
          </div>
          <div className="text-slate-400 font-bold text-2xl">vs</div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex-1 w-full text-center">
            <span className="block text-sm text-slate-500 mb-2 font-bold uppercase tracking-wider">{t('motionPrepositions.perfectiveLabel')}</span>
            <span className="text-slate-800">{t('motionPrepositions.perfectiveFormula')}</span>
            <div className="mt-2 text-sm text-slate-400">Es: в- + идти = войти</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionVerbsPrepositionsChart;