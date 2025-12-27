import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PronounChart from './PronounChart';
import MotionVerbsChart from './MotionVerbsChart';
import MotionVerbsPrepositionsChart from './MotionVerbsPrepositionsChart';
import CasesChart from './CasesChart';
import LearnTeachChart from './LearnTeachChart';

// --- Context Definition ---
interface ChartContextType {
  // Navigation State
  view: 'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'gerund' | 'participle';
  setView: React.Dispatch<React.SetStateAction<'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'gerund' | 'participle'>>;

  // Gerund State
  imperfectiveStep: number;
  setImperfectiveStep: React.Dispatch<React.SetStateAction<number>>;
  perfectiveStep: number;
  setPerfectiveStep: React.Dispatch<React.SetStateAction<number>>;
  
  // Participle State
  presentStep: number;
  setPresentStep: React.Dispatch<React.SetStateAction<number>>;
  pastStep: number;
  setPastStep: React.Dispatch<React.SetStateAction<number>>;
  activePresentStep: number;
  setActivePresentStep: React.Dispatch<React.SetStateAction<number>>;
  passivePresentStep: number;
  setPassivePresentStep: React.Dispatch<React.SetStateAction<number>>;
  activePastStep: number;
  setActivePastStep: React.Dispatch<React.SetStateAction<number>>;
  passivePastStep: number;
  setPassivePastStep: React.Dispatch<React.SetStateAction<number>>;

  // Global Actions
  expandAll: () => void;
  collapseAll: () => void;
  isAllExpanded: boolean;
}

const ChartContext = createContext<ChartContextType | null>(null);

const ChartProvider = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = useState<'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'gerund' | 'participle'>('verbs_menu');
  const [imperfectiveStep, setImperfectiveStep] = useState(0);
  const [perfectiveStep, setPerfectiveStep] = useState(0);
  const [presentStep, setPresentStep] = useState(0);
  const [pastStep, setPastStep] = useState(0);
  const [activePresentStep, setActivePresentStep] = useState(0);
  const [passivePresentStep, setPassivePresentStep] = useState(0);
  const [activePastStep, setActivePastStep] = useState(0);
  const [passivePastStep, setPassivePastStep] = useState(0);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const expandAll = () => {
    setImperfectiveStep(3);
    setPerfectiveStep(3);
    setPresentStep(1);
    setPastStep(1);
    setActivePresentStep(3);
    setPassivePresentStep(3);
    setActivePastStep(3);
    setPassivePastStep(3);
    setIsAllExpanded(true);
  };

  const collapseAll = () => {
    setImperfectiveStep(0);
    setPerfectiveStep(0);
    setPresentStep(0);
    setPastStep(0);
    setActivePresentStep(0);
    setPassivePresentStep(0);
    setActivePastStep(0);
    setPassivePastStep(0);
    setIsAllExpanded(false);
  };

  return (
    <ChartContext.Provider value={{
      view, setView,
      imperfectiveStep, setImperfectiveStep,
      perfectiveStep, setPerfectiveStep,
      presentStep, setPresentStep,
      pastStep, setPastStep,
      activePresentStep, setActivePresentStep,
      passivePresentStep, setPassivePresentStep,
      activePastStep, setActivePastStep,
      passivePastStep, setPassivePastStep,
      expandAll, collapseAll, isAllExpanded
    }}>
      {children}
    </ChartContext.Provider>
  );
};

const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChartContext must be used within a ChartProvider");
  return context;
};

// --- Components ---

