import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const cases = [
  { id: 'nominative', ru: 'Именительный', question: 'кто? что?' },
  { id: 'genitive', ru: 'Родительный', question: 'кого? чего?' },
  { id: 'dative', ru: 'Дательный', question: 'кому? чему?' },
  { id: 'accusative', ru: 'Винительный', question: 'кого? что?' },
  { id: 'instrumental', ru: 'Творительный', question: 'кем? чем?' },
  { id: 'prepositional', ru: 'Предложный', question: 'о ком? о чём?' },
];

const personalPronouns = {
  masculine: ['он', 'его / него', 'ему / нему', 'его / него', 'им / ним', 'нём'],
  feminine: ['она', 'её / неё', 'ей / ней', 'её / неё', 'ей / ней', 'ней'],
  neuter: ['оно', 'его / него', 'ему / нему', 'его / него', 'им / ним', 'нём'],
  plural: ['они', 'их / них', 'им / ним', 'их / них', 'ими / ними', 'них'],
};

const declensions = {
  masculine: ['который', 'которого', 'которому', 'который / которого', 'которым', 'котором'],
  feminine: ['которая', 'которой', 'которой', 'которую', 'которой', 'которой'],
  neuter: ['которое', 'которого', 'которому', 'которое', 'которым', 'котором'],
  plural: ['которые', 'которых', 'которым', 'которые / которых', 'которыми', 'которых'],
};

const PronounChart = () => {
  const { t } = useLanguage();
  const grammarNotes = t('pronouns.grammarNotes') as string[];

  return (
    <div className="space-y-12">
      {/* 1. Personal Pronouns */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
          {t('pronouns.personalTitle')}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/5">{t('cases.columns.case')}</th>
                <th className="p-4 text-indigo-600 font-bold w-1/5">{t('cases.columns.masculine')}</th>
                <th className="p-4 text-red-600 font-bold w-1/5">{t('cases.columns.feminine')}</th>
                <th className="p-4 text-emerald-600 font-bold w-1/5">{t('cases.columns.neuter')}</th>
                <th className="p-4 text-amber-600 font-bold w-1/5">{t('cases.columns.plural')}</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, index) => (
                <motion.tr 
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-gray-800">{t(`cases.list.${c.id}.name`)}</div>
                    <div className="text-xs text-gray-400">{c.ru}</div>
                  </td>
                  <td className="p-4 text-lg text-indigo-900 font-medium">
                    {personalPronouns.masculine[index]}
                  </td>
                  <td className="p-4 text-lg text-red-900 font-medium">
                    {personalPronouns.feminine[index]}
                  </td>
                  <td className="p-4 text-lg text-emerald-900 font-medium">
                    {personalPronouns.neuter[index]}
                  </td>
                  <td className="p-4 text-lg text-amber-900 font-medium">
                    {personalPronouns.plural[index]}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100 text-sm text-blue-800">
          <p className="font-bold mb-2">{t('pronouns.noteH')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('pronouns.noteHText') }} />
        </div>
      </section>

      {/* 2. Который */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[800px]">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-indigo-500 underline-offset-8">
          {t('pronouns.relativeTitle')}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/5">{t('cases.columns.case')}</th>
                <th className="p-4 text-indigo-600 font-bold w-1/5">{t('cases.columns.masculine')}</th>
                <th className="p-4 text-red-600 font-bold w-1/5">{t('cases.columns.feminine')}</th>
                <th className="p-4 text-emerald-600 font-bold w-1/5">{t('cases.columns.neuter')}</th>
                <th className="p-4 text-amber-600 font-bold w-1/5">{t('cases.columns.plural')}</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, index) => (
                <motion.tr 
                  key={c.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-gray-800">{t(`cases.list.${c.id}.name`)}</div>
                    <div className="text-xs text-gray-400">{c.ru}</div>
                    <div className="text-xs text-gray-300 italic">{c.question}</div>
                  </td>
                  <td className="p-4 text-lg text-indigo-900 font-medium">
                    {declensions.masculine[index]}
                  </td>
                  <td className="p-4 text-lg text-red-900 font-medium">
                    {declensions.feminine[index]}
                  </td>
                  <td className="p-4 text-lg text-emerald-900 font-medium">
                    {declensions.neuter[index]}
                  </td>
                  <td className="p-4 text-lg text-amber-900 font-medium">
                    {declensions.plural[index]}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">{t('pronouns.grammarNotesTitle')}</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {grammarNotes.map((note, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: note }} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PronounChart;