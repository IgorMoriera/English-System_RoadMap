const GROUP_3 = {
  id: "Modal Verbs",
  num: "03",
  title: "Modal Verbs — By Logical Function",
  level: "intermediate",
  desc: `Modals have no tense of their own — they modify the main verb to express a FUNCTION: certainty, obligation, possibility, ability, advice. Instead of memorising 10 isolated words, group them by function and the logic becomes clear.`,
  topics: [
    {
      id:"modal-ability",
      title:"Ability — Can | Could | Be able to",
      tag:"Ability",
      logic:`Expresses ability or skill to do something. 'Can' = present ability, 'could' = past ability or polite request, 'be able to' = ability in any tense (fills the gap can/could can't cover, like future or perfect).`,
      when:`Present ability (I can code in Python), past ability (I could swim at age 5), future/other tenses ability (I will be able to launch the store next year — 'will can' doesn't exist).`,
      formulas:[
        {tag:"present", val:`Subject + can/can't + V(base)`},
        {tag:"past", val:`Subject + could/couldn't + V(base)`},
        {tag:"other", val:`Subject + will be able to / has been able to + V(base)`}
      ],
      examples:[
        "I can build a full-stack app from scratch.",
        "I couldn't find official sources for that flavor.",
        "I'll be able to launch that product once the budget is approved."
      ],
      compare:`'Can' has no future or perfect form — English plugs the gap with 'be able to'. There's no such thing as 'will can'.`,
      warn:`Mistake: 'I will can do it' — wrong. Say 'I will be able to do it'.`
    },
    {
      id:"modal-certainty",
      title:"Certainty / Deduction — Must | Can't | Might | May | Could",
      tag:"Certainty & Deduction",
      logic:`Used to express how CERTAIN you are about something, based on evidence — like assigning a confidence level to a logical conclusion. Must = highly certain (positive), can't = highly certain (negative), might/may/could = uncertain, possible.`,
      when:`Deducing/guessing based on evidence — not about permission or obligation here, purely about probability/certainty.`,
      formulas:[
        {tag:"high+", val:`Subject + must + V(base) <span class='slot'>[~95% certain, positive]</span>`},
        {tag:"high-", val:`Subject + can't + V(base) <span class='slot'>[~95% certain, negative]</span>`},
        {tag:"mid", val:`Subject + might/may/could + V(base) <span class='slot'>[~40-60% certain]</span>`}
      ],
      examples:[
        "The system crashed — there must be an error in the configuration.",
        "He can't be using the free plan with that much traffic — it'd hit the limits.",
        "This product might be approved by the regulator next quarter."
      ],
      compare:`Think of this as a probability scale: must (0.95) > might/may/could (0.5) > can't (0.05, but stated as certainty of the negative).`,
      warn:`Mistake: using 'mustn't' to mean 'probably not' — 'mustn't' actually means PROHIBITION (you must not do X), not deduction. For negative deduction, use 'can't'.`
    },
    {
      id:"modal-obligation",
      title:"Obligation — Must | Have to | Should | Need to",
      tag:"Obligation & Necessity",
      logic:`Expresses different STRENGTHS of obligation. Must = strong, internal/speaker's authority. Have to = strong, external rule/authority. Should = advice, not obligation. Need to = necessity, practical.`,
      when:`Must (rules you set for yourself or strong recommendation), have to (external rules: law, company policy), should (advice — weaker), need to (practical necessity).`,
      formulas:[
        {tag:"must", val:`Subject + must + V(base)`},
        {tag:"have to", val:`Subject + have/has to + V(base)`},
        {tag:"should", val:`Subject + should + V(base)`},
        {tag:"need to", val:`Subject + need to + V(base)`}
      ],
      examples:[
        "You have to register your business before opening the store — it's the law.",
        "I must finish the report by Friday — I set that deadline myself.",
        "You should validate demand before importing in bulk."
      ],
      compare:`Negative forms have completely different meanings: 'must not' = prohibition (forbidden), but 'don't have to' = no obligation (optional, your choice).`,
      warn:`Critical mistake: 'You mustn't go' means 'you are forbidden to go'. 'You don't have to go' means 'going is optional, no pressure'. These are OPPOSITE in strength, not synonyms.`
    },
    {
      id:"modal-advice",
      title:"Advice — Should | Ought to | Had better",
      tag:"Advice",
      logic:`Recommends a course of action without forcing it. 'Should/ought to' = general advice. 'Had better' = stronger, implies a negative consequence if not followed.`,
      when:`Giving recommendations, suggesting a better course of action, warning about consequences.`,
      formulas:[
        {tag:"should", val:`Subject + should/shouldn't + V(base)`},
        {tag:"ought to", val:`Subject + ought to + V(base) <span class='slot'>[more formal, less common in speech]</span>`},
        {tag:"had better", val:`Subject + had better (not) + V(base) <span class='slot'>[stronger, implies consequence]</span>`}
      ],
      examples:[
        "You should test the product with more users before scaling.",
        "We'd better confirm the legal requirements before placing the order."
      ],
      compare:`'Had better' sounds stronger and more urgent than 'should' — almost a warning, not just friendly advice.`,
      warn:`Mistake: 'had better' is followed by base form, not infinitive with 'to'. 'You had better to go' is wrong — say 'You had better go'.`
    },
    {
      id:"modal-permission",
      title:"Permission — Can | Could | May | Might",
      tag:"Permission",
      logic:`Used to ask for or give permission. 'Can' = informal, 'could/may' = more polite/formal, 'might' = very formal, rare in modern speech for permission.`,
      when:`Requesting permission in different registers — casual conversation vs business/formal context.`,
      formulas:[
        {tag:"informal", val:`Can I + V(base) ?`},
        {tag:"polite", val:`Could/May I + V(base) ?`}
      ],
      examples:[
        "Can I use your laptop for the demo?",
        "May I ask a question about the IELTS format?"
      ],
      compare:`For IELTS Speaking, using 'could/may' instead of always 'can' signals higher register and scores better on flexibility.`,
      warn:`No major trap here, but Brazilians tend to overuse 'can' in all contexts — mixing in 'could/may' shows range.`
    }
  ]
};
