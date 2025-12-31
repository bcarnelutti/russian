export const translations = {
  it: {
    title: "Studiare il Russo",
    subtitle: "Schede grammaticali interattive per comprendere le forme verbali e i casi russi.",
    footer: "Creato per gli studenti di lingua russa",
    nav: {
      cases: "Casi",
      pronouns: "Pronomi",
      verbs: "Verbi",
      back: "Indietro"
    },
    verbsMenu: {
      motion_verbs: "Verbi di Moto",
      motion_verbs_prepositions: "Verbi di Moto + Prefissi",
      learn_teach: "Imparare e Insegnare",
      gerund: "Gerundio (Деепричастие)",
      participle: "Participio (Причастие)"
    },
    controls: {
      expandAll: "Espandi Tutto",
      collapseAll: "Comprimi Tutto"
    },
    gerund: {
      title: "Деепричастие (Gerundio)",
      imperfective: "Imperfettivo",
      perfective: "Perfettivo",
      imperfectiveSubtitle: "Несовершенный",
      perfectiveSubtitle: "Совершенный",
      imperfectiveDesc: "azione contemporanea a quella principale",
      perfectiveDesc: "azione precedente a quella principale",
      example: "Es",
    },
    participle: {
      title: "Причастие (Participio)",
      past: "Passato",
      present: "Presente",
      active: "Attivo",
      passive: "Passivo",
      shortForm: "Forma Breve (Predicato)",
    }
  },
  en: {
    title: "Study Russian",
    subtitle: "Interactive grammar charts to understand Russian verb forms and cases.",
    footer: "Created for Russian language students",
    nav: {
      cases: "Cases",
      pronouns: "Pronouns",
      verbs: "Verbs",
      back: "Back"
    },
    verbsMenu: {
      motion_verbs: "Verbs of Motion",
      motion_verbs_prepositions: "Motion Verbs + Prepositions",
      learn_teach: "To Learn & To Teach",
      gerund: "Gerund (Деепричастие)",
      participle: "Participle (Причастие)"
    },
    controls: {
      expandAll: "Expand All",
      collapseAll: "Collapse All"
    },
    gerund: {
      title: "Деепричастие (Gerund)",
      imperfective: "Imperfective",
      perfective: "Perfective",
      imperfectiveSubtitle: "Несовершенный",
      perfectiveSubtitle: "Совершенный",
      imperfectiveDesc: "action simultaneous with the main one",
      perfectiveDesc: "action preceding the main one",
      example: "Ex",
    },
    participle: {
      title: "Причастие (Participle)",
      past: "Past",
      present: "Present",
      active: "Active",
      passive: "Passive",
      shortForm: "Short Form (Predicate)",
    }
  }
};

export type Language = 'it' | 'en';
export type TranslationKey = keyof typeof translations.it;
