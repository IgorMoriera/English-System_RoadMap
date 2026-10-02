/* ============================================================
   PHRASAL VERBS — English only
   Meanings live in js/lang/*.js under key: pv.tr.<phrase>
   ============================================================ */
const PHRASAL_VERBS = {
  id: "phrasal-verbs",
  title: "Phrasal Verbs — Tabela de Referência",
  subtitle: "Verbo + partícula(s) → significado, frequentemente não-literal",
  desc: `A phrasal verb combines a verb with one or two particles (up, on, off, out...) to create a new meaning that's often impossible to guess from the individual words. 'Give up' has nothing to do with literally 'giving' anything 'up'. There's no shortcut — these are vocabulary items to memorize, like idioms. Grouping by base verb at least shows which particles tend to pair with which roots.`,
  groups: [
    {
      base: "get",
      verbs: [
        ["get up","I get up at 6am every day."],
        ["get on","She gets on well with her coworkers."],
        ["get off","We need to get off at the next stop."],
        ["get over","It took months to get over the loss."],
        ["get along (with)","Do you get along with your neighbors?"],
        ["get away","The thief got away before the police arrived."],
        ["get back","What time will you get back tonight?"],
        ["get through","I finally got through to customer service."],
        ["get up to","What have you been getting up to lately?"],
        ["get by","We can get by on a tight budget for a while."],
        ["get into","She got into painting during the pandemic."],
        ["get out of","He always finds a way to get out of chores."]
      ]
    },
    {
      base: "go",
      verbs: [
        ["go on","Please go on, I'm listening."],
        ["go off","The fire alarm went off during the meeting."],
        ["go through","She's going through a hard time right now."],
        ["go ahead","Go ahead, I don't mind waiting."],
        ["go over","Let's go over the report before we send it."],
        ["go back","I'd like to go back to my hometown someday."],
        ["go down","Prices usually go down after the holidays."],
        ["go up","Rent has gone up significantly this year."],
        ["go without","We had to go without electricity for a day."],
        ["go along with","I'll go along with whatever the group decides."]
      ]
    },
    {
      base: "put",
      verbs: [
        ["put off","Stop putting off the decision — just make it."],
        ["put up with","I can't put up with this noise anymore."],
        ["put on","She put on her jacket before leaving."],
        ["put away","Please put away your toys before dinner."],
        ["put down","He put the phone down and walked away."],
        ["put out","The firefighters put out the fire quickly."],
        ["put together","They put together a great presentation."],
        ["put forward","She put forward an interesting proposal."],
        ["put across","He struggled to put his point across."]
      ]
    },
    {
      base: "take",
      verbs: [
        ["take off","The plane takes off at 9am."],
        ["take on","She decided to take on a new project."],
        ["take over","The new manager took over the team last month."],
        ["take after","He takes after his father in many ways."],
        ["take up","I took up running last year."],
        ["take back","I take back what I said earlier."],
        ["take in","It's a lot of information to take in at once."],
        ["take down","Can you take down these notes for me?"],
        ["take apart","He took the engine apart to fix it."],
        ["take out","Let's take out the trash before guests arrive."]
      ]
    },
    {
      base: "come",
      verbs: [
        ["come across","I came across an old photo yesterday."],
        ["come up with","She came up with a brilliant solution."],
        ["come back","He promised to come back next year."],
        ["come along","The project is coming along nicely."],
        ["come over","Why don't you come over this weekend?"],
        ["come out","The results will come out next week."],
        ["come down with","I think I'm coming down with a cold."],
        ["come up","Something urgent came up at work."]
      ]
    },
    {
      base: "look",
      verbs: [
        ["look for","I'm looking for my keys."],
        ["look after","Can you look after the kids tonight?"],
        ["look forward to","I'm looking forward to the trip."],
        ["look into","We need to look into this issue further."],
        ["look up","Just look up the word if you don't know it."],
        ["look up to","She looks up to her older sister."],
        ["look down on","He shouldn't look down on people with less experience."],
        ["look out (for)","Look out! There's a car coming."],
        ["look over","Can you look over this email before I send it?"]
      ]
    },
    {
      base: "turn",
      verbs: [
        ["turn on","Turn on the lights, please."],
        ["turn off","Don't forget to turn off the stove."],
        ["turn up","He turned up an hour late."],
        ["turn down","She turned down the job offer."],
        ["turn into","The small startup turned into a big company."],
        ["turn out","The movie turned out to be really good."],
        ["turn around","The team managed to turn the season around."]
      ]
    },
    {
      base: "give",
      verbs: [
        ["give up","Don't give up on your goals."],
        ["give in","After hours of arguing, he finally gave in."],
        ["give away","She gave away free samples at the event."],
        ["give back","Please give back the book when you're done."],
        ["give out","They gave out flyers at the entrance."]
      ]
    },
    {
      base: "break",
      verbs: [
        ["break down","The car broke down on the highway."],
        ["break up","They broke up after three years together."],
        ["break out","A fire broke out in the warehouse."],
        ["break into","Someone broke into the office last night."],
        ["break off","They broke off the negotiation suddenly."]
      ]
    },
    {
      base: "bring",
      verbs: [
        ["bring up","She brought up an important point in the meeting."],
        ["bring back","This song brings back memories."],
        ["bring about","The new policy brought about major changes."],
        ["bring forward","We had to bring the meeting forward."]
      ]
    },
    {
      base: "call",
      verbs: [
        ["call off","They called off the meeting at the last minute."],
        ["call back","I'll call you back in five minutes."],
        ["call for","The situation calls for immediate action."],
        ["call on","The teacher called on a student to answer."]
      ]
    },
    {
      base: "cut",
      verbs: [
        ["cut down (on)","I'm trying to cut down on sugar."],
        ["cut off","The storm cut off power to the area."],
        ["cut in","He kept cutting in during the conversation."],
        ["cut out","She cut out fast food completely."]
      ]
    },
    {
      base: "fill",
      verbs: [
        ["fill in","Please fill in this form."],
        ["fill out","Fill out the application carefully."],
        ["fill up","The tank filled up quickly."]
      ]
    },
    {
      base: "hold",
      verbs: [
        ["hold on","Hold on a second, I'll be right there."],
        ["hold up","Sorry, traffic held me up."],
        ["hold back","She held back her tears during the speech."],
        ["hold off","Let's hold off on the decision until tomorrow."]
      ]
    },
    {
      base: "keep",
      verbs: [
        ["keep up (with)","It's hard to keep up with all the changes."],
        ["keep on","She kept on working despite the obstacles."],
        ["keep away (from)","Keep away from the edge, it's dangerous."],
        ["keep up","Keep up the good work!"]
      ]
    },
    {
      base: "set",
      verbs: [
        ["set up","They set up a new office downtown."],
        ["set off","We set off early to avoid traffic."],
        ["set out","She set out to prove her point."],
        ["set back","The delay set the project back by weeks."]
      ]
    },
    {
      base: "run",
      verbs: [
        ["run out (of)","We ran out of coffee this morning."],
        ["run into","I ran into an old friend yesterday."],
        ["run away","The dog ran away during the storm."],
        ["run over","Be careful not to run over the cat."]
      ]
    },
    {
      base: "work",
      verbs: [
        ["work out","Things worked out fine in the end."],
        ["work on","I'm working on my pronunciation."],
        ["work through","We need to work through these issues together."]
      ]
    },
    {
      base: "check",
      verbs: [
        ["check in","We checked in at the hotel around noon."],
        ["check out","Check out this new app I found."],
        ["check up on","She checks up on her parents every week."]
      ]
    },
    {
      base: "carry",
      verbs: [
        ["carry on","Carry on with what you were doing."],
        ["carry out","They carried out the experiment successfully."]
      ]
    },
    {
      base: "show",
      verbs: [
        ["show up","He didn't show up to the meeting."],
        ["show off","He likes to show off his new car."]
      ]
    },
    {
      base: "pick",
      verbs: [
        ["pick up","I'll pick you up at 7pm."],
        ["pick out","She picked out a nice dress for the party."]
      ]
    },
    {
      base: "back",
      verbs: [
        ["back up","Make sure to back up your files regularly."],
        ["back down","He refused to back down during the argument."],
        ["back out (of)","She backed out of the deal at the last minute."]
      ]
    },
    {
      base: "outros verbos comuns",
      verbs: [
        ["figure out","I finally figured out how the app works."],
        ["point out","She pointed out a mistake in the report."],
        ["sort out","We need to sort out this misunderstanding."],
        ["find out","I just found out the news today."],
        ["deal with","I'll deal with the situation tomorrow."],
        ["count on","You can always count on her for help."],
        ["rely on","The whole plan relies on good weather."],
        ["stick to","Try to stick to your original plan."],
        ["stand for","What does this abbreviation stand for?"],
        ["stand out","Her work always stands out from the rest."],
        ["live up to","The movie didn't live up to the hype."],
        ["catch up (with)","Let's catch up over coffee sometime."],
        ["end up","We ended up staying much longer than planned."],
        ["wear out","These shoes are starting to wear out."],
        ["burn out","She burned out after months of overworking."],
        ["drop out (of)","He dropped out of college after a year."],
        ["hang out","We usually hang out on weekends."],
        ["hang on","Hang on, let me check that for you."],
        ["move on","It's time to move on from the past."],
        ["settle down","They decided to settle down in a small town."]
      ]
    },
  ]
};
