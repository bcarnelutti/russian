export const translations = {
  it: {
    title: "Studiare il russo",
    subtitle: "Schede grammaticali interattive per comprendere le forme verbali e i casi russi.",
    footer: "Creato per gli studenti di lingua russa",
    nav: {
      cases: "Casi",
      pronouns: "Pronomi",
      verbs: "Verbi",
      vocabulary: "Vocabolario",
      back: "Indietro"
    },
    verbsMenu: {
      motion_verbs: "Verbi di moto",
      motion_verbs_prepositions: "Verbi di moto + prefissi",
      learn_teach: "Imparare e insegnare",
      wear_verbs: "Verbo indossare",
      irregular_verbs: "Verbi irregolari",
      gerund: "Gerundio (Деепричастие)",
      participle: "Participio (Причастие)"
    },
    vocabularyMenu: {
      clothing: "Abbigliamento",
      health: "Salute",
      travel: "Viaggi",
      education: "Istruzione",
      body: "Il corpo",
      nature: "Natura",
      celebrations: "Feste"
    },
    controls: {
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto"
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
      shortForm: "Forma breve (predicato)",
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
        title: "Verbi di moto (Глаголы движения)",
        unidirectional: "Unidirezionali",
        multidirectional: "Pluridirezionali",
        unidirectionalDesc: "Determinato / concreto",
        multidirectionalDesc: "Indeterminato / astratto",
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
            lead: "Condurre / guidare",
            carry_hand: "Portare (a mano)",
            carry_transport: "Trasportare (con mezzo)"
        },
        present: "Presente",
        past: "Passato"
    },
    motionPrepositions: {
        title: "Verbi di moto con prefissi",
        description: "L'aggiunta di prefissi ai verbi di moto modifica il loro significato spaziale e crea nuove coppie aspettuali (Imperfettivo / Perfettivo).",
        formation: "Nota sulla formazione",
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
            za: { meaning: "Passare da / dietro", desc: "Entrare brevemente o andare dietro" },
            ob: { meaning: "Aggirare", desc: "Movimento intorno a qualcosa" }
        }
    },
    cases: {
        title: "Declinazione dei casi",
        subtitle: "Tabella riassuntiva delle desinenze per aggettivi e sostantivi",
        columns: {
            case: "Caso",
            masculine: "Maschile (Он)",
            neuter: "Neutro (Оно)",
            feminine: "Femminile (Она)",
            plural: "Plural (Они)"
        },
        rowLabels: {
            noun: "Sostantivo",
            adj: "Aggettivo"
        },
        list: {
            nominative: { name: "Nominativo", desc: "Soggetto" },
            genitive: { name: "Genitivo", desc: "Possesso, negazione, di..." },
            dative: { name: "Dativo", desc: "Oggetto indiretto (a...), moto verso persona" },
            accusative: { name: "Accusativo", desc: "Oggetto diretto, moto a luogo" },
            instrumental: { name: "Strumentale", desc: "Mezzo/strumento, con..." },
            prepositional: { name: "Prepositivo", desc: "Stato in luogo, argomento" }
        },
        notesTitle: "Note:",
        notes: [
            "<strong>Animato vs inanimato:</strong> All'Accusativo, per maschile singolare e tutto il plurale, gli esseri viventi (animati) prendono la forma del <strong>Genitivo</strong>, mentre gli oggetti (inanimati) prendono la forma del <strong>Nominativo</strong>.",
            "<strong>Desinenze deboli (soft):</strong> Le varianti (es. -ий, -ее, -я) si usano dopo consonanti deboli o sibilanti (ж, ш, ч, щ) e 'ц' secondo le regole ortografiche."
        ]
    },
    pronouns: {
        personalTitle: "Pronomi personali (Личные местоимения)",
        relativeTitle: "Местоимение \"Который\" (Il pronome relativo \"che/il quale\")",
        noteH: "Nota sulla \"н\" iniziale:",
        noteHText: "Quando i pronomi di 3ª persona sono usati dopo una preposizione, aggiungono una <strong>н</strong> iniziale.<br/>Es: <em>Я вижу <strong>его</strong></em> (Lo vedo - senza preposizione) vs <em>Я иду <strong>к нему</strong></em> (Vado da lui - con preposizione).",
        grammarNotesTitle: "Note grammaticali",
        grammarNotes: [
            "<strong>Который</strong> si comporta come un aggettivo forte.",
            "Concorda in <strong>genere e numero</strong> con il sostantivo a cui si riferisce (l'antecedente).",
            "Il <strong>caso</strong> dipende dalla funzione che svolge nella frase subordinata (la frase relativa).",
            "All'accusativo maschile singolare e plurale:<ul class=\"list-circle pl-5 mt-1 text-sm text-slate-600\">
<li>Inanimato = Nominativo (который / которые)</li>
<li>Animato = Genitivo (которого / которых)</li></ul>"
        ]
    },
    learnTeach: {
        title: "Imparare e insegnare",
        subtitle: "(Учиться и Учить)",
        aspectPairs: "Coppie aspettuali",
        imperfOnly: "Solo imperfettivo",
        presentFuture: "Presente / futuro",
        past: "Passato",
        example: "Esempio",
        verbs: {
            uchit_vyuchit: {
                translation: "Imparare / studiare (specifico)",
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
        subtitle: "Indossare, mettere, vestirsi",
        presentFuture: "Presente / futuro",
        past: "Passato",
        example: "Esempio",
        imperfOnly: "Solo imperfettivo",
        mnemonicsTitle: "Regola mnemonica",
        mnemonicsText: "Надеть одежду, одеть Надежду",
        mnemonicsDesc: "Mettere i vestiti (su se stessi/oggetto), vestire Nadezhda (qualcun altro)",
        verbs: {
            nosit: {
                translation: "Indossare / portare",
                usage: "Stato generale (avere addosso). Usato per vestiti, occhiali, barba, capelli lunghi.",
                exampleRu: "Она носит очки.",
                exampleIt: "Lei porta gli occhiali."
            },
            nadevat: {
                translation: "Mettere / indossare",
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
    },
    irregularVerbs: {
        title: "Verbi irregolari",
        subtitle: "Verbi comuni con coniugazioni imprevedibili",
        verbs: {
            khotet: {
                translation: "Volere",
                note: "Cambio di coniugazione: singolare (I) - plurale (II)"
            },
            moch: {
                translation: "Potere / essere in grado",
                note: "Alternanza consonantica г/ж. Attenzione alla 1^ sing. e 3^ pl."
            },
            est: {
                translation: "Mangiare",
                note: "Desinenze arcaiche uniche. Non confondere con 'Есть' (c'è)."
            },
            dat: {
                translation: "Dare (perfettivo)",
                note: "Desinenze arcaiche uniche. Futuro semplice."
            },
            zhit: {
                translation: "Vivere",
                note: "Inserimento della 'в' nel tema."
            }
        }
    },
    vocabulary: {
        clothing: {
            shirt: "Camicia",
            tshirt: "Maglietta",
            pants: "Pantaloni",
            jeans: "Jeans",
            dress: "Vestito",
            skirt: "Gonna",
            sweater: "Maglione",
            jacket: "Giacca",
            coat: "Cappotto",
            shoes: "Scarpe",
            boots: "Stivali",
            sneakers: "Scarpe da ginnastica",
            hat: "Cappello",
            scarf: "Sciarpa",
            gloves: "Guanti",
            socks: "Calzini"
        },
        health: {
            doctor: "Medico",
            hospital: "Ospedale",
            pharmacy: "Farmacia",
            medicine: "Medicina",
            pain: "Dolore",
            temperature: "Temperatura",
            fever: "Febbre",
            cold: "Raffreddore",
            cough: "Tosse",
            headache: "Mal di testa",
            ambulance: "Ambulanza",
            help_me: "Aiutatemi",
            i_feel_bad: "Mi sento male"
        },
        travel: {
            ticket: "Biglietto",
            passport: "Passaporto",
            luggage: "Bagaglio",
            suitcase: "Valigia",
            train: "Treno",
            plane: "Aereo",
            station: "Stazione",
            airport: "Aeroporto",
            platform: "Binario",
            gate: "Gate / Uscita",
            departure: "Partenza",
            arrival: "Arrivo",
            customs: "Dogana",
            visa: "Visto",
            seat: "Posto"
        },
        education: {
            school: "Scuola",
            university: "Università",
            student: "Studente",
            teacher: "Insegnante",
            professor: "Professore",
            book: "Libro",
            textbook: "Manuale",
            notebook: "Quaderno",
            pen: "Penna",
            exam: "Esame",
            lesson: "Lezione",
            homework: "Compiti",
            grade: "Voto",
            library: "Biblioteca"
        },
        body: {
            body: "Corpo",
            head: "Testa",
            face: "Viso",
            eye: "Occhio",
            eyes: "Occhi",
            nose: "Naso",
            mouth: "Bocca",
            ear: "Orecchio",
            ears: "Orecchie",
            hair: "Capelli",
            arm_hand: "Braccio / Mano",
            leg_foot: "Gamba / Piede",
            finger: "Dito",
            stomach: "Pancia",
            heart: "Cuore",
            back: "Schiena"
        },
        nature: {
            nature: "Natura",
            sun: "Sole",
            moon: "Luna",
            sky: "Cielo",
            star: "Stella",
            cloud: "Nuvola",
            rain: "Pioggia",
            snow: "Neve",
            wind: "Vento",
            tree: "Albero",
            flower: "Fiore",
            forest: "Foresta",
            river: "Fiume",
            sea: "Mare",
            mountain: "Montagna"
        },
        celebrations: {
            holiday: "Festa",
            birthday: "Compleanno",
            new_year: "Capodanno",
            christmas: "Natale",
            easter: "Pasqua",
            gift: "Regalo",
            party: "Festa / Party",
            guest: "Ospite",
            cake: "Torta",
            flowers: "Fiori",
            card: "Cartolina",
            congratulations: "Congratulazioni",
            cheers: "Cin cin / Alla salute"
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
      vocabulary: "Vocabulary",
      back: "Back"
    },
    verbsMenu: {
      motion_verbs: "Verbs of motion",
      motion_verbs_prepositions: "Verbs of motion + prepositions",
      learn_teach: "To learn & to teach",
      wear_verbs: "Verb to wear",
      irregular_verbs: "Irregular verbs",
      gerund: "Gerund (Деепричастие)",
      participle: "Participle (Причастие)"
    },
    vocabularyMenu: {
      clothing: "Clothing",
      health: "Health",
      travel: "Travel",
      education: "Education",
      body: "The body",
      nature: "Nature",
      celebrations: "Celebrations"
    },
    controls: {
      expandAll: "Expand all",
      collapseAll: "Collapse all"
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
      shortForm: "Short form (predicate)",
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
        title: "Verbs of motion (Глаголы движения)",
        unidirectional: "Unidirectional",
        multidirectional: "Multidirectional",
        unidirectionalDesc: "Determined / concrete",
        multidirectionalDesc: "Indetermined / abstract",
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
            lead: "Lead / drive",
            carry_hand: "Carry (by hand)",
            carry_transport: "Transport (by vehicle)"
        },
        present: "Present",
        past: "Past"
    },
    motionPrepositions: {
        title: "Verbs of motion with prepositions",
        description: "Adding prefixes to verbs of motion modifies their spatial meaning and creates new aspectual pairs (Imperfective / Perfective).",
        formation: "Note on formation",
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
            za: { meaning: "Drop by / go behind", desc: "Enter briefly or go behind" },
            ob: { meaning: "Go around", desc: "Movement around something" }
        }
    },
    cases: {
        title: "Declension of cases",
        subtitle: "Summary table of endings for adjectives and nouns",
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
            genitive: { name: "Genitive", desc: "Possession, negation, of..." },
            dative: { name: "Dative", desc: "Indirect object (to...), movement towards person" },
            accusative: { name: "Accusative", desc: "Direct object, movement to a place" },
            instrumental: { name: "Instrumental", desc: "Means/instrument, with..." },
            prepositional: { name: "Prepositional", desc: "Location (at/in), topic (about)" }
        },
        notesTitle: "Notes:",
        notes: [
            "<strong>Animate vs inanimate:</strong> In the Accusative, for masculine singular and all plural, living beings (animate) take the <strong>Genitive</strong> form, while objects (inanimate) take the <strong>Nominative</strong> form.",
            "<strong>Soft endings:</strong> Variants (e.g., -ий, -ее, -я) are used after soft consonants or sibilants (ж, ш, ч, щ) and 'ц' according to spelling rules."
        ]
    },
    pronouns: {
        personalTitle: "Personal pronouns (Личные местоимения)",
        relativeTitle: "Pronoun \"Который\" (Relative pronoun \"which/who\")",
        noteH: "Note on initial \"Н\":",
        noteHText: "When 3rd person pronouns are used after a preposition, they add an initial <strong>н</strong>.<br/>Ex: <em>Я вижу <strong>его</strong></em> (I see him - no preposition) vs <em>Я иду <strong>к нему</strong></em> (I go to him - with preposition).",
        grammarNotesTitle: "Grammar notes",
        grammarNotes: [
            "<strong>Который</strong> behaves like a hard adjective.",
            "Agrees in <strong>gender and number</strong> with the noun it refers to (the antecedent).",
            "The <strong>case</strong> depends on its function in the subordinate clause (the relative clause).",
            "In Accusative masculine singular and plural:<ul class=\"list-circle pl-5 mt-1 text-sm text-slate-600\">
<li>Inanimate = Nominative (который / которые)</li>
<li>Animate = Genitive (которого / которых)</li></ul>"
        ]
    },
    learnTeach: {
        title: "To learn and to teach",
        subtitle: "(Учиться и Учить)",
        aspectPairs: "Aspectual pairs",
        imperfOnly: "Imperfective only",
        presentFuture: "Present / future",
        past: "Past",
        example: "Example",
        verbs: {
            uchit_vyuchit: {
                translation: "To learn / to study (specific)",
                usage: "Accusative (что?). Study of a subject or memorizing (poems, words).",
                exampleIt: "I learn new words every day."
            },
            izuchat_izuchit: {
                translation: "To study (in depth)",
                usage: "Accusative (что?). Deep, academic study. More formal than учить.",
                exampleIt: "Scientists study space."
            },
            uchit_nauchit: {
                translation: "To teach (someone)",
                usage: "Accusative (кого? - pers.) + Dative (чему? - subject) OR Infinitive.",
                exampleIt: "The father teaches his son to swim."
            },
            uchitsya: {
                translation: "To study (be a student)",
                usage: "1. Place (где?): univ/school. 2. Manner (как?): well/badly. 3. + Inf: Learn to.",
                exampleIt: "My brother studies at the university."
            },
            zanimatsya: {
                translation: "To study (do homework/practice)",
                usage: "1. Study with books. 2. Instrumental (чем?): Practice sport/music.",
                exampleIt: "I study in the library every evening."
            },
            prepodavat: {
                translation: "To teach (profession)",
                usage: "Accusative (что? - subject) or without object. Activity of a lecturer.",
                exampleIt: "She teaches Russian at school."
            }
        }
    },
    wearVerbs: {
        title: "Verb to wear",
        subtitle: "To wear, to put on, to dress",
        presentFuture: "Present / future",
        past: "Past",
        example: "Example",
        imperfOnly: "Imperfective only",
        mnemonicsTitle: "Mnemonic rule",
        mnemonicsText: "Надеть одежду, одеть Надежду",
        mnemonicsDesc: "Put on clothes (on oneself/object), dress Nadezhda (someone else)",
        verbs: {
            nosit: {
                translation: "To wear / to carry",
                usage: "General state (having on). Used for clothes, glasses, beard, long hair.",
                exampleRu: "Она носит очки.",
                exampleIt: "She wears glasses."
            },
            nadevat: {
                translation: "To put on",
                usage: "Put something on oneself or on something else (inanimate object). Opposite of Снимать.",
                exampleRu: "Я надеваю пальто.",
                exampleIt: "I put on my coat."
            },
            odevat: {
                translation: "To dress (someone)",
                usage: "Dress someone else (person or animated/humanized object). Opposite of Раздевать.",
                exampleRu: "Мама одевает дочку.",
                exampleIt: "Mom dresses her daughter."
            },
            odevatsya: {
                translation: "To get dressed",
                usage: "Dress oneself (reflexive). General action of getting ready.",
                exampleRu: "Я быстро одеваюсь утром.",
                exampleIt: "I get dressed quickly in the morning."
            },
            snimat: {
                translation: "To take off",
                usage: "Remove clothes or accessories.",
                exampleRu: "Он снимает шапку.",
                exampleIt: "He takes off his hat."
            }
        }
    },
    irregularVerbs: {
        title: "Irregular verbs",
        subtitle: "Common verbs with unpredictable conjugations",
        verbs: {
            khotet: {
                translation: "To want",
                note: "Conjugation shift: singular (I) - plural (II)"
            },
            moch: {
                translation: "To be able to / can",
                note: "Consonant alternation г/ж. Watch 1st sing. and 3rd pl."
            },
            est: {
                translation: "To eat",
                note: "Unique archaic endings. Not to be confused with 'Есть' (there is)."
            },
            dat: {
                translation: "To give (perfective)",
                note: "Unique archaic endings. Simple future."
            },
            zhit: {
                translation: "To live",
                note: "Insertion of 'в' in the stem."
            }
        }
    },
    vocabulary: {
        clothing: {
            shirt: "Shirt",
            tshirt: "T-shirt",
            pants: "Pants",
            jeans: "Jeans",
            dress: "Dress",
            skirt: "Skirt",
            sweater: "Sweater",
            jacket: "Jacket",
            coat: "Coat",
            shoes: "Shoes",
            boots: "Boots",
            sneakers: "Sneakers",
            hat: "Hat",
            scarf: "Scarf",
            gloves: "Gloves",
            socks: "Socks"
        },
        health: {
            doctor: "Doctor",
            hospital: "Hospital",
            pharmacy: "Pharmacy",
            medicine: "Medicine",
            pain: "Pain",
            temperature: "Temperature",
            fever: "Fever",
            cold: "Cold",
            cough: "Cough",
            headache: "Headache",
            ambulance: "Ambulance",
            help_me: "Help me",
            i_feel_bad: "I feel bad"
        },
        travel: {
            ticket: "Ticket",
            passport: "Passport",
            luggage: "Luggage",
            suitcase: "Suitcase",
            train: "Train",
            plane: "Plane",
            station: "Station",
            airport: "Airport",
            platform: "Platform",
            gate: "Gate",
            departure: "Departure",
            arrival: "Arrival",
            customs: "Customs",
            visa: "Visa",
            seat: "Seat"
        },
        education: {
            school: "School",
            university: "University",
            student: "Student",
            teacher: "Teacher",
            professor: "Professor",
            book: "Book",
            textbook: "Textbook",
            notebook: "Notebook",
            pen: "Pen",
            exam: "Exam",
            lesson: "Lesson",
            homework: "Homework",
            grade: "Grade",
            library: "Library"
        },
        body: {
            body: "Body",
            head: "Head",
            face: "Face",
            eye: "Eye",
            eyes: "Eyes",
            nose: "Nose",
            mouth: "Mouth",
            ear: "Ear",
            ears: "Ears",
            hair: "Hair",
            arm_hand: "Arm / Hand",
            leg_foot: "Leg / Foot",
            finger: "Finger",
            stomach: "Stomach",
            heart: "Heart",
            back: "Back"
        },
        nature: {
            nature: "Nature",
            sun: "Sun",
            moon: "Moon",
            sky: "Sky",
            star: "Star",
            cloud: "Cloud",
            rain: "Rain",
            snow: "Snow",
            wind: "Wind",
            tree: "Tree",
            flower: "Flower",
            forest: "Forest",
            river: "River",
            sea: "Sea",
            mountain: "Mountain"
        },
        celebrations: {
            holiday: "Holiday",
            birthday: "Birthday",
            new_year: "New Year",
            christmas: "Christmas",
            easter: "Easter",
            gift: "Gift",
            party: "Party",
            guest: "Guest",
            cake: "Cake",
            flowers: "Flowers",
            card: "Card",
            congratulations: "Congratulations",
            cheers: "Cheers"
        }
    }
  }
};

export type Language = 'it' | 'en';
export type TranslationKey = keyof typeof translations.it;