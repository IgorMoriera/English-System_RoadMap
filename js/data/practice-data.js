/* ============================================================
   PRACTICE DATA — English only
   Translations live in js/lang/pt-BR.js and js/lang/es.js
*/
const DAILY_ROUTINE = [
  {
    time:  "MORNING · 15 min",
    title: "Shadowing (Listening + Speaking combined)",
    desc:  "Choose a 1-2 min clip from a podcast or video (see resource list). Listen once without pausing. Then listen again, pausing sentence by sentence, and repeat out loud, mimicking the rhythm and intonation — not just the words. This trains your mouth to produce the sounds while training your ear simultaneously. It's the #1 technique for unlocking fluency because you're not thinking about grammar — you're just reproducing patterns."
  },
  {
    time:  "AFTERNOON · 10 min",
    title: "Narrate your own work out loud",
    desc:  "While working on any task — writing code, organising a spreadsheet, cooking, cleaning the house — narrate what you're doing in English, out loud or mentally: 'I'm writing a function that sorts the data' or 'I'm chopping the vegetables for dinner'. This forces you to use Present Continuous, real everyday vocabulary, and builds the bridge between THINKING in English and your real routine — no extra time required."
  },
  {
    time:  "EVENING · 10-15 min",
    title: "Record yourself answering an IELTS Part 3 question",
    desc:  "Choose an opinion question (e.g. 'Do you think small businesses should prioritise compliance over speed?'). Record yourself speaking for 1-2 minutes without stopping, even if you stumble. Then listen back and note: 1) which verb tense you should have used but didn't, 2) which formal connector could have fitted. This creates a self-correction cycle much faster than studying isolated grammar rules."
  }
];

const RESOURCES = {
  listening: {
    title: "🎧 Listening",
    items: [
      "BBC 6 Minute English — short episodes with transcripts, intermediate level, great for shadowing",
      "Podcast 'All Ears English' — focus on natural fluency and real expressions",
      "Lex Fridman Podcast — for advanced tech/science content in English",
      "Y Combinator Startup School (YouTube) — business/startup vocabulary",
      "Tutorials and reviews on topics you already know — since you know the content, your brain focuses 100% on the language"
    ]
  },
  reading: {
    title: "📖 Reading",
    items: [
      "Official documentation for tools you already use, read in English instead of translating — you already understand the content, so all the gain is in the language",
      "The Economist or BBC News — IELTS-level texts, formal vocabulary and connectors you're studying",
      "r/Entrepreneur and r/startups (Reddit) — real informal English, useful for understanding colloquial register",
      "A non-fiction book of your choice in English — natural vocabulary repetition"
    ]
  },
  speaking_tools: {
    title: "🗣️ Speaking Tools",
    items: [
      "Record short voice notes on your phone narrating your day — listen back, it's uncomfortable but it works",
      "Use Claude (right here) in voice or text mode to simulate conversations — ask me to correct you in real time",
      "Language exchange communities (Tandem, HelloTalk) — speaking with a native learning your language is a direct swap",
      "iTalki — one-off lessons with an IELTS-focused tutor, worth the investment close to test day"
    ]
  }
};

const EXAM_GUIDANCE = {
  duolingo: {
    title: "Duolingo English Test",
    points: [
      "Adaptive format: difficulty adjusts as you answer — 'memorising test patterns' doesn't work, the system tests real breadth.",
      "Mixes grammar, vocabulary and speaking in one continuous section — that's why this roadmap covers everything together: you need to recognise AND produce quickly.",
      "The Speaking section asks for spontaneous 1-3 min responses — practise the 'record yourself' exercise from the daily routine above.",
      "Scoring values real-time grammatical ACCURACY over rare vocabulary — master the 12 verb tenses and modals perfectly before expanding vocabulary."
    ]
  },
  ielts: {
    title: "IELTS Academic",
    points: [
      "Speaking has 3 parts: Part 1 (personal questions, Present Simple/Perfect), Part 2 (2-min monologue, usually past — Past Simple/Continuous), Part 3 (abstract discussion — this is where Conditionals, Certainty Modals, and formal Connectors make the biggest difference to your score).",
      "Writing Task 1 (Academic) asks for graph/process description — Passive Voice and sequence connectors are essential here.",
      "Writing Task 2 is an opinion essay — Cause/effect and contrast connectors, plus academic opinion language (arguably, it could be argued) boost your Lexical Resource score.",
      "The 'Grammatical Range and Accuracy' criterion specifically rewards CORRECT use of complex structures (Conditionals, Passive, Relative Clauses) — getting Present Simple perfect isn't enough; you need to show variety."
    ]
  }
};
