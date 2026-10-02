/* ============================================================
   COLLOCATIONS — English only
   Meanings live in js/lang/*.js under key: col.tr.<expression>
   ============================================================ */
const COLLOCATIONS = {
  id: "collocations",
  title: "Collocations — Combinações Fixas",
  subtitle: "Palavras que 'andam juntas' por convenção, não por lógica",
  desc: `A collocation is a pair (or group) of words that native speakers habitually use together — not because of any grammar rule, but because of convention built over time. 'Make a decision' is correct; 'do a decision' is grammatically parseable but simply wrong to a native ear. These errors don't block communication, but they're the clearest signal of non-native phrasing — worth deliberate practice once your grammar is already solid.`,
  categories: [
    {
      label: "Make vs Do — the most common confusion",
      note: `There's no perfect rule, but a rough guide: 'make' often relates to creating/producing a result; 'do' often relates to performing an activity/task in general. Memorise these as fixed pairs rather than trying to derive them logically every time.`,
      pairs: [
        ["make a decision","not: do a decision"],
        ["make a mistake","not: do a mistake"],
        ["make progress","not: do progress"],
        ["make an effort","not: do an effort"],
        ["make a plan","not: do a plan"],
        ["make money","not: earn money is also correct, but 'do money' is wrong"],
        ["make a difference","not: do a difference"],
        ["make an excuse","not: do an excuse"],
        ["do homework","not: make homework"],
        ["do a favor","not: make a favor"],
        ["do business","not: make business"],
        ["do exercise","not: make exercise"],
        ["do research","not: make research"],
        ["do your best","not: make your best"],
        ["do the dishes","not: make the dishes"],
        ["do damage","not: make damage"]
      ]
    },
    {
      label: "Take / Have / Get — fixed generic verbs",
      note: `These three verbs combine with many nouns in fixed, non-obvious ways. Swapping them often produces a phrase that's understandable but clearly 'off' to a native speaker.`,
      pairs: [
        ["take a break","not: have a break in most contexts (UK sometimes uses it informally)"],
        ["take a risk","not: make a risk"],
        ["take a shower / take a bath","not: make a shower"],
        ["take advantage of","not: make advantage of"],
        ["take responsibility","not: make responsibility"],
        ["take a look","not: make a look"],
        ["take notes","not: make notes (less common, 'take' is standard)"],
        ["take a seat","not: make a seat"],
        ["have a conversation","not: make a conversation"],
        ["have a good time","not: make a good time"],
        ["have an idea","not: make an idea"],
        ["have a look","not: make a look"],
        ["get permission","not: take permission"],
        ["get a job","not: make a job"],
        ["get in touch","not: make in touch"],
        ["get the impression","not: take the impression"]
      ]
    },
    {
      label: "Fixed Adjective + Noun pairs",
      note: `Some adjectives pair almost exclusively with specific nouns. Using a 'synonym' adjective instead often sounds unnatural even when technically correct.`,
      pairs: [
        ["heavy traffic","not: 'big traffic' or 'strong traffic'"],
        ["heavy rain","not: 'strong rain'"],
        ["strong coffee","not: 'heavy coffee'"],
        ["high expectations","not: 'tall expectations'"],
        ["a big mistake","'huge mistake' also works; 'large mistake' sounds odd"],
        ["a fast learner","not: 'quick learner' is also fine; 'rapid learner' sounds odd"],
        ["a close friend","not: 'near friend'"],
        ["a narrow escape","not: 'thin escape'"],
        ["bitterly cold","collocation fixa de intensificador + adjetivo"],
        ["deeply concerned","collocation fixa de intensificador + adjetivo"]
      ]
    },
    {
      label: "Fixed prepositions after verbs/adjectives",
      note: `English pairs specific verbs and adjectives with specific prepositions, often differently than the 'logical' translation from your native language would suggest.`,
      pairs: [
        ["depend on","not: depend of (erro clássico de tradução direta)"],
        ["interested in","not: interested on/about"],
        ["good at","not: good in"],
        ["married to","not: married with"],
        ["responsible for","not: responsible of"],
        ["afraid of","not: afraid for (muda o sentido)"],
        ["proud of","not: proud with"],
        ["different from / different than","not: different of"],
        ["arrive at / arrive in","not: arrive to"],
        ["wait for","not: wait to (sem objeto direto)"],
        ["listen to","not: listen (sem 'to') quando há objeto"],
        ["look at","not: look to (em contexto literal de olhar)"],
        ["complain about","not: complain of (só em contexto médico: 'complain of pain')"],
        ["apologize for","not: apologize of"],
        ["congratulate on","not: congratulate for"]
      ]
    },
    {
      label: "Business and professional expressions",
      note: `Common fixed phrases in professional/business English — useful for anyone using English in a work context.`,
      pairs: [
        ["meet a deadline","not: 'arrive at a deadline'"],
        ["raise a concern","not: 'lift a concern'"],
        ["reach an agreement","not: 'arrive an agreement'"],
        ["set a goal","not: 'make a goal' (isso seria gol em esporte)"],
        ["run a business","not: 'drive a business'"],
        ["place an order","not: 'make an order' (menos comum, 'place' é padrão)"],
        ["launch a product","not: 'throw a product'"],
        ["conduct research","mais formal que 'do research'"],
        ["draw a conclusion","not: 'make a conclusion'"],
        ["address an issue","not: 'direct an issue'"]
      ]
    },
  ]
};
