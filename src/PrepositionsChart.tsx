import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { underlineStress } from './utils/textUtils';

const PrepositionsChart = () => {
  const { t } = useLanguage();

  const caseGroups = [
    {
      id: 'genitive',
      color: 'bg-red-50 border-red-200 text-red-900',
      titleColor: 'text-red-700',
      items: ['bez', 'dlya', 'do', 'iz', 'ot', 'u', 's_gen', 'posle']
    },
    {
      id: 'dative',
      color: 'bg-blue-50 border-blue-200 text-blue-900',
      titleColor: 'text-blue-700',
      items: ['k', 'po']
    },
    {
      id: 'accusative',
      color: 'bg-green-50 border-green-200 text-green-900',
      titleColor: 'text-green-700',
      items: ['v_acc', 'na_acc', 'za_acc', 'cherez']
    },
    {
      id: 'instrumental',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      titleColor: 'text-orange-700',
      items: ['s_instr', 'za_instr', 'pod', 'nad']
    },
    {
      id: 'prepositional',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
      titleColor: 'text-purple-700',
      items: ['v_prep', 'na_prep', 'o', 'pri']
    }
  ];

  return (
    <section className="my-12 p-4 md:p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
      <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-emerald-500 underline-offset-8">
        {t('prepositions.title')}
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
        {t('prepositions.subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {caseGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-2xl border-2 p-6 shadow-sm hover:shadow-md transition-all ${group.color}`}
          >
            <h3 className={`text-xl font-bold mb-4 border-b-2 border-current pb-2 opacity-80 ${group.titleColor}`}>
              {t(`prepositions.cases.${group.id}`)}
            </h3>
            
            <div className="space-y-3">
              {group.items.map((itemKey) => (
                <div key={itemKey} className="bg-white/60 p-3 rounded-lg flex flex-col gap-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-2xl font-bold text-slate-800" dangerouslySetInnerHTML={{ __html: underlineStress(t(`prepositions.list.${itemKey}.ru`)) }} />
                    <span className="text-sm font-medium opacity-80 italic text-right">
                      {t(`prepositions.list.${itemKey}.meaning`)}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 border-t border-black/5 pt-1">
                     <div className="mb-1 italic" dangerouslySetInnerHTML={{ __html: underlineStress(t(`prepositions.list.${itemKey}.example`)) }} />
                     {Array.isArray(t(`prepositions.list.${itemKey}.verbs`)) && (
                       <div className="flex flex-wrap gap-1 mt-2">
                         {(t(`prepositions.list.${itemKey}.verbs`) as string[]).map((verb, idx) => (
                           <span key={idx} className="bg-black/5 px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-600 border border-black/5" dangerouslySetInnerHTML={{ __html: underlineStress(verb) }} />
                         ))}
                       </div>
                     )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrepositionsChart;
