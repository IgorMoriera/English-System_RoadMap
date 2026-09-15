const GROUP_4 = {
  id: "Sentence Structures",
  num: "04",
  title: "Sentence Structures",
  level: "intermediate-to-advanced",
  desc: `After the verb, what separates intermediate from advanced English is the ability to build complex sentences: linking ideas with relative clauses, reporting what someone said, choosing correctly between gerund and infinitive. This is what IELTS calls 'grammatical range'.`,
  topics: [
    {
      id:"relative-clauses",
      title:"Relative Clauses",
      tag:"who / which / that / whose / where",
      logic:`Joins two sentences into one by replacing a repeated noun with a relative pronoun — avoids repetition and creates more sophisticated, connected sentences. Think of it as merging two data objects via a shared key.`,
      when:`Who (people, subject), whom (people, object, formal), which (things), that (people or things, informal/restrictive), whose (possession), where (places), when (time).`,
      formulas:[
        {tag:"defining", val:`Noun + [who/which/that + clause] <span class='slot'>[no commas — essential info]</span>`},
        {tag:"non-def", val:`Noun, [who/which + clause], <span class='slot'>[commas — extra info, can be removed]</span>`}
      ],
      examples:[
        "The developer who built the app used a modern framework.",
        "The store, which will sell imported goods, opens next year.",
        "The town where I grew up is two hours from the capital."
      ],
      compare:`Defining clauses (no commas) = essential, restrictive info (changes WHICH noun you mean). Non-defining (with commas) = extra info, removable.`,
      warn:`Mistake: using 'that' in non-defining clauses (with commas) — 'that' is NEVER used after a comma. Use 'which' or 'who' instead.`
    },
    {
      id:"reported-speech",
      title:"Reported Speech",
      tag:"Direct → Indirect",
      logic:`Converts someone's exact words into a report — when the reporting verb is in the past, the tense in the reported clause shifts 'one step back' (a 'backshift'), like a timestamp recalibration.`,
      when:`Reporting what someone said, asked, or thought — common in narratives, news, and explaining conversations.`,
      formulas:[
        {tag:"present→past", val:`"I work here" → He said (that) he worked there.`},
        {tag:"past→pastperf", val:`"I worked here" → He said (that) he had worked there.`},
        {tag:"will→would", val:`"I will help" → She said (that) she would help.`},
        {tag:"question", val:`"Where do you live?" → He asked where I lived. <span class='slot'>[no question word order, no '?']</span>`}
      ],
      examples:[
        "He said he was testing the product with a small group.",
        "She told me she would launch the store next year.",
        "They asked if I had used that software before."
      ],
      compare:`Reported questions DROP the question word order — 'He asked where I lived', NOT 'He asked where did I live'. This is the #1 error even at advanced levels.`,
      warn:`Don't backshift facts/general truths or things still true: 'She said she lives in Brazil' is fine if it's still true now — backshift isn't always mandatory, it's about logic, not a rigid rule.`
    },
    {
      id:"gerund-infinitive",
      title:"Gerund vs Infinitive",
      tag:"V-ing vs to + V",
      logic:`Some verbs are followed by gerund (V-ing), others by infinitive (to + V), and some can take either with a CHANGE IN MEANING. There's no universal logic — it's about which verb governs the choice, so the key is memorizing patterns by verb groups.`,
      when:`Gerund only: enjoy, avoid, finish, suggest, consider, mind, keep. Infinitive only: want, need, decide, plan, agree, promise, afford. Both, different meaning: remember, forget, stop, try.`,
      formulas:[
        {tag:"gerund", val:`Verb + V-ing <span class='slot'>[enjoy, avoid, finish...]</span>`},
        {tag:"infinitive", val:`Verb + to + V(base) <span class='slot'>[want, need, decide...]</span>`},
        {tag:"stop+ing", val:`stop + V-ing = quit doing it`},
        {tag:"stop+to", val:`stop + to + V(base) = pause in order to do something else`}
      ],
      examples:[
        "I enjoy building products from scratch.",
        "I decided to register the company before launching.",
        "I stopped studying at midnight. (= quit studying)",
        "I stopped to check my email. (= paused to do this)"
      ],
      compare:`'Remember to do' (don't forget, future-oriented) vs 'remember doing' (recall a memory, past-oriented) is a classic meaning-shift pair worth memorizing precisely.`,
      warn:`There's no shortcut here — build a personal list of the 15-20 most common verbs you use and drill which pattern they take. Treat it like memorizing function signatures.`
    },
    {
      id:"question-tags",
      title:"Question Tags",
      tag:"..., isn't it? / ..., don't you?",
      logic:`A short question added to the end of a statement to confirm information or invite agreement — the rule is mechanical: positive statement gets negative tag, negative statement gets positive tag.`,
      when:`Confirming information in conversation, softening statements, inviting the listener to respond — very common in natural spoken English.`,
      formulas:[
        {tag:"positive", val:`Positive statement + negative tag <span class='slot'>[You're coding, aren't you?]</span>`},
        {tag:"negative", val:`Negative statement + positive tag <span class='slot'>[You aren't coding, are you?]</span>`}
      ],
      examples:[
        "You've tested the product already, haven't you?",
        "This isn't approved by the regulator yet, is it?",
        "You can speak English, can't you?"
      ],
      compare:`The tag always mirrors the auxiliary verb used in the main clause (be, do, have, modal) — match the auxiliary, then flip the polarity.`,
      warn:`This is genuinely useful for sounding more natural in speaking — practice it actively, it's a quick win for fluency-sounding speech.`
    },
    {
      id:"subjunctive",
      title:"Subjunctive (Formal Wishes/Suggestions)",
      tag:"suggest/recommend that + base form",
      logic:`A special grammatical form used after verbs like suggest, recommend, insist, demand, propose — the verb in the clause stays in the BASE FORM regardless of subject or tense, marking it as a hypothetical recommendation, not a fact.`,
      when:`Formal suggestions, demands, recommendations — common in academic/business writing, useful for IELTS Writing Task 2 register.`,
      formulas:[
        {tag:"struct", val:`Subject + suggest/recommend/insist + that + Subject + V(base) <span class='slot'>[no -s, even with he/she]</span>`}
      ],
      examples:[
        "I suggest that he test the product with more users before launch.",
        "The lawyer recommended that the company register before trading."
      ],
      compare:`This breaks the normal 3rd-person -s rule on purpose — 'he test' (not 'he tests') is correct here, signaling a hypothetical/desired action, not a fact.`,
      warn:`Brazilians often 'correct' this by adding -s ('he tests') because it looks wrong — resist that instinct, the base form is intentional here.`
    },
    {
      id:"comparatives-superlatives",
      title:"Comparatives & Superlatives",
      tag:"-er/-est, more/most",
      logic:`Compares two things (comparative) or ranks one thing against a whole group (superlative). The form depends on the number of syllables in the adjective — a simple rule with predictable exceptions.`,
      when:`Short adjectives (1 syllable, some 2): add -er/-est. Long adjectives (2+ syllables): use more/most. Irregular: good/bad/far have unique forms.`,
      formulas:[
        {tag:"short comp", val:`Adjective + er + than <span class='slot'>[faster than]</span>`},
        {tag:"short sup", val:`the + Adjective + est <span class='slot'>[the fastest]</span>`},
        {tag:"long comp", val:`more + Adjective + than <span class='slot'>[more expensive than]</span>`},
        {tag:"long sup", val:`the most + Adjective <span class='slot'>[the most expensive]</span>`},
        {tag:"equal", val:`as + Adjective + as <span class='slot'>[as fast as]</span>`}
      ],
      examples:[
        "This option is faster than the other one for this use case.",
        "This is the most expensive item in the catalog.",
        "This draft isn't as complete as the final version."
      ],
      compare:`Good→better→best and bad→worse→worst are irregular — they don't follow the -er/-est or more/most pattern at all, just like 'bom/melhor/ótimo' in Portuguese also breaks pattern.`,
      warn:`Mistake: 'more better' or 'most fastest' — never combine both systems (more/most + -er/-est) on the same adjective.`
    }
  ]
};
