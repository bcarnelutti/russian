import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { underlineStress } from './utils/textUtils';

const casesData = [
  { 
    id: 'nominative',
    ru: 'Имени́тельный', 
    question: 'кто? что?', 
    rows: {
      m: { adj: '-ый / -ий', noun: 'Ø / -й / -ь' },
      n: { adj: '-ое / -ее', noun: '-о / -е' },
      f: { adj: '-ая / -яя', noun: '-а / -я / -ь' },
      pl: { adj: '-ые / -ие', noun: '-ы / -и / -а / -я' }
    }
  },
  { 
    id: 'genitive',
    ru: 'Роди́тельный', 
    question: 'кого? чего?', 
    rows: {
      m: { adj: '-ого / -его', noun: '-а / -я' },
      n: { adj: '-ого / -его', noun: '-а / -я' },
      f: { adj: '-ой / -ей', noun: '-ы / -и' },
      pl: { adj: '-ых / -их', noun: 'Ø / -ов / -ев / -ей' }
    }
  },
  { 
    id: 'dative',
    ru: 'Да́тельный', 
    question: 'кому? чему?', 
    rows: {
      m: { adj: '-ому / -ему', noun: '-у / -ю' },
      n: { adj: '-ому / -ему', noun: '-у / -ю' },
      f: { adj: '-ой / -ей', noun: '-е / -и' },
      pl: { adj: '-ым / -им', noun: '-ам / -ям' }
    }
  },
  { 
    id: 'accusative',
    ru: 'Вини́тельный', 
    question: 'кого? что?', 
    rows: {
      m: { adj: 'Inan=Nom / Anim=Gen', noun: 'Inan=Nom / Anim=Gen' },
      n: { adj: '= Nom', noun: '= Nom' },
      f: { adj: '-ую / -юю', noun: '-у / -ю' },
      pl: { adj: 'Inan=Nom / Anim=Gen', noun: 'Inan=Nom / Anim=Gen' }
    }
  },
  { 
    id: 'instrumental',
    ru: 'Твори́тельный', 
    question: 'кем? чем?', 
    rows: {
      m: { adj: '-ым / -им', noun: '-ом / -ем' },
      n: { adj: '-ым / -им', noun: '-ом / -ем' },
      f: { adj: '-ой / -ей', noun: '-ой / -ей (-ью)' },
      pl: { adj: '-ыми / -ими', noun: '-ами / -ями' }
    }
  },
  { 
    id: 'prepositional',
    ru: 'Предло́жный', 
    question: 'о ком? о чём?', 
    rows: {
      m: { adj: '-ом / -ем', noun: '-е / -и' },
      n: { adj: '-ом / -ем', noun: '-е / -и' },
      f: { adj: '-ой / -ей', noun: '-е / -и' },
      pl: { adj: '-ых / -их', noun: '-ах / -ях' }
    }
  }
];

const CasesChart = () => {
  const { t } = useLanguage();
  const notes = t('cases.notes') as string[];

  return (
    <section className="my-12 p-2 md:p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[800px] overflow-x-auto">
      <h2 className="text-4xl font-serif text-center mb-4 text-gray-800 underline decoration-indigo-500 underline-offset-8">
        {t('cases.title')}
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
        {t('cases.subtitle')}
      </p>

      <div className="min-w-[1000px]">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 mb-4 text-center font-bold text-lg sticky top-0 bg-white z-10 pb-4 border-b-2 border-gray-100">
          <div className="text-left pl-4 text-gray-400 font-medium">{t('cases.columns.case')}</div>
          <div className="text-indigo-700">{t('cases.columns.masculine')}</div>
          <div className="text-emerald-700">{t('cases.columns.neuter')}</div>
          <div className="text-rose-700">{t('cases.columns.feminine')}</div>
          <div className="text-amber-700">{t('cases.columns.plural')}</div>
        </div>

        <div className="space-y-4">
          {casesData.map((c, index) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 items-stretch border-b border-gray-100 pb-4 last:border-0 hover:bg-slate-50 transition-colors rounded-xl p-2"
            >
              {/* Case Header Column */}
              <div className="flex flex-col justify-center pl-2">
                <div className="text-xl font-bold text-gray-800">{t(`cases.list.${c.id}.name`)}</div>
                <div className="text-sm text-indigo-500 font-medium opacity-80" dangerouslySetInnerHTML={{ __html: underlineStress(c.ru) }} />
                <div className="text-xs text-gray-400 italic mt-1">{c.question}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium bg-slate-100 w-fit px-2 py-0.5 rounded">{t(`cases.list.${c.id}.desc`)}</div>
              </div>

              {/* Masculine */}
              <div className="flex flex-col justify-center bg-indigo-50/50 rounded-lg p-3 text-center border border-indigo-100">
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">{t('cases.rowLabels.noun')}</span>
                  <span className="font-medium text-indigo-800">{c.rows.m.noun}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">{t('cases.rowLabels.adj')}</span>
                  <span className="font-bold text-indigo-900">{c.rows.m.adj}</span>
                </div>
              </div>

              {/* Neuter */}
              <div className="flex flex-col justify-center bg-emerald-50/50 rounded-lg p-3 text-center border border-emerald-100">
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">{t('cases.rowLabels.noun')}</span>
                  <span className="font-medium text-emerald-800">{c.rows.n.noun}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">{t('cases.rowLabels.adj')}</span>
                  <span className="font-bold text-emerald-900">{c.rows.n.adj}</span>
                </div>
              </div>

              {/* Feminine */}
              <div className="flex flex-col justify-center bg-rose-50/50 rounded-lg p-3 text-center border border-rose-100">
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block">{t('cases.rowLabels.noun')}</span>
                  <span className="font-medium text-rose-800">{c.rows.f.noun}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block">{t('cases.rowLabels.adj')}</span>
                  <span className="font-bold text-rose-900">{c.rows.f.adj}</span>
                </div>
              </div>

              {/* Plural */}
              <div className="flex flex-col justify-center bg-amber-50/50 rounded-lg p-3 text-center border border-amber-100">
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">{t('cases.rowLabels.noun')}</span>
                  <span className="font-medium text-amber-800">{c.rows.pl.noun}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">{t('cases.rowLabels.adj')}</span>
                  <span className="font-bold text-amber-900">{c.rows.pl.adj}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm text-slate-600">
        <h4 className="font-bold text-slate-800 mb-2">{t('cases.notesTitle')}</h4>
        <ul className="list-disc pl-5 space-y-1">
          {notes.map((note, idx) => (
             <li key={idx} dangerouslySetInnerHTML={{ __html: note }} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CasesChart;