const Navigation = () => {
  const { view, setView } = useChartContext();

  const isVerbsActive = ['verbs_menu', 'motion_verbs', 'motion_verbs_prepositions', 'learn_teach', 'gerund', 'participle'].includes(view);

  return (
    <div className="flex justify-center mb-12 space-x-6 flex-wrap gap-y-4">
      <button
        onClick={() => setView('cases')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          view === 'cases'
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        Casi
      </button>
      <button
        onClick={() => setView('pronouns')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          view === 'pronouns'
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        Pronomi
      </button>
      <button
        onClick={() => setView('verbs_menu')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          isVerbsActive
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        Verbi
      </button>
    </div>
  );
};

const VerbsMenu = () => {
  const { setView } = useChartContext();

  const menuItems = [
    { id: 'motion_verbs', label: 'Verbi di Moto' },
    { id: 'motion_verbs_prepositions', label: 'Verbi di Moto + Prefissi' },
    { id: 'learn_teach', label: 'Imparare e Insegnare' },
    { id: 'gerund', label: 'Gerundio (Деепричастие)' },
    { id: 'participle', label: 'Participio (Причастие)' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setView(item.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all text-left group"
        >
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
            {item.label}
          </h3>
        </motion.button>
      ))}
    </div>
  );
};

const GerundChart = () => {
  const { imperfectiveStep, setImperfectiveStep, perfectiveStep, setPerfectiveStep } = useChartContext();

  const advanceImperfective = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImperfectiveStep(prev => prev === 3 ? 0 : prev + 1);
  };
  
  const advancePerfective = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPerfectiveStep(prev => prev === 3 ? 0 : prev + 1);
  };

  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[400px]">
      <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-red-500 underline-offset-8">Деепричастие (Gerundio)</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-5xl mx-auto">
        
        {/* Imperfective Block */}
        <div className="flex-1 w-full">
          <ParticipleBlock 
            title="Imperfettivo" 
            subtitle="Несовершенный" 
            colorTheme="blue" 
            steps={3}
            currentStep={imperfectiveStep}
            advanceStep={advanceImperfective}
          >
            <div className="text-center text-sm italic text-slate-500 mb-4 bg-white/50 p-2 rounded">
              (azione contemporanea a quella principale)
              <br/>
              <span className="font-bold">Es: leggendo</span>
            </div>

            {imperfectiveStep >= 1 && <StepCard number={1} text="3^ persona plurale presente" example="читать → читают" color="blue" />}
            {imperfectiveStep >= 2 && <StepCard number={2} text="Tolgo -ут/-ют o -ат/-ят" example="читают → чита-" color="blue" />}
            {imperfectiveStep >= 3 && <StepCard number={3} text="Aggiungo -я/-а o -сь/-ясь (rifl.)" example="чита- + я = читая" color="blue" />}
          </ParticipleBlock>
        </div>

        {/* Perfective Block */}
        <div className="flex-1 w-full">
          <ParticipleBlock 
            title="Perfettivo" 
            subtitle="Совершенный" 
            colorTheme="red" 
            steps={3}
            currentStep={perfectiveStep}
            advanceStep={advancePerfective}
          >
             <div className="text-center text-sm italic text-slate-500 mb-4 bg-white/50 p-2 rounded">
              (azione precedente a quella principale)
              <br/>
              <span className="font-bold">Es: avendo letto</span>
            </div>

            {perfectiveStep >= 1 && <StepCard number={1} text="Dall'infinito tolgo -ть/-ти" example="прочитать → прочита-" color="red" />}
            {perfectiveStep >= 2 && <StepCard number={2} text="Aggiungo -в" example="прочита- + в = прочитав" color="red" />}
            {perfectiveStep >= 3 && (
              <div className="space-y-3">
                <StepCard number={3} text="-ши se finisce in consonante" example="принести → принесши" color="red" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0039A6] text-white p-3 rounded-lg text-sm shadow-md"
                >
                  <span className="font-bold block mb-1">-вшись</span>
                  per verbi riflessivi
                  <div className="text-xs text-blue-200 mt-1 italic">Es: умыться → умывшись</div>
                </motion.div>
              </div>
            )}
          </ParticipleBlock>
        </div>

      </div>
    </section>
  );
};

