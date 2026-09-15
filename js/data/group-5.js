const GROUP_5 = {
  id: "Connectors & Discourse",
  num: "05",
  title: "Connectors & Discourse",
  level: "intermediate-to-advanced",
  desc: `Connectors are the logical operators of discourse: AND, OR, BUT, BECAUSE in sophisticated form. In IELTS, 'Coherence and Cohesion' is one of the 4 scoring criteria — mastering connectors directly impacts your Speaking and Writing scores.`,
  topics: [
    {
      id:"conn-addition",
      title:"Addition",
      tag:"and, also, in addition, moreover",
      logic:`Adds another point to support the same idea — like appending another argument to the same logical thread.`,
      when:`Casual: also, too, as well. Formal/written: in addition, furthermore, moreover. Use formal versions in IELTS Writing/Speaking Part 3.`,
      formulas:[
        {tag:"casual", val:`Sentence. + Also, / + ..., too.`},
        {tag:"formal", val:`Sentence. + In addition, / Furthermore, / Moreover, + Sentence.`}
      ],
      examples:[
        "The store will sell imported drinks. In addition, it will offer a subscription club.",
        "This tool is fast. It's also cost-effective for this use case."
      ],
      compare:`In academic writing (IELTS Task 2), 'moreover' and 'furthermore' signal you can vary register — using only 'and' throughout caps your Lexical Resource score.`,
      warn:`Don't overuse formal connectors in casual speaking — it sounds robotic. Reserve 'moreover/furthermore' for writing or formal speaking contexts (IELTS Part 3, presentations).`
    },
    {
      id:"conn-contrast",
      title:"Concession & Contrast",
      tag:"but, however, although, despite, whereas",
      logic:`Signals a contradiction or unexpected turn relative to the previous statement — the 'else' branch of an argument.`,
      when:`But/however = simple contrast between two clauses/sentences. Although/even though = contrast within ONE sentence, with a subordinate clause. Despite/in spite of = followed by a NOUN or V-ing, not a full clause. Whereas/while = comparing two contrasting facts side by side.`,
      formulas:[
        {tag:"but", val:`Sentence, but + Sentence.`},
        {tag:"however", val:`Sentence. However, + Sentence.`},
        {tag:"although", val:`Although + Subject + Verb, Subject + Verb.`},
        {tag:"despite", val:`Despite + Noun/V-ing, Subject + Verb.`},
        {tag:"whereas", val:`Subject + Verb, whereas + Subject + Verb.`}
      ],
      examples:[
        "Although regulatory approval takes time, it protects the business legally.",
        "Despite the delays, the project is almost ready.",
        "Basic plans are available everywhere, whereas premium plans require special setup."
      ],
      compare:`'Despite' is followed by a noun phrase or V-ing — NEVER a full clause with subject+verb. 'Despite it rains' is wrong; say 'Despite the rain' or 'Despite raining'.`,
      warn:`Critical mistake: 'Despite of' doesn't exist — it's 'despite' OR 'in spite of', never 'despite of'.`
    },
    {
      id:"conn-cause-effect",
      title:"Reason & Result",
      tag:"because, since, therefore, as a result",
      logic:`Marks a logical cause-effect relationship — exactly like a function returning a result based on an input condition.`,
      when:`Because/since/as = introduce the CAUSE (can start or be in the middle of a sentence). Therefore/thus/as a result/consequently = introduce the RESULT, usually starting a new sentence, more formal.`,
      formulas:[
        {tag:"cause", val:`Sentence + because/since/as + Cause.`},
        {tag:"result", val:`Cause. Therefore, / As a result, / Consequently, + Result.`}
      ],
      examples:[
        "We chose this supplier because it's significantly cheaper than the alternative for this volume.",
        "The product wasn't approved by the regulator. As a result, we removed it from the catalog."
      ],
      compare:`'Because of' is followed by a noun, while 'because' is followed by a full clause — a structural distinction many learners blur.`,
      warn:`For IELTS Speaking Part 3, using 'therefore/consequently' instead of always 'so' raises your perceived formality and range significantly.`
    },
    {
      id:"conn-sequence",
      title:"Sequence",
      tag:"first, then, after that, finally",
      logic:`Organizes ideas or steps in chronological/logical order — like numbering steps in a process or algorithm.`,
      when:`Describing processes, telling stories, structuring an argument step by step — very useful for IELTS Writing Task 1 (process description) and Speaking Part 2 (storytelling).`,
      formulas:[
        {tag:"struct", val:`First, ... Then/Next, ... After that, ... Finally, ...`}
      ],
      examples:[
        "First, we validate the product against official sources. Then, we classify it by category.",
        "Finally, we submit the documentation to the regulator."
      ],
      compare:`This maps almost 1:1 onto pseudocode structure — 'first/then/finally' is literally step 1, step 2, step n. Easy win for a logical thinker.`,
      warn:`No major trap — just don't overuse 'and then... and then...' in formal writing; vary with the words above.`
    },
    {
      id:"conn-opinion",
      title:"Expressing Opinion & Stance",
      tag:"in my opinion, arguably, it could be argued",
      logic:`Frames a statement as a viewpoint rather than fact — critical for IELTS Speaking Part 3 and Writing Task 2, where you must argue a position while sounding balanced and academic.`,
      when:`In my opinion/I believe = direct, personal. Arguably/it could be argued that = academic, hedged, sounds more objective. From my point of view = personal but slightly more formal than 'I think'.`,
      formulas:[
        {tag:"personal", val:`In my opinion, / I believe (that) + Statement.`},
        {tag:"academic", val:`It could be argued that + Statement. / Arguably, + Statement.`}
      ],
      examples:[
        "In my opinion, validating demand before investing capital reduces risk significantly.",
        "It could be argued that regulatory compliance is the real differentiator in this market."
      ],
      compare:`IELTS examiners specifically reward hedging language ('arguably', 'it seems that', 'tend to') because it shows nuance instead of absolute claims.`,
      warn:`Avoid 'I think that's true' as your only opinion phrase throughout the whole test — examiners notice repetition and it caps your Lexical Resource score.`
    }
  ]
};
