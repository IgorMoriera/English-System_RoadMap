const GROUP_4 = {
  id: "g4",
  num: "04",
  title: "Estruturas de Frase",
  level: "intermediate-to-advanced",
  desc: "Depois do verbo, o que diferencia inglês intermediário de avançado é a capacidade de construir frases complexas: unir ideias com relative clauses, reportar o que alguém disse, escolher entre gerúndio e infinitivo corretamente. Isso é o que o IELTS chama de 'grammatical range'.",
  topics: [
    {
      id:"relative-clauses",
      title:"Relative Clauses",
      tag:"who / which / that / whose / where",
      logic_en:"Joins two sentences into one by replacing a repeated noun with a relative pronoun — avoids repetition and creates more sophisticated, connected sentences. Think of it as merging two data objects via a shared key.",
      logic_pt:"Junta duas frases em uma substituindo um substantivo repetido por um pronome relativo — evita repetição e cria frases mais sofisticadas e conectadas. Pense como unir dois objetos de dados via uma chave compartilhada.",
      when_en:"Who (people, subject), whom (people, object, formal), which (things), that (people or things, informal/restrictive), whose (possession), where (places), when (time).",
      when_pt:"Who (pessoas, sujeito), whom (pessoas, objeto, formal), which (coisas), that (pessoas ou coisas, informal/restritivo), whose (posse), where (lugares), when (tempo).",
      formulas:[
        {tag:"defining", val:"Noun + [who/which/that + clause] <span class='slot'>[no commas — essential info]</span>"},
        {tag:"non-def", val:"Noun, [who/which + clause], <span class='slot'>[commas — extra info, can be removed]</span>"}
      ],
      examples:[
        {en:"The developer who built the app used a modern framework.", pt:"O desenvolvedor que construiu o app usou um framework moderno."},
        {en:"The store, which will sell imported goods, opens next year.", pt:"A loja, que vai vender produtos importados, abre no ano que vem."},
        {en:"The town where I grew up is two hours from the capital.", pt:"A cidade onde eu cresci fica a duas horas da capital."}
      ],
      compare:{
        en:"Defining clauses (no commas) = essential, restrictive info (changes WHICH noun you mean). Non-defining (with commas) = extra info, removable.",
        pt:"Cláusulas definidoras (sem vírgula) = informação essencial (muda QUAL substantivo você quer dizer). Não-definidoras (com vírgula) = informação extra, removível sem mudar o sentido principal. Pense como required vs optional parameter."
      },
      warn_en:"Mistake: using 'that' in non-defining clauses (with commas) — 'that' is NEVER used after a comma. Use 'which' or 'who' instead.",
      warn_pt:"Erro: usar 'that' em cláusulas não-definidoras (com vírgula) — 'that' NUNCA é usado depois de vírgula. Use 'which' ou 'who'."
    },
    {
      id:"reported-speech",
      title:"Reported Speech",
      tag:"Direct → Indirect",
      logic_en:"Converts someone's exact words into a report — when the reporting verb is in the past, the tense in the reported clause shifts 'one step back' (a 'backshift'), like a timestamp recalibration.",
      logic_pt:"Converte as palavras exatas de alguém em um relato — quando o verbo de relato está no passado, o tempo verbal na cláusula reportada 'recua um passo' (backshift), como uma recalibração de timestamp.",
      when_en:"Reporting what someone said, asked, or thought — common in narratives, news, and explaining conversations.",
      when_pt:"Relatar o que alguém disse, perguntou ou pensou — comum em narrativas, notícias e ao explicar conversas.",
      formulas:[
        {tag:"present→past", val:"\"I work here\" → He said (that) he worked there."},
        {tag:"past→pastperf", val:"\"I worked here\" → He said (that) he had worked there."},
        {tag:"will→would", val:"\"I will help\" → She said (that) she would help."},
        {tag:"question", val:"\"Where do you live?\" → He asked where I lived. <span class='slot'>[no question word order, no '?']</span>"}
      ],
      examples:[
        {en:"He said he was testing the product with a small group.", pt:"Ele disse que estava testando o produto com um grupo pequeno."},
        {en:"She told me she would launch the store next year.", pt:"Ela me disse que ia lançar a loja no ano que vem."},
        {en:"They asked if I had used that software before.", pt:"Eles perguntaram se eu já tinha usado aquele programa antes."}
      ],
      compare:{
        en:"Reported questions DROP the question word order — 'He asked where I lived', NOT 'He asked where did I live'. This is the #1 error even at advanced levels.",
        pt:"Perguntas reportadas PERDEM a ordem de pergunta — 'He asked where I lived', NÃO 'He asked where did I live'. Esse é o erro #1 até em nível avançado, porque o brasileiro mantém a estrutura de pergunta no relato."
      },
      warn_en:"Don't backshift facts/general truths or things still true: 'She said she lives in Brazil' is fine if it's still true now — backshift isn't always mandatory, it's about logic, not a rigid rule.",
      warn_pt:"Não precisa fazer backshift de fatos/verdades gerais ou coisas ainda verdadeiras: 'She said she lives in Brazil' está ok se ainda é verdade agora — o backshift é sobre lógica, não regra rígida e automática."
    },
    {
      id:"gerund-infinitive",
      title:"Gerund vs Infinitive",
      tag:"V-ing vs to + V",
      logic_en:"Some verbs are followed by gerund (V-ing), others by infinitive (to + V), and some can take either with a CHANGE IN MEANING. There's no universal logic — it's about which verb governs the choice, so the key is memorizing patterns by verb groups.",
      logic_pt:"Alguns verbos são seguidos de gerúndio (V-ing), outros de infinitivo (to + V), e alguns aceitam os dois com MUDANÇA DE SIGNIFICADO. Não há lógica universal — depende de qual verbo governa a escolha, então o segredo é memorizar por grupos de verbos.",
      when_en:"Gerund only: enjoy, avoid, finish, suggest, consider, mind, keep. Infinitive only: want, need, decide, plan, agree, promise, afford. Both, different meaning: remember, forget, stop, try.",
      when_pt:"Só gerúndio: enjoy, avoid, finish, suggest, consider, mind, keep. Só infinitivo: want, need, decide, plan, agree, promise, afford. Os dois, com significado diferente: remember, forget, stop, try.",
      formulas:[
        {tag:"gerund", val:"Verb + V-ing <span class='slot'>[enjoy, avoid, finish...]</span>"},
        {tag:"infinitive", val:"Verb + to + V(base) <span class='slot'>[want, need, decide...]</span>"},
        {tag:"stop+ing", val:"stop + V-ing = quit doing it"},
        {tag:"stop+to", val:"stop + to + V(base) = pause in order to do something else"}
      ],
      examples:[
        {en:"I enjoy building products from scratch.", pt:"Eu gosto de construir produtos do zero."},
        {en:"I decided to register the company before launching.", pt:"Eu decidi registrar a empresa antes de lançar."},
        {en:"I stopped studying at midnight. (= quit studying)", pt:"Eu parei de estudar à meia-noite. (= parei de fazer)"},
        {en:"I stopped to check my email. (= paused to do this)", pt:"Eu parei para checar meu email. (= pausei pra fazer isso)"}
      ],
      compare:{
        en:"'Remember to do' (don't forget, future-oriented) vs 'remember doing' (recall a memory, past-oriented) is a classic meaning-shift pair worth memorizing precisely.",
        pt:"'Remember to do' (não esquecer, orientado pro futuro) vs 'remember doing' (lembrar de uma memória, orientado pro passado) é um par clássico de mudança de significado que vale memorizar com precisão."
      },
      warn_en:"There's no shortcut here — build a personal list of the 15-20 most common verbs you use and drill which pattern they take. Treat it like memorizing function signatures.",
      warn_pt:"Não tem atalho aqui — monte uma lista pessoal dos 15-20 verbos mais comuns que você usa e treine qual padrão eles seguem. Trate como memorizar assinaturas de função."
    },
    {
      id:"question-tags",
      title:"Question Tags",
      tag:"..., isn't it? / ..., don't you?",
      logic_en:"A short question added to the end of a statement to confirm information or invite agreement — the rule is mechanical: positive statement gets negative tag, negative statement gets positive tag.",
      logic_pt:"Uma pergunta curta adicionada ao final de uma afirmação pra confirmar informação ou convidar concordância — a regra é mecânica: afirmação positiva recebe tag negativa, afirmação negativa recebe tag positiva.",
      when_en:"Confirming information in conversation, softening statements, inviting the listener to respond — very common in natural spoken English.",
      when_pt:"Confirmar informação na conversa, suavizar afirmações, convidar o ouvinte a responder — muito comum no inglês falado natural.",
      formulas:[
        {tag:"positive", val:"Positive statement + negative tag <span class='slot'>[You're coding, aren't you?]</span>"},
        {tag:"negative", val:"Negative statement + positive tag <span class='slot'>[You aren't coding, are you?]</span>"}
      ],
      examples:[
        {en:"You've tested the product already, haven't you?", pt:"Você já testou o produto, não foi?"},
        {en:"This isn't approved by the regulator yet, is it?", pt:"Isso ainda não foi aprovado pelo órgão regulador, foi?"},
        {en:"You can speak English, can't you?", pt:"Você sabe falar inglês, não é?"}
      ],
      compare:{
        en:"The tag always mirrors the auxiliary verb used in the main clause (be, do, have, modal) — match the auxiliary, then flip the polarity.",
        pt:"A tag sempre espelha o verbo auxiliar usado na frase principal (be, do, have, modal) — combine o auxiliar, depois inverta a polaridade. É uma operação quase mecânica, tipo XOR lógico."
      },
      warn_en:"This is genuinely useful for sounding more natural in speaking — practice it actively, it's a quick win for fluency-sounding speech.",
      warn_pt:"Isso é genuinamente útil pra soar mais natural na fala — pratique ativamente, é uma vitória rápida pra soar mais fluente."
    },
    {
      id:"subjunctive",
      title:"Subjunctive (Formal Wishes/Suggestions)",
      tag:"suggest/recommend that + base form",
      logic_en:"A special grammatical form used after verbs like suggest, recommend, insist, demand, propose — the verb in the clause stays in the BASE FORM regardless of subject or tense, marking it as a hypothetical recommendation, not a fact.",
      logic_pt:"Uma forma gramatical especial usada depois de verbos como suggest, recommend, insist, demand, propose — o verbo na cláusula fica na FORMA BASE independente do sujeito ou tempo, marcando como recomendação hipotética, não fato.",
      when_en:"Formal suggestions, demands, recommendations — common in academic/business writing, useful for IELTS Writing Task 2 register.",
      when_pt:"Sugestões formais, exigências, recomendações — comum em texto acadêmico/de negócios, útil pro registro do IELTS Writing Task 2.",
      formulas:[
        {tag:"struct", val:"Subject + suggest/recommend/insist + that + Subject + V(base) <span class='slot'>[no -s, even with he/she]</span>"}
      ],
      examples:[
        {en:"I suggest that he test the product with more users before launch.", pt:"Eu sugiro que ele teste o produto com mais usuários antes do lançamento."},
        {en:"The lawyer recommended that the company register before trading.", pt:"O advogado recomendou que a empresa se registrasse antes de negociar."}
      ],
      compare:{
        en:"This breaks the normal 3rd-person -s rule on purpose — 'he test' (not 'he tests') is correct here, signaling a hypothetical/desired action, not a fact.",
        pt:"Isso quebra de propósito a regra normal do -s na 3ª pessoa — 'he test' (não 'he tests') está correto aqui, sinalizando uma ação hipotética/desejada, não um fato."
      },
      warn_en:"Brazilians often 'correct' this by adding -s ('he tests') because it looks wrong — resist that instinct, the base form is intentional here.",
      warn_pt:"Brasileiro costuma 'corrigir' isso adicionando -s ('he tests') porque parece errado — resista a esse instinto, a forma base é intencional aqui."
    },
    {
      id:"comparatives-superlatives",
      title:"Comparatives & Superlatives",
      tag:"-er/-est, more/most",
      logic_en:"Compares two things (comparative) or ranks one thing against a whole group (superlative). The form depends on the number of syllables in the adjective — a simple rule with predictable exceptions.",
      logic_pt:"Compara duas coisas (comparativo) ou classifica uma coisa em relação a um grupo inteiro (superlativo). A forma depende do número de sílabas do adjetivo — regra simples com exceções previsíveis.",
      when_en:"Short adjectives (1 syllable, some 2): add -er/-est. Long adjectives (2+ syllables): use more/most. Irregular: good/bad/far have unique forms.",
      when_pt:"Adjetivos curtos (1 sílaba, alguns de 2): adicione -er/-est. Adjetivos longos (2+ sílabas): use more/most. Irregulares: good/bad/far têm formas próprias.",
      formulas:[
        {tag:"short comp", val:"Adjective + er + than <span class='slot'>[faster than]</span>"},
        {tag:"short sup", val:"the + Adjective + est <span class='slot'>[the fastest]</span>"},
        {tag:"long comp", val:"more + Adjective + than <span class='slot'>[more expensive than]</span>"},
        {tag:"long sup", val:"the most + Adjective <span class='slot'>[the most expensive]</span>"},
        {tag:"equal", val:"as + Adjective + as <span class='slot'>[as fast as]</span>"}
      ],
      examples:[
        {en:"This option is faster than the other one for this use case.", pt:"Essa opção é mais rápida que a outra pra esse caso de uso."},
        {en:"This is the most expensive item in the catalog.", pt:"Esse é o item mais caro do catálogo."},
        {en:"This draft isn't as complete as the final version.", pt:"Esse rascunho não é tão completo quanto a versão final."}
      ],
      compare:{
        en:"Good→better→best and bad→worse→worst are irregular — they don't follow the -er/-est or more/most pattern at all, just like 'bom/melhor/ótimo' in Portuguese also breaks pattern.",
        pt:"Good→better→best e bad→worse→worst são irregulares — não seguem o padrão -er/-est nem more/most, igual 'bom/melhor/ótimo' em português também quebra o padrão regular."
      },
      warn_en:"Mistake: 'more better' or 'most fastest' — never combine both systems (more/most + -er/-est) on the same adjective.",
      warn_pt:"Erro: 'more better' ou 'most fastest' — nunca combine os dois sistemas (more/most + -er/-est) no mesmo adjetivo."
    }
  ]
};


/* ============================================================
   GROUP 5 — CONECTORES E DISCURSO (essencial pro IELTS)
   ============================================================ */
