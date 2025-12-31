export const translations = {
  it: {
    title: "Studiare il Russo",
    subtitle: "Schede grammaticali interattive per comprendere le forme verbali e i casi russi.",
    footer: "Creato per gli studenti di lingua russa",
    nav: {
      cases: "Casi",
      pronouns: "Pronomi",
      verbs: "Verbs",
      back: "Indietro"
    },
    verbsMenu: {
      motion_verbs: "Verbi di Moto",
      motion_verbs_prepositions: "Verbi di Moto + Prefissi",
      learn_teach: "Imparare e Insegnare",
      wear_verbs: "Verbo indossare",
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
      steps: {
        imp1: "3^ persona plurale presente",
        imp2: "Tolgo -ут/-ют o -ат/-ят",
        imp3: "Aggiungo -я/-а o -сь/-ясь (rifl.)",
        perf1: "Dall'infinito tolgo -ть/-ти",
        perf2: "Aggiungo -в",
        perf3a: "-ши se finisce in consonante",
        perf3b: "per verbi riflessivi"
      }
    },
    participle: {
      title: "Причастие (Participio)",
      past: "Passato",
      present: "Presente",
      active: "Attivo",
      passive: "Passivo",
      shortForm: "Forma Breve (Predicato)",
      steps: {
        activePast1: "Dall'infinito tolgo -ть",
        activePast2: "Aggiungo -вший (dopo vocale)",
        activePast3: "Aggiungo -ший (dopo consonante)",
        passivePast1: "Dall'infinito (solo perfettivi) tolgo -ть",
        passivePast2: "Aggiungo -нный (verbi in -ать/-ять)",
        passivePast3: "Aggiungo -енный (verbi in -ить/-ти)",
        activePresent1: "3^ persona plurale presente",
        activePresent2: "Tolgo -т",
        activePresent3: "Aggiungo -щий",
        passivePresent1: "1^ persona plurale presente",
        passivePresent2: "Aggiungo -ый (I coniug.)",
        passivePresent3: "Aggiungo -ий (II coniug.)"
      },
      examples: {
        activePresent: "che legge",
        passivePresent1: "che è letto",
        passivePresent2: "che è visto"
      }
    },
    motionVerbs: {
        title: "Verbi di Moto (Глаголы движения)",
        unidirectional: "Unidirezionali",
        multidirectional: "Pluridirezionali",
        unidirectionalDesc: "Determinato / Concreto",
        multidirectionalDesc: "Indeterminato / Astratto",
        uniList: ["Movimento in una direzione specifica", "Azione in corso (sto andando)", "Futuro pianificato"],
        multiList: ["Movimento in più direzioni (andata e ritorno)", "Azione abituale o ripetuta", "Capacità generale"],
        intransitive: "Intransitivi",
        intransitiveNote: "Movimento del soggetto",
        transitive: "Transitivi",
        transitiveNote: "Movimento dell'oggetto",
        verbs: {
            foot: "Andare (a piedi)",
            transport: "Andare (con mezzo)",
            run: "Correre",
            fly: "Volare",
            swim: "Nuotare",
            lead: "Condurre / Guidare",
            carry_hand: "Portare (a mano)",
            carry_transport: "Trasportare (con mezzo)"
        },
        present: "Presente",
        past: "Passato"
    },
    motionPrepositions: {
        title: "Verbi di Moto con Prefissi",
        description: "L'aggiunta di prefissi ai verbi di moto modifica il loro significato spaziale e crea nuove coppie aspettuali (Imperfettivo / Perfettivo).",
        formation: "Nota sulla Formazione",
        imperfectiveLabel: "Imperfettivo",
        perfectiveLabel: "Perfettivo",
        imperfectiveFormula: "Prefisso + Pluridirezionale",
        perfectiveFormula: "Prefisso + Unidirezionale",
        prefixes: {
            v: { meaning: "Entrare", desc: "Movimento verso l'interno" },
            vy: { meaning: "Uscire", desc: "Movimento verso l'esterno" },
            pri: { meaning: "Arrivare", desc: "Raggiungimento della meta" },
            u: { meaning: "Andare via", desc: "Abbandono di un luogo" },
            pod: { meaning: "Avvicinarsi", desc: "Movimento fino a breve distanza" },
            ot: { meaning: "Allontanarsi", desc: "Movimento a breve distanza da" },
            do: { meaning: "Raggiungere", desc: "Arrivare fino a un limite" },
            pere: { meaning: "Attraversare", desc: "Da una parte all'altra" },
            pro: { meaning: "Passare", desc: "Attraverso o oltre qualcosa" },
            za: { meaning: "Passare da / Dietro", desc: "Entrare brevemente o andare dietro" },
            ob: { meaning: "Aggirare", desc: "Movimento intorno a qualcosa" }
        }
    },
    cases: {
        title: "Declinazione dei Casi",
        subtitle: "Tabella riassuntiva delle desinenze per Aggettivi e Sostantivi",
        columns: {
            case: "Caso",
            masculine: "Maschile (Он)",
            neuter: "Neutro (Оно)",
            feminine: "Femminile (Она)",
            plural: "Plurale (Они)"
        },
        rowLabels: {
            noun: "Sostantivo",
            adj: "Aggettivo"
        },
        list: {
            nominative: { name: "Nominativo", desc: "Soggetto" },
            genitive: { name: "Genitive", desc: "Possesso, Negazione, Di..." },
            dative: { name: "Dativo", desc: "Oggetto indiretto (a...), Moto verso persona" },
            accusative: { name: "Accusativo", desc: "Oggetto diretto, Moto a luogo" },
            instrumental: { name: "Strumentale", desc: "Mezzo/Strumento, Con..." },
            prepositional: { name: "Prepositivo", desc: "Stato in luogo, Argomento" }
        },
        notesTitle: "Note:",
        notes: [
            "<strong>Animato vs Inanimato:</strong> All'Accusativo, per maschile singolare e tutto il plurale, gli esseri viventi (animati) prendono la forma del <strong>Genitivo</strong>, mentre gli oggetti (inanimati) prendono la forma del <strong>Nominativo</strong>.",
            "<strong>Desinenze deboli (Soft):</strong> Le varianti (es. -ий, -ее, -я) si usano dopo consonanti deboli o sibilanti (ж, ш, ч, щ) e 'ц' secondo le regole ortografiche."
        ]
    },
    pronouns: {
        personalTitle: "Pronomi Personali (Личные местоимения)",
        relativeTitle: "Местоимение \"Который\" (Il pronome relativo \"che/il quale\")",
        noteH: "Nota sulla \"Н\" iniziale:",
        noteHText: "Quando i pronomi di 3ª persona sono usati dopo una preposizione, aggiungono una <strong>н</strong> iniziale.<br/>Es: <em>Я вижу <strong>его</strong></em> (Lo vedo - senza preposizione) vs <em>Я иду <strong>к нему</strong></em> (Vado da lui - con preposizione).",
        grammarNotesTitle: "Note Grammaticali",
        grammarNotes: [
            "<strong>Который</strong> si comporta come un aggettivo forte.",
            "Concorda in <strong>genere e numero</strong> con il sostantivo a cui si riferisce (l'antecedente).",
            "Il <strong>caso</strong> dipende dalla funzione che svolge nella frase subordinata (la frase relativa).",
            "All'accusativo maschile singolare e plurale:<ul class=\"list-circle pl-5 mt-1 text-sm text-slate-600\"><li>Inanimato = Nominativo (который / которые)</li><li>Animato = Genitivo (которого / которых)</li></ul>"
        ]
    },
    learnTeach: {
        title: "Imparare e Insegnare",
        subtitle: "(Учиться и Учить)",
        aspectPairs: "Coppie Aspettuali",
        imperfOnly: "Solo Imperfettivo",
        presentFuture: "Presente / Futuro",
        past: "Passato",
        example: "Esempio",
        verbs: {
            uchit_vyuchit: {
                translation: "Imparare / Studiare (specifico)",
                usage: "Accusativo (что?). Studio di una materia o imparare a memoria (poesie, parole).",
                exampleIt: "Imparo nuove parole ogni giorno."
            },
            izuchat_izuchit: {
                translation: "Studiare (approfonditamente)",
                usage: "Accusativo (что?). Studio profondo, accademico. Più formale di учить.",
                exampleIt: "Gli scienziati studiano lo spazio."
            },
            uchit_nauchit: {
                translation: "Insegnare (a qualcuno)",
                usage: "Accusativo (кого? - pers.) + Dativo (чему? - materia) O Infinito.",
                exampleIt: "Il padre insegna al figlio a nuotare."
            },
            uchitsya: {
                translation: "Studiare (essere studente)",
                usage: "1. Luogo (где?): univ/scuola. 2. Modo (как?): bene/male. 3. + Inf: Imparare a.",
                exampleIt: "Mio fratello studia all'università."
            },
            zanimatsya: {
                translation: "Studiare (fare i compiti)",
                usage: "1. Studiare sui libri. 2. Strumentale (чем?): Praticare sport/musica.",
                exampleIt: "Studio in biblioteca ogni sera."
            },
            prepodavat: {
                translation: "Insegnare (professione)",
                usage: "Accusativo (что? - materia) o senza oggetto. Attività del docente.",
                exampleIt: "Lei insegna russo a scuola."
            }
        }
    },
    wearVerbs: {
        title: "Verbo indossare",
        subtitle: "Indossare, Mettere, Vestirsi",
        presentFuture: "Presente / Futuro",
        past: "Passato",
        example: "Esempio",
        imperfOnly: "Solo Imperfettivo",
        mnemonicsTitle: "Regola Mnemonica",
        mnemonicsText: "Надеть одежду, одеть Надежду",
        mnemonicsDesc: "Mettere i vestiti (su se stessi/oggetto), Vestire Nadezhda (qualcun altro)",
        verbs: {
            nosit: {
                translation: "Indossare / Portare",
                usage: "Stato generale (avere addosso). Usato per vestiti, occhiali, barba, capelli lunghi.",
                exampleRu: "Она носит очки.",
                exampleIt: "Lei porta gli occhiali."
            },
            nadevat: {
                translation: "Mettere / Indossare",
                usage: "Mettere qualcosa su se stessi o su qualcos'altro (oggetto inanimato). Contrario di Снимать.",
                exampleRu: "Я надеваю пальто.",
                exampleIt: "Mi metto il cappotto."
            },
            odevat: {
                translation: "Vestire (qualcuno)",
                usage: "Vestire qualcun altro (persona o oggetto animato/umanizzato). Contrario di Раздевать.",
                exampleRu: "Мама одевает дочку.",
                exampleIt: "La mamma veste la figlia."
            },
            odevatsya: {
                translation: "Vestirsi",
                usage: "Vestire se stessi (riflessivo). Azione generale di prepararsi.",
                exampleRu: "Я быстро одеваюсь утром.",
                exampleIt: "Mi vesto velocemente la mattina."
            },
            snimat: {
                translation: "Togliere",
                usage: "Togliere vestiti o accessori.",
                exampleRu: "Он снимает шапку.",
                exampleIt: "Lui si toglie il cappello."
            }
        }
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
      wear_verbs: "Verbs to Wear",
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
      steps: {
        imp1: "3rd person plural present",
        imp2: "Remove -ут/-ют or -ат/-ят",
        imp3: "Add -я/-а or -сь/-ясь (refl.)",
        perf1: "From infinitive remove -ть/-ти",
        perf2: "Add -в",
        perf3a: "-ши if ends in consonant",
        perf3b: "for reflexive verbs"
      }
    },
    participle: {
      title: "Причастие (Participle)",
      past: "Past",
      present: "Present",
      active: "Active",
      passive: "Passive",
      shortForm: "Short Form (Predicate)",
      steps: {
        activePast1: "From infinitive remove -ть",
        activePast2: "Add -вший (after vowel)",
        activePast3: "Add -ший (after consonant)",
        passivePast1: "From infinitive (perfective only) remove -ть",
        passivePast2: "Add -нный (verbs in -ать/-ять)",
        passivePast3: "Add -енный (verbs in -ить/-ти)",
        activePresent1: "3rd person plural present",
        activePresent2: "Remove -т",
        activePresent3: "Add -щий",
        passivePresent1: "1st person plural present",
        passivePresent2: "Add -ый (1st conj.)",
        passivePresent3: "Add -ий (2nd conj.)"
      },
      examples: {
        activePresent: "who is reading",
        passivePresent1: "which is read",
        passivePresent2: "which is seen"
      }
    },
    motionVerbs: {
        title: "Verbs of Motion (Глаголы движения)",
        unidirectional: "Unidirectional",
        multidirectional: "Multidirectional",
        unidirectionalDesc: "Determined / Concrete",
        multidirectionalDesc: "Indetermined / Abstract",
        uniList: ["Movement in a specific direction", "Action in progress (I am going)", "Planned future"],
        multiList: ["Movement in multiple directions (round trip)", "Habitual or repeated action", "General ability"],
        intransitive: "Intransitive",
        intransitiveNote: "Movement of the subject",
        transitive: "Transitive",
        transitiveNote: "Movement of the object",
        verbs: {
            foot: "Go (by foot)",
            transport: "Go (by transport)",
            run: "Run",
            fly: "Fly",
            swim: "Swim",
            lead: "Lead / Drive",
            carry_hand: "Carry (by hand)",
            carry_transport: "Transport (by vehicle)"
        },
        present: "Present",
        past: "Past"
    },
    motionPrepositions: {
        title: "Verbs of Motion with Prepositions",
        description: "Adding prefixes to verbs of motion modifies their spatial meaning and creates new aspectual pairs (Imperfective / Perfective).",
        formation: "Note on Formation",
        imperfectiveLabel: "Imperfective",
        perfectiveLabel: "Perfective",
        imperfectiveFormula: "Prefix + Multidirectional",
        perfectiveFormula: "Prefix + Unidirectional",
        prefixes: {
            v: { meaning: "Enter", desc: "Movement inwards" },
            vy: { meaning: "Exit", desc: "Movement outwards" },
            pri: { meaning: "Arrive", desc: "Reaching the goal" },
            u: { meaning: "Leave", desc: "Leaving a place" },
            pod: { meaning: "Approach", desc: "Movement up to a short distance" },
            ot: { meaning: "Move away", desc: "Movement a short distance from" },
            do: { meaning: "Reach", desc: "Reach a limit" },
            pere: { meaning: "Cross", desc: "From one side to the other" },
            pro: { meaning: "Pass", desc: "Through or past something" },
            za: { meaning: "Drop by / Go behind", desc: "Enter briefly or go behind" },
            ob: { meaning: "Go around", desc: "Movement around something" }
        }
    },
    cases: {
        title: "Declension of Cases",
        subtitle: "Summary table of endings for Adjectives and Nouns",
        columns: {
            case: "Case",
            masculine: "Masculine (Он)",
            neuter: "Neuter (Оно)",
            feminine: "Feminine (Она)",
            plural: "Plural (Они)"
        },
        rowLabels: {
            noun: "Noun",
            adj: "Adjective"
        },
        list: {
            nominative: { name: "Nominative", desc: "Subject" },
            genitive: { name: "Genitive", desc: "Possession, Negation, Of..." },
            dative: { name: "Dative", desc: "Indirect object (to...), Movement towards person" },
            accusative: { name: "Accusative", desc: "Direct object, Movement to a place" },
            instrumental: { name: "Instrumental", desc: "Means/Instrument, With..." },
            prepositional: { name: "Prepositional", desc: "Location (at/in), Topic (about)" }
        },
        notesTitle: "Notes:",
        notes: [
            "<strong>Animate vs Inanimate:</strong> In the Accusative, for masculine singular and all plural, living beings (animate) take the <strong>Genitive</strong> form, while objects (inanimate) take the <strong>Nominative</strong> form.",
            "<strong>Soft Endings:</strong> Variants (e.g., -ий, -ее, -я) are used after soft consonants or sibilants (ж, ш, ч, щ) and 'ц' according to spelling rules."
        ]
    },
    pronouns: {
        personalTitle: "Personal Pronouns (Личные местоимения)",
        relativeTitle: "Pronoun \"Который\" (Relative pronoun \"which/who\")",
        noteH: "Note on initial \"Н\":",
        noteHText: "When 3rd person pronouns are used after a preposition, they add an initial <strong>н</strong>.<br/>Ex: <em>Я вижу <strong>его</strong></em> (I see him - no preposition) vs <em>Я иду <strong>к нему</strong></em> (I go to him - with preposition).",
        grammarNotesTitle: "Grammar Notes",
        grammarNotes: [
            "<strong>Который</strong> behaves like a hard adjective.",
            "Agrees in <strong>gender and number</strong> with the noun it refers to (the antecedent).",
            "The <strong>case</strong> depends on its function in the subordinate clause (the relative clause).",
            "In Accusative masculine singular and plural:<ul class=\"list-circle pl-5 mt-1 text-sm text-slate-600\"><li>Inanimate = Nominative (который / которые)</li><li>Animate = Genitive (которого / которых)</li></ul>"
        ]
    },
    learnTeach: {
        title: "To Learn and To Teach",
        subtitle: "(Учиться и Учить)",
        aspectPairs: "Aspectual Pairs",
        imperfOnly: "Imperfective Only",
        presentFuture: "Present / Future",
        past: "Past",
        example: "Example",
        verbs: {
            uchit_vyuchit: {
                translation: "To Learn / To Study (specific)",
                usage: "Accusative (что?). Study of a subject or memorizing (poems, words).",
                exampleIt: "I learn new words every day."
            },
            izuchat_izuchit: {
                translation: "To Study (in depth)",
                usage: "Accusative (что?). Deep, academic study. More formal than учить.",
                exampleIt: "Scientists study space."
            },
            uchit_nauchit: {
                translation: "To Teach (someone)",
                usage: "Accusative (кого? - pers.) + Dative (чему? - subject) OR Infinitive.",
                exampleIt: "The father teaches his son to swim."
            },
            uchitsya: {
                translation: "To Study (be a student)",
                usage: "1. Place (где?): univ/school. 2. Manner (как?): well/badly. 3. + Inf: Learn to.",
                exampleIt: "My brother studies at the university."
            },
            zanimatsya: {
                translation: "To Study (do homework/practice)",
                usage: "1. Study with books. 2. Instrumental (чем?): Practice sport/music.",
                exampleIt: "I study in the library every evening."
            },
            prepodavat: {
                translation: "To Teach (profession)",
                usage: "Accusative (что? - subject) or without object. Activity of a lecturer.",
                exampleIt: "She teaches Russian at school."
            }
        }
    },
    wearVerbs: {
        title: "Verbs to Wear",
        subtitle: "To Wear, To Put On, To Dress",
        presentFuture: "Present / Future",
        past: "Past",
        example: "Example",
        imperfOnly: "Imperfective Only",
        mnemonicsTitle: "Mnemonic Rule",
        mnemonicsText: "Надеть одежду, одеть Надежду",
        mnemonicsDesc: "Put on clothes (on oneself/object), Dress Nadezhda (someone else)",
        verbs: {
            nosit: {
                translation: "To Wear / To Carry",
                usage: "General state (having on). Used for clothes, glasses, beard, long hair.",
                exampleRu: "Она носит очки.",
                exampleIt: "She wears glasses."
            },
            nadevat: {
                translation: "To Put On",
                usage: "Put something on oneself or on something else (inanimate object). Opposite of Снимать.",
                exampleRu: "Я надеваю пальто.",
                exampleIt: "I put on my coat."
            },
            odevat: {
                translation: "To Dress (someone)",
                usage: "Dress someone else (person or animated/humanized object). Opposite of Раздевать.",
                exampleRu: "Мама одевает дочку.",
                exampleIt: "Mom dresses her daughter."
            },
            odevatsya: {
                translation: "To Get Dressed",
                usage: "Dress oneself (reflexive). General action of getting ready.",
                exampleRu: "Я быстро одеваюсь утром.",
                exampleIt: "I get dressed quickly in the morning."
            },
            snimat: {
                translation: "To Take Off",
                usage: "Remove clothes or accessories.",
                exampleRu: "Он снимает шапку.",
                exampleIt: "He takes off his hat."
            }
        }
    }
  }
};

export type Language = 'it' | 'en';
export type TranslationKey = keyof typeof translations.it;