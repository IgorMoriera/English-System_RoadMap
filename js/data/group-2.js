const GROUP_2 = {
  id: "g2",
  num: "02",
  title: "Conditionals & Passive Voice",
  level: "intermediate-to-advanced",
  desc: `Conditionals are logical IF-THEN structures — the if/else of English. Passive Voice shifts the focus from who acts to what receives the action. Both appear constantly in IELTS Writing and Speaking Part 3 (argumentation).`,
  topics: [
    {
      id:"cond-zero",
      title:"Zero Conditional",
      tag:"If + Present, Present",
      logic:`Used for facts and general truths that are always true — like a universal law. If X happens, Y always happens. No hypothesis involved, just cause and effect that's always valid.`,
      when:`Scientific facts, general truths, instructions/routines that always produce the same result.`,
      formulas:[
        {tag:"struct", val:`If + Subject + Present Simple, Subject + Present Simple`},
        {tag:"ex-code", val:`if (condition === true) { result_always_happens(); }`}
      ],
      examples:[
        "If you heat water to 100°C, it boils.",
        "If the server receives too many requests, it crashes."
      ],
      compare:`This is the conditional closest to pure logic — exactly like an if-statement with a guaranteed result.`,
      warn:`No special warning here — this is the easiest conditional for logical thinkers since it mirrors boolean logic directly.`
    },
    {
      id:"cond-first",
      title:"First Conditional",
      tag:"If + Present, Will",
      logic:`Used for real, possible future situations — a realistic condition that may happen, with a likely result if it does.`,
      when:`Real future possibilities, warnings, promises tied to a condition.`,
      formulas:[
        {tag:"struct", val:`If + Subject + Present Simple, Subject + will + V(base)`}
      ],
      examples:[
        "If the manager approves the budget, we will launch the new product.",
        "If the system doesn't process the data correctly, the user will get confused."
      ],
      compare:`The 'if' clause always uses Present Simple even though it's about the future — this is a fixed rule with no exceptions.`,
      warn:`Critical mistake: NEVER use 'will' in the if-clause. 'If it will rain, I will stay home' is wrong — say 'If it rains, I will stay home'.`
    },
    {
      id:"cond-second",
      title:"Second Conditional",
      tag:"If + Past, Would",
      logic:`Used for hypothetical, unreal, or unlikely situations in the present/future — imagining something that isn't true now or probably won't happen.`,
      when:`Hypotheses contrary to current reality, hypothetical advice, imaginary scenarios.`,
      formulas:[
        {tag:"struct", val:`If + Subject + Past Simple, Subject + would + V(base)`},
        {tag:"note", val:`with 'be': always use 'were', even with I/he/she ('If I were you...')`}
      ],
      examples:[
        "If I had more capital, I would invest in more projects.",
        "If I were you, I would test the product with a larger group first."
      ],
      compare:`Uses Past Simple form but does NOT refer to the past — it signals 'unreal/hypothetical', not time. This decoupling of form and meaning is what confuses logical thinkers most.`,
      warn:`Mistake: using 'would' in the if-clause: 'If I would have more money' is wrong. Say 'If I had more money'.`
    },
    {
      id:"cond-third",
      title:"Third Conditional",
      tag:"If + Past Perfect, Would Have",
      logic:`Used for hypothetical situations in the PAST that did not happen — imagining a different past and its imaginary result. Pure counterfactual.`,
      when:`Regrets, criticism of past decisions, imagining alternative past outcomes.`,
      formulas:[
        {tag:"struct", val:`If + Subject + had + V3, Subject + would have + V3`}
      ],
      examples:[
        "If I had validated demand earlier, I would have saved months of work on the MIT project.",
        "If she hadn't tested with the free version first, the project would have cost much more."
      ],
      compare:`This is the most complex conditional grammatically, but logically it's simple: take Past Perfect (already 'past of the past') and pair it with 'would have' for the imaginary result.`,
      warn:`Mistake: mixing up 'would have' with 'had' — they're not interchangeable. The if-clause always uses 'had + V3', the result clause uses 'would have + V3'.`
    },
    {
      id:"cond-mixed",
      title:"Mixed Conditionals",
      tag:"Past Perfect ↔ Present/Future result",
      logic:`Combines a hypothetical past condition with a present result (or vice versa) — used when the timeframes of cause and effect don't match.`,
      when:`Past action with present consequence: 'If I had studied abroad, I would speak better English now' — past condition (didn't happen), present result (still true today).`,
      formulas:[
        {tag:"struct", val:`If + Subject + had + V3, Subject + would + V(base) [now]`}
      ],
      examples:[
        "If I had started learning English earlier, I would feel more confident in interviews now."
      ],
      compare:`This shows up a lot in IELTS Speaking Part 3 when you reflect on how a past decision shapes your present life — high-scoring structure.`,
      warn:`Don't overthink this — it's just combining the logic blocks of 3rd Conditional (cause) and 2nd Conditional (result) based on which timeframe each part belongs to.`
    },
    {
      id:"passive-voice",
      title:"Passive Voice",
      tag:"be + V3 (all tenses)",
      logic:`Shifts focus from WHO does the action to WHAT receives the action. Used when the agent is unknown, unimportant, obvious, or when you want to sound formal/objective — common in technical, scientific, and academic writing.`,
      when:`1) Agent unknown/unimportant (The problem was fixed) 2) Formal/scientific writing (The data was collected over 6 months) 3) Process descriptions (The software is installed automatically) 4) Emphasizing the object over the subject`,
      formulas:[
        {tag:"struct", val:`Object + be(tense) + V3 + (by + Agent)`},
        {tag:"present", val:`The report is written (by her)`},
        {tag:"past", val:`The report was written (by her)`},
        {tag:"future", val:`The report will be written (by her)`},
        {tag:"perfect", val:`The report has been written (by her)`}
      ],
      examples:[
        "The report was built from official government sources.",
        "The website is hosted on a cloud server.",
        "Imported products must be verified by customs before being sold."
      ],
      compare:`The passive voice keeps the SAME tense logic as active voice — only the structure changes (object moves to subject position, verb becomes 'be + V3').`,
      warn:`Mistake: forgetting to conjugate 'be' in the correct tense, or using passive too much — overusing passive voice makes speech sound stiff and unnatural in conversation. Use it strategically, not as default.`
    }
  ]
};
