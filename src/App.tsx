import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import PronounChart from './PronounChart';
import MotionVerbsChart from './MotionVerbsChart';
import MotionVerbsPrepositionsChart from './MotionVerbsPrepositionsChart';
import CasesChart from './CasesChart';
import LearnTeachChart from './LearnTeachChart';
import WearVerbsChart from './WearVerbsChart';
import IrregularVerbsChart from './IrregularVerbsChart';
import { LanguageProvider, useLanguage } from './LanguageContext';

// --- Context Definition ---
interface ChartContextType {
  // Navigation State
  view: 'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'wear_verbs' | 'irregular_verbs' | 'gerund' | 'participle';
  setView: React.Dispatch<React.SetStateAction<'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'wear_verbs' | 'irregular_verbs' | 'gerund' | 'participle'>>;

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
  const [view, setView] = useState<'verbs_menu' | 'pronouns' | 'motion_verbs' | 'motion_verbs_prepositions' | 'cases' | 'learn_teach' | 'wear_verbs' | 'irregular_verbs' | 'gerund' | 'participle'>('verbs_menu');
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

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-slate-600 hover:text-indigo-600 font-medium border border-slate-100 transition-all hover:shadow-lg"
    >
      <Globe size={18} />
      <span>{language === 'it' ? 'IT' : 'EN'}</span>
    </button>
  );
};

const Navigation = () => {
  const { view, setView } = useChartContext();
  const { t } = useLanguage();
  const isVerbsActive = ['verbs_menu', 'motion_verbs', 'motion_verbs_prepositions', 'learn_teach', 'wear_verbs', 'irregular_verbs', 'gerund', 'participle'].includes(view);

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
        {t('nav.cases')}
      </button>
      <button
        onClick={() => setView('pronouns')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          view === 'pronouns'
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.pronouns')}
      </button>
      <button
        onClick={() => setView('verbs_menu')}
        className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
          isVerbsActive
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
        }`}
      >
        {t('nav.verbs')}
      </button>
    </div>
  );
};

const VerbsMenu = () => {
  const { setView } = useChartContext();
  const { t } = useLanguage();

  const menuItems = [
    { id: 'motion_verbs', label: t('verbsMenu.motion_verbs') },
    { id: 'motion_verbs_prepositions', label: t('verbsMenu.motion_verbs_prepositions') },
    { id: 'learn_teach', label: t('verbsMenu.learn_teach') },
    { id: 'wear_verbs', label: t('verbsMenu.wear_verbs') },
    { id: 'gerund', label: t('verbsMenu.gerund') },
    { id: 'participle', label: t('verbsMenu.participle') },
    { id: 'irregular_verbs', label: t('verbsMenu.irregular_verbs') },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => setView(item.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all text-left group ${
            item.id === 'irregular_verbs' ? 'md:col-span-2 bg-amber-50/50 border-amber-100' : ''
          }`}
        >
          <h3 className={`text-xl font-bold transition-colors ${
            item.id === 'irregular_verbs' ? 'text-amber-900 group-hover:text-amber-700' : 'text-slate-800 group-hover:text-indigo-600'
          }`}>
            {item.label}
          </h3>
        </motion.button>
      ))}
    </div>
  );
};

