const GROUP_5 = {
  id: "g5",
  num: "05",
  title: "Conectores e Discurso",
  level: "intermediate-to-advanced",
  desc: "Conectores são os 'operadores lógicos' do discurso: AND, OR, BUT, BECAUSE em forma sofisticada. No IELTS, 'Coherence and Cohesion' é um dos 4 critérios de nota — dominar conectores impacta diretamente sua pontuação em Speaking e Writing.",
  topics: [
    {
      id:"conn-addition",
      title:"Adição",
      tag:"and, also, in addition, moreover",
      logic_en:"Adds another point to support the same idea — like appending another argument to the same logical thread.",
      logic_pt:"Adiciona outro ponto pra apoiar a mesma ideia — como anexar outro argumento à mesma linha lógica.",
      when_en:"Casual: also, too, as well. Formal/written: in addition, furthermore, moreover. Use formal versions in IELTS Writing/Speaking Part 3.",
      when_pt:"Casual: also, too, as well. Formal/escrito: in addition, furthermore, moreover. Use as versões formais no IELTS Writing/Speaking Part 3.",
      formulas:[
        {tag:"casual", val:"Sentence. + Also, / + ..., too."},
        {tag:"formal", val:"Sentence. + In addition, / Furthermore, / Moreover, + Sentence."}
      ],
      examples:[
        {en:"The store will sell imported drinks. In addition, it will offer a subscription club.", pt:"A loja vai vender bebidas importadas. Além disso, vai oferecer um clube de assinatura."},
        {en:"Groq is fast. It's also cost-effective for this use case.", pt:"Groq é rápido. Também é econômico pra esse caso de uso."}
      ],
      compare:{
        en:"In academic writing (IELTS Task 2), 'moreover' and 'furthermore' signal you can vary register — using only 'and' throughout caps your Lexical Resource score.",
        pt:"Em texto acadêmico (IELTS Task 2), 'moreover' e 'furthermore' mostram que você varia o registro — usar só 'and' o tempo todo limita sua nota de Lexical Resource."
      },
      warn_en:"Don't overuse formal connectors in casual speaking — it sounds robotic. Reserve 'moreover/furthermore' for writing or formal speaking contexts (IELTS Part 3, presentations).",
      warn_pt:"Não exagere com conectores formais na fala casual — soa robótico. Reserve 'moreover/furthermore' pra texto escrito ou contextos formais de fala (IELTS Part 3, apresentações)."
    },
    {
      id:"conn-contrast",
      title:"Contraste",
      tag:"but, however, although, despite, whereas",
      logic_en:"Signals a contradiction or unexpected turn relative to the previous statement — the 'else' branch of an argument.",
      logic_pt:"Sinaliza uma contradição ou virada inesperada em relação à afirmação anterior — o ramo 'else' de um argumento.",
      when_en:"But/however = simple contrast between two clauses/sentences. Although/even though = contrast within ONE sentence, with a subordinate clause. Despite/in spite of = followed by a NOUN or V-ing, not a full clause. Whereas/while = comparing two contrasting facts side by side.",
      when_pt:"But/however = contraste simples entre duas cláusulas/frases. Although/even though = contraste dentro de UMA frase, com cláusula subordinada. Despite/in spite of = seguido de SUBSTANTIVO ou V-ing, não cláusula completa. Whereas/while = comparar dois fatos contrastantes lado a lado.",
      formulas:[
        {tag:"but", val:"Sentence, but + Sentence."},
        {tag:"however", val:"Sentence. However, + Sentence."},
        {tag:"although", val:"Although + Subject + Verb, Subject + Verb."},
        {tag:"despite", val:"Despite + Noun/V-ing, Subject + Verb."},
        {tag:"whereas", val:"Subject + Verb, whereas + Subject + Verb."}
      ],
      examples:[
        {en:"Although ANVISA approval takes time, it protects the business legally.", pt:"Embora a aprovação da ANVISA demore, ela protege o negócio legalmente."},
        {en:"Despite the regulatory delays, the catalog is almost ready.", pt:"Apesar dos atrasos regulatórios, o catálogo está quase pronto."},
        {en:"Layer 1 products are nationally distributed, whereas Layer 2 requires import infrastructure.", pt:"Produtos da Camada 1 são distribuídos nacionalmente, enquanto a Camada 2 exige infraestrutura de importação."}
      ],
      compare:{
        en:"'Despite' is followed by a noun phrase or V-ing — NEVER a full clause with subject+verb. 'Despite it rains' is wrong; say 'Despite the rain' or 'Despite raining'.",
        pt:"'Despite' é seguido de substantivo ou V-ing — NUNCA uma cláusula completa com sujeito+verbo. 'Despite it rains' está errado; o certo é 'Despite the rain' ou 'Despite raining'."
      },
      warn_en:"Critical mistake: 'Despite of' doesn't exist — it's 'despite' OR 'in spite of', never 'despite of'.",
      warn_pt:"Erro crítico: 'despite of' não existe — é 'despite' OU 'in spite of', nunca 'despite of'."
    },
    {
      id:"conn-cause-effect",
      title:"Causa e Efeito",
      tag:"because, since, therefore, as a result",
      logic_en:"Marks a logical cause-effect relationship — exactly like a function returning a result based on an input condition.",
      logic_pt:"Marca uma relação lógica de causa-efeito — exatamente como uma função retornando um resultado baseado numa condição de entrada.",
      when_en:"Because/since/as = introduce the CAUSE (can start or be in the middle of a sentence). Therefore/thus/as a result/consequently = introduce the RESULT, usually starting a new sentence, more formal.",
      when_pt:"Because/since/as = introduzem a CAUSA (pode começar ou estar no meio da frase). Therefore/thus/as a result/consequently = introduzem o RESULTADO, geralmente começando frase nova, mais formal.",
      formulas:[
        {tag:"cause", val:"Sentence + because/since/as + Cause."},
        {tag:"result", val:"Cause. Therefore, / As a result, / Consequently, + Result."}
      ],
      examples:[
        {en:"We chose Groq because it's significantly cheaper than GPT for this volume.", pt:"Escolhemos Groq porque é significativamente mais barato que GPT pra esse volume."},
        {en:"The product wasn't ANVISA-approved. As a result, we removed it from the catalog.", pt:"O produto não tinha aprovação da ANVISA. Como resultado, nós o removemos do catálogo."}
      ],
      compare:{
        en:"'Because of' is followed by a noun, while 'because' is followed by a full clause — a structural distinction many learners blur.",
        pt:"'Because of' é seguido de substantivo, enquanto 'because' é seguido de cláusula completa — uma distinção estrutural que muita gente embaralha. Compare: 'because of the delay' (substantivo) vs 'because the import was delayed' (cláusula)."
      },
      warn_en:"For IELTS Speaking Part 3, using 'therefore/consequently' instead of always 'so' raises your perceived formality and range significantly.",
      warn_pt:"No IELTS Speaking Part 3, usar 'therefore/consequently' em vez de sempre 'so' aumenta bastante sua formalidade percebida e seu repertório."
    },
    {
      id:"conn-sequence",
      title:"Sequência",
      tag:"first, then, after that, finally",
      logic_en:"Organizes ideas or steps in chronological/logical order — like numbering steps in a process or algorithm.",
      logic_pt:"Organiza ideias ou passos em ordem cronológica/lógica — como numerar passos de um processo ou algoritmo.",
      when_en:"Describing processes, telling stories, structuring an argument step by step — very useful for IELTS Writing Task 1 (process description) and Speaking Part 2 (storytelling).",
      when_pt:"Descrever processos, contar histórias, estruturar um argumento passo a passo — muito útil pro IELTS Writing Task 1 (descrição de processo) e Speaking Part 2 (contar histórias).",
      formulas:[
        {tag:"struct", val:"First, ... Then/Next, ... After that, ... Finally, ..."}
      ],
      examples:[
        {en:"First, we validate the product on official brand sources. Then, we classify it as Layer 1 or Layer 2.", pt:"Primeiro, validamos o produto em fontes oficiais da marca. Depois, classificamos como Camada 1 ou Camada 2."},
        {en:"Finally, we submit the import documentation to ANVISA.", pt:"Por fim, enviamos a documentação de importação pra ANVISA."}
      ],
      compare:{
        en:"This maps almost 1:1 onto pseudocode structure — 'first/then/finally' is literally step 1, step 2, step n. Easy win for a logical thinker.",
        pt:"Isso mapeia quase 1:1 com estrutura de pseudocódigo — 'first/then/finally' é literalmente passo 1, passo 2, passo n. Vitória fácil pra quem pensa de forma lógica."
      },
      warn_en:"No major trap — just don't overuse 'and then... and then...' in formal writing; vary with the words above.",
      warn_pt:"Sem armadilha grande — só não fique repetindo 'and then... and then...' em texto formal; varie com as palavras acima."
    },
    {
      id:"conn-opinion",
      title:"Opinião e Persuasão",
      tag:"in my opinion, arguably, it could be argued",
      logic_en:"Frames a statement as a viewpoint rather than fact — critical for IELTS Speaking Part 3 and Writing Task 2, where you must argue a position while sounding balanced and academic.",
      logic_pt:"Enquadra uma afirmação como ponto de vista, não fato — crítico pro IELTS Speaking Part 3 e Writing Task 2, onde você precisa defender uma posição parecendo equilibrado e acadêmico.",
      when_en:"In my opinion/I believe = direct, personal. Arguably/it could be argued that = academic, hedged, sounds more objective. From my point of view = personal but slightly more formal than 'I think'.",
      when_pt:"In my opinion/I believe = direto, pessoal. Arguably/it could be argued that = acadêmico, com ressalva, soa mais objetivo. From my point of view = pessoal mas um pouco mais formal que 'I think'.",
      formulas:[
        {tag:"personal", val:"In my opinion, / I believe (that) + Statement."},
        {tag:"academic", val:"It could be argued that + Statement. / Arguably, + Statement."}
      ],
      examples:[
        {en:"In my opinion, validating demand before investing capital reduces risk significantly.", pt:"Na minha opinião, validar a demanda antes de investir capital reduz o risco significativamente."},
        {en:"It could be argued that regulatory compliance is the real differentiator in this market.", pt:"Pode-se argumentar que a conformidade regulatória é o verdadeiro diferencial nesse mercado."}
      ],
      compare:{
        en:"IELTS examiners specifically reward hedging language ('arguably', 'it seems that', 'tend to') because it shows nuance instead of absolute claims.",
        pt:"Examinadores do IELTS especificamente recompensam linguagem de ressalva ('arguably', 'it seems that', 'tend to') porque mostra nuance em vez de afirmações absolutas."
      },
      warn_en:"Avoid 'I think that's true' as your only opinion phrase throughout the whole test — examiners notice repetition and it caps your Lexical Resource score.",
      warn_pt:"Evite usar 'I think that's true' como sua única frase de opinião na prova toda — examinadores notam repetição e isso limita sua nota de Lexical Resource."
    }
  ]
};


/* ============================================================
   GROUP 6 — ARTIGOS, QUANTIFICADORES E PRONOMES
   ============================================================ */
