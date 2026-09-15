const ALL_GROUPS = [GROUP_1, GROUP_2, GROUP_3, GROUP_4, GROUP_5, GROUP_6];

// progress stored in memory
let DONE = {};
let currentView = "overview";

/* ---------- LANGUAGE SYSTEM ---------- */
// Available language files (loaded via <script> in index.html)
// Each lang file defines its own const: LANG_PT_BR, LANG_ES, etc.
const LANGS = [
  { code: null,    label: "EN",    flag: "🇬🇧" },  // English = default, no overlay
  { code: "pt-BR", label: "PT-BR", flag: "🇧🇷" },
  { code: "es",    label: "ES",    flag: "🇪🇸" },
];

// Map code → dictionary object. Add new langs here when creating new lang files.
const LANG_DICTS = {
  "pt-BR": typeof LANG_PT_BR !== 'undefined' ? LANG_PT_BR : {},
  "es":    typeof LANG_ES    !== 'undefined' ? LANG_ES    : {},
};

let activeLang = null; // null = English only

// Returns translated string when a lang is active, English fallback otherwise
function L(key, fallback=''){
  if(!activeLang) return fallback;
  const dict = LANG_DICTS[activeLang] || {};
  return (dict[key] != null) ? dict[key] : fallback;
}

// Set active language and re-render
function setLang(code){
  activeLang = code || null;
  document.getElementById('langDropdown').classList.remove('open');
  const picked = LANGS.find(l=>l.code===code) || LANGS[0];
  document.getElementById('langBtn').innerHTML =
    `🌐 ${picked.label} <span class="lang-caret">▾</span>`;
  render();
  buildNav();
}

function allTopicIds(){
  return ALL_GROUPS.flatMap(g => g.topics.map(t => t.id));
}