const ParticipleBlock = ({ 
  title, 
  subtitle, 
  colorTheme, 
  currentStep, 
  advanceStep,
  children
}: { 
  title: string, 
  subtitle: string, 
  colorTheme: 'blue' | 'red', 
  steps?: number,
  currentStep: number,
  advanceStep: (e: React.MouseEvent) => void,
  children: React.ReactNode
}) => {
  const isBlue = colorTheme === 'blue';
  const bgColor = isBlue ? 'bg-blue-50' : 'bg-red-50';
  const borderColor = isBlue ? 'border-blue-200' : 'border-red-200';
  const buttonBg = isBlue 
    ? (currentStep > 0 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-200')
    : (currentStep > 0 ? 'bg-[#D52B1E] text-white' : 'bg-white text-[#D52B1E] border-red-200');

  return (
    <div className={`flex-1 flex flex-col items-center p-4 rounded-xl border-2 ${borderColor} ${bgColor} transition-all`}>
      <motion.button
        layout
        onClick={advanceStep}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`px-6 py-2 rounded-lg font-bold text-lg mb-4 shadow-sm border-2 transition-colors ${buttonBg}`}
      >
        {title}
        <span className="block text-xs font-normal opacity-80">{subtitle}</span>
      </motion.button>

      <AnimatePresence mode='wait'>
        {currentStep > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full"
          >
            <div className="flex flex-col space-y-3 w-full">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StepCard = ({ number, text, example, color }: { number: number, text: string, example?: string, color: 'blue' | 'red' }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className={`p-3 rounded-lg border bg-white shadow-sm text-left ${color === 'blue' ? 'border-blue-100' : 'border-red-100'}`}
  >
    <div className={`font-bold text-sm mb-1 ${color === 'blue' ? 'text-blue-800' : 'text-red-800'}`}>
      {number}. {text}
    </div>
    {example && <div className="text-xs text-slate-500 italic ml-4">{example}</div>}
  </motion.div>
);

const ParticipleChart = () => {
  const { 
    presentStep, setPresentStep, 
    pastStep, setPastStep, 
    activePresentStep, setActivePresentStep,
    passivePresentStep, setPassivePresentStep,
    activePastStep, setActivePastStep,
    passivePastStep, setPassivePastStep
  } = useChartContext();

  const togglePresent = () => setPresentStep(prev => prev === 0 ? 1 : 0);
  const togglePast = () => setPastStep(prev => prev === 0 ? 1 : 0);

  // Active Present Actions
  const advanceActivePresent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePresentStep(prev => prev === 3 ? 0 : prev + 1);
  };

  // Passive Present Actions
  const advancePassivePresent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPassivePresentStep(prev => prev === 3 ? 0 : prev + 1);
  };

  // Active Past Actions
  const advanceActivePast = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePastStep(prev => prev === 3 ? 0 : prev + 1);
  };

  // Passive Past Actions
  const advancePassivePast = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPassivePastStep(prev => prev === 3 ? 0 : prev + 1);
  };

  return (
    <section className="my-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
      <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">Причастие (Participio)</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-7xl mx-auto">
        
        {/* --- PAST BRANCH (Left) --- */}
        <motion.div layout className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
          <motion.div 
            onClick={togglePast}
            className={`cursor-pointer p-4 rounded-xl border-2 text-center mb-8 transition-colors ${pastStep > 0 ? 'bg-[#D52B1E] text-white border-red-800 shadow-md' : 'bg-white text-red-600 border-red-200 hover:bg-red-50'}`}
          >
            <h3 className="text-2xl font-bold">Прошедшее время</h3>
            <p className="text-sm opacity-90 italic">Tempo Passato</p>
          </motion.div>

          <AnimatePresence>
            {pastStep > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Active Past */}
                <ParticipleBlock 
                  title="Attivo" 
                  subtitle="Действительное" 
                  colorTheme="blue" 
                  steps={3}
                  currentStep={activePastStep}
                  advanceStep={advanceActivePast}
                >
                  {activePastStep >= 1 && <StepCard number={1} text="Dall'infinito tolgo -ть" example="читать → чита-" color="blue" />}
                  {activePastStep >= 2 && <StepCard number={2} text="Aggiungo -вший (dopo vocale)" example="чита- + вший = читавший" color="blue" />}
                  {activePastStep >= 3 && <StepCard number={3} text="Aggiungo -ший (dopo consonante)" example="нести → несший" color="blue" />}
                </ParticipleBlock>

                {/* Passive Past */}
                <ParticipleBlock 
                  title="Passivo" 
                  subtitle="Страдательное" 
                  colorTheme="red" 
                  steps={3}
                  currentStep={passivePastStep}
                  advanceStep={advancePassivePast}
                >
                  {/* Short Form Box */}
                  <div className="bg-white p-3 rounded-lg border border-red-100 mb-2">
                    <div className="text-xs font-bold text-red-800 uppercase mb-1">Forma Breve (Predicato)</div>
                    <div className="text-xs text-slate-600 mb-1">"Il libro è letto"</div>
                    <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-red-900 bg-red-50 p-2 rounded">
                      <div>-н / -ен</div><div>-на / -ена</div>
                      <div>-но / -ено</div><div>-ны / -ены</div>
                    </div>
                  </div>

                  {/* Steps */}
                  {passivePastStep >= 1 && <StepCard number={1} text="Dall'infinito (solo perfettivi) tolgo -ть" example="прочитать → прочита-" color="red" />}
                  {passivePastStep >= 2 && <StepCard number={2} text="Aggiungo -нный (verbi in -ать/-ять)" example="прочитанный" color="red" />}
                  {passivePastStep >= 3 && <StepCard number={3} text="Aggiungo -енный (verbi in -ить/-ти)" example="построенный" color="red" />}
                </ParticipleBlock>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        {/* --- PRESENT BRANCH (Right) --- */}
        <motion.div layout className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
          <motion.div 
            onClick={togglePresent}
            className={`cursor-pointer p-4 rounded-xl border-2 text-center mb-8 transition-colors ${presentStep > 0 ? 'bg-blue-600 text-white border-blue-800 shadow-md' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'}`}
          >
            <h3 className="text-2xl font-bold">Настоящее время</h3>
            <p className="text-sm opacity-90 italic">Tempo Presente</p>
          </motion.div>

          <AnimatePresence>
            {presentStep > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Active Present */}
                <ParticipleBlock 
                  title="Attivo" 
                  subtitle="Действительное" 
                  colorTheme="blue" 
                  steps={3}
                  currentStep={activePresentStep}
                  advanceStep={advanceActivePresent}
                >
                  {activePresentStep >= 1 && <StepCard number={1} text="3^ persona plurale presente" example="читать → читают" color="blue" />}
                  {activePresentStep >= 2 && <StepCard number={2} text="Tolgo -т" example="читают → читаю-" color="blue" />}
                  {activePresentStep >= 3 && <StepCard number={3} text="Aggiungo -щий" example="читающий (che legge)" color="blue" />}
                </ParticipleBlock>

                {/* Passive Present */}
                <ParticipleBlock 
                  title="Passivo" 
                  subtitle="Страдательное" 
                  colorTheme="red" 
                  steps={3}
                  currentStep={passivePresentStep}
                  advanceStep={advancePassivePresent}
                >
                  {passivePresentStep >= 1 && <StepCard number={1} text="1^ persona plurale presente" example="читать → читаем" color="red" />}
                  {passivePresentStep >= 2 && <StepCard number={2} text="Aggiungo -ый (I coniug.)" example="читаемый (che è letto)" color="red" />}
                  {passivePresentStep >= 3 && <StepCard number={3} text="Aggiungo -ий (II coniug.)" example="видимый (che è visto)" color="red" />}
                </ParticipleBlock>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

const ControlPanel = () => {
  const { expandAll, collapseAll, isAllExpanded, view } = useChartContext();
  
  if (!['gerund', 'participle'].includes(view)) return null;

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isAllExpanded ? collapseAll : expandAll}
        className={`px-6 py-3 rounded-full font-bold shadow-lg transition-all border-2 ${
          isAllExpanded 
            ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
            : 'bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700'
        }`}
      >
        {isAllExpanded ? 'Collapse All' : 'Expand All'}
      </motion.button>
    </div>
  );
};

function App() {
  return (
    <ChartProvider>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <ControlPanel />
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Studiare il Russo
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Schede grammaticali interattive per comprendere le forme verbali e i casi russi.
            </p>
            <Navigation />
          </header>

          <MainContent />
          
          <footer className="mt-24 text-center text-slate-400 text-sm">
            Creato per gli studenti di lingua russa
          </footer>
        </div>
      </div>
    </ChartProvider>
  );
}

const MainContent = () => {
  const { view } = useChartContext();

  if (view === 'verbs_menu') {
    return <VerbsMenu />;
  }

  if (view === 'gerund') {
    return <GerundChart />;
  }

  if (view === 'participle') {
    return <ParticipleChart />;
  }

  if (view === 'pronouns') {
    return <PronounChart />;
  }

  if (view === 'motion_verbs') {
    return <MotionVerbsChart />;
  }

  if (view === 'motion_verbs_prepositions') {
    return <MotionVerbsPrepositionsChart />;
  }

  if (view === 'cases') {
    return <CasesChart />;
  }

  if (view === 'learn_teach') {
    return <LearnTeachChart />;
  }

  return null;
};

export default App;
