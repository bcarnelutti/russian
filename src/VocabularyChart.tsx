import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vocabularyData, type VocabItem, type VerbConjugation } from './vocabularyData';
import { useLanguage } from './LanguageContext';
import { getDeclension, CASES, type DeclensionResult } from './utils/declension';
import { underlineStress } from './utils/textUtils';
import { translations } from './translations';
import { Shirt, Stethoscope, Plane, GraduationCap, User, Trees, Gift, X } from 'lucide-react';

const it = translations.it;

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

const NounDeclensionTable = ({ declension }: { declension: DeclensionResult }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b-2 border-slate-100 text-slate-400 uppercase tracking-wider text-xs">
          <th className="pb-3 pl-2">Caso</th>
          <th className="pb-3">Singolare</th>
          <th className="pb-3">Plurale</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-50">
        {CASES.map((caseName, idx) => (
          <tr key={caseName} className="hover:bg-slate-50 transition-colors">
            <td className="py-3 pl-2 font-medium text-slate-500">{caseName}</td>
            <td className="py-3 font-bold text-indigo-900" dangerouslySetInnerHTML={{ __html: underlineStress(declension.singular[idx]) }} />
            <td className="py-3 font-bold text-emerald-900" dangerouslySetInnerHTML={{ __html: underlineStress(declension.plural[idx]) }} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const VerbConjugationTable = ({ conjugation }: { conjugation: VerbConjugation }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">
          {it.learnTeach.presentFuture}
        </div>
        <div className="grid grid-cols-2 grid-flow-col grid-rows-3 gap-x-8 gap-y-2 text-sm max-w-md">
          {['Я', 'Ты', 'Он/Она', 'Мы', 'Вы', 'Они'].map((pronoun, idx) => (
            <div key={pronoun} className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-1">
              <span className="text-gray-400 font-medium w-16">{pronoun}</span>
              <span className="font-bold text-slate-800 text-lg" dangerouslySetInnerHTML={{ __html: underlineStress(conjugation.presentFuture[idx]) }} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">
          {it.learnTeach.past}
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm max-w-md">
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-1">
            <span className="text-gray-400 font-medium w-16">Он</span>
            <span className="font-bold text-slate-800 text-lg" dangerouslySetInnerHTML={{ __html: underlineStress(conjugation.past[0]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-1">
            <span className="text-gray-400 font-medium w-16">Она</span>
            <span className="font-bold text-slate-800 text-lg" dangerouslySetInnerHTML={{ __html: underlineStress(conjugation.past[1]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-1">
            <span className="text-gray-400 font-medium w-16">Оно</span>
            <span className="font-bold text-slate-800 text-lg" dangerouslySetInnerHTML={{ __html: underlineStress(conjugation.past[2]) }} />
          </div>
          <div className="flex justify-between items-baseline border-b border-dashed border-gray-100 pb-1">
            <span className="text-gray-400 font-medium w-16">Они</span>
            <span className="font-bold text-slate-800 text-lg" dangerouslySetInnerHTML={{ __html: underlineStress(conjugation.past[3]) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const VocabularyChart = ({ topic }: VocabularyChartProps) => {
  const { t } = useLanguage();
  const [selectedWord, setSelectedWord] = useState<VocabItem | null>(null);
  
  // Sort items alphabetically by Russian name
  const items = [...vocabularyData[topic]].sort((a, b) => a.ru.localeCompare(b.ru));
  
  const Icon = icons[topic] || User;
  const colorClass = colors[topic] || 'text-slate-600 bg-slate-50 border-slate-100';

  const declension: DeclensionResult | null = selectedWord ? getDeclension(selectedWord) : null;

  return (
    <section className="my-8 max-w-4xl mx-auto relative">
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
            onClick={() => setSelectedWord(item)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
          >
            <span className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors" dangerouslySetInnerHTML={{ __html: underlineStress(item.ru) }} />
            <span className="text-sm text-slate-500 font-medium">{t(`vocabulary.${topic}.${item.id}`)}</span>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedWord(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center sticky top-0 z-10">
                <div>
                  <h3 className="text-3xl font-black text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(selectedWord.ru) }} />
                  <p className="text-slate-500 font-medium">{t(`vocabulary.${topic}.${selectedWord.id}`)}</p>
                </div>
                <button 
                  onClick={() => setSelectedWord(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-500" />
                </button>
              </div>

              <div className="p-6">
                {selectedWord.conjugation ? (
                  <VerbConjugationTable conjugation={selectedWord.conjugation} />
                ) : declension ? (
                  <NounDeclensionTable declension={declension} />
                ) : (
                  <div className="text-center py-8 text-slate-400 italic">
                    Declension/Conjugation not available for this word.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VocabularyChart;