const GROUP_1 = {
  id: "g1",
  num: "01",
  title: "Verb System — Time × Aspect",
  level: "basic-to-advanced",
  desc: `English organizes verbs in a logical matrix: 3 times (Present, Past, Future) crossed with 4 aspects (Simple, Continuous, Perfect, Perfect Continuous) = 12 combinations. Learn the matrix, not 12 isolated rules — each aspect carries the SAME logical meaning regardless of time.`,
  matrixNote:`Think of this as a truth table: the AXIS (aspect) changes the MEANING; the TIME only changes the 'when'. Continuous = action in progress. Perfect = completed action relevant to another point. Perfect Continuous = duration up to a point.`,
  topics: [
    {
      id:"present-simple",
      title:"Present Simple",
      tag:"Simple · Present",
      logic:`Used for facts that are always true, habits/routines, and general truths — actions with no specific timeframe, repeated or permanent states. Think of it as the 'default state' of a system: it doesn't show progress, just the fact that it happens.`,
      when:`1) Habits/routines (I work every day) 2) General facts (Water boils at 100°C) 3) Permanent states (She lives in Brazil) 4) Schedules/timetables (The train leaves at 9) 5) Feelings/opinions (I think, I believe, I want)`,
      formulas:[
        {tag:"afirm", val:`Subject + V(s/es) <span class='slot'>[3rd person adds -s]</span>`},
        {tag:"neg", val:`Subject + do/does + not + V(base)`},
        {tag:"interr", val:`Do/Does + Subject + V(base) ?`}
      ],
      examples:[
        "I work in marketing.",
        "She doesn't drink coffee.",
        "Does the store open on Sundays?",
        "Water boils at 100 degrees."
      ],
      compare:`English marks the 3rd person singular with -s/-es: 'he works'. This is a grammatical signal with no real-world meaning — pure syntax.`,
      warn:`Common mistake: forgetting -s in 3rd person ('she work' instead of 'she works'), and using Present Simple for actions happening right now (should be Continuous).`
    },
    {
      id:"present-continuous",
      title:"Present Continuous",
      tag:"Continuous · Present",
      logic:`Used for actions in progress right now, or temporary situations/trends happening around the present. The aspect 'Continuous' = action caught mid-execution, like a process running, not yet finished.`,
      when:`1) Action happening at the moment of speaking (I'm writing this now) 2) Temporary situations (I'm staying at a hotel this week) 3) Future arrangements already planned (I'm meeting him tomorrow) 4) Trends/changes (The market is growing)`,
      formulas:[
        {tag:"afirm", val:`Subject + am/is/are + V-ing`},
        {tag:"neg", val:`Subject + am/is/are + not + V-ing`},
        {tag:"interr", val:`Am/Is/Are + Subject + V-ing ?`}
      ],
      examples:[
        "I'm writing a report right now.",
        "She isn't working today.",
        "Are you using the free version of this software?",
        "The renewable energy market is growing fast."
      ],
      compare:`English strictly separates 'happening now' (Continuous) from 'general fact' (Simple): 'I work' ≠ 'I'm working'.`,
      warn:`Common mistake: using Continuous with stative verbs (know, want, believe, love, need) — these almost never take -ing. 'I'm knowing' is wrong; say 'I know'.`
    },
    {
      id:"present-perfect",
      title:"Present Perfect",
      tag:"Perfect · Present",
      logic:`The aspect 'Perfect' = a past action with a RESULT or RELEVANCE in the present. It doesn't matter exactly when it happened — what matters is that it's connected to now. This tense does NOT exist with the same logic in Portuguese, so it's the #1 source of confusion for Brazilians.`,
      when:`1) Life experience, unspecified time (I have visited Japan) 2) Action that started in the past and continues now (I have lived here for 5 years) 3) Recent action affecting the present (I have finished the report — so I can send it now) 4) With 'just', 'already', 'yet', 'ever', 'never'`,
      formulas:[
        {tag:"afirm", val:`Subject + have/has + V3 <span class='slot'>(past participle)</span>`},
        {tag:"neg", val:`Subject + have/has + not + V3`},
        {tag:"interr", val:`Have/Has + Subject + V3 ?`}
      ],
      examples:[
        "I have built three projects this year.",
        "She hasn't finished the deployment yet.",
        "Have you ever used this kind of software before?",
        "I've lived in this city for 10 years."
      ],
      compare:`Present Perfect connects past action to present relevance, with NO specific past time mentioned. 'I have finished' = relevant now, time unspecified.`,
      warn:`Critical mistake: using Present Perfect with a specific past time marker. 'I have seen him yesterday' is WRONG. If there's a specific time (yesterday, last week, in 2020), use Past Simple: 'I saw him yesterday'.`
    },
    {
      id:"present-perfect-continuous",
      title:"Present Perfect Continuous",
      tag:"Perfect Continuous · Present",
      logic:`Combines 'Perfect' (connection to present) + 'Continuous' (ongoing action) = emphasizes the DURATION of an action that started in the past and is still happening, or just stopped with visible effects now.`,
      when:`1) Emphasizing duration of an ongoing action (I've been coding for 6 hours) 2) Action recently stopped but with visible result (I've been running — that's why I'm sweating) 3) Often with 'for' and 'since', like Present Perfect, but stressing the activity itself, not just the fact`,
      formulas:[
        {tag:"afirm", val:`Subject + have/has + been + V-ing`},
        {tag:"neg", val:`Subject + have/has + not + been + V-ing`},
        {tag:"interr", val:`Have/Has + Subject + been + V-ing ?`}
      ],
      examples:[
        "I've been learning Spanish for three months.",
        "She hasn't been sleeping well lately.",
        "Have you been studying English every day?"
      ],
      compare:`Present Perfect Continuous stresses the ongoing PROCESS ('I've been working' = the act of working, in progress). Present Perfect stresses the RESULT/fact ('I've worked' = it happened, done).`,
      warn:`Mistake: using this with stative verbs (know, believe, want) — 'I've been knowing him' is wrong; say 'I've known him for years' (Present Perfect, no -ing).`
    },
    {
      id:"past-simple",
      title:"Past Simple",
      tag:"Simple · Past",
      logic:`A completed action at a specific, finished point in the past. The action and the time are both closed — no connection to the present is implied.`,
      when:`1) Finished action at a specific past time (I deployed the app yesterday) 2) Sequence of past events (I woke up, had coffee, and started coding) 3) Past habits no longer true (I worked at a bank for 2 years — implies: not anymore)`,
      formulas:[
        {tag:"afirm", val:`Subject + V2 <span class='slot'>(regular: V+ed / irregular: memorize)</span>`},
        {tag:"neg", val:`Subject + did + not + V(base)`},
        {tag:"interr", val:`Did + Subject + V(base) ?`}
      ],
      examples:[
        "I finished the project last week.",
        "She didn't check the weather before leaving.",
        "Did you use Excel or Google Sheets for the report?"
      ],
      compare:`English has two distinct past forms: V2 for affirmative ('I worked'), but BASE form after 'did' in negative/question ('did you work', not 'did you worked'). This trips up almost every learner.`,
      warn:`Mistake: 'Did you worked?' — WRONG. Once 'did' appears, the main verb goes back to base form: 'Did you work?'.`
    },
    {
      id:"past-continuous",
      title:"Past Continuous",
      tag:"Continuous · Past",
      logic:`An action in progress at a specific moment in the past — often interrupted by another action (Past Simple), or two parallel actions happening at the same time in the past.`,
      when:`1) Background action interrupted by a shorter one (I was cooking when the power went out) 2) Two simultaneous past actions (I was reading while she was writing) 3) Setting a scene in a story`,
      formulas:[
        {tag:"afirm", val:`Subject + was/were + V-ing`},
        {tag:"neg", val:`Subject + was/were + not + V-ing`},
        {tag:"interr", val:`Was/Were + Subject + V-ing ?`}
      ],
      examples:[
        "I was cooking dinner when the phone rang.",
        "They weren't paying attention at that time.",
        "What were you doing at 9pm last night?"
      ],
      compare:`The classic pattern 'Past Continuous + when + Past Simple' marks an interruption: 'I was sleeping when the alarm rang'.`,
      warn:`Mistake: confusing the interruption order. 'When I was arriving, he left' should usually be 'When I arrived, he was leaving' — think about which action is the background (longer) and which is the point (shorter).`
    },
    {
      id:"past-perfect",
      title:"Past Perfect",
      tag:"Perfect · Past",
      logic:`The 'past of the past' — an action completed BEFORE another past action or point in time. It establishes a clear sequence: this happened, then that happened.`,
      when:`1) Action completed before another past action (I had finished dinner before she arrived) 2) The earlier of two past events, to avoid ambiguity 3) Common in reported speech and storytelling`,
      formulas:[
        {tag:"afirm", val:`Subject + had + V3`},
        {tag:"neg", val:`Subject + had + not + V3`},
        {tag:"interr", val:`Had + Subject + V3 ?`}
      ],
      examples:[
        "I had already eaten before the meeting started.",
        "She hadn't read the contract before signing it.",
        "Had you visited that country before this trip?"
      ],
      compare:`Past Perfect requires a clear reference point in the past to make sense: it's always relative to another past moment.`,
      warn:`Mistake: using Past Perfect when there's no second past reference point. If there's only one past action, just use Past Simple. Past Perfect only makes sense in comparison to another past moment.`
    },
    {
      id:"past-perfect-continuous",
      title:"Past Perfect Continuous",
      tag:"Perfect Continuous · Past",
      logic:`Emphasizes the DURATION of an action that was ongoing before another past point — 'how long something had been happening' before something else occurred.`,
      when:`1) Duration before another past event (I had been studying for 4 hours before I took a break) 2) Cause of a past situation (He was tired because he had been working all night)`,
      formulas:[
        {tag:"afirm", val:`Subject + had + been + V-ing`},
        {tag:"neg", val:`Subject + had + not + been + V-ing`},
        {tag:"interr", val:`Had + Subject + been + V-ing ?`}
      ],
      examples:[
        "I had been waiting for hours before the bus finally arrived.",
        "She was exhausted because she had been studying all night for the exam."
      ],
      compare:`This is the least common tense in real speech — used mainly to explain WHY a past situation happened, via duration leading up to it.`,
      warn:`This tense is rare in spoken English — don't force it into conversation. Save your active practice time for Present Perfect and Past Simple instead.`
    },
    {
      id:"future-will",
      title:"Future Simple — Will",
      tag:"Simple · Future",
      logic:`Used for predictions, spontaneous decisions made at the moment of speaking, promises, and facts about the future with no prior planning.`,
      when:`1) Prediction without evidence (I think it will rain) 2) Spontaneous decision (I'll have the pasta, thanks) 3) Promise (I will send the report tonight) 4) Facts about the future (The sun will rise at 6am)`,
      formulas:[
        {tag:"afirm", val:`Subject + will + V(base)`},
        {tag:"neg", val:`Subject + will + not (won't) + V(base)`},
        {tag:"interr", val:`Will + Subject + V(base) ?`}
      ],
      examples:[
        "I think this change will make a big difference.",
        "I won't make a decision without thinking it through first.",
        "Will the new policy affect everyone equally?"
      ],
      compare:`'Will' = decided NOW, in the moment, or a general prediction with no plan behind it.`,
      warn:`Mistake: using 'will' for something already planned with evidence. If you already bought the ticket, say 'I'm going to travel', not 'I will travel'.`
    },
    {
      id:"future-going-to",
      title:"Future Simple — Going to",
      tag:"Simple · Future (planned)",
      logic:`Used for intentions/plans decided BEFORE the moment of speaking, and predictions based on present evidence (something you can see/observe now).`,
      when:`1) Pre-decided plan (I'm going to open a business next year) 2) Prediction with visible evidence (Look at those clouds — it's going to rain)`,
      formulas:[
        {tag:"afirm", val:`Subject + am/is/are + going to + V(base)`},
        {tag:"neg", val:`Subject + am/is/are + not + going to + V(base)`},
        {tag:"interr", val:`Am/Is/Are + Subject + going to + V(base) ?`}
      ],
      examples:[
        "I'm going to register the company before opening the store.",
        "She isn't going to sign the contract without checking the terms first.",
        "Are you going to invite her to the party?"
      ],
      compare:`'Going to' implies a decision already made — there's a plan behind it, even if informal.`,
      warn:`Both 'will' and 'going to' translate to 'vou fazer' in Portuguese — that's exactly why Brazilians mix them up. The test: was the decision made now (will) or before (going to)?`
    },
    {
      id:"future-continuous",
      title:"Future Continuous",
      tag:"Continuous · Future",
      logic:`An action that will be in progress at a specific future point in time — projecting the 'Continuous' logic (action mid-execution) onto the future.`,
      when:`1) Action in progress at a future moment (At 8pm I'll be coding) 2) Polite interruption-avoidance question (Will you be using the laptop later?)`,
      formulas:[
        {tag:"afirm", val:`Subject + will + be + V-ing`},
        {tag:"neg", val:`Subject + will + not + be + V-ing`},
        {tag:"interr", val:`Will + Subject + be + V-ing ?`}
      ],
      examples:[
        "This time tomorrow, I'll be presenting the project to the team.",
        "Will you be using the car this weekend?"
      ],
      compare:`Used less often than other future forms — mostly for emphasizing 'mid-action at a specific future time'.`,
      warn:`Don't overuse this — native speakers often replace it with simpler forms in casual speech ('I'll be coding' vs just 'I'll code' when the duration isn't the focus).`
    },
    {
      id:"future-perfect",
      title:"Future Perfect",
      tag:"Perfect · Future",
      logic:`An action that will be completed BEFORE a specific point in the future. Projects the 'Perfect' logic (completed, with relevance) onto the future.`,
      when:`1) Action finished by a future deadline (By next month, I will have launched the store) 2) Estimating duration up to a future point`,
      formulas:[
        {tag:"afirm", val:`Subject + will + have + V3`},
        {tag:"neg", val:`Subject + will + not + have + V3`},
        {tag:"interr", val:`Will + Subject + have + V3 ?`}
      ],
      examples:[
        "By December, I will have finished the entire certification process.",
        "Will you have completed the MVP by then?"
      ],
      compare:`Almost always paired with 'by [time]' to mark the deadline.`,
      warn:`This tense is rare in casual speech but appears in IELTS Speaking Part 3 when discussing future plans/predictions — worth recognizing and using occasionally for higher scores.`
    },
    {
      id:"future-perfect-continuous",
      title:"Future Perfect Continuous",
      tag:"Perfect Continuous · Future",
      logic:`Emphasizes the DURATION of an action that will have been ongoing up until a specific future point.`,
      when:`1) Duration up to a future point (By June, I will have been running this business for one year)`,
      formulas:[
        {tag:"afirm", val:`Subject + will + have + been + V-ing`},
        {tag:"neg", val:`Subject + will + not + have + been + V-ing`},
        {tag:"interr", val:`Will + Subject + have + been + V-ing ?`}
      ],
      examples:[
        "By next year, I will have been working on this project for 24 months."
      ],
      compare:`The rarest tense in real usage — like Past Perfect Continuous, prioritize recognition over production.`,
      warn:`Don't spend much active practice time here — focus on recognizing it. It rarely appears even in IELTS.`
    }
  ]
};