const GerundChart = () => {
  const { imperfectiveStep, setImperfectiveStep, perfectiveStep, setPerfectiveStep } = useChartContext();
  const { t } = useLanguage();

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
      <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-red-500 underline-offset-8">
        {t('gerund.title')}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-5xl mx-auto">
        
        {/* Imperfective Block */}
        <div className="flex-1 w-full">
          <ParticipleBlock 
            title={t('gerund.imperfective')}
            subtitle={t('gerund.imperfectiveSubtitle')}
            colorTheme="blue" 
            currentStep={imperfectiveStep}
            advanceStep={advanceImperfective}
          >
            <div className="text-center text-sm italic text-slate-500 mb-4 bg-white/50 p-2 rounded">
              ({t('gerund.imperfectiveDesc')})
              <br/>
              <span className="font-bold">{t('gerund.example')}: leggendo</span>
            </div>

            {imperfectiveStep >= 1 && <StepCard number={1} text={t('gerund.steps.imp1')} example="читать → читают" color="blue" />}
            {imperfectiveStep >= 2 && <StepCard number={2} text={t('gerund.steps.imp2')} example="читают → чита-" color="blue" />}
            {imperfectiveStep >= 3 && <StepCard number={3} text={t('gerund.steps.imp3')} example="чита- + я = читая" color="blue" />}
          </ParticipleBlock>
        </div>

        {/* Perfective Block */}
        <div className="flex-1 w-full">
          <ParticipleBlock 
            title={t('gerund.perfective')}
            subtitle={t('gerund.perfectiveSubtitle')}
            colorTheme="red" 
            currentStep={perfectiveStep}
            advanceStep={advancePerfective}
          >
             <div className="text-center text-sm italic text-slate-500 mb-4 bg-white/50 p-2 rounded">
              ({t('gerund.perfectiveDesc')})
              <br/>
              <span className="font-bold">{t('gerund.example')}: avendo letto</span>
            </div>

            {perfectiveStep >= 1 && <StepCard number={1} text={t('gerund.steps.perf1')} example="прочитать → прочита-" color="red" />}
            {perfectiveStep >= 2 && <StepCard number={2} text={t('gerund.steps.perf2')} example="прочита- + в = прочитав" color="red" />}
            {perfectiveStep >= 3 && (
              <div className="space-y-3">
                <StepCard number={3} text={t('gerund.steps.perf3a')} example="принести → принесши" color="red" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0039A6] text-white p-3 rounded-lg text-sm shadow-md"
                >
                  <span className="font-bold block mb-1">-вшись</span>
                  {t('gerund.steps.perf3b')}
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
  const { t } = useLanguage();

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
      <h2 className="text-4xl font-serif text-center mb-12 text-gray-800 underline decoration-blue-500 underline-offset-8">
        {t('participle.title')}
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-7xl mx-auto">
        
        {/* --- PAST BRANCH (Left) --- */}
        <motion.div layout className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
          <motion.div 
            onClick={togglePast}
            className={`cursor-pointer p-4 rounded-xl border-2 text-center mb-8 transition-colors ${pastStep > 0 ? 'bg-[#D52B1E] text-white border-red-800 shadow-md' : 'bg-white text-red-600 border-red-200 hover:bg-red-50'}`}
          >
            <h3 className="text-2xl font-bold">{t('participle.past')}</h3>
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
                  title={t('participle.active')}
                  subtitle="Действительное" 
                  colorTheme="blue" 
                  currentStep={activePastStep}
                  advanceStep={advanceActivePast}
                >
                  {activePastStep >= 1 && <StepCard number={1} text={t('participle.steps.activePast1')} example="читать → чита-" color="blue" />}
                  {activePastStep >= 2 && <StepCard number={2} text={t('participle.steps.activePast2')} example="чита- + вший = читавший" color="blue" />}
                  {activePastStep >= 3 && <StepCard number={3} text={t('participle.steps.activePast3')} example="нести → несший" color="blue" />}
                </ParticipleBlock>

                {/* Passive Past */}
                <ParticipleBlock 
                  title={t('participle.passive')}
                  subtitle="Страдательное" 
                  colorTheme="red" 
                  currentStep={passivePastStep}
                  advanceStep={advancePassivePast}
                >
                  {/* Short Form Box */}
                  <div className="bg-white p-3 rounded-lg border border-red-100 mb-2">
                    <div className="text-xs font-bold text-red-800 uppercase mb-1">{t('participle.shortForm')}</div>
                    <div className="text-xs text-slate-600 mb-1">"Il libro è letto"</div>
                    <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-red-900 bg-red-50 p-2 rounded">
                      <div>-н / -ен</div><div>-на / -ена</div>
                      <div>-но / -ено</div><div>-ны / -ены</div>
                    </div>
                  </div>

                  {/* Steps */}
                  {passivePastStep >= 1 && <StepCard number={1} text={t('participle.steps.passivePast1')} example="прочитать → прочита-" color="red" />}
                  {passivePastStep >= 2 && <StepCard number={2} text={t('participle.steps.passivePast2')} example="прочитанный" color="red" />}
                  {passivePastStep >= 3 && <StepCard number={3} text={t('participle.steps.passivePast3')} example="построенный" color="red" />}
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
            <h3 className="text-2xl font-bold">{t('participle.present')}</h3>
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
                  title={t('participle.active')}
                  subtitle="Действительное" 
                  colorTheme="blue" 
                  currentStep={activePresentStep}
                  advanceStep={advanceActivePresent}
                >
                  {activePresentStep >= 1 && <StepCard number={1} text={t('participle.steps.activePresent1')} example="читать → читают" color="blue" />}
                  {activePresentStep >= 2 && <StepCard number={2} text={t('participle.steps.activePresent2')} example="читают → читаю-" color="blue" />}
                  {activePresentStep >= 3 && <StepCard number={3} text={t('participle.steps.activePresent3')} example="читающий (che legge)" color="blue" />}
                </ParticipleBlock>

                {/* Passive Present */}
                <ParticipleBlock 
                  title={t('participle.passive')}
                  subtitle="Страдательное" 
                  colorTheme="red" 
                  currentStep={passivePresentStep}
                  advanceStep={advancePassivePresent}
                >
                  {passivePresentStep >= 1 && <StepCard number={1} text={t('participle.steps.passivePresent1')} example="читать → читаем" color="red" />}
                  {passivePresentStep >= 2 && <StepCard number={2} text={t('participle.steps.passivePresent2')} example="читаемый (che è letto)" color="red" />}
                  {passivePresentStep >= 3 && <StepCard number={3} text={t('participle.steps.passivePresent3')} example="видимый (che è visto)" color="red" />}
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
  const { t } = useLanguage();
  
  if (!['gerund', 'participle'].includes(view)) return null;

  return (
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
      {isAllExpanded ? t('controls.collapseAll') : t('controls.expandAll')}
    </motion.button>
  );
};

const HeaderControls = () => {
    return (
        <div className="fixed top-8 right-8 z-[100] flex flex-col gap-4 items-end">
            <LanguageSwitcher />
            <ControlPanel />
        </div>
    )
}

function App() {
  return (
    <LanguageProvider>
      <ChartProvider>
        <AppContent />
      </ChartProvider>
    </LanguageProvider>
  );
}

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <HeaderControls />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <Navigation />
        </header>

        <MainContent />
        
        <footer className="mt-24 text-center text-slate-400 text-sm">
          {t('footer')}
        </footer>
      </div>
    </div>
  );
};

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

  if (view === 'wear_verbs') {
    return <WearVerbsChart />;
  }

  if (view === 'irregular_verbs') {
    return <IrregularVerbsChart />;
  }

  return null;
};

export default App;