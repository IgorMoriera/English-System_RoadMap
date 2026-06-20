const ALL_GROUPS = [GROUP_1, GROUP_2, GROUP_3, GROUP_4, GROUP_5, GROUP_6];

// progress stored in memory (no localStorage per artifact rules)
let DONE = {};
let SHOW_PT = true;
let currentView = "overview";

function allTopicIds(){
  return ALL_GROUPS.flatMap(g => g.topics.map(t => t.id));
}

function updateProgress(){
  const ids = allTopicIds();
  const doneCount = ids.filter(id => DONE[id]).length;
  const pct = ids.length ? Math.round((doneCount/ids.length)*100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent = doneCount + '/' + ids.length + ' tópicos';
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
      <span class="dot"></span><span class="nlabel">Visão Geral</span>
    </div>
    <div class="nav-item ${currentView==='practice'?'active':''}" data-view="practice" onclick="goTo('practice')">
      <span class="dot"></span><span class="nlabel">Prática Diária</span>
    </div>
    <div class="nav-item ${currentView==='exams'?'active':''}" data-view="exams" onclick="goTo('exams')">
      <span class="dot"></span><span class="nlabel">IELTS / Duolingo</span>
    </div>
  </div>
  <div class="nav-section-title">Gramática</div>`;
  ALL_GROUPS.forEach(g=>{
    html += `<div class="nav-section" style="padding-top:2px;">
      <div class="nav-item ${currentView===g.id?'active':''}" data-gid="${g.id}" data-view="${g.id}" onclick="goTo('${g.id}')">
        <span class="dot"></span><span class="nlabel">${g.num} · ${g.title}</span>
        <span class="ncount">${g.topics.length}</span>
      </div>
    </div>`;
  });
  html += `<div class="nav-section-title">Referência</div>
  <div class="nav-section" style="padding-top:2px;">
    <div class="nav-item ${currentView==='irregular-verbs'?'active':''}" data-view="irregular-verbs" onclick="goTo('irregular-verbs')">
      <span class="dot"></span><span class="nlabel">Verbos Irregulares</span>
      <span class="ncount">${IRREGULAR_VERBS.patterns.reduce((s,p)=>s+p.verbs.length,0)}</span>
    </div>
    <div class="nav-item ${currentView==='phrasal-verbs'?'active':''}" data-view="phrasal-verbs" onclick="goTo('phrasal-verbs')">
      <span class="dot"></span><span class="nlabel">Phrasal Verbs</span>
      <span class="ncount">${PHRASAL_VERBS.groups.reduce((s,g)=>s+g.verbs.length,0)}</span>
    </div>
    <div class="nav-item ${currentView==='collocations'?'active':''}" data-view="collocations" onclick="goTo('collocations')">
      <span class="dot"></span><span class="nlabel">Collocations</span>
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
        <div class="tb-label">Lógica / Logic</div>
        <div class="tb-text">${t.logic_en}</div>
        <div class="tb-text pt">${t.logic_pt}</div>
      </div>
      <div class="tb-section">
        <div class="tb-label">Quando usar / When to use</div>
        <div class="tb-text">${t.when_en}</div>
        <div class="tb-text pt">${t.when_pt}</div>
      </div>
      <div class="tb-section">
        <div class="tb-label">Fórmula / Formula</div>
        <div class="formula-box">
          ${t.formulas.map(f=>`<div class="formula-row"><span class="ftag">${f.tag}</span><span class="fval">${f.val}</span></div>`).join('')}
        </div>
      </div>
      <div class="tb-section">
        <div class="tb-label">Exemplos / Examples</div>
        <div class="examples">
          ${t.examples.map(e=>`<div class="ex-row"><div class="en">→ ${e.en}</div><div class="pt">→ ${e.pt}</div></div>`).join('')}
        </div>
      </div>
      <div class="tb-section">
        <div class="tb-label">EN × PT-BR — Onde a lógica difere</div>
        <div class="compare-box">
          <div class="compare-col en"><div class="ccol-label">English logic</div><p>${t.compare.en}</p></div>
          <div class="compare-col pt"><div class="ccol-label">Lógica em português</div><p>${t.compare.pt}</p></div>
        </div>
      </div>
      <div class="warn-box"><b>⚠ Erro comum / Common mistake —</b> <span class="onlypt-hide">${t.warn_en}</span><br><span class="tb-text pt" style="margin-top:4px;border:none;padding-left:0;">${t.warn_pt}</span></div>
    </div>
  </div>`;
}

function renderGroupPage(g){
  return `
  <div class="group-head"><span class="group-num">${g.num}</span><h2>${g.title}</h2></div>
  <div class="group-desc">${g.desc}</div>
  ${g.matrixNote ? `<div class="warn-box" style="margin-bottom:24px;">${g.matrixNote}</div>` : ''}
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
      const ex = t.examples[0].en;
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
    <div class="hero-eyebrow">// sistema de gramática para fluência</div>
    <h1>English System</h1>
    <p>Roadmap de gramática inglesa reorganizado em lógica de sistema, não lista de itens soltos. Construído pra quem pensa em estruturas: cada tempo verbal, modal e conector é tratado como uma função com input, lógica e output — comparado direto com o português pra mostrar exatamente onde a lógica diverge.</p>
  </div>
  <div class="matrix-wrap">
    <div class="matrix-title">// O núcleo: 12 tempos verbais = 3 tempos × 4 aspectos. Clique numa célula.</div>
    ${renderMatrix()}
  </div>
  <div style="margin-top:40px;">
    <div class="group-desc" style="max-width:none;">
      Abaixo, os outros 5 grupos do sistema. Recomendamos essa ordem: <b style="color:var(--ink)">01 Sistema Verbal → 02 Conditionals/Passive → 03 Modais → 04 Estruturas → 05 Conectores → 06 Artigos/Quantificadores</b>. Mas use a busca acima pra ir direto onde precisar.
    </div>
  </div>
  <div class="res-grid" style="margin-top:8px;">
    ${ALL_GROUPS.map(g=>`
      <div class="res-card" style="cursor:pointer;" onclick="goTo('${g.id}')">
        <h4><span style="color:var(--accent);font-family:var(--mono);font-size:12px;">${g.num}</span> ${g.title}</h4>
        <p style="font-size:12.5px;color:var(--ink-faint);">${g.topics.length} tópicos</p>
      </div>
    `).join('')}
  </div>
  <div style="margin-top:40px;">
    <div class="group-desc" style="max-width:none;">
      <b style="color:var(--ink)">Tabelas de referência</b> — vocabulário fixo pra consultar enquanto estuda ou escreve, sem precisar memorizar tudo de uma vez.
    </div>
  </div>
  <div class="res-grid" style="margin-top:8px;">
    <div class="res-card" style="cursor:pointer;" onclick="goTo('irregular-verbs')">
      <h4>Verbos Irregulares</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${IRREGULAR_VERBS.patterns.reduce((s,p)=>s+p.verbs.length,0)} verbos · V1 / V2 / V3</p>
    </div>
    <div class="res-card" style="cursor:pointer;" onclick="goTo('phrasal-verbs')">
      <h4>Phrasal Verbs</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${PHRASAL_VERBS.groups.reduce((s,g)=>s+g.verbs.length,0)} verbos · organizados por verbo-base</p>
    </div>
    <div class="res-card" style="cursor:pointer;" onclick="goTo('collocations')">
      <h4>Collocations</h4>
      <p style="font-size:12.5px;color:var(--ink-faint);">${COLLOCATIONS.categories.reduce((s,c)=>s+c.pairs.length,0)} combinações fixas</p>
    </div>
  </div>
  `;
}

/* ---------- PRACTICE PAGE ---------- */
function renderPractice(){
  return `
  <div class="group-head"><span class="group-num">PRX</span><h2>Prática Diária</h2></div>
  <div class="group-desc">Gramática sem uso ativo não vira fluência. Essa rotina cabe em ~30-40 min/dia e foi pensada pra rodar em paralelo com sua rotina normal — trabalho, estudo, ou qualquer atividade do dia — em vez de competir por tempo com ela.</div>
  ${DAILY_ROUTINE.map(d=>`
    <div class="daily-block">
      <div class="dtime">${d.time}</div>
      <h4>${d.title}</h4>
      <p>${d.desc}</p>
    </div>
  `).join('')}
  <div class="group-head" style="margin-top:40px;"><h2 style="font-size:18px;">Recursos por habilidade</h2></div>
  <div class="res-grid">
    ${Object.values(RESOURCES).map(r=>`
      <div class="res-card">
        <h4>${r.title}</h4>
        <ul>${r.items.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
    `).join('')}
  </div>
  `;
}

/* ---------- EXAMS PAGE ---------- */
function renderExams(){
  return `
  <div class="group-head"><span class="group-num">EXM</span><h2>IELTS Academic / Duolingo English Test</h2></div>
  <div class="group-desc">O que cada prova cobra de gramática especificamente, e qual parte deste roadmap mais pesa pra cada uma.</div>
  ${Object.values(EXAM_GUIDANCE).map(e=>`
    <div class="topic open" style="margin-bottom:20px;">
      <div class="topic-head" style="cursor:default;"><div class="topic-title" style="font-size:16px;">${e.title}</div></div>
      <div class="topic-body" style="display:block;">
        <ul style="padding-left:4px;list-style:none;">
          ${e.points.map(p=>`<li style="padding:8px 0;font-size:13.5px;color:var(--ink-dim);border-top:1px dashed var(--line);">${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('')}
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
        <div class="ref-pattern-label">${p.label}</div>
        <div class="ref-pattern-note">${p.note_en}</div>
        <div class="ref-pattern-note pt">${p.note_pt}</div>
      </div>
      <table class="verb-table">
        <tr><th>Base (V1)</th><th>Past (V2)</th><th>Participle (V3)</th><th>Tradução</th></tr>
        ${rows.map(v=>`<tr><td class="v1">${v[0]}</td><td class="v2">${v[1]}</td><td class="v3">${v[2]}</td><td class="vpt">${v[3]}</td></tr>`).join('')}
      </table>
    </div>`;
  }).join('');

  return `
  <div class="group-head"><h2>${data.title}</h2></div>
  <div class="group-desc">${data.subtitle}</div>
  <div class="warn-box" style="margin-bottom:24px;">
    <span>${data.desc_en}</span><br>
    <span class="tb-text pt" style="margin-top:6px;border:none;padding-left:0;">${data.desc_pt}</span>
  </div>
  <div class="ref-filter">
    <input type="text" id="verbFilterInput" placeholder="Filtrar verbos... (ex: 'think', 'pensar')" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} verbo(s) exibido(s)</div>
  </div>
  <div id="verbTableWrap">${patternsHtml || '<p style="color:var(--ink-faint);font-size:13px;">Nenhum verbo encontrado.</p>'}</div>
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
    <span>${data.desc_en}</span><br>
    <span class="tb-text pt" style="margin-top:6px;border:none;padding-left:0;">${data.desc_pt}</span>
  </div>
  <div class="ref-filter">
    <input type="text" id="pvFilterInput" placeholder="Filtrar phrasal verbs... (ex: 'give up', 'desistir')" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} phrasal verb(s) exibido(s)</div>
  </div>
  <div id="pvTableWrap">${groupsHtml || '<p style="color:var(--ink-faint);font-size:13px;">Nenhum phrasal verb encontrado.</p>'}</div>
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
        <div class="ref-pattern-label">${c.label}</div>
        <div class="ref-pattern-note">${c.note_en}</div>
        <div class="ref-pattern-note pt">${c.note_pt}</div>
      </div>
      <table class="colloc-table">
        <tr><th>Expressão</th><th>Tradução</th><th>Observação</th></tr>
        ${rows.map(p=>`<tr><td class="cphrase">${p[0]}</td><td class="cpt">${p[1]}</td><td class="cnote">${p[2]}</td></tr>`).join('')}
      </table>
    </div>`;
  }).join('');

  return `
  <div class="group-head"><h2>${data.title}</h2></div>
  <div class="group-desc">${data.subtitle}</div>
  <div class="warn-box" style="margin-bottom:24px;">
    <span>${data.desc_en}</span><br>
    <span class="tb-text pt" style="margin-top:6px;border:none;padding-left:0;">${data.desc_pt}</span>
  </div>
  <div class="ref-filter">
    <input type="text" id="collocFilterInput" placeholder="Filtrar collocations... (ex: 'make', 'decision')" value="${filter.replace(/"/g,'')}">
    <div class="ref-count">${totalShown} combinação(ões) exibida(s)</div>
  </div>
  <div id="collocTableWrap">${catsHtml || '<p style="color:var(--ink-faint);font-size:13px;">Nenhuma combinação encontrada.</p>'}</div>
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
    return `<div class="hero"><h1 style="font-size:22px;">Nenhum resultado pra "${query}"</h1><p>Tente outro termo, ou navegue pelos grupos na barra lateral.</p></div>`;
  }
  return `
  <div class="hero" style="margin-bottom:30px;">
    <div class="hero-eyebrow">// resultado da busca</div>
    <h1 style="font-size:24px;">"${query}" — ${results.length} tópico(s)</h1>
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
  document.body.classList.toggle('show-pt', SHOW_PT);
}

/* ---------- INIT ---------- */
document.getElementById('ptToggle').addEventListener('click', function(){
  SHOW_PT = !SHOW_PT;
  this.classList.toggle('active', SHOW_PT);
  this.textContent = 'PT-BR: ' + (SHOW_PT ? 'ON' : 'OFF');
  applyPtVisibility();
});

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
