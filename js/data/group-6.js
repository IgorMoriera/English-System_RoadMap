const GROUP_6 = {
  id: "g6",
  num: "06",
  title: "Artigos, Quantificadores e Pronomes",
  level: "basic-to-intermediate",
  desc: "Esse grupo é onde o erro silencioso mais acontece — não trava a comunicação, mas marca seu inglês como 'estrangeiro' pra um nativo. Português não tem countable/uncountable nouns do mesmo jeito, então essa é uma reformatação mental necessária.",
  topics: [
    {
      id:"articles",
      title:"Articles — A / An / The / (no article)",
      tag:"Definite vs Indefinite",
      logic_en:"'A/an' = indefinite, introduces something new or unspecified (like declaring a new variable). 'The' = definite, refers to something already known/specific (like referencing an existing variable). No article = general/abstract concept or plural general statement.",
      logic_pt:"'A/an' = indefinido, introduz algo novo ou não especificado (como declarar uma variável nova). 'The' = definido, refere-se a algo já conhecido/específico (como referenciar uma variável existente). Sem artigo = conceito geral/abstrato ou afirmação geral no plural.",
      when_en:"A/an: first mention, one of many, job/role (I'm a developer). The: specific, already mentioned, unique things (the sun, the internet), superlatives (the best). No article: general plurals (Cats are independent), abstract nouns (Love is complex), most countries/languages.",
      when_pt:"A/an: primeira menção, um entre muitos, profissão (I'm a developer). The: específico, já mencionado, coisas únicas (the sun, the internet), superlativos (the best). Sem artigo: plural geral, substantivos abstratos, a maioria dos países/idiomas.",
      formulas:[
        {tag:"new info", val:"a/an + Noun(singular) <span class='slot'>[first mention]</span>"},
        {tag:"known info", val:"the + Noun <span class='slot'>[already known/specific]</span>"},
        {tag:"general", val:"(no article) + Noun(plural/abstract)"}
      ],
      examples:[
        {en:"I built an app. The app uses a weather API.", pt:"Eu construí um app. O app usa uma API de previsão do tempo."},
        {en:"Brazil has strict import regulations.", pt:"O Brasil tem regulamentações de importação estritas."},
        {en:"Entrepreneurs often underestimate regulatory complexity.", pt:"Empreendedores costumam subestimar a complexidade regulatória."}
      ],
      compare:{
        en:"The pattern 'mention something with a/an, then refer back to it with the' is the core logic — exactly like declaring then referencing a variable.",
        pt:"O padrão 'mencione algo com a/an, depois refira-se com the' é a lógica central — exatamente como declarar e depois referenciar uma variável. Português usa 'o/a' de forma mais ampla, sem essa distinção tão rígida de primeira menção vs. menção repetida."
      },
      warn_en:"Mistake: Portuguese speakers often add 'the' before general/abstract plural nouns ('The cats are independent' meaning cats in general — wrong; should be 'Cats are independent').",
      warn_pt:"Erro: falante de português costuma colocar 'the' antes de substantivo geral/abstrato no plural ('The cats are independent' querendo dizer gatos em geral — errado; o certo é 'Cats are independent', sem artigo."
    },
    {
      id:"countable-uncountable",
      title:"Countable vs Uncountable Nouns",
      tag:"many/much, few/little",
      logic_en:"Countable nouns can be counted individually (one bug, two bugs) and have a plural form. Uncountable nouns are treated as a mass/concept with no individual units (water, information, advice) and have NO plural form.",
      logic_pt:"Substantivos contáveis podem ser contados individualmente (um bug, dois bugs) e têm forma plural. Substantivos incontáveis são tratados como massa/conceito sem unidades individuais (água, informação, conselho) e NÃO têm plural.",
      when_en:"Many/few + countable plural. Much/little + uncountable. A lot of/lots of works for both. 'Information', 'advice', 'feedback', 'data' (often), 'money' are uncountable in English even though their Portuguese equivalents feel countable.",
      when_pt:"Many/few + contável plural. Much/little + incontável. A lot of/lots of funciona pros dois. 'Information', 'advice', 'feedback', 'data' (geralmente), 'money' são incontáveis em inglês mesmo que pareçam contáveis em português.",
      formulas:[
        {tag:"countable", val:"many/few/several + Plural Noun"},
        {tag:"uncountable", val:"much/little + Singular Noun (no -s)"},
        {tag:"both", val:"a lot of / lots of / some / any + either type"}
      ],
      examples:[
        {en:"I don't have much information about the exact timeline.", pt:"Eu não tenho muita informação sobre o prazo exato."},
        {en:"I received a lot of feedback on my presentation.", pt:"Eu recebi muito feedback sobre minha apresentação."},
        {en:"There are many candidates, but few have the required experience.", pt:"Existem muitos candidatos, mas poucos têm a experiência necessária."}
      ],
      compare:{
        en:"'Advice', 'information', 'feedback' are ALWAYS singular/uncountable in English — 'an advice' or 'informations' are common Brazilian errors with no English equivalent.",
        pt:"'Advice', 'information', 'feedback' são SEMPRE singulares/incontáveis em inglês — 'an advice' ou 'informations' são erros comuns de brasileiro, sem equivalente em inglês correto."
      },
      warn_en:"Critical fix: say 'a piece of advice' / 'some advice' (never 'an advice'), and 'information' (never 'informations').",
      warn_pt:"Correção crítica: diga 'a piece of advice' / 'some advice' (nunca 'an advice'), e 'information' (nunca 'informations')."
    },
    {
      id:"pronouns-determiners",
      title:"Pronouns & Determiners",
      tag:"this/that/these/those, possessives",
      logic_en:"Pronouns replace nouns to avoid repetition; determiners specify which noun you mean (this/that for distance, possessives for ownership). The logic is about REFERENCE — pointing to something already established.",
      logic_pt:"Pronomes substituem substantivos pra evitar repetição; determinantes especificam qual substantivo você quer dizer (this/that pra distância, possessivos pra posse). A lógica é sobre REFERÊNCIA — apontar pra algo já estabelecido.",
      when_en:"This/these = near (physically or in time — 'this week'). That/those = far ('that year', 'that idea you mentioned'). Possessive adjectives (my, your, his) + noun. Possessive pronouns (mine, yours, his) replace the whole noun phrase.",
      when_pt:"This/these = perto (fisicamente ou no tempo). That/those = distante. Adjetivos possessivos (my, your, his) + substantivo. Pronomes possessivos (mine, yours, his) substituem a frase nominal inteira.",
      formulas:[
        {tag:"near", val:"this (sing.) / these (pl.)"},
        {tag:"far", val:"that (sing.) / those (pl.)"},
        {tag:"poss. adj", val:"my/your/his/her/its/our/their + Noun"},
        {tag:"poss. pron", val:"mine/yours/his/hers/ours/theirs <span class='slot'>[no noun after]</span>"}
      ],
      examples:[
        {en:"This project is more complex than that one we discussed last month.", pt:"Esse projeto é mais complexo que aquele que discutimos no mês passado."},
        {en:"Is this catalog yours or his?", pt:"Esse catálogo é seu ou dele?"}
      ],
      compare:{
        en:"'Its' (possessive, no apostrophe) vs 'it's' (contraction of 'it is') is a classic written confusion — even native speakers mix these up.",
        pt:"'Its' (possessivo, sem apóstrofo) vs 'it's' (contração de 'it is') é uma confusão clássica na escrita — até nativos confundem isso."
      },
      warn_en:"Mistake: 'his' for both possessive adjective and pronoun is correct, but 'her' (adjective) vs 'hers' (pronoun) are different — 'this is her' is wrong if you mean possession; say 'this is hers'.",
      warn_pt:"Erro: 'his' serve tanto pra adjetivo quanto pronome possessivo, mas 'her' (adjetivo) vs 'hers' (pronome) são diferentes — 'this is her' está errado se você quer dizer posse; o certo é 'this is hers'."
    },
    {
      id:"quantifiers",
      title:"Quantifiers — Some / Any / No / Every",
      tag:"some/any, all/none, every/each",
      logic_en:"Specifies quantity without an exact number — like boolean/range logic for amounts. 'Some' = positive statements, 'any' = questions/negatives, 'no' = zero quantity, 'every/each' = all members of a group, considered individually or collectively.",
      logic_pt:"Especifica quantidade sem número exato — como lógica booleana/de intervalo pra quantidades. 'Some' = afirmações positivas, 'any' = perguntas/negativas, 'no' = quantidade zero, 'every/each' = todos os membros de um grupo, considerados individual ou coletivamente.",
      when_en:"Some (affirmative: I have some questions), any (questions/negative: Do you have any questions? / I don't have any), every (group as a whole: Every employee needs a badge), each (group members individually: Each product has its own registration).",
      when_pt:"Some (afirmativo), any (perguntas/negativo), every (grupo como um todo), each (membros do grupo individualmente).",
      formulas:[
        {tag:"affirm", val:"some + Noun"},
        {tag:"quest/neg", val:"any + Noun"},
        {tag:"whole group", val:"every + Singular Noun"},
        {tag:"individually", val:"each + Singular Noun"}
      ],
      examples:[
        {en:"Do you have any updates on the project approval?", pt:"Você tem alguma atualização sobre a aprovação do projeto?"},
        {en:"Every imported item needs official documentation.", pt:"Todo item importado precisa de documentação oficial."},
        {en:"Each product in the catalog was verified individually.", pt:"Cada produto no catálogo foi verificado individualmente."}
      ],
      compare:{
        en:"'Some' can appear in questions when offering/requesting (Would you like some coffee?) — this is an exception to the 'any in questions' rule, based on politeness, not grammar logic.",
        pt:"'Some' pode aparecer em perguntas quando se está oferecendo/pedindo algo (Would you like some coffee?) — é uma exceção à regra de 'any em perguntas', baseada em educação, não lógica gramatical pura."
      },
      warn_en:"Mistake: 'every' is always followed by SINGULAR noun + singular verb ('Every employee needs', not 'Every employees need').",
      warn_pt:"Erro: 'every' é sempre seguido de substantivo SINGULAR + verbo singular ('Every employee needs', não 'Every employees need')."
    }
  ]
};


/* ============================================================
   PRACTICE DATA — speaking routine, resources, exam guidance
   ============================================================ */
