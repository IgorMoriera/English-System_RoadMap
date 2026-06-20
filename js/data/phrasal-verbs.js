/* ============================================================
   PHRASAL VERBS — tabela de referência
   ============================================================
   Organizados por verbo-base (get, go, put, take...) — phrasal
   verbs não seguem regra lógica de formação, então agrupar pelo
   verbo raiz ajuda a notar padrões de família (get up / get on /
   get over) em vez de memorizar 100+ itens isolados.
*/
const PHRASAL_VERBS = {
  id: "phrasal-verbs",
  title: "Phrasal Verbs — Tabela de Referência",
  subtitle: "Verbo + partícula(s) → significado, frequentemente não-literal",
  desc_en: "A phrasal verb combines a verb with one or two particles (up, on, off, out...) to create a new meaning that's often impossible to guess from the individual words. 'Give up' has nothing to do with literally 'giving' anything 'up'. There's no shortcut — these are vocabulary items to memorize, like idioms. Grouping by base verb at least shows which particles tend to pair with which roots.",
  desc_pt: "Um phrasal verb combina um verbo com uma ou duas partículas (up, on, off, out...) criando um significado novo, geralmente impossível de adivinhar pelas palavras separadas. 'Give up' não tem nada a ver com literalmente 'dar algo para cima'. Não tem atalho — são itens de vocabulário pra memorizar, como expressões idiomáticas. Agrupar pelo verbo-base ao menos mostra quais partículas tendem a combinar com quais raízes.",
  groups: [
    {
      base: "get",
      verbs: [
        ["get up","levantar(-se) (da cama)","I get up at 6am every day."],
        ["get on","subir em (transporte) / dar-se bem com alguém","She gets on well with her coworkers."],
        ["get off","descer de (transporte)","We need to get off at the next stop."],
        ["get over","superar (algo difícil)","It took months to get over the loss."],
        ["get along (with)","se dar bem com","Do you get along with your neighbors?"],
        ["get away","escapar / fugir","The thief got away before the police arrived."],
        ["get back","voltar","What time will you get back tonight?"],
        ["get through","completar algo difícil / conseguir contato (telefone)","I finally got through to customer service."],
        ["get up to","estar fazendo (algo, geralmente travesso)","What have you been getting up to lately?"],
        ["get by","sobreviver com o mínimo","We can get by on a tight budget for a while."],
        ["get into","se interessar por / entrar em (veículo)","She got into painting during the pandemic."],
        ["get out of","escapar de (obrigação) / sair de (veículo)","He always finds a way to get out of chores."]
      ]
    },
    {
      base: "go",
      verbs: [
        ["go on","continuar / acontecer","Please go on, I'm listening."],
        ["go off","disparar (alarme) / explodir / estragar (comida)","The fire alarm went off during the meeting."],
        ["go through","passar por (experiência difícil) / revisar","She's going through a hard time right now."],
        ["go ahead","seguir adiante / permissão pra fazer algo","Go ahead, I don't mind waiting."],
        ["go over","revisar / repassar","Let's go over the report before we send it."],
        ["go back","voltar","I'd like to go back to my hometown someday."],
        ["go down","diminuir / cair (preço, qualidade)","Prices usually go down after the holidays."],
        ["go up","aumentar / subir","Rent has gone up significantly this year."],
        ["go without","passar sem","We had to go without electricity for a day."],
        ["go along with","concordar com / seguir o plano de","I'll go along with whatever the group decides."]
      ]
    },
    {
      base: "put",
      verbs: [
        ["put off","postergar / adiar","Stop putting off the decision — just make it."],
        ["put up with","tolerar / aguentar","I can't put up with this noise anymore."],
        ["put on","vestir / colocar (roupa, peso)","She put on her jacket before leaving."],
        ["put away","guardar (em seu lugar)","Please put away your toys before dinner."],
        ["put down","colocar no chão / depreciar (alguém) / anotar","He put the phone down and walked away."],
        ["put out","apagar (fogo, cigarro)","The firefighters put out the fire quickly."],
        ["put together","montar / organizar","They put together a great presentation."],
        ["put forward","propor (ideia)","She put forward an interesting proposal."],
        ["put across","comunicar (ideia) de forma clara","He struggled to put his point across."]
      ]
    },
    {
      base: "take",
      verbs: [
        ["take off","tirar (roupa) / decolar (avião) / decolar (carreira/negócio)","The plane takes off at 9am."],
        ["take on","assumir (responsabilidade/tarefa)","She decided to take on a new project."],
        ["take over","assumir o controle de","The new manager took over the team last month."],
        ["take after","ser parecido com (família)","He takes after his father in many ways."],
        ["take up","começar (hobby/atividade) / ocupar (espaço/tempo)","I took up running last year."],
        ["take back","retirar o que disse / devolver (loja)","I take back what I said earlier."],
        ["take in","absorver (informação) / acolher (pessoa)","It's a lot of information to take in at once."],
        ["take down","anotar / derrubar / remover (algo postado)","Can you take down these notes for me?"],
        ["take apart","desmontar","He took the engine apart to fix it."],
        ["take out","retirar / levar para fora (alguém, comida)","Let's take out the trash before guests arrive."]
      ]
    },
    {
      base: "come",
      verbs: [
        ["come across","encontrar por acaso / parecer (impressão)","I came across an old photo yesterday."],
        ["come up with","criar / ter (ideia)","She came up with a brilliant solution."],
        ["come back","voltar","He promised to come back next year."],
        ["come along","aparecer / progredir","The project is coming along nicely."],
        ["come over","visitar / ser tomado por (sentimento)","Why don't you come over this weekend?"],
        ["come out","ser revelado / ser lançado (produto, filme)","The results will come out next week."],
        ["come down with","ficar doente com","I think I'm coming down with a cold."],
        ["come up","surgir (assunto, problema)","Something urgent came up at work."]
      ]
    },
    {
      base: "look",
      verbs: [
        ["look for","procurar","I'm looking for my keys."],
        ["look after","cuidar de","Can you look after the kids tonight?"],
        ["look forward to","estar ansioso por (algo bom)","I'm looking forward to the trip."],
        ["look into","investigar","We need to look into this issue further."],
        ["look up","procurar (informação, ex: dicionário)","Just look up the word if you don't know it."],
        ["look up to","admirar / ter como exemplo","She looks up to her older sister."],
        ["look down on","desprezar / olhar com desdém","He shouldn't look down on people with less experience."],
        ["look out (for)","ter cuidado / ficar atento","Look out! There's a car coming."],
        ["look over","revisar rapidamente","Can you look over this email before I send it?"]
      ]
    },
    {
      base: "turn",
      verbs: [
        ["turn on","ligar (aparelho)","Turn on the lights, please."],
        ["turn off","desligar (aparelho)","Don't forget to turn off the stove."],
        ["turn up","aparecer (inesperadamente) / aumentar (volume)","He turned up an hour late."],
        ["turn down","recusar (oferta) / diminuir (volume)","She turned down the job offer."],
        ["turn into","transformar-se em","The small startup turned into a big company."],
        ["turn out","revelar-se / acabar sendo","The movie turned out to be really good."],
        ["turn around","virar / reverter situação","The team managed to turn the season around."]
      ]
    },
    {
      base: "give",
      verbs: [
        ["give up","desistir","Don't give up on your goals."],
        ["give in","ceder / se render","After hours of arguing, he finally gave in."],
        ["give away","dar de graça / revelar (segredo)","She gave away free samples at the event."],
        ["give back","devolver","Please give back the book when you're done."],
        ["give out","distribuir / esgotar(-se)","They gave out flyers at the entrance."]
      ]
    },
    {
      base: "break",
      verbs: [
        ["break down","quebrar (máquina) / desmoronar emocionalmente","The car broke down on the highway."],
        ["break up","terminar (relacionamento) / dividir","They broke up after three years together."],
        ["break out","irromper (guerra, doença, fuga)","A fire broke out in the warehouse."],
        ["break into","invadir / arrombar","Someone broke into the office last night."],
        ["break off","interromper abruptamente / terminar (relação)","They broke off the negotiation suddenly."]
      ]
    },
    {
      base: "bring",
      verbs: [
        ["bring up","criar (filho) / mencionar (assunto)","She brought up an important point in the meeting."],
        ["bring back","trazer de volta / relembrar","This song brings back memories."],
        ["bring about","causar / provocar","The new policy brought about major changes."],
        ["bring forward","antecipar (data, reunião)","We had to bring the meeting forward."]
      ]
    },
    {
      base: "call",
      verbs: [
        ["call off","cancelar","They called off the meeting at the last minute."],
        ["call back","retornar ligação","I'll call you back in five minutes."],
        ["call for","exigir / pedir","The situation calls for immediate action."],
        ["call on","pedir a alguém (formalmente) / visitar","The teacher called on a student to answer."]
      ]
    },
    {
      base: "cut",
      verbs: [
        ["cut down (on)","reduzir (consumo de algo)","I'm trying to cut down on sugar."],
        ["cut off","cortar (suprimento, comunicação) / isolar","The storm cut off power to the area."],
        ["cut in","interromper (falando)","He kept cutting in during the conversation."],
        ["cut out","remover / parar de fazer/comer algo","She cut out fast food completely."]
      ]
    },
    {
      base: "fill",
      verbs: [
        ["fill in","preencher (formulário) / substituir alguém","Please fill in this form."],
        ["fill out","preencher (formulário, mais formal/US)","Fill out the application carefully."],
        ["fill up","enchar completamente","The tank filled up quickly."]
      ]
    },
    {
      base: "hold",
      verbs: [
        ["hold on","esperar / aguardar","Hold on a second, I'll be right there."],
        ["hold up","atrasar / aguentar (sob pressão)","Sorry, traffic held me up."],
        ["hold back","conter(-se) / reter","She held back her tears during the speech."],
        ["hold off","postergar / atrasar (decisão, ação)","Let's hold off on the decision until tomorrow."]
      ]
    },
    {
      base: "keep",
      verbs: [
        ["keep up (with)","acompanhar (ritmo, notícias)","It's hard to keep up with all the changes."],
        ["keep on","continuar (fazendo)","She kept on working despite the obstacles."],
        ["keep away (from)","manter distância de","Keep away from the edge, it's dangerous."],
        ["keep up","manter o nível / continuar","Keep up the good work!"]
      ]
    },
    {
      base: "set",
      verbs: [
        ["set up","montar / estabelecer (negócio, equipamento)","They set up a new office downtown."],
        ["set off","partir (viagem) / disparar (alarme)","We set off early to avoid traffic."],
        ["set out","sair com intenção de / planejar","She set out to prove her point."],
        ["set back","atrasar (planos)","The delay set the project back by weeks."]
      ]
    },
    {
      base: "run",
      verbs: [
        ["run out (of)","ficar sem (algo)","We ran out of coffee this morning."],
        ["run into","encontrar por acaso / colidir com","I ran into an old friend yesterday."],
        ["run away","fugir","The dog ran away during the storm."],
        ["run over","atropelar","Be careful not to run over the cat."]
      ]
    },
    {
      base: "work",
      verbs: [
        ["work out","exercitar-se / resolver(-se) (problema, situação)","Things worked out fine in the end."],
        ["work on","trabalhar em (melhorar algo)","I'm working on my pronunciation."],
        ["work through","resolver (passo a passo)","We need to work through these issues together."]
      ]
    },
    {
      base: "check",
      verbs: [
        ["check in","fazer check-in (hotel, aeroporto)","We checked in at the hotel around noon."],
        ["check out","fazer check-out / verificar / dar uma olhada","Check out this new app I found."],
        ["check up on","verificar o estado de alguém/algo","She checks up on her parents every week."]
      ]
    },
    {
      base: "carry",
      verbs: [
        ["carry on","continuar","Carry on with what you were doing."],
        ["carry out","executar / realizar (tarefa, plano)","They carried out the experiment successfully."]
      ]
    },
    {
      base: "show",
      verbs: [
        ["show up","aparecer / comparecer","He didn't show up to the meeting."],
        ["show off","exibir-se / ostentar","He likes to show off his new car."]
      ]
    },
    {
      base: "pick",
      verbs: [
        ["pick up","pegar / buscar (pessoa, objeto) / aprender (informalmente)","I'll pick you up at 7pm."],
        ["pick out","escolher (entre opções)","She picked out a nice dress for the party."]
      ]
    },
    {
      base: "back",
      verbs: [
        ["back up","apoiar / fazer backup (dados)","Make sure to back up your files regularly."],
        ["back down","recuar / desistir de posição","He refused to back down during the argument."],
        ["back out (of)","desistir de (compromisso)","She backed out of the deal at the last minute."]
      ]
    },
    {
      base: "outros verbos comuns",
      verbs: [
        ["figure out","descobrir / entender (resolvendo)","I finally figured out how the app works."],
        ["point out","apontar / destacar (informação)","She pointed out a mistake in the report."],
        ["sort out","resolver / organizar","We need to sort out this misunderstanding."],
        ["find out","descobrir (informação)","I just found out the news today."],
        ["deal with","lidar com","I'll deal with the situation tomorrow."],
        ["count on","contar com / confiar em","You can always count on her for help."],
        ["rely on","depender de","The whole plan relies on good weather."],
        ["stick to","manter-se fiel a (plano, decisão)","Try to stick to your original plan."],
        ["stand for","representar / significar / tolerar (negativo)","What does this abbreviation stand for?"],
        ["stand out","destacar-se","Her work always stands out from the rest."],
        ["live up to","corresponder a (expectativa)","The movie didn't live up to the hype."],
        ["catch up (with)","atualizar-se / alcançar (atraso)","Let's catch up over coffee sometime."],
        ["end up","acabar (em uma situação, sem planejar)","We ended up staying much longer than planned."],
        ["wear out","desgastar(-se) / cansar","These shoes are starting to wear out."],
        ["burn out","esgotar-se (exaustão)","She burned out after months of overworking."],
        ["drop out (of)","abandonar (curso, escola)","He dropped out of college after a year."],
        ["hang out","passar tempo (socialmente)","We usually hang out on weekends."],
        ["hang on","esperar (informal) / aguentar firme","Hang on, let me check that for you."],
        ["move on","seguir adiante (emocionalmente, no tempo)","It's time to move on from the past."],
        ["settle down","estabelecer-se (vida estável)","They decided to settle down in a small town."]
      ]
    }
  ]
};
