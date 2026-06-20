const GROUP_3 = {
  id: "g3",
  num: "03",
  title: "Modal Verbs — Por Função Lógica",
  level: "intermediate",
  desc: "Modais não têm tempo verbal próprio — eles modificam o verbo principal pra expressar uma FUNÇÃO: certeza, obrigação, possibilidade, capacidade, conselho. Em vez de memorizar 10 palavras soltas, agrupe por função e a lógica fica clara.",
  topics: [
    {
      id:"modal-ability",
      title:"Capacidade — Can / Could / Be able to",
      tag:"Ability",
      logic_en:"Expresses ability or skill to do something. 'Can' = present ability, 'could' = past ability or polite request, 'be able to' = ability in any tense (fills the gap can/could can't cover, like future or perfect).",
      logic_pt:"Expressa capacidade ou habilidade de fazer algo. 'Can' = capacidade presente, 'could' = capacidade passada ou pedido educado, 'be able to' = capacidade em qualquer tempo verbal (preenche o que can/could não cobrem, como futuro ou perfeito).",
      when_en:"Present ability (I can code in Python), past ability (I could swim at age 5), future/other tenses ability (I will be able to launch the store next year — 'will can' doesn't exist).",
      when_pt:"Capacidade presente, capacidade passada, capacidade em outros tempos onde can/could não funcionam gramaticalmente.",
      formulas:[
        {tag:"present", val:"Subject + can/can't + V(base)"},
        {tag:"past", val:"Subject + could/couldn't + V(base)"},
        {tag:"other", val:"Subject + will be able to / has been able to + V(base)"}
      ],
      examples:[
        {en:"I can build a full-stack app from scratch.", pt:"Eu consigo construir um app full-stack do zero."},
        {en:"I couldn't find official sources for that flavor.", pt:"Eu não consegui achar fontes oficiais pra esse sabor."},
        {en:"I'll be able to launch that product once the budget is approved.", pt:"Eu vou conseguir lançar esse produto quando o orçamento for aprovado."}
      ],
      compare:{
        en:"'Can' has no future or perfect form — English plugs the gap with 'be able to'. There's no such thing as 'will can'.",
        pt:"'Can' não tem forma de futuro ou perfeito — o inglês resolve isso com 'be able to'. 'Will can' não existe, é erro garantido."
      },
      warn_en:"Mistake: 'I will can do it' — wrong. Say 'I will be able to do it'.",
      warn_pt:"Erro: 'I will can do it' — errado. O certo é 'I will be able to do it'."
    },
    {
      id:"modal-certainty",
      title:"Certeza/Dedução — Must / Can't / Might / May / Could",
      tag:"Certainty & Deduction",
      logic_en:"Used to express how CERTAIN you are about something, based on evidence — like assigning a confidence level to a logical conclusion. Must = highly certain (positive), can't = highly certain (negative), might/may/could = uncertain, possible.",
      logic_pt:"Usado pra expressar o quão CERTO você está sobre algo, baseado em evidência — como atribuir um nível de confiança a uma conclusão lógica. Must = muito certo (positivo), can't = muito certo (negativo), might/may/could = incerto, possível.",
      when_en:"Deducing/guessing based on evidence — not about permission or obligation here, purely about probability/certainty.",
      when_pt:"Deduzir/supor baseado em evidência — não é sobre permissão ou obrigação aqui, é puramente sobre probabilidade/certeza.",
      formulas:[
        {tag:"high+", val:"Subject + must + V(base) <span class='slot'>[~95% certain, positive]</span>"},
        {tag:"high-", val:"Subject + can't + V(base) <span class='slot'>[~95% certain, negative]</span>"},
        {tag:"mid", val:"Subject + might/may/could + V(base) <span class='slot'>[~40-60% certain]</span>"}
      ],
      examples:[
        {en:"The system crashed — there must be an error in the configuration.", pt:"O sistema travou — deve ter um erro na configuração."},
        {en:"He can't be using the free plan with that much traffic — it'd hit the limits.", pt:"Ele não pode estar usando o plano gratuito com esse tráfego — ia bater no limite."},
        {en:"This product might be approved by the regulator next quarter.", pt:"Esse produto pode ser aprovado pelo órgão regulador no próximo trimestre."}
      ],
      compare:{
        en:"Think of this as a probability scale: must (0.95) > might/may/could (0.5) > can't (0.05, but stated as certainty of the negative).",
        pt:"Pense nisso como uma escala de probabilidade: must (0.95) > might/may/could (0.5) > can't (0.05, mas dito como certeza do negativo). Útil pensar em termos de nível de confiança."
      },
      warn_en:"Mistake: using 'mustn't' to mean 'probably not' — 'mustn't' actually means PROHIBITION (you must not do X), not deduction. For negative deduction, use 'can't'.",
      warn_pt:"Erro: usar 'mustn't' pra dizer 'provavelmente não' — 'mustn't' na verdade significa PROIBIÇÃO, não dedução. Pra dedução negativa, use 'can't'."
    },
    {
      id:"modal-obligation",
      title:"Obrigação — Must / Have to / Should / Need to",
      tag:"Obligation & Necessity",
      logic_en:"Expresses different STRENGTHS of obligation. Must = strong, internal/speaker's authority. Have to = strong, external rule/authority. Should = advice, not obligation. Need to = necessity, practical.",
      logic_pt:"Expressa diferentes INTENSIDADES de obrigação. Must = forte, autoridade interna/do falante. Have to = forte, regra externa/autoridade externa. Should = conselho, não obrigação. Need to = necessidade prática.",
      when_en:"Must (rules you set for yourself or strong recommendation), have to (external rules: law, company policy), should (advice — weaker), need to (practical necessity).",
      when_pt:"Must (regras que você mesmo impõe, ou recomendação forte), have to (regras externas: lei, política de empresa), should (conselho — mais fraco), need to (necessidade prática).",
      formulas:[
        {tag:"must", val:"Subject + must + V(base)"},
        {tag:"have to", val:"Subject + have/has to + V(base)"},
        {tag:"should", val:"Subject + should + V(base)"},
        {tag:"need to", val:"Subject + need to + V(base)"}
      ],
      examples:[
        {en:"You have to register your business before opening the store — it's the law.", pt:"Você tem que registrar sua empresa antes de abrir a loja — é a lei."},
        {en:"I must finish the report by Friday — I set that deadline myself.", pt:"Eu tenho que terminar o relatório até sexta — eu mesmo decidi esse prazo."},
        {en:"You should validate demand before importing in bulk.", pt:"Você deveria validar a demanda antes de importar em grande quantidade."}
      ],
      compare:{
        en:"Negative forms have completely different meanings: 'must not' = prohibition (forbidden), but 'don't have to' = no obligation (optional, your choice).",
        pt:"As formas negativas têm significados completamente diferentes: 'must not' = proibido, mas 'don't have to' = sem obrigação (opcional, sua escolha). Esse é um dos erros mais comuns — atenção máxima aqui."
      },
      warn_en:"Critical mistake: 'You mustn't go' means 'you are forbidden to go'. 'You don't have to go' means 'going is optional, no pressure'. These are OPPOSITE in strength, not synonyms.",
      warn_pt:"Erro crítico: 'You mustn't go' significa 'você está proibido de ir'. 'You don't have to go' significa 'ir é opcional, sem pressão'. São OPOSTOS em intensidade, não sinônimos."
    },
    {
      id:"modal-advice",
      title:"Conselho — Should / Ought to / Had better",
      tag:"Advice",
      logic_en:"Recommends a course of action without forcing it. 'Should/ought to' = general advice. 'Had better' = stronger, implies a negative consequence if not followed.",
      logic_pt:"Recomenda uma ação sem forçar. 'Should/ought to' = conselho geral. 'Had better' = mais forte, implica consequência negativa se não for seguido.",
      when_en:"Giving recommendations, suggesting a better course of action, warning about consequences.",
      when_pt:"Dar recomendações, sugerir um curso de ação melhor, avisar sobre consequências.",
      formulas:[
        {tag:"should", val:"Subject + should/shouldn't + V(base)"},
        {tag:"ought to", val:"Subject + ought to + V(base) <span class='slot'>[more formal, less common in speech]</span>"},
        {tag:"had better", val:"Subject + had better (not) + V(base) <span class='slot'>[stronger, implies consequence]</span>"}
      ],
      examples:[
        {en:"You should test the product with more users before scaling.", pt:"Você deveria testar o produto com mais usuários antes de escalar."},
        {en:"We'd better confirm the legal requirements before placing the order.", pt:"É melhor confirmarmos os requisitos legais antes de fazer o pedido."}
      ],
      compare:{
        en:"'Had better' sounds stronger and more urgent than 'should' — almost a warning, not just friendly advice.",
        pt:"'Had better' soa mais forte e urgente que 'should' — quase um aviso, não só um conselho amigável."
      },
      warn_en:"Mistake: 'had better' is followed by base form, not infinitive with 'to'. 'You had better to go' is wrong — say 'You had better go'.",
      warn_pt:"Erro: 'had better' é seguido de forma base, sem 'to'. 'You had better to go' está errado — o certo é 'You had better go'."
    },
    {
      id:"modal-permission",
      title:"Permissão — Can / Could / May / Might",
      tag:"Permission",
      logic_en:"Used to ask for or give permission. 'Can' = informal, 'could/may' = more polite/formal, 'might' = very formal, rare in modern speech for permission.",
      logic_pt:"Usado pra pedir ou dar permissão. 'Can' = informal, 'could/may' = mais educado/formal, 'might' = muito formal, raro na fala moderna pra esse uso.",
      when_en:"Requesting permission in different registers — casual conversation vs business/formal context.",
      when_pt:"Pedir permissão em registros diferentes — conversa casual vs contexto formal/profissional.",
      formulas:[
        {tag:"informal", val:"Can I + V(base) ?"},
        {tag:"polite", val:"Could/May I + V(base) ?"}
      ],
      examples:[
        {en:"Can I use your laptop for the demo?", pt:"Posso usar seu laptop pra demo?"},
        {en:"May I ask a question about the IELTS format?", pt:"Posso fazer uma pergunta sobre o formato do IELTS?"}
      ],
      compare:{
        en:"For IELTS Speaking, using 'could/may' instead of always 'can' signals higher register and scores better on flexibility.",
        pt:"No IELTS Speaking, usar 'could/may' em vez de sempre 'can' sinaliza registro mais alto e pontua melhor em flexibilidade de linguagem."
      },
      warn_en:"No major trap here, but Brazilians tend to overuse 'can' in all contexts — mixing in 'could/may' shows range.",
      warn_pt:"Sem armadilha grande aqui, mas brasileiro tende a usar só 'can' em todo contexto — variar com 'could/may' mostra repertório."
    }
  ]
};


/* ============================================================
   GROUP 4 — ESTRUTURAS DE FRASE
   ============================================================ */
