const DAILY_ROUTINE = [
  {
    time: "MANHÃ · 15 min",
    title: "Shadowing (Listening + Speaking combinados)",
    desc: "Escolha um trecho de 1-2 min de um podcast ou vídeo (veja lista de recursos). Ouça uma vez sem pausar. Depois, ouça de novo PAUSANDO frase por frase e repita em voz alta, imitando ritmo e entonação — não só as palavras. Isso treina sua boca a produzir os sons e treina seu ouvido simultaneamente. É a técnica nº1 pra destravar fluência, porque você não está pensando em gramática, só reproduzindo padrão."
  },
  {
    time: "TARDE · 10 min",
    title: "Narre seu próprio trabalho em voz alta",
    desc: "Enquanto trabalha em qualquer tarefa do seu dia — escrevendo código, organizando uma planilha, cozinhando, limpando a casa — narre o que está fazendo em inglês, em voz alta ou mentalmente: 'I'm writing a function that sorts the data' ou 'I'm chopping the vegetables for dinner'. Isso força você a usar Present Continuous, vocabulário do seu cotidiano real, e cria a ponte entre PENSAR em inglês e sua rotina real — sem precisar de tempo extra na agenda."
  },
  {
    time: "NOITE · 10-15 min",
    title: "Grave-se respondendo uma pergunta tipo IELTS Part 3",
    desc: "Escolha uma pergunta de opinião (ex: 'Do you think small businesses should prioritize compliance over speed?'). Grave-se falando por 1-2 minutos sem parar, mesmo travando. Depois ouça a gravação e anote: 1) que tempo verbal você devia ter usado e não usou, 2) que conector formal poderia ter encaixado. Isso cria um ciclo de autocorreção muito mais rápido que estudar regra isolada."
  }
];

const RESOURCES = {
  listening: {
    title: "🎧 Listening",
    items: [
      "BBC 6 Minute English — episódios curtos, têm transcript, nível intermediário, ótimo pra shadowing",
      "Podcast 'All Ears English' — foco em fluência natural e expressões reais",
      "Lex Fridman Podcast — se quiser conteúdo técnico/de tecnologia em inglês mais avançado",
      "Y Combinator's Startup School (YouTube) — vocabulário de negócios/startup, relevante pros seus projetos",
      "Canais de review e tutoriais sobre temas que você já domina na sua área — se você já conhece o conteúdo técnico, o foco do cérebro fica 100% no idioma, não no assunto"
    ]
  },
  reading: {
    title: "📖 Reading",
    items: [
      "Documentação oficial de ferramentas que você já usa no trabalho ou estudo, lida em inglês (em vez de traduzir) — você já entende o conteúdo, então o ganho fica todo no idioma",
      "The Economist ou BBC News — textos de nível IELTS, vocabulário formal e conectores que você está estudando",
      "r/Entrepreneur e r/startups (Reddit) — inglês informal real, útil pra entender registro coloquial",
      "Livro 'Atomic Habits' (James Clear) ou outro livro de não-ficção do seu interesse, em inglês — vocabulário cotidiano com repetição natural"
    ]
  },
  speaking_tools: {
    title: "🗣️ Ferramentas de Speaking",
    items: [
      "Grave áudios curtos no celular narrando seu dia/trabalho — ouça depois, é desconfortável mas funciona",
      "Use o Claude (aqui mesmo) em modo de voz ou texto pra simular conversas — peça pra eu te corrigir em tempo real",
      "Comunidades de troca de idioma (Tandem, HelloTalk) — conversar com nativo aprendendo português é troca direta",
      "iTalki — aulas pontuais com tutor focado em IELTS Speaking, vale o investimento perto da prova"
    ]
  }
};

const EXAM_GUIDANCE = {
  duolingo: {
    title: "Duolingo English Test",
    points: [
      "Formato adaptativo: a dificuldade muda conforme você acerta/erra — não adianta 'decorar padrão de prova', o sistema testa amplitude real.",
      "Mistura gramática, vocabulário e fala em uma única seção contínua — por isso esse roadmap junta tudo: você precisa reconhecer E produzir rápido.",
      "A seção de Speaking pede respostas espontâneas de 1-3 min — pratique exatamente o exercício de 'gravar-se respondendo' da rotina diária acima.",
      "Pontuação valoriza CORREÇÃO gramatical em tempo real mais que vocabulário raro — foque em dominar os 12 tempos verbais e modais perfeitamente antes de expandir vocabulário."
    ]
  },
  ielts: {
    title: "IELTS Academic",
    points: [
      "Speaking tem 3 partes: Part 1 (perguntas pessoais, Present Simple/Perfect), Part 2 (monólogo de 2 min, geralmente passado — Past Simple/Continuous), Part 3 (discussão abstrata, é onde Conditionals, Modais de certeza e Conectores formais fazem toda a diferença na nota).",
      "Writing Task 1 (Academic) pede descrição de gráfico/processo — Passive Voice e conectores de sequência são essenciais aqui.",
      "Writing Task 2 é ensaio de opinião — Conectores de causa/efeito, contraste, e linguagem de opinião acadêmica (arguably, it could be argued) elevam a nota de Lexical Resource.",
      "O critério 'Grammatical Range and Accuracy' especificamente recompensa o uso CORRETO de estruturas complexas (Conditionals, Passive, Relative Clauses) — não basta usar Present Simple perfeito o tempo todo; você precisa mostrar variedade."
    ]
  }
};


/* ============================================================
   APP ENGINE
   ============================================================ */
