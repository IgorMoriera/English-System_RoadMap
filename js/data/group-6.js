const GROUP_6 = {
  id: "Articles, Quantifiers & Pronouns",
  num: "06",
  title: "Articles, Quantifiers & Pronouns",
  level: "basic-to-intermediate",
  desc: `This group is where silent errors happen most — they don't block communication but mark your English as 'foreign' to a native. Portuguese doesn't have countable/uncountable nouns the same way, so this is a necessary mental reformat.`,
  topics: [
    {
      id:"articles",
      title:"Articles — A | An | The | (no article)",
      tag:"Definite vs Indefinite",
      logic:`'A/an' = indefinite, introduces something new or unspecified (like declaring a new variable). 'The' = definite, refers to something already known/specific (like referencing an existing variable). No article = general/abstract concept or plural general statement.`,
      when:`A/an: first mention, one of many, job/role (I'm a developer). The: specific, already mentioned, unique things (the sun, the internet), superlatives (the best). No article: general plurals (Cats are independent), abstract nouns (Love is complex), most countries/languages.`,
      formulas:[
        {tag:"new info", val:`a/an + Noun(singular) <span class='slot'>[first mention]</span>`},
        {tag:"known info", val:`the + Noun <span class='slot'>[already known/specific]</span>`},
        {tag:"general", val:`(no article) + Noun(plural/abstract)`}
      ],
      examples:[
        "I built an app. The app uses a weather API.",
        "Brazil has strict import regulations.",
        "Entrepreneurs often underestimate regulatory complexity."
      ],
      compare:`The pattern 'mention something with a/an, then refer back to it with the' is the core logic — exactly like declaring then referencing a variable.`,
      warn:`Mistake: Portuguese speakers often add 'the' before general/abstract plural nouns ('The cats are independent' meaning cats in general — wrong; should be 'Cats are independent').`
    },
    {
      id:"countable-uncountable",
      title:"Countable vs Uncountable Nouns",
      tag:"many/much, few/little",
      logic:`Countable nouns can be counted individually (one bug, two bugs) and have a plural form. Uncountable nouns are treated as a mass/concept with no individual units (water, information, advice) and have NO plural form.`,
      when:`Many/few + countable plural. Much/little + uncountable. A lot of/lots of works for both. 'Information', 'advice', 'feedback', 'data' (often), 'money' are uncountable in English even though their Portuguese equivalents feel countable.`,
      formulas:[
        {tag:"countable", val:`many/few/several + Plural Noun`},
        {tag:"uncountable", val:`much/little + Singular Noun (no -s)`},
        {tag:"both", val:`a lot of / lots of / some / any + either type`}
      ],
      examples:[
        "I don't have much information about the exact timeline.",
        "I received a lot of feedback on my presentation.",
        "There are many candidates, but few have the required experience."
      ],
      compare:`'Advice', 'information', 'feedback' are ALWAYS singular/uncountable in English — 'an advice' or 'informations' are common Brazilian errors with no English equivalent.`,
      warn:`Critical fix: say 'a piece of advice' / 'some advice' (never 'an advice'), and 'information' (never 'informations').`
    },
    {
      id:"pronouns-determiners",
      title:"Pronouns & Determiners",
      tag:"this/that/these/those, possessives",
      logic:`Pronouns replace nouns to avoid repetition; determiners specify which noun you mean (this/that for distance, possessives for ownership). The logic is about REFERENCE — pointing to something already established.`,
      when:`This/these = near (physically or in time — 'this week'). That/those = far ('that year', 'that idea you mentioned'). Possessive adjectives (my, your, his) + noun. Possessive pronouns (mine, yours, his) replace the whole noun phrase.`,
      formulas:[
        {tag:"near", val:`this (sing.) / these (pl.)`},
        {tag:"far", val:`that (sing.) / those (pl.)`},
        {tag:"poss. adj", val:`my/your/his/her/its/our/their + Noun`},
        {tag:"poss. pron", val:`mine/yours/his/hers/ours/theirs <span class='slot'>[no noun after]</span>`}
      ],
      examples:[
        "This project is more complex than that one we discussed last month.",
        "Is this catalog yours or his?"
      ],
      compare:`'Its' (possessive, no apostrophe) vs 'it's' (contraction of 'it is') is a classic written confusion — even native speakers mix these up.`,
      warn:`Mistake: 'his' for both possessive adjective and pronoun is correct, but 'her' (adjective) vs 'hers' (pronoun) are different — 'this is her' is wrong if you mean possession; say 'this is hers'.`
    },
    {
      id:"quantifiers",
      title:"Quantifiers — Some | Any | No | Every",
      tag:"some/any, all/none, every/each",
      logic:`Specifies quantity without an exact number — like boolean/range logic for amounts. 'Some' = positive statements, 'any' = questions/negatives, 'no' = zero quantity, 'every/each' = all members of a group, considered individually or collectively.`,
      when:`Some (affirmative: I have some questions), any (questions/negative: Do you have any questions? / I don't have any), every (group as a whole: Every employee needs a badge), each (group members individually: Each product has its own registration).`,
      formulas:[
        {tag:"affirm", val:`some + Noun`},
        {tag:"quest/neg", val:`any + Noun`},
        {tag:"whole group", val:`every + Singular Noun`},
        {tag:"individually", val:`each + Singular Noun`}
      ],
      examples:[
        "Do you have any updates on the project approval?",
        "Every imported item needs official documentation.",
        "Each product in the catalog was verified individually."
      ],
      compare:`'Some' can appear in questions when offering/requesting (Would you like some coffee?) — this is an exception to the 'any in questions' rule, based on politeness, not grammar logic.`,
      warn:`Mistake: 'every' is always followed by SINGULAR noun + singular verb ('Every employee needs', not 'Every employees need').`
    }
  ]
};