function updateProgress(){
  const ids = allTopicIds();
  const doneCount = ids.filter(id => DONE[id]).length;
  const pct = ids.length ? Math.round((doneCount/ids.length)*100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent = doneCount + '/' + ids.length + ' ' + L('nav_topics','topics');
  document.getElementById('progressPct').textContent = pct + '%';
  // update nav dots
  document.querySelectorAll('.nav-item[data-gid]').forEach(el=>{
    const gid = el.getAttribute('data-gid');
    const g = ALL_GROUPS.find(x=>x.id===gid);
    const gDone = g.topics.every(t=>DONE[t.id]);
    el.classList.toggle('done', gDone);
  });
  // update matrix cells
  document.querySelectorAll('table.matrix td.cell[data-id]').forEach(el=>{
    el.classList.toggle('done', !!DONE[el.getAttribute('data-id')]);
  });
}

function toggleDone(id, btnEl){
  DONE[id] = !DONE[id];
  if(btnEl){
    btnEl.classList.toggle('checked', DONE[id]);
    btnEl.innerHTML = DONE[id] ? '✓' : '';
  }
  updateProgress();
}

function buildNav(){
  const nav = document.getElementById('navContainer');
  let html = `<div class="nav-section">
    <div class="nav-item ${currentView==='overview'?'active':''}" data-view="overview" onclick="goTo('overview')">
      <span class="dot"></span><span class="nlabel">${L('nav_overview','Overview')}</span>
    </div>
    <div class="nav-item ${currentView==='practice'?'active':''}" data-view="practice" onclick="goTo('practice')">
      <span class="dot"></span><span class="nlabel">${L('nav_practice','Daily Practice')}</span>
    </div>
    <div class="nav-item ${currentView==='exams'?'active':''}" data-view="exams" onclick="goTo('exams')">
      <span class="dot"></span><span class="nlabel">IELTS / Duolingo</span>
    </div>
  </div>
  <div class="nav-section-title">${L('nav_grammar','Grammar')}</div>`;
  ALL_GROUPS.forEach(g=>{
    html += `<div class="nav-section" style="padding-top:2px;">
      <div class="nav-item ${currentView===g.id?'active':''}" data-gid="${g.id}" data-view="${g.id}" onclick="goTo('${g.id}')">
        <span class="dot"></span><span class="nlabel">${g.num} · ${L(`group.${g.id}.title`, g.title)}</span>
        <span class="ncount">${g.topics.length}</span>
      </div>
    </div>`;
  });
  html += `<div class="nav-section-title">${L('nav_reference','Reference')}</div>
  <div class="nav-section" style="padding-top:2px;">
    <div class="nav-item ${currentView==='irregular-verbs'?'active':''}" data-view="irregular-verbs" onclick="goTo('irregular-verbs')">
      <span class="dot"></span><span class="nlabel">${L('nav_irregular','Irregular Verbs')}</span>
      <span class="ncount">${IRREGULAR_VERBS.patterns.reduce((s,p)=>s+p.verbs.length,0)}</span>
    </div>
    <div class="nav-item ${currentView==='phrasal-verbs'?'active':''}" data-view="phrasal-verbs" onclick="goTo('phrasal-verbs')">
      <span class="dot"></span><span class="nlabel">${L('nav_phrasal','Phrasal Verbs')}</span>
      <span class="ncount">${PHRASAL_VERBS.groups.reduce((s,g)=>s+g.verbs.length,0)}</span>
    </div>
    <div class="nav-item ${currentView==='collocations'?'active':''}" data-view="collocations" onclick="goTo('collocations')">
      <span class="dot"></span><span class="nlabel">${L('nav_collocations','Collocations')}</span>
      <span class="ncount">${COLLOCATIONS.categories.reduce((s,c)=>s+c.pairs.length,0)}</span>
    </div>
  </div>`;
  nav.innerHTML = html;
}

function goTo(view){
  currentView = view;
  document.querySelectorAll('.nav-item').forEach(el=>{
    el.classList.toggle('active', el.getAttribute('data-view')===view);
  });
  document.getElementById('crumbText').textContent = crumbLabel(view);
  render();
  document.getElementById('sidebar').classList.remove('show');
  window.scrollTo(0,0);
}

function crumbLabel(view){
  if(view==='overview') return 'overview';
  if(view==='practice') return 'daily-practice';
  if(view==='exams') return 'exam-prep';
  if(view==='irregular-verbs') return 'irregular-verbs';
  if(view==='phrasal-verbs') return 'phrasal-verbs';
  if(view==='collocations') return 'collocations';
  const g = ALL_GROUPS.find(x=>x.id===view);
  return g ? g.id : view;
}

/* ---------- TOPIC CARD RENDER ---------- */
function renderTopic(t){
  const checked = DONE[t.id] ? 'checked' : '';
  const checkmark = DONE[t.id] ? '✓' : '';

  // Content — English from data file, translation via L() with EN as fallback
  const logic    = L(`topic.${t.id}.logic`,   t.logic);
  const when     = L(`topic.${t.id}.when`,    t.when);
  const warn     = L(`topic.${t.id}.warn`,    t.warn);
  const compareTx = L(`topic.${t.id}.compare`, '');  // empty = no translation col

  // Examples: always show EN sentence; show translation below if lang active
  const exampleRows = t.examples.map((ex, i) => {
    const tx = L(`topic.${t.id}.ex.${i}`, '');
    return `<div class="ex-row">
              <div class="en">→ ${ex}</div>
              ${tx ? `<div class="ex-pt">→ ${tx}</div>` : ''}
            </div>`;
  }).join('');

  return `
  <div class="topic" id="topic-${t.id}">
    <div class="topic-head" onclick="this.parentElement.classList.toggle('open')">
      <div class="topic-check ${checked}" onclick="event.stopPropagation(); toggleDone('${t.id}', this)">${checkmark}</div>
      <div class="topic-title">${t.title}</div>
      <div class="topic-tag">${t.tag}</div>
      <div class="topic-chevron">▶</div>
    </div>
    <div class="topic-body">

      <div class="tb-section">
        <div class="tb-label">${L('label_logic','Logic')}</div>
        <div class="tb-text">${logic}</div>
      </div>

      <div class="tb-section">
        <div class="tb-label">${L('label_when','When to use')}</div>
        <div class="tb-text">${when}</div>
      </div>

      <div class="tb-section">
        <div class="tb-label">${L('label_formula','Formula')}</div>
        <div class="formula-box">
          ${t.formulas.map(f=>`<div class="formula-row"><span class="ftag">${f.tag}</span><span class="fval">${f.val}</span></div>`).join('')}
        </div>
      </div>

      <div class="tb-section">
        <div class="tb-label">${L('label_examples','Examples')}</div>
        <div class="examples">${exampleRows}</div>
      </div>

      <div class="tb-section">
        <div class="tb-label">${L('label_compare','EN — Where the logic differs')}</div>
        <div class="compare-box ${compareTx ? 'two-col' : 'one-col'}">
          <div class="compare-col en">
            <div class="ccol-label">English logic</div>
            <p>${t.compare}</p>
          </div>
          ${compareTx ? `<div class="compare-col pt">
            <div class="ccol-label">${L('label_compare_pt','In your language')}</div>
            <p>${compareTx}</p>
          </div>` : ''}
        </div>
      </div>

      <div class="warn-box">
        <b>⚠ ${L('label_mistake','Common mistake')} —</b> ${warn}
      </div>

    </div>
  </div>`;
}

function renderGroupPage(g){
  const title = L(`group.${g.id}.title`, g.title);
  const desc  = L(`group.${g.id}.desc`,  g.desc);
  const mNote = g.matrixNote ? L(`group.${g.id}.matrixNote`, g.matrixNote) : '';
  return `
  <div class="group-head"><span class="group-num">${g.num}</span><h2>${title}</h2></div>
  <div class="group-desc">${desc}</div>
  ${mNote ? `<div class="warn-box" style="margin-bottom:24px;">${mNote}</div>` : ''}
  ${g.topics.map(renderTopic).join('')}
  `;
}

/* ---------- MATRIX (signature element) ---------- */
function renderMatrix(){
  const aspects = ['Simple','Continuous','Perfect','Perfect Continuous'];
  const tenses = [
    {label:'Present', ids:['present-simple','present-continuous','present-perfect','present-perfect-continuous']},
    {label:'Past', ids:['past-simple','past-continuous','past-perfect','past-perfect-continuous']},
    {label:'Future', ids:['future-will','future-continuous','future-perfect','future-perfect-continuous']}
  ];
  const allTopics = {};
  GROUP_1.topics.forEach(t=> allTopics[t.id]=t);

  let head = '<tr><th></th>' + aspects.map(a=>`<th class="axis-h">${a}</th>`).join('') + '</tr>';
  let rows = tenses.map(row=>{
    const cells = row.ids.map(id=>{
      const t = allTopics[id];
      const ex = typeof t.examples[0] === 'string' ? t.examples[0] : t.examples[0].en || '';
      const done = DONE[id] ? 'done' : '';
      return `<td class="cell ${done}" data-id="${id}" onclick="goToTopic('${id}')">
        <div class="cname">${t.title.replace('Future Simple — ','').replace('Present ','').replace('Past ','').replace('Future ','')}</div>
        <div class="cex">${ex.length>38? ex.slice(0,36)+'…' : ex}</div>
      </td>`;
    }).join('');
    return `<tr><td class="axis-v">${row.label}</td>${cells}</tr>`;
  }).join('');

  return `<table class="matrix">${head}${rows}</table>`;
}

function goToTopic(id){
  const g = ALL_GROUPS.find(grp => grp.topics.some(t=>t.id===id));
  if(!g) return;
  goTo(g.id);
  setTimeout(()=>{
    const el = document.getElementById('topic-'+id);
    if(el){
      el.classList.add('open');
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }, 60);
}

/* ---------- OVERVIEW ---------- */
function renderOverview(){
  return `
  <div class="hero">
    <div class="hero-eyebrow">${L('overview_eyebrow','// grammar system for fluency')}</div>
    <h1>English System</h1>
    <p>${L('overview_body','English grammar roadmap reorganised as a logical system — not a loose list. Every tense, modal, and connector is treated as a function with input, logic, and output, compared to your native language to show exactly where the logic diverges.')}</p>
  </div>
  <div class="matrix-wrap">
    <div class="matrix-title">${L('overview_matrix','// Core: 12 verb tenses = 3 times × 4 aspects. Click a cell.')}</div>
    ${renderMatrix()}
  </div>
  <div style="margin-top:40px;">
    <div class="group-desc" style="max-width:none;">
      ${L('overview_order',"Recommended order: <b style='color:var(--ink)'>01 Verb System → 02 Conditionals/Passive → 03 Modals → 04 Structures → 05 Connectors → 06 Articles</b>. Use the search bar to jump directly where you need.")}
    </div>
  </div>
  <div class="res-grid" style="margin-top:8px;">
    ${ALL_GROUPS.map(g=>`
      <div class="res-card" style="cursor:pointer;" onclick="goTo('${g.id}')">
        <h4><span style="color:var(--accent);font-family:var(--mono);font-size:12px;">${g.num}</span> ${g.title}</h4>
        <p style="font-size:12.5px;color:var(--ink-faint);">${g.topics.length} ${L('overview_topics','topics')}</p>
      </div>
    `).join('')}
  </div>
  <div style="margin-top:40px;">
    <div class="group-desc" style="max-width:none;">
      ${L('overview_ref_label',"<b style='color:var(--ink)'>Reference tables</b> — fixed vocabulary to look up while studying or writing.")}
    </div>
  </div>
  <div class="res-grid" style="margin-top:8px;">
    <div class="res-card" style="cursor:pointer;" onclick="goTo('irregular-verbs')">
      <h4>${L('nav_irregular','Irregular Verbs')}</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${IRREGULAR_VERBS.patterns.reduce((s,p)=>s+p.verbs.length,0)} ${L('overview_verbs','verbs · V1 / V2 / V3')}</p>
    </div>
    <div class="res-card" style="cursor:pointer;" onclick="goTo('phrasal-verbs')">
      <h4>${L('nav_phrasal','Phrasal Verbs')}</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${PHRASAL_VERBS.groups.reduce((s,g)=>s+g.verbs.length,0)} ${L('overview_pv_desc','verbs · grouped by base verb')}</p>
    </div>
    <div class="res-card" style="cursor:pointer;" onclick="goTo('collocations')">
      <h4>${L('nav_collocations','Collocations')}</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${COLLOCATIONS.categories.reduce((s,c)=>s+c.pairs.length,0)} ${L('overview_col_desc','fixed combinations')}</p>
    </div>
  </div>
  `;
}

/* ---------- PRACTICE PAGE ---------- */
function renderPractice(){
  const routineHtml = DAILY_ROUTINE.map((d, i) => `
    <div class="daily-block">
      <div class="dtime">${L(`practice.routine.${i}.time`, d.time)}</div>
      <h4>${L(`practice.routine.${i}.title`, d.title)}</h4>
      <p>${L(`practice.routine.${i}.desc`, d.desc)}</p>
    </div>
  `).join('');

  const resourcesHtml = Object.entries(RESOURCES).map(([k, r]) => `
    <div class="res-card">
      <h4>${L(`practice.resources.${k}.title`, r.title)}</h4>
      <ul>${r.items.map((item, i) =>
        `<li>${L(`practice.resources.${k}.item.${i}`, item)}</li>`
      ).join('')}</ul>
    </div>
  `).join('');

  return `
  <div class="group-head"><span class="group-num">PRX</span><h2>${L('practice_title','Daily Practice')}</h2></div>
  <div class="group-desc">${L('practice_desc','Grammar without active use never becomes fluency. This routine fits ~30-40 min/day and runs in parallel with your normal schedule — no extra time required.')}</div>
  ${routineHtml}
  <div class="group-head" style="margin-top:40px;"><h2 style="font-size:18px;">${L('practice_resources','Resources by skill')}</h2></div>
  <div class="res-grid">${resourcesHtml}</div>
  `;
}

/* ---------- EXAMS PAGE ---------- */
function renderExams(){
  const examsHtml = Object.entries(EXAM_GUIDANCE).map(([k, e]) => `
    <div class="topic open" style="margin-bottom:20px;">
      <div class="topic-head" style="cursor:default;"><div class="topic-title" style="font-size:16px;">${L(`practice.exams.${k}.title`, e.title)}</div></div>
      <div class="topic-body" style="display:block;">
        <ul style="padding-left:4px;list-style:none;">
          ${e.points.map((p, i) =>
            `<li style="padding:8px 0;font-size:13.5px;color:var(--ink-dim);border-top:1px dashed var(--line);">${L(`practice.exams.${k}.point.${i}`, p)}</li>`
          ).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
  <div class="group-head"><span class="group-num">EXM</span><h2>IELTS Academic / Duolingo English Test</h2></div>
  <div class="group-desc">${L('exams_desc','What each test specifically requires in grammar, and which parts of this roadmap matter most for each.')}</div>
  ${examsHtml}
  `;
}

/* ---------- IRREGULAR VERBS PAGE ---------- */
function renderIrregularVerbs(filter=''){
  const f = filter.toLowerCase().trim();
  const data = IRREGULAR_VERBS;
  let totalShown = 0;
  const patternsHtml = data.patterns.map(p=>{
    const rows = p.verbs.filter(v=> !f || v.join(' ').toLowerCase().includes(f));
    totalShown += rows.length;
    if(rows.length===0) return '';
    return `
    <div class="ref-pattern">
      <div class="ref-pattern-head">
        <div class="ref-pattern-label">${L(`irv.${p.id}.label`, p.label)}</div>
        <div class="ref-pattern-note">${p.note}</div>
        ${activeLang ? (() => { const tx = L(`irv.${p.id}.note`,''); return tx ? `<div class="ref-pattern-note pt">${tx}</div>` : ''; })() : ''}
      </div>
      <table class="verb-table">
        <tr><th>Base (V1)</th><th>Past (V2)</th><th>Participle (V3)</th><th>${L('ref_col_translation','Translation')}</th></tr>
        ${rows.map(v=>`<tr><td class="v1">${v[0]}</td><td class="v2">${v[1]}</td><td class="v3">${v[2]}</td><td class="vpt">${v[3]}</td></tr>`).join('')}
      </table>
    </div>`;
  }).join('');

  return `
  <div class="group-head"><h2>${data.title}</h2></div>
  <div class="group-desc">${data.subtitle}</div>
  <div class="warn-box" style="margin-bottom:24px;">
    <span>${data.desc}</span>
    ${activeLang ? (() => { const tx = L('irv.desc', data.desc); return tx !== data.desc ? `<div class="pt-drawer open"><div class="pt-drawer-inner">${tx}</div></div>` : ''; })() : ''}
  </div>
  <div class="ref-filter">
    <input type="text" id="verbFilterInput" placeholder="${L('ref_filter_verbs',"Filter verbs... (ex: 'think', 'go')")}" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} ${L('ref_shown','shown')}</div>
  </div>
  <div id="verbTableWrap">${patternsHtml || `<p style="color:var(--ink-faint);font-size:13px;">${L('search_none','No results found.')}</p>`}</div>
  `;
}

/* ---------- PHRASAL VERBS PAGE ---------- */
function renderPhrasalVerbs(filter=''){
  const f = filter.toLowerCase().trim();
  const data = PHRASAL_VERBS;
  let totalShown = 0;
  const groupsHtml = data.groups.map(g=>{
    const rows = g.verbs.filter(v=> !f || v.join(' ').toLowerCase().includes(f));
    totalShown += rows.length;
    if(rows.length===0) return '';
    return `
    <div class="pv-group">
      <div class="pv-group-head">${g.base}</div>
      ${rows.map(v=>`
        <div class="pv-row">
          <div class="pv-phrase">${v[0]}</div>
          <div class="pv-pt">${v[1]}</div>
          <div class="pv-example">${v[2]}</div>
        </div>
      `).join('')}
    </div>`;
  }).join('');

  return `
  <div class="group-head"><h2>${data.title}</h2></div>
  <div class="group-desc">${data.subtitle}</div>
  <div class="warn-box" style="margin-bottom:24px;">
    <span>${data.desc}</span>
    ${activeLang ? (() => { const tx = L('pv.desc',''); return tx ? `<div class="pt-drawer open"><div class="pt-drawer-inner">${tx}</div></div>` : ''; })() : ''}
  </div>
  <div class="ref-filter">
    <input type="text" id="pvFilterInput" placeholder="${L('ref_filter_pv',"Filter phrasal verbs... (ex: 'give up')")}" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} ${L('ref_shown','shown')}</div>
  </div>
  <div id="pvTableWrap">${groupsHtml || `<p style="color:var(--ink-faint);font-size:13px;">${L('search_none','No results found.')}</p>`}</div>
  `;
}

/* ---------- COLLOCATIONS PAGE ---------- */
function renderCollocations(filter=''){
  const f = filter.toLowerCase().trim();
  const data = COLLOCATIONS;
  let totalShown = 0;
  const catsHtml = data.categories.map(c=>{
    const rows = c.pairs.filter(p=> !f || p.join(' ').toLowerCase().includes(f));
    totalShown += rows.length;
    if(rows.length===0) return '';
    return `
    <div class="ref-pattern">
      <div class="ref-pattern-head">
        <div class="ref-pattern-label">${L(`col.cat.${data.categories.indexOf(c)}.label`, c.label)}</div>
        <div class="ref-pattern-note">${c.note}</div>
        ${activeLang ? (() => { const tx = L(`col.cat.${data.categories.indexOf(c)}.note`,''); return tx ? `<div class="ref-pattern-note pt">${tx}</div>` : ''; })() : ''}
      </div>
      <table class="colloc-table">
        <tr><th>Expression</th><th>${L('ref_col_translation','Translation')}</th><th>Note</th></tr>
        ${rows.map(p=>`<tr><td class="cphrase">${p[0]}</td><td class="cpt">${p[1]}</td><td class="cnote">${p[2]}</td></tr>`).join('')}
      </table>
    </div>`;
  }).join('');

  return `
  <div class="group-head"><h2>${data.title}</h2></div>
  <div class="group-desc">${data.subtitle}</div>
  <div class="warn-box" style="margin-bottom:24px;">
    <span>${data.desc}</span>
    ${activeLang ? (() => { const tx = L('col.desc',''); return tx ? `<div class="pt-drawer open"><div class="pt-drawer-inner">${tx}</div></div>` : ''; })() : ''}
  </div>
  <div class="ref-filter">
    <input type="text" id="collocFilterInput" placeholder="${L('ref_filter_col',"Filter collocations... (ex: 'make', 'decision')")}" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} ${L('ref_shown','shown')}</div>
  </div>
  <div id="collocTableWrap">${catsHtml || `<p style="color:var(--ink-faint);font-size:13px;">${L('search_none','No results found.')}</p>`}</div>
  `;
}

// in-memory filter state for reference pages (kept separate from main search)
let refFilters = { 'irregular-verbs': '', 'phrasal-verbs': '', 'collocations': '' };

function wireRefFilter(view, inputId, renderFn, wrapSelector){
  const input = document.getElementById(inputId);
  if(!input) return;
  input.addEventListener('input', function(e){
    refFilters[view] = e.target.value;
    const caretPos = e.target.selectionStart;
    const html = renderFn(refFilters[view]);
    document.getElementById('content').innerHTML = html;
    applyPtVisibility();
    wireCurrentRefFilter();
    const newInput = document.getElementById(inputId);
    if(newInput){
      newInput.focus();
      newInput.setSelectionRange(caretPos, caretPos);
    }
  });
}

function wireCurrentRefFilter(){
  if(currentView==='irregular-verbs') wireRefFilter('irregular-verbs','verbFilterInput', renderIrregularVerbs);
  if(currentView==='phrasal-verbs') wireRefFilter('phrasal-verbs','pvFilterInput', renderPhrasalVerbs);
  if(currentView==='collocations') wireRefFilter('collocations','collocFilterInput', renderCollocations);
}
/* ---------- SEARCH ---------- */
function searchTopics(query){
  query = query.toLowerCase().trim();
  if(!query) return null;
  const results = [];
  ALL_GROUPS.forEach(g=>{
    g.topics.forEach(t=>{
      const hay = (t.title+' '+t.tag+' '+t.logic_en+' '+t.logic_pt).toLowerCase();
      if(hay.includes(query)) results.push({t,g});
    });
  });
  return results;
}

function renderSearchResults(results, query){
  if(results.length===0){
    return `<div class="hero"><h1 style="font-size:22px;">No results for "${query}"</h1><p>Try a different term, or browse the groups in the sidebar.</p></div>`;
  }
  return `
  <div class="hero" style="margin-bottom:30px;">
    <div class="hero-eyebrow">// search results</div>
    <h1 style="font-size:24px;">"${query}" — ${results.length} result(s)</h1>
  </div>
  ${results.map(r=>renderTopic(r.t)).join('')}
  `;
}

/* ---------- MAIN RENDER ---------- */
function render(){
  const content = document.getElementById('content');
  if(currentView==='overview'){
    content.innerHTML = renderOverview();
  } else if(currentView==='practice'){
    content.innerHTML = renderPractice();
  } else if(currentView==='exams'){
    content.innerHTML = renderExams();
  } else if(currentView==='irregular-verbs'){
    content.innerHTML = renderIrregularVerbs(refFilters['irregular-verbs']);
  } else if(currentView==='phrasal-verbs'){
    content.innerHTML = renderPhrasalVerbs(refFilters['phrasal-verbs']);
  } else if(currentView==='collocations'){
    content.innerHTML = renderCollocations(refFilters['collocations']);
  } else {
    const g = ALL_GROUPS.find(x=>x.id===currentView);
    content.innerHTML = g ? renderGroupPage(g) : renderOverview();
  }
  content.innerHTML += `<footer class="end">— End of Section · English-System v2 · Made by: Igor Moreira —</footer>`;
  applyPtVisibility();
  updateProgress();
  wireCurrentRefFilter();
}

function applyPtVisibility(){
  // PT is now per-card via .pt-open class — nothing global to toggle
}

/* ---------- INIT ---------- */
document.getElementById('menuToggle').addEventListener('click', function(){
  document.getElementById('sidebar').classList.toggle('show');
});

document.getElementById('searchInput').addEventListener('input', function(e){
  const q = e.target.value;
  if(q.trim().length===0){
    render();
    return;
  }
  const results = searchTopics(q);
  document.getElementById('crumbText').textContent = 'search';
  document.getElementById('content').innerHTML = renderSearchResults(results, q);
  applyPtVisibility();
  // auto-open single results
  if(results.length<=3){
    results.forEach(r=>{
      const el = document.getElementById('topic-'+r.t.id);
      if(el) el.classList.add('open');
    });
  }
});

buildNav();
render();
