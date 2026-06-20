const GROUP_1 = {
  id: "g1",
  num: "01",
  title: "Sistema Verbal — Tempo × Aspecto",
  level: "basic-to-advanced",
  desc: "O inglês organiza o verbo em uma matriz lógica: 3 tempos (Present, Past, Future) cruzados com 4 aspectos (Simple, Continuous, Perfect, Perfect Continuous) = 12 combinações. Aprenda a matriz, não 12 regras soltas — cada aspecto tem o MESMO significado lógico independente do tempo.",
  matrixNote: "Pense nisso como uma tabela verdade: o EIXO (aspecto) muda o SIGNIFICADO; o TEMPO muda só o 'quando'. Continuous = ação em progresso. Perfect = ação completa relevante para outro ponto. Perfect Continuous = duração até um ponto.",
  topics: [
    {
      id:"present-simple",
      title:"Present Simple",
      tag:"Simple · Present",
      logic_en:"Used for facts that are always true, habits/routines, and general truths — actions with no specific timeframe, repeated or permanent states. Think of it as the 'default state' of a system: it doesn't show progress, just the fact that it happens.",
      logic_pt:"Usado para fatos sempre verdadeiros, hábitos/rotinas e verdades gerais — ações sem prazo específico, repetidas ou permanentes. Pense como o 'estado padrão' de um sistema: não mostra progresso, só o fato de que acontece.",
      when_en:"1) Habits/routines (I work every day) 2) General facts (Water boils at 100°C) 3) Permanent states (She lives in Brazil) 4) Schedules/timetables (The train leaves at 9) 5) Feelings/opinions (I think, I believe, I want)",
      when_pt:"1) Hábitos/rotinas 2) Fatos gerais 3) Estados permanentes 4) Horários fixos/agendas 5) Sentimentos/opiniões (verbos de estado não vão no Continuous)",
      formulas:[
        {tag:"afirm", val:"Subject + V(s/es) <span class='slot'>[3rd person adds -s]</span>"},
        {tag:"neg", val:"Subject + do/does + not + V(base)"},
        {tag:"interr", val:"Do/Does + Subject + V(base) ?"}
      ],
      examples:[
        {en:"I work at a startup.", pt:"Eu trabalho em uma startup."},
        {en:"She doesn't drink coffee.", pt:"Ela não bebe café."},
        {en:"Does the API return JSON?", pt:"A API retorna JSON?"},
        {en:"Water boils at 100 degrees.", pt:"A água ferve a 100 graus."}
      ],
      compare:{
        en:"English marks the 3rd person singular with -s/-es: 'he works'. This is a grammatical signal with no real-world meaning — pure syntax.",
        pt:"Português não marca isso com sufixo extra no mesmo padrão; a conjugação já muda a palavra inteira ('eu trabalho' → 'ele trabalha'). Por isso o brasileiro costuma ESQUECER o -s — não existe equivalente direto."
      },
      warn_en:"Common mistake: forgetting -s in 3rd person ('she work' instead of 'she works'), and using Present Simple for actions happening right now (should be Continuous).",
      warn_pt:"Erro comum: esquecer o -s na 3ª pessoa ('she work' em vez de 'she works'), e usar o Simple para algo acontecendo agora (deveria ser Continuous: 'I'm working' não 'I work' quando alguém pergunta o que você está fazendo neste momento)."
    },
    {
      id:"present-continuous",
      title:"Present Continuous",
      tag:"Continuous · Present",
      logic_en:"Used for actions in progress right now, or temporary situations/trends happening around the present. The aspect 'Continuous' = action caught mid-execution, like a process running, not yet finished.",
      logic_pt:"Usado para ações em progresso agora, ou situações temporárias/tendências acontecendo perto do presente. O aspecto 'Continuous' = ação capturada em execução, como um processo rodando, ainda não terminado.",
      when_en:"1) Action happening at the moment of speaking (I'm writing this now) 2) Temporary situations (I'm staying at a hotel this week) 3) Future arrangements already planned (I'm meeting him tomorrow) 4) Trends/changes (The market is growing)",
      when_pt:"1) Ação acontecendo no momento da fala 2) Situações temporárias 3) Planos futuros já combinados (igual usamos 'vou estar fazendo' informalmente) 4) Tendências/mudanças em curso",
      formulas:[
        {tag:"afirm", val:"Subject + am/is/are + V-ing"},
        {tag:"neg", val:"Subject + am/is/are + not + V-ing"},
        {tag:"interr", val:"Am/Is/Are + Subject + V-ing ?"}
      ],
      examples:[
        {en:"I'm building a Telegram bot right now.", pt:"Estou construindo um bot do Telegram agora."},
        {en:"She isn't working today.", pt:"Ela não está trabalhando hoje."},
        {en:"Are you using AWS Free Tier?", pt:"Você está usando o AWS Free Tier?"},
        {en:"The energy drink market is growing in Brazil.", pt:"O mercado de energéticos está crescendo no Brasil."}
      ],
      compare:{
        en:"English strictly separates 'happening now' (Continuous) from 'general fact' (Simple): 'I work' ≠ 'I'm working'.",
        pt:"Em português, o presente simples ('eu trabalho') cobre as duas ideias — usamos o gerúndio ('estou trabalhando') só quando queremos enfatizar. Em inglês essa separação é OBRIGATÓRIA, não opcional."
      },
      warn_en:"Common mistake: using Continuous with stative verbs (know, want, believe, love, need) — these almost never take -ing. 'I'm knowing' is wrong; say 'I know'.",
      warn_pt:"Erro comum: usar o Continuous com verbos de estado (know, want, believe, love, need) — esses quase nunca vão pro -ing. 'I'm knowing' está errado; o certo é 'I know'."
    },
    {
      id:"present-perfect",
      title:"Present Perfect",
      tag:"Perfect · Present",
      logic_en:"The aspect 'Perfect' = a past action with a RESULT or RELEVANCE in the present. It doesn't matter exactly when it happened — what matters is that it's connected to now. This tense does NOT exist with the same logic in Portuguese, so it's the #1 source of confusion for Brazilians.",
      logic_pt:"O aspecto 'Perfect' = uma ação passada com RESULTADO ou RELEVÂNCIA no presente. Não importa exatamente quando aconteceu — o que importa é a conexão com agora. Esse tempo NÃO existe com a mesma lógica em português, por isso é o erro #1 de brasileiros.",
      when_en:"1) Life experience, unspecified time (I have visited Japan) 2) Action that started in the past and continues now (I have lived here for 5 years) 3) Recent action affecting the present (I have finished the report — so I can send it now) 4) With 'just', 'already', 'yet', 'ever', 'never'",
      when_pt:"1) Experiência de vida, tempo não especificado 2) Ação que começou no passado e continua agora (com FOR/SINCE) 3) Ação recente que afeta o presente 4) Com just/already/yet/ever/never — NUNCA use data específica (yesterday, last year) com Present Perfect",
      formulas:[
        {tag:"afirm", val:"Subject + have/has + V3 <span class='slot'>(past participle)</span>"},
        {tag:"neg", val:"Subject + have/has + not + V3"},
        {tag:"interr", val:"Have/Has + Subject + V3 ?"}
      ],
      examples:[
        {en:"I have built three projects this year.", pt:"Eu construí três projetos este ano."},
        {en:"She hasn't finished the deployment yet.", pt:"Ela ainda não terminou o deploy."},
        {en:"Have you ever used Docker Compose?", pt:"Você já usou Docker Compose alguma vez?"},
        {en:"I've lived in Resende for 10 years.", pt:"Eu moro em Resende há 10 anos."}
      ],
      compare:{
        en:"Present Perfect connects past action to present relevance, with NO specific past time mentioned. 'I have finished' = relevant now, time unspecified.",
        pt:"Português costuma usar o passado simples pra tudo isso: 'eu terminei' serve tanto pra 'I finished' (ação pontual no passado) quanto pra 'I have finished' (relevante agora). É exatamente essa ambiguidade que some em inglês — você TEM que escolher."
      },
      warn_en:"Critical mistake: using Present Perfect with a specific past time marker. 'I have seen him yesterday' is WRONG. If there's a specific time (yesterday, last week, in 2020), use Past Simple: 'I saw him yesterday'.",
      warn_pt:"Erro crítico: usar Present Perfect com marcador de tempo específico. 'I have seen him yesterday' está ERRADO. Se há um tempo específico (yesterday, last week, in 2020), use Past Simple: 'I saw him yesterday'. Essa é a regra mais importante desse tópico — decore."
    },
    {
      id:"present-perfect-continuous",
      title:"Present Perfect Continuous",
      tag:"Perfect Continuous · Present",
      logic_en:"Combines 'Perfect' (connection to present) + 'Continuous' (ongoing action) = emphasizes the DURATION of an action that started in the past and is still happening, or just stopped with visible effects now.",
      logic_pt:"Combina 'Perfect' (conexão com presente) + 'Continuous' (ação em andamento) = enfatiza a DURAÇÃO de uma ação que começou no passado e ainda está acontecendo, ou acabou de parar com efeitos visíveis agora.",
      when_en:"1) Emphasizing duration of an ongoing action (I've been coding for 6 hours) 2) Action recently stopped but with visible result (I've been running — that's why I'm sweating) 3) Often with 'for' and 'since', like Present Perfect, but stressing the activity itself, not just the fact",
      when_pt:"1) Enfatizar duração de ação contínua 2) Ação que acabou de parar mas com resultado visível agora 3) Geralmente com 'for' e 'since', como o Present Perfect — mas com foco na ATIVIDADE, não só no fato",
      formulas:[
        {tag:"afirm", val:"Subject + have/has + been + V-ing"},
        {tag:"neg", val:"Subject + have/has + not + been + V-ing"},
        {tag:"interr", val:"Have/Has + Subject + been + V-ing ?"}
      ],
      examples:[
        {en:"I've been working on this bot for three months.", pt:"Eu venho trabalhando neste bot há três meses."},
        {en:"She hasn't been sleeping well lately.", pt:"Ela não tem dormido bem ultimamente."},
        {en:"Have you been studying English every day?", pt:"Você tem estudado inglês todos os dias?"}
      ],
      compare:{
        en:"Present Perfect Continuous stresses the ongoing PROCESS ('I've been working' = the act of working, in progress). Present Perfect stresses the RESULT/fact ('I've worked' = it happened, done).",
        pt:"Em português usamos 'venho fazendo' ou 'tenho feito' pras duas ideias — em inglês a escolha entre Perfect e Perfect Continuous é sobre processo vs. resultado, algo que você, como engenheiro, pode pensar como 'log de execução em andamento' vs 'status: completo'."
      },
      warn_en:"Mistake: using this with stative verbs (know, believe, want) — 'I've been knowing him' is wrong; say 'I've known him for years' (Present Perfect, no -ing).",
      warn_pt:"Erro: usar isso com verbos de estado — 'I've been knowing him' está errado; o certo é 'I've known him for years' (Present Perfect simples, sem -ing)."
    },
    {
      id:"past-simple",
      title:"Past Simple",
      tag:"Simple · Past",
      logic_en:"A completed action at a specific, finished point in the past. The action and the time are both closed — no connection to the present is implied.",
      logic_pt:"Uma ação completa em um ponto específico e encerrado do passado. A ação e o tempo estão ambos fechados — não há conexão implícita com o presente.",
      when_en:"1) Finished action at a specific past time (I deployed the app yesterday) 2) Sequence of past events (I woke up, had coffee, and started coding) 3) Past habits no longer true (I worked at a bank for 2 years — implies: not anymore)",
      when_pt:"1) Ação terminada em momento específico do passado 2) Sequência de eventos passados 3) Hábitos passados que não são mais verdade",
      formulas:[
        {tag:"afirm", val:"Subject + V2 <span class='slot'>(regular: V+ed / irregular: memorize)</span>"},
        {tag:"neg", val:"Subject + did + not + V(base)"},
        {tag:"interr", val:"Did + Subject + V(base) ?"}
      ],
      examples:[
        {en:"I deployed the bot on AWS last week.", pt:"Eu fiz o deploy do bot na AWS na semana passada."},
        {en:"She didn't test the API before launching.", pt:"Ela não testou a API antes de lançar."},
        {en:"Did you use Groq or OpenAI for the LLM?", pt:"Você usou Groq ou OpenAI para o LLM?"}
      ],
      compare:{
        en:"English has two distinct past forms: V2 for affirmative ('I worked'), but BASE form after 'did' in negative/question ('did you work', not 'did you worked'). This trips up almost every learner.",
        pt:"Português conjuga o verbo igual em qualquer estrutura ('eu trabalhei' / 'você trabalhou?'). Em inglês, o auxiliar 'did' já carrega o passado, então o verbo principal VOLTA pra forma base nas negativas e perguntas — erro #1 de iniciantes a avançados."
      },
      warn_en:"Mistake: 'Did you worked?' — WRONG. Once 'did' appears, the main verb goes back to base form: 'Did you work?'.",
      warn_pt:"Erro: 'Did you worked?' — ERRADO. Depois que 'did' aparece, o verbo principal volta pra forma base: 'Did you work?'. Regra simples mas universal: did/didn't = SEMPRE seguido de verbo na forma base."
    },
    {
      id:"past-continuous",
      title:"Past Continuous",
      tag:"Continuous · Past",
      logic_en:"An action in progress at a specific moment in the past — often interrupted by another action (Past Simple), or two parallel actions happening at the same time in the past.",
      logic_pt:"Uma ação em progresso em um momento específico do passado — geralmente interrompida por outra ação (Past Simple), ou duas ações paralelas acontecendo ao mesmo tempo no passado.",
      when_en:"1) Background action interrupted by a shorter one (I was coding when the power went out) 2) Two simultaneous past actions (I was testing while she was writing docs) 3) Setting a scene in a story",
      when_pt:"1) Ação de fundo interrompida por outra mais curta 2) Duas ações simultâneas no passado 3) Descrever cenário em uma narrativa",
      formulas:[
        {tag:"afirm", val:"Subject + was/were + V-ing"},
        {tag:"neg", val:"Subject + was/were + not + V-ing"},
        {tag:"interr", val:"Was/Were + Subject + V-ing ?"}
      ],
      examples:[
        {en:"I was debugging the code when the client called.", pt:"Eu estava debugando o código quando o cliente ligou."},
        {en:"They weren't testing the chatbot at that time.", pt:"Eles não estavam testando o chatbot naquele momento."},
        {en:"What were you doing at 9pm last night?", pt:"O que você estava fazendo às 21h ontem?"}
      ],
      compare:{
        en:"The classic pattern 'Past Continuous + when + Past Simple' marks an interruption: 'I was sleeping when the alarm rang'.",
        pt:"Português usa essa mesma lógica com 'estava fazendo X quando Y aconteceu' — a estrutura é praticamente espelhada, então isso costuma ser fácil pra brasileiro."
      },
      warn_en:"Mistake: confusing the interruption order. 'When I was arriving, he left' should usually be 'When I arrived, he was leaving' — think about which action is the background (longer) and which is the point (shorter).",
      warn_pt:"Erro: confundir a ordem da interrupção. Pense em qual ação é o fundo (mais longa, Continuous) e qual é o ponto que corta ela (mais curta, Simple)."
    },
    {
      id:"past-perfect",
      title:"Past Perfect",
      tag:"Perfect · Past",
      logic_en:"The 'past of the past' — an action completed BEFORE another past action or point in time. It establishes a clear sequence: this happened, then that happened.",
      logic_pt:"O 'passado do passado' — uma ação completada ANTES de outra ação ou ponto no passado. Estabelece uma sequência clara: isso aconteceu, depois aquilo aconteceu.",
      when_en:"1) Action completed before another past action (I had finished the report before she arrived) 2) The earlier of two past events, to avoid ambiguity 3) Common in reported speech and storytelling",
      when_pt:"1) Ação completada antes de outra ação passada 2) O evento mais antigo entre dois eventos passados, pra evitar ambiguidade 3) Comum em discurso indireto e narrativas",
      formulas:[
        {tag:"afirm", val:"Subject + had + V3"},
        {tag:"neg", val:"Subject + had + not + V3"},
        {tag:"interr", val:"Had + Subject + V3 ?"}
      ],
      examples:[
        {en:"I had already deployed the app before the meeting started.", pt:"Eu já tinha feito o deploy do app antes da reunião começar."},
        {en:"She hadn't tested the database before the demo.", pt:"Ela não tinha testado o banco de dados antes da demo."},
        {en:"Had you used PostgreSQL before this project?", pt:"Você já tinha usado PostgreSQL antes deste projeto?"}
      ],
      compare:{
        en:"Past Perfect requires a clear reference point in the past to make sense: it's always relative to another past moment.",
        pt:"Português usa o mais-que-perfeito composto ('eu tinha terminado') de forma quase idêntica — a lógica é a mesma, só presta atenção pra não esquecer o 'had' em inglês, já que em português conversação às vezes simplifica pro passado simples."
      },
      warn_en:"Mistake: using Past Perfect when there's no second past reference point. If there's only one past action, just use Past Simple. Past Perfect only makes sense in comparison to another past moment.",
      warn_pt:"Erro: usar Past Perfect quando não há um segundo ponto de referência no passado. Se só existe uma ação passada, use Past Simple. Past Perfect só faz sentido COMPARADO a outro momento passado."
    },
    {
      id:"past-perfect-continuous",
      title:"Past Perfect Continuous",
      tag:"Perfect Continuous · Past",
      logic_en:"Emphasizes the DURATION of an action that was ongoing before another past point — 'how long something had been happening' before something else occurred.",
      logic_pt:"Enfatiza a DURAÇÃO de uma ação que estava em andamento antes de outro ponto no passado — 'há quanto tempo algo estava acontecendo' antes de outra coisa ocorrer.",
      when_en:"1) Duration before another past event (I had been coding for 4 hours before I found the bug) 2) Cause of a past situation (He was tired because he had been working all night)",
      when_pt:"1) Duração antes de outro evento passado 2) Causa de uma situação passada",
      formulas:[
        {tag:"afirm", val:"Subject + had + been + V-ing"},
        {tag:"neg", val:"Subject + had + not + been + V-ing"},
        {tag:"interr", val:"Had + Subject + been + V-ing ?"}
      ],
      examples:[
        {en:"I had been testing the bot for hours before it finally worked.", pt:"Eu vinha testando o bot por horas antes de finalmente funcionar."},
        {en:"She was exhausted because she had been working all night on the catalog.", pt:"Ela estava exausta porque tinha passado a noite trabalhando no catálogo."}
      ],
      compare:{
        en:"This is the least common tense in real speech — used mainly to explain WHY a past situation happened, via duration leading up to it.",
        pt:"Não se preocupe em usar isso ativamente na fala. É mais importante RECONHECER essa estrutura ao ler/ouvir do que produzi-la — foque sua energia nos outros 11 tempos primeiro."
      },
      warn_en:"This tense is rare in spoken English — don't force it into conversation. Save your active practice time for Present Perfect and Past Simple instead.",
      warn_pt:"Esse tempo é raro na fala. Não force ele na conversa — invista seu tempo de prática ativa em Present Perfect e Past Simple, que aparecem 20x mais."
    },
    {
      id:"future-will",
      title:"Future Simple — Will",
      tag:"Simple · Future",
      logic_en:"Used for predictions, spontaneous decisions made at the moment of speaking, promises, and facts about the future with no prior planning.",
      logic_pt:"Usado para previsões, decisões espontâneas tomadas no momento da fala, promessas, e fatos sobre o futuro sem planejamento prévio.",
      when_en:"1) Prediction without evidence (I think it will rain) 2) Spontaneous decision (I'll have the pasta, thanks) 3) Promise (I will send the report tonight) 4) Facts about the future (The sun will rise at 6am)",
      when_pt:"1) Previsão sem evidência concreta 2) Decisão espontânea, tomada agora 3) Promessa 4) Fatos sobre o futuro",
      formulas:[
        {tag:"afirm", val:"Subject + will + V(base)"},
        {tag:"neg", val:"Subject + will + not (won't) + V(base)"},
        {tag:"interr", val:"Will + Subject + V(base) ?"}
      ],
      examples:[
        {en:"I think this feature will increase user retention.", pt:"Eu acho que essa funcionalidade vai aumentar a retenção de usuários."},
        {en:"I won't launch the store without ANVISA approval.", pt:"Eu não vou lançar a loja sem aprovação da ANVISA."},
        {en:"Will the API handle concurrent requests?", pt:"A API vai aguentar requisições concorrentes?"}
      ],
      compare:{
        en:"'Will' = decided NOW, in the moment, or a general prediction with no plan behind it.",
        pt:"Português usa 'vou fazer' tanto pra decisão espontânea quanto pra plano já organizado — em inglês essa diferença é marcada pela escolha entre 'will' (espontâneo/previsão) e 'going to' (já planejado). Veja o próximo tópico."
      },
      warn_en:"Mistake: using 'will' for something already planned with evidence. If you already bought the ticket, say 'I'm going to travel', not 'I will travel'.",
      warn_pt:"Erro: usar 'will' pra algo já planejado com evidência concreta. Se você já comprou a passagem, diga 'I'm going to travel', não 'I will travel'."
    },
    {
      id:"future-going-to",
      title:"Future Simple — Going to",
      tag:"Simple · Future (planned)",
      logic_en:"Used for intentions/plans decided BEFORE the moment of speaking, and predictions based on present evidence (something you can see/observe now).",
      logic_pt:"Usado para intenções/planos decididos ANTES do momento da fala, e previsões baseadas em evidência presente (algo que você pode ver/observar agora).",
      when_en:"1) Pre-decided plan (I'm going to open the store in Resende next year) 2) Prediction with visible evidence (Look at those clouds — it's going to rain)",
      when_pt:"1) Plano decidido antes de falar 2) Previsão com evidência visível no momento",
      formulas:[
        {tag:"afirm", val:"Subject + am/is/are + going to + V(base)"},
        {tag:"neg", val:"Subject + am/is/are + not + going to + V(base)"},
        {tag:"interr", val:"Am/Is/Are + Subject + going to + V(base) ?"}
      ],
      examples:[
        {en:"I'm going to register the company before opening the store.", pt:"Eu vou registrar a empresa antes de abrir a loja."},
        {en:"She isn't going to import that flavor without checking ANVISA first.", pt:"Ela não vai importar esse sabor sem checar a ANVISA antes."},
        {en:"Are you going to test the bot with real users?", pt:"Você vai testar o bot com usuários reais?"}
      ],
      compare:{
        en:"'Going to' implies a decision already made — there's a plan behind it, even if informal.",
        pt:"Pense em 'will' como uma função executada em runtime (decidida agora) e 'going to' como uma função já no código, esperando ser chamada (decidida antes) — analogia útil pra engenheiro."
      },
      warn_en:"Both 'will' and 'going to' translate to 'vou fazer' in Portuguese — that's exactly why Brazilians mix them up. The test: was the decision made now (will) or before (going to)?",
      warn_pt:"Tanto 'will' quanto 'going to' traduzem pra 'vou fazer' — por isso brasileiro confunde os dois o tempo todo. O teste mental: a decisão foi tomada agora (will) ou antes (going to)?"
    },
    {
      id:"future-continuous",
      title:"Future Continuous",
      tag:"Continuous · Future",
      logic_en:"An action that will be in progress at a specific future point in time — projecting the 'Continuous' logic (action mid-execution) onto the future.",
      logic_pt:"Uma ação que estará em progresso em um ponto específico no futuro — projetando a lógica do 'Continuous' (ação em execução) para o futuro.",
      when_en:"1) Action in progress at a future moment (At 8pm I'll be coding) 2) Polite interruption-avoidance question (Will you be using the laptop later?)",
      when_pt:"1) Ação em progresso em um momento futuro específico 2) Pergunta educada pra evitar interromper (perguntando sobre planos)",
      formulas:[
        {tag:"afirm", val:"Subject + will + be + V-ing"},
        {tag:"neg", val:"Subject + will + not + be + V-ing"},
        {tag:"interr", val:"Will + Subject + be + V-ing ?"}
      ],
      examples:[
        {en:"This time tomorrow, I'll be presenting the catalog to suppliers.", pt:"Nessa hora amanhã, eu vou estar apresentando o catálogo aos fornecedores."},
        {en:"Will you be working on the bot this weekend?", pt:"Você vai estar trabalhando no bot neste fim de semana?"}
      ],
      compare:{
        en:"Used less often than other future forms — mostly for emphasizing 'mid-action at a specific future time'.",
        pt:"Não é tão comum na fala cotidiana — reconheça ao ouvir, mas não precisa forçar o uso ativo."
      },
      warn_en:"Don't overuse this — native speakers often replace it with simpler forms in casual speech ('I'll be coding' vs just 'I'll code' when the duration isn't the focus).",
      warn_pt:"Não force o uso excessivo — falantes nativos costumam usar formas mais simples no dia a dia quando a duração não é o ponto central da frase."
    },
    {
      id:"future-perfect",
      title:"Future Perfect",
      tag:"Perfect · Future",
      logic_en:"An action that will be completed BEFORE a specific point in the future. Projects the 'Perfect' logic (completed, with relevance) onto the future.",
      logic_pt:"Uma ação que estará completa ANTES de um ponto específico no futuro. Projeta a lógica do 'Perfect' (completo, com relevância) para o futuro.",
      when_en:"1) Action finished by a future deadline (By next month, I will have launched the store) 2) Estimating duration up to a future point",
      when_pt:"1) Ação terminada até um prazo futuro 2) Estimar duração até um ponto futuro",
      formulas:[
        {tag:"afirm", val:"Subject + will + have + V3"},
        {tag:"neg", val:"Subject + will + not + have + V3"},
        {tag:"interr", val:"Will + Subject + have + V3 ?"}
      ],
      examples:[
        {en:"By December, I will have finished the full ANVISA registration.", pt:"Até dezembro, eu vou ter terminado todo o registro na ANVISA."},
        {en:"Will you have completed the MVP by then?", pt:"Você vai ter completado o MVP até lá?"}
      ],
      compare:{
        en:"Almost always paired with 'by [time]' to mark the deadline.",
        pt:"Quase sempre acompanhado de 'by [tempo]' pra marcar o prazo — pense como uma 'deadline de sprint': até X, a tarefa Y estará 'done'."
      },
      warn_en:"This tense is rare in casual speech but appears in IELTS Speaking Part 3 when discussing future plans/predictions — worth recognizing and using occasionally for higher scores.",
      warn_pt:"Raro na fala casual, mas aparece no IELTS Speaking Part 3 ao discutir planos/previsões futuras — vale reconhecer e usar ocasionalmente pra pontuação mais alta."
    },
    {
      id:"future-perfect-continuous",
      title:"Future Perfect Continuous",
      tag:"Perfect Continuous · Future",
      logic_en:"Emphasizes the DURATION of an action that will have been ongoing up until a specific future point.",
      logic_pt:"Enfatiza a DURAÇÃO de uma ação que estará em andamento até um ponto futuro específico.",
      when_en:"1) Duration up to a future point (By June, I will have been running this business for one year)",
      when_pt:"1) Duração até um ponto futuro específico",
      formulas:[
        {tag:"afirm", val:"Subject + will + have + been + V-ing"},
        {tag:"neg", val:"Subject + will + not + have + been + V-ing"},
        {tag:"interr", val:"Will + Subject + have + been + V-ing ?"}
      ],
      examples:[
        {en:"By next year, I will have been working on this project for 24 months.", pt:"No próximo ano, eu vou estar trabalhando neste projeto há 24 meses."}
      ],
      compare:{
        en:"The rarest tense in real usage — like Past Perfect Continuous, prioritize recognition over production.",
        pt:"O tempo mais raro de todos na prática real — assim como o Past Perfect Continuous, priorize reconhecer ao ouvir/ler em vez de tentar produzir ativamente."
      },
      warn_en:"Don't spend much active practice time here — focus on recognizing it. It rarely appears even in IELTS.",
      warn_pt:"Não gaste muito tempo de prática ativa aqui — foque em reconhecer. Raramente aparece até no IELTS."
    }
  ]
};


/* ============================================================
   GROUP 2 — CONDITIONALS & PASSIVE VOICE
   ============================================================ */
