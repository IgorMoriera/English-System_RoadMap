const GROUP_2 = {
  id: "g2",
  num: "02",
  title: "Conditionals & Passive Voice",
  level: "intermediate-to-advanced",
  desc: "Conditionals são estruturas lógicas IF-THEN — literalmente if/else do inglês. Passive Voice inverte o foco de quem age para o que sofre a ação. Ambos aparecem constantemente no IELTS Writing e Speaking Part 3 (argumentação).",
  topics: [
    {
      id:"cond-zero",
      title:"Zero Conditional",
      tag:"If + Present, Present",
      logic_en:"Used for facts and general truths that are always true — like a universal law. If X happens, Y always happens. No hypothesis involved, just cause and effect that's always valid.",
      logic_pt:"Usado para fatos e verdades gerais sempre verdadeiras — como uma lei universal. Se X acontece, Y sempre acontece. Sem hipótese envolvida, só causa e efeito sempre válido.",
      when_en:"Scientific facts, general truths, instructions/routines that always produce the same result.",
      when_pt:"Fatos científicos, verdades gerais, instruções/rotinas que sempre produzem o mesmo resultado.",
      formulas:[
        {tag:"struct", val:"If + Subject + Present Simple, Subject + Present Simple"},
        {tag:"ex-code", val:"if (condition === true) { result_always_happens(); }"}
      ],
      examples:[
        {en:"If you heat water to 100°C, it boils.", pt:"Se você esquenta a água a 100°C, ela ferve."},
        {en:"If the server receives too many requests, it crashes.", pt:"Se o servidor recebe muitas requisições, ele trava."}
      ],
      compare:{
        en:"This is the conditional closest to pure logic — exactly like an if-statement with a guaranteed result.",
        pt:"É o condicional mais parecido com lógica de programação pura — exatamente como um if-statement com resultado garantido. Sem ambiguidade de tempo verbal aqui."
      },
      warn_en:"No special warning here — this is the easiest conditional for logical thinkers since it mirrors boolean logic directly.",
      warn_pt:"Sem alerta especial aqui — esse é o condicional mais fácil pra quem pensa de forma lógica, já que reflete diretamente lógica booleana."
    },
    {
      id:"cond-first",
      title:"First Conditional",
      tag:"If + Present, Will",
      logic_en:"Used for real, possible future situations — a realistic condition that may happen, with a likely result if it does.",
      logic_pt:"Usado para situações futuras reais e possíveis — uma condição realista que pode acontecer, com um resultado provável se acontecer.",
      when_en:"Real future possibilities, warnings, promises tied to a condition.",
      when_pt:"Possibilidades futuras reais, avisos, promessas ligadas a uma condição.",
      formulas:[
        {tag:"struct", val:"If + Subject + Present Simple, Subject + will + V(base)"}
      ],
      examples:[
        {en:"If ANVISA approves the import, we will launch the new flavors.", pt:"Se a ANVISA aprovar a importação, vamos lançar os novos sabores."},
        {en:"If the bot doesn't classify the expense correctly, the user will get confused.", pt:"Se o bot não classificar a despesa corretamente, o usuário vai ficar confuso."}
      ],
      compare:{
        en:"The 'if' clause always uses Present Simple even though it's about the future — this is a fixed rule with no exceptions.",
        pt:"A cláusula com 'if' sempre usa Present Simple mesmo falando do futuro — regra fixa, sem exceção. 'If it will rain' está ERRADO; o certo é 'If it rains'."
      },
      warn_en:"Critical mistake: NEVER use 'will' in the if-clause. 'If it will rain, I will stay home' is wrong — say 'If it rains, I will stay home'.",
      warn_pt:"Erro crítico: NUNCA use 'will' na cláusula com 'if'. 'If it will rain' está errado — o certo é 'If it rains'."
    },
    {
      id:"cond-second",
      title:"Second Conditional",
      tag:"If + Past, Would",
      logic_en:"Used for hypothetical, unreal, or unlikely situations in the present/future — imagining something that isn't true now or probably won't happen.",
      logic_pt:"Usado para situações hipotéticas, irreais ou improváveis no presente/futuro — imaginando algo que não é verdade agora ou provavelmente não vai acontecer.",
      when_en:"Hypotheses contrary to current reality, hypothetical advice, imaginary scenarios.",
      when_pt:"Hipóteses contrárias à realidade atual, conselhos hipotéticos, cenários imaginários.",
      formulas:[
        {tag:"struct", val:"If + Subject + Past Simple, Subject + would + V(base)"},
        {tag:"note", val:"with 'be': always use 'were', even with I/he/she ('If I were you...')"}
      ],
      examples:[
        {en:"If I had more capital, I would import more global flavors.", pt:"Se eu tivesse mais capital, eu importaria mais sabores globais."},
        {en:"If I were you, I would test the chatbot with a larger group first.", pt:"Se eu fosse você, testaria o chatbot com um grupo maior primeiro."}
      ],
      compare:{
        en:"Uses Past Simple form but does NOT refer to the past — it signals 'unreal/hypothetical', not time. This decoupling of form and meaning is what confuses logical thinkers most.",
        pt:"Usa a forma de Past Simple mas NÃO se refere ao passado — sinaliza 'irreal/hipotético', não tempo. Esse desacoplamento entre forma e significado é o que mais confunde quem pensa de forma lógica. Pense nisso como uma 'flag' sintática, não temporal."
      },
      warn_en:"Mistake: using 'would' in the if-clause: 'If I would have more money' is wrong. Say 'If I had more money'.",
      warn_pt:"Erro: usar 'would' na cláusula com 'if': 'If I would have more money' está errado. O certo é 'If I had more money'."
    },
    {
      id:"cond-third",
      title:"Third Conditional",
      tag:"If + Past Perfect, Would Have",
      logic_en:"Used for hypothetical situations in the PAST that did not happen — imagining a different past and its imaginary result. Pure counterfactual.",
      logic_pt:"Usado para situações hipotéticas no PASSADO que não aconteceram — imaginando um passado diferente e seu resultado imaginário. Contrafactual puro.",
      when_en:"Regrets, criticism of past decisions, imagining alternative past outcomes.",
      when_pt:"Arrependimentos, crítica a decisões passadas, imaginar resultados alternativos do passado.",
      formulas:[
        {tag:"struct", val:"If + Subject + had + V3, Subject + would have + V3"}
      ],
      examples:[
        {en:"If I had validated demand earlier, I would have saved months of work on the MIT project.", pt:"Se eu tivesse validado a demanda antes, eu teria economizado meses de trabalho no projeto MIT."},
        {en:"If she hadn't tested on AWS Free Tier, the project would have cost much more.", pt:"Se ela não tivesse testado no AWS Free Tier, o projeto teria custado muito mais."}
      ],
      compare:{
        en:"This is the most complex conditional grammatically, but logically it's simple: take Past Perfect (already 'past of the past') and pair it with 'would have' for the imaginary result.",
        pt:"É o condicional gramaticalmente mais complexo, mas logicamente simples: pega o Past Perfect (já o 'passado do passado') e combina com 'would have' pro resultado imaginário. Pra engenheiro: é uma função que opera sobre um estado que nunca existiu de verdade."
      },
      warn_en:"Mistake: mixing up 'would have' with 'had' — they're not interchangeable. The if-clause always uses 'had + V3', the result clause uses 'would have + V3'.",
      warn_pt:"Erro: trocar 'would have' por 'had' — não são intercambiáveis. A cláusula com 'if' sempre usa 'had + V3', a cláusula de resultado usa 'would have + V3'."
    },
    {
      id:"cond-mixed",
      title:"Mixed Conditionals",
      tag:"Past Perfect ↔ Present/Future result",
      logic_en:"Combines a hypothetical past condition with a present result (or vice versa) — used when the timeframes of cause and effect don't match.",
      logic_pt:"Combina uma condição hipotética passada com um resultado presente (ou vice-versa) — usado quando os prazos da causa e do efeito não coincidem.",
      when_en:"Past action with present consequence: 'If I had studied abroad, I would speak better English now' — past condition (didn't happen), present result (still true today).",
      when_pt:"Ação passada com consequência presente: condição passada (não aconteceu), resultado presente (ainda verdade hoje).",
      formulas:[
        {tag:"struct", val:"If + Subject + had + V3, Subject + would + V(base) [now]"}
      ],
      examples:[
        {en:"If I had started learning English earlier, I would feel more confident in interviews now.", pt:"Se eu tivesse começado a aprender inglês antes, eu me sentiria mais confiante em entrevistas agora."}
      ],
      compare:{
        en:"This shows up a lot in IELTS Speaking Part 3 when you reflect on how a past decision shapes your present life — high-scoring structure.",
        pt:"Aparece bastante no IELTS Speaking Part 3 quando você reflete sobre como uma decisão passada molda sua vida presente — estrutura que pontua bem."
      },
      warn_en:"Don't overthink this — it's just combining the logic blocks of 3rd Conditional (cause) and 2nd Conditional (result) based on which timeframe each part belongs to.",
      warn_pt:"Não complique — é só combinar os blocos lógicos do 3º Condicional (causa) e 2º Condicional (resultado) de acordo com o prazo de cada parte."
    },
    {
      id:"passive-voice",
      title:"Passive Voice",
      tag:"be + V3 (all tenses)",
      logic_en:"Shifts focus from WHO does the action to WHAT receives the action. Used when the agent is unknown, unimportant, obvious, or when you want to sound formal/objective — common in technical, scientific, and academic writing.",
      logic_pt:"Muda o foco de QUEM faz a ação para O QUE recebe a ação. Usado quando o agente é desconhecido, irrelevante, óbvio, ou quando você quer parecer formal/objetivo — comum em texto técnico, científico e acadêmico.",
      when_en:"1) Agent unknown/unimportant (The bug was fixed) 2) Formal/scientific writing (The data was collected over 6 months) 3) Process descriptions (The app is deployed using Docker) 4) Emphasizing the object over the subject",
      when_pt:"1) Agente desconhecido/irrelevante 2) Texto formal/científico 3) Descrição de processos 4) Enfatizar o objeto em vez do sujeito — muito útil pro IELTS Writing Task 1 (descrição de processos/diagramas)",
      formulas:[
        {tag:"struct", val:"Object + be(tense) + V3 + (by + Agent)"},
        {tag:"present", val:"The report is written (by her)"},
        {tag:"past", val:"The report was written (by her)"},
        {tag:"future", val:"The report will be written (by her)"},
        {tag:"perfect", val:"The report has been written (by her)"}
      ],
      examples:[
        {en:"The product catalog was built from official brand sources.", pt:"O catálogo de produtos foi construído a partir de fontes oficiais das marcas."},
        {en:"The bot is hosted on AWS EC2 using Docker Compose.", pt:"O bot é hospedado na AWS EC2 usando Docker Compose."},
        {en:"Imported flavors must be verified by ANVISA before being sold.", pt:"Sabores importados devem ser verificados pela ANVISA antes de serem vendidos."}
      ],
      compare:{
        en:"The passive voice keeps the SAME tense logic as active voice — only the structure changes (object moves to subject position, verb becomes 'be + V3').",
        pt:"A voz passiva mantém a MESMA lógica de tempo verbal da voz ativa — só a estrutura muda (objeto vai para posição de sujeito, verbo vira 'be + V3'). Você já sabe os 12 tempos; aqui é só aplicar 'be' no tempo certo + V3."
      },
      warn_en:"Mistake: forgetting to conjugate 'be' in the correct tense, or using passive too much — overusing passive voice makes speech sound stiff and unnatural in conversation. Use it strategically, not as default.",
      warn_pt:"Erro: esquecer de conjugar 'be' no tempo certo, ou usar passiva demais — abusar da voz passiva deixa a fala robótica e artificial em conversação. Use estrategicamente, não como padrão."
    }
  ]
};


/* ============================================================
   GROUP 3 — MODAL VERBS (organizados por função lógica)
   ============================================================ */
