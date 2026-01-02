import { motion } from 'framer-motion';
import { vocabularyData } from './vocabularyData';
import { useLanguage } from './LanguageContext';
import { Shirt, Stethoscope, Plane, GraduationCap, User, Trees, Gift } from 'lucide-react';

interface VocabularyChartProps {
  topic: keyof typeof vocabularyData;
}

const icons: Record<string, React.ElementType> = {
  clothing: Shirt,
  health: Stethoscope,
  travel: Plane,
  education: GraduationCap,
  body: User,
  nature: Trees,
  celebrations: Gift
};

const colors: Record<string, string> = {
  clothing: 'text-pink-600 bg-pink-50 border-pink-100',
  health: 'text-red-600 bg-red-50 border-red-100',
  travel: 'text-sky-600 bg-sky-50 border-sky-100',
  education: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  body: 'text-orange-600 bg-orange-50 border-orange-100',
  nature: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  celebrations: 'text-purple-600 bg-purple-50 border-purple-100'
};

const VocabularyChart = ({ topic }: VocabularyChartProps) => {
  const { t } = useLanguage();
  const items = vocabularyData[topic];
  const Icon = icons[topic] || User;
  const colorClass = colors[topic] || 'text-slate-600 bg-slate-50 border-slate-100';

  // Extract base color name for dynamic usage if needed, or just use specific classes
  // Simple styling for now

  return (
    <section className="my-8 max-w-4xl mx-auto">
      <div className={`p-8 rounded-2xl border-2 shadow-sm mb-8 flex items-center justify-center gap-4 ${colorClass}`}>
        <Icon size={40} />
        <h2 className="text-4xl font-serif font-bold">
          {t(`vocabularyMenu.${topic}`)}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <span className="text-xl font-bold text-slate-800 mb-1">{item.ru}</span>
            <span className="text-sm text-slate-500 font-medium">{t(`vocabulary.${topic}.${item.id}`)}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VocabularyChart;
