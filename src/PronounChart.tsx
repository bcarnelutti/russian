import { motion } from 'framer-motion';

const cases = [
  { name: 'Nominativo', ru: 'Именительный', question: 'кто? что?' },
  { name: 'Genitivo', ru: 'Родительный', question: 'кого? чего?' },
  { name: 'Dativo', ru: 'Дательный', question: 'кому? чему?' },
  { name: 'Accusativo', ru: 'Винительный', question: 'кого? что?' },
  { name: 'Strumentale', ru: 'Творительный', question: 'кем? чем?' },
  { name: 'Prepositivo', ru: 'Предложный', question: 'о ком? о чём?' },
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
  return (
    <div className="space-y-12">
      {/* 1. Personal Pronouns */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
          Pronomi Personali (Личные местоимения)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/5">Caso</th>
                <th className="p-4 text-indigo-600 font-bold w-1/5">Maschile (Он)</th>
                <th className="p-4 text-red-600 font-bold w-1/5">Femminile (Она)</th>
                <th className="p-4 text-emerald-600 font-bold w-1/5">Neutro (Оно)</th>
                <th className="p-4 text-amber-600 font-bold w-1/5">Plurale (Они)</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, index) => (
                <motion.tr 
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-gray-800">{c.name}</div>
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
          <p className="font-bold mb-2">Nota sulla "Н" iniziale:</p>
          <p>
            Quando i pronomi di 3ª persona sono usati dopo una preposizione, aggiungono una <strong>н</strong> iniziale.
            <br/>
            Es: <em>Я вижу <strong>его</strong></em> (Lo vedo - senza preposizione) vs <em>Я иду <strong>к нему</strong></em> (Vado da lui - con preposizione).
          </p>
        </div>
      </section>

      {/* 2. Который */}
      <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[800px]">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-indigo-500 underline-offset-8">
          Местоимение "Который" (Il pronome relativo "che/il quale")
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-gray-500 font-medium w-1/5">Caso</th>
                <th className="p-4 text-indigo-600 font-bold w-1/5">Maschile (Он)</th>
                <th className="p-4 text-red-600 font-bold w-1/5">Femminile (Она)</th>
                <th className="p-4 text-emerald-600 font-bold w-1/5">Neutro (Оно)</th>
                <th className="p-4 text-amber-600 font-bold w-1/5">Plurale (Они)</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, index) => (
                <motion.tr 
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-gray-800">{c.name}</div>
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
          <h3 className="text-xl font-bold text-slate-800 mb-4">Note Grammaticali</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Который</strong> si comporta come un aggettivo forte.
            </li>
            <li>
              Concorda in <strong>genere e numero</strong> con il sostantivo a cui si riferisce (l'antecedente).
            </li>
            <li>
              Il <strong>caso</strong> dipende dalla funzione che svolge nella frase subordinata (la frase relativa).
            </li>
            <li>
              All'accusativo maschile singolare e plurale:
              <ul className="list-circle pl-5 mt-1 text-sm text-slate-600">
                <li>Inanimato = Nominativo (который / которые)</li>
                <li>Animato = Genitivo (которого / которых)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PronounChart;
