/* ============================================================
   COLLOCATIONS — English only
   Translations in js/lang/pt-BR.js and js/lang/es.js
*/
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
      ["make a decision","tomar uma decisão","not: do a decision"],
      ["make a mistake","cometer um erro","not: do a mistake"],
      ["make progress","progredir","not: do progress"],
      ["make an effort","fazer um esforço","not: do an effort"],
      ["make a plan","fazer um plano","not: do a plan"],
      ["make money","ganhar dinheiro","not: earn money is also correct, but 'do money' is wrong"],
      ["make a difference","fazer diferença","not: do a difference"],
      ["make an excuse","dar uma desculpa","not: do an excuse"],
      ["do homework","fazer lição de casa","not: make homework"],
      ["do a favor","fazer um favor","not: make a favor"],
      ["do business","fazer negócios","not: make business"],
      ["do exercise","se exercitar","not: make exercise"],
      ["do research","fazer pesquisa","not: make research"],
      ["do your best","dar o seu melhor","not: make your best"],
      ["do the dishes","lavar a louça","not: make the dishes"],
      ["do damage","causar dano","not: make damage"]
      ]
    },
    {
      label: "Take / Have / Get — fixed generic verbs",
      note: `These three verbs combine with many nouns in fixed, non-obvious ways. Swapping them often produces a phrase that's understandable but clearly 'off' to a native speaker.`,
      pairs: [
      ["take a break","fazer uma pausa","not: have a break in most contexts (UK sometimes uses it informally)"],
      ["take a risk","correr um risco","not: make a risk"],
      ["take a shower / take a bath","tomar banho","not: make a shower"],
      ["take advantage of","aproveitar-se de","not: make advantage of"],
      ["take responsibility","assumir responsabilidade","not: make responsibility"],
      ["take a look","dar uma olhada","not: make a look"],
      ["take notes","fazer anotações","not: make notes (less common, 'take' is standard)"],
      ["take a seat","sentar-se","not: make a seat"],
      ["have a conversation","ter uma conversa","not: make a conversation"],
      ["have a good time","se divertir","not: make a good time"],
      ["have an idea","ter uma ideia","not: make an idea"],
      ["have a look","dar uma olhada (sinônimo informal de take a look)","not: make a look"],
      ["get permission","obter permissão","not: take permission"],
      ["get a job","conseguir um emprego","not: make a job"],
      ["get in touch","entrar em contato","not: make in touch"],
      ["get the impression","ter a impressão","not: take the impression"]
      ]
    },
    {
      label: "Fixed Adjective + Noun pairs",
      note: `Some adjectives pair almost exclusively with specific nouns. Using a 'synonym' adjective instead often sounds unnatural even when technically correct.`,
      pairs: [
      ["heavy traffic","trânsito pesado/intenso","not: 'big traffic' or 'strong traffic'"],
      ["heavy rain","chuva forte","not: 'strong rain'"],
      ["strong coffee","café forte","not: 'heavy coffee'"],
      ["high expectations","expectativas altas","not: 'tall expectations'"],
      ["a big mistake","um erro grande/grave","'huge mistake' also works; 'large mistake' sounds odd"],
      ["a fast learner","alguém que aprende rápido","not: 'quick learner' is also fine; 'rapid learner' sounds odd"],
      ["a close friend","um amigo íntimo/próximo","not: 'near friend'"],
      ["a narrow escape","uma fuga por pouco","not: 'thin escape'"],
      ["bitterly cold","extremamente frio","collocation fixa de intensificador + adjetivo"],
      ["deeply concerned","profundamente preocupado","collocation fixa de intensificador + adjetivo"]
      ]
    },
    {
      label: "Fixed prepositions after verbs/adjectives",
      note: `English pairs specific verbs and adjectives with specific prepositions, often differently than the 'logical' translation from your native language would suggest.`,
      pairs: [
      ["depend on","depender de","not: depend of (erro clássico de tradução direta)"],
      ["interested in","interessado em","not: interested on/about"],
      ["good at","bom em (habilidade)","not: good in"],
      ["married to","casado com","not: married with"],
      ["responsible for","responsável por","not: responsible of"],
      ["afraid of","com medo de","not: afraid for (muda o sentido)"],
      ["proud of","orgulhoso de","not: proud with"],
      ["different from / different than","diferente de","not: different of"],
      ["arrive at / arrive in","chegar em (lugar específico/cidade-país)","not: arrive to"],
      ["wait for","esperar por","not: wait to (sem objeto direto)"],
      ["listen to","escutar","not: listen (sem 'to') quando há objeto"],
      ["look at","olhar para","not: look to (em contexto literal de olhar)"],
      ["complain about","reclamar de/sobre","not: complain of (só em contexto médico: 'complain of pain')"],
      ["apologize for","desculpar-se por","not: apologize of"],
      ["congratulate on","parabenizar por","not: congratulate for"]
      ]
    },
    {
      label: "Business and professional expressions",
      note: `Common fixed phrases in professional/business English — useful for anyone using English in a work context.`,
      pairs: [
      ["meet a deadline","cumprir um prazo","not: 'arrive at a deadline'"],
      ["raise a concern","levantar uma preocupação","not: 'lift a concern'"],
      ["reach an agreement","chegar a um acordo","not: 'arrive an agreement'"],
      ["set a goal","estabelecer uma meta","not: 'make a goal' (isso seria gol em esporte)"],
      ["run a business","administrar um negócio","not: 'drive a business'"],
      ["place an order","fazer um pedido (compra)","not: 'make an order' (menos comum, 'place' é padrão)"],
      ["launch a product","lançar um produto","not: 'throw a product'"],
      ["conduct research","realizar pesquisa","mais formal que 'do research'"],
      ["draw a conclusion","chegar a uma conclusão","not: 'make a conclusion'"],
      ["address an issue","tratar/resolver uma questão","not: 'direct an issue'"]
      ]
    },
  ]
};
