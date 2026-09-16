/* Motor do site: navegação, exercícios, progresso, Professora Clara */
(function () {
  const KEY = 'profclara_julia_v1';
  const NAME = 'Júlia';
  const GROUPS = window.GROUPS;

  /* ---------- progresso ---------- */
  let P = { done: {}, genStars: 0 };
  try { const s = localStorage.getItem(KEY); if (s) P = Object.assign(P, JSON.parse(s)); } catch (e) { }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } };

  const exId = (g, p, i) => `${g.id}.${p.id}.${i}`;
  const starsOf = ex => ex.l || 1;
  function totalStars() { let s = (P.genStars || 0) + planStars(); for (const k in P.done) s += P.done[k].stars || 0; return s; }
  function pointStats(g, p) { let ok = 0; p.ex.forEach((e, i) => { const d = P.done[exId(g, p, i)]; if (d && (d.ok || d.seen)) ok++; }); return { ok, total: p.ex.length, pct: Math.round(ok / p.ex.length * 100) }; }
  function groupStats(g) { let ok = 0, total = 0; g.points.forEach(p => { const s = pointStats(g, p); ok += s.ok; total += s.total; }); return { ok, total, pct: total ? Math.round(ok / total * 100) : 0 }; }
  const LEVELS = [[0, 'Aprendiz'], [30, 'Exploradora'], [80, 'Craque'], [160, 'Mestre'], [300, 'Gênia da Matemática'], [500, 'Lenda']];
  function levelName(s) { let n = LEVELS[0][1]; LEVELS.forEach(l => { if (s >= l[0]) n = l[1]; }); return n; }
  function nextLevel(s) { for (const l of LEVELS) if (s < l[0]) return l; return null; }

  /* ---------- Professora Clara ---------- */
  const CLARA_SVG = `<img class="avatar" src="clara.jpg" alt="Professora Clara">`;
  const GOOD = ['Arrasou, Ju! 🎉', 'Tá voando, menina! 🚀', 'Sabia que você ia entender rapidinho! ⭐', 'Isso aí, Ju! Certíssimo! 🎯', 'Minha estudiosa favorita mandou bem demais! 💜', 'Uau, Ju! Acertou em cheio! 👏', 'Show, minha querida! 🌟', 'Olha só quem tá dominando isso! 😍', 'É isso, Ju! Você é craque! ⭐'];
  const RETRY = ['Calma, Ju, essa parte confunde todo mundo no começo. Tenta de novo! 💪', 'Ainda não… mas errar é o cérebro aprendendo! Olha a dica. 🧠', 'Quase, minha querida! Respira, lê de novo e vai com tudo. 🐢', 'Sem estresse, Ju! A gente tenta mais uma vez. 💡', 'Boa tentativa, Ju! Dá uma olhada na dica que vai clarear. 🔍'];
  const SEEN = ['Relaxa, Ju! Errar faz parte. Olha como a gente resolve e segue em frente — na próxima você acerta! 💜', 'Sem estresse, minha querida! Veja a solução com calma: é assim que o cérebro aprende. 💜', 'Tudo bem, Ju! Essa era difícil mesmo. Lê a explicação e volta nela mais tarde. 💜'];
  const pick = a => a[Math.floor(Math.random() * a.length)].replace('{n}', NAME);
  const fb = (cls, html) => `<div class="fb ${cls}">${CLARA_SVG}<div><p>${html}</p></div></div>`;

  /* ---------- utilidades ---------- */
  const el = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function parseNum(str) {
    let s = String(str).trim().toLowerCase().replace(/r\$/g, '').replace(/[a-zº°²³%]/g, '').replace(/\s/g, '');
    if (s === '') return NaN;
    if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    return Number(s);
  }
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '');
  function checkAnswer(ex, val) {
    if (ex.t === 'mc') return val === ex.a;
    if (ex.t === 'num') { const n = parseNum(val); if (isNaN(n)) return false; const acc = Array.isArray(ex.a) ? ex.a : [ex.a]; return acc.some(a => Math.abs(a - n) < 0.001); }
    if (ex.t === 'txt') { const v = norm(val); return ex.a.some(a => norm(a) === v); }
    return false;
  }
  const lvlTag = l => `<span class="lvltag lvl${l}">${['', '⭐ fácil', '⭐⭐ médio', '⭐⭐⭐ desafio'][l]}</span>`;

  /* ---------- confete ---------- */
  function confetti(n = 120) {
    let c = el('confetti'); if (!c) { c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c); }
    c.width = innerWidth; c.height = innerHeight; const ctx = c.getContext('2d');
    const ps = Array.from({ length: n }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * 200, r: 4 + Math.random() * 6, vy: 2 + Math.random() * 4, vx: -1.5 + Math.random() * 3, col: V.COLORS[Math.floor(Math.random() * V.COLORS.length)], rot: Math.random() * 6 }));
    const t0 = Date.now(); (function frame() { ctx.clearRect(0, 0, c.width, c.height); if (Date.now() - t0 > 3000) return; ps.forEach(p => { p.y += p.vy; p.x += p.vx; p.rot += .1; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.col; ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); }); requestAnimationFrame(frame); })();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 3200);
  }

  /* ---------- plano de estudos ---------- */
  const PLANO = window.PLANO || { provas: [], horarios: [], feriados: {} };
  const SESSION_BONUS = 3;
  const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const dt = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const pad = n => String(n).padStart(2, '0');
  const dkey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dkey(new Date());
  const fmtLong = s => { const d = dt(s); return `${DIAS[d.getDay()]}-feira, ${d.getDate()} de ${MESES[d.getMonth()]}`.replace('sábado-feira', 'sábado').replace('domingo-feira', 'domingo'); };
  const fmtShort = s => { const d = dt(s); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`; };
  const daysUntil = s => Math.round((dt(s) - dt(today())) / 86400000);
  const findPoint = key => { const [gid, pid] = key.split('.'); const g = GROUPS.find(x => x.id === gid); const p = g && g.points.find(x => x.id === pid); return p ? { g, p } : null; };
  const itemKey = (it, i) => typeof it === 'string' ? it : 'rev' + i;
  const sessTime = s => { const d = dt(s.d); if (s.extra) return PLANO.sabado; return PLANO.horarios.find(h => h.dia === d.getDay()) || { hora: '', dur: 50 }; };
  const sessChecks = s => (P.plano && P.plano[s.d]) || {};
  const sessDone = s => s.itens.every((it, i) => sessChecks(s)[itemKey(it, i)]);
  function planStars() { let n = 0; PLANO.provas.forEach(pr => pr.sessoes.forEach(s => { if (sessDone(s)) n += SESSION_BONUS; })); return n; }
  function toggleItem(s, it, i) { P.plano = P.plano || {}; const c = P.plano[s.d] = P.plano[s.d] || {}; const k = itemKey(it, i); if (c[k]) delete c[k]; else c[k] = 1; save(); return !!c[k]; }
  function weakest(n) { const all = []; GROUPS.forEach(g => g.points.forEach(p => all.push({ g, p, st: pointStats(g, p) }))); all.sort((a, b) => a.st.pct - b.st.pct); return all.slice(0, n); }
  /* próxima sessão pendente: a de hoje, ou a mais próxima no futuro; se não houver, a última atrasada */
  function nextSession() {
    const t = today(); let overdue = null;
    for (const pr of PLANO.provas) for (const s of pr.sessoes) { if (sessDone(s)) continue; if (s.d >= t) return { pr, s }; overdue = { pr, s }; }
    return overdue;
  }
  function pointInPlan(g, p) { const key = g.id + '.' + p.id; for (const pr of PLANO.provas) for (const s of pr.sessoes) { if (sessDone(s) || daysUntil(s.d) < -7) continue; const i = s.itens.indexOf(key); if (i >= 0) return { s, i }; } return null; }

  function sessCard(pr, s, open) {
    const t = today(); const done = sessDone(s); const h = sessTime(s); const du = daysUntil(s.d);
    const status = done ? 'done' : s.d === t ? 'today' : du < 0 ? 'late' : open ? 'next' : '';
    const label = done ? '✅ feita' : s.d === t ? '🌟 HOJE' : du < 0 ? '⏰ ficou pra depois' : open ? '👉 próxima' : du === 1 ? 'amanhã' : `em ${du} dias`;
    const items = s.itens.map((it, i) => {
      const k = itemKey(it, i); const on = !!sessChecks(s)[k];
      if (typeof it === 'string') {
        const f = findPoint(it); if (!f) return '';
        const st = pointStats(f.g, f.p);
        return `<li class="pitem ${on ? 'on' : ''}"><button class="chk" data-chk="${s.d}|${i}" aria-label="marcar como estudado">${on ? '✔' : ''}</button><span class="pname">${f.p.icon} ${esc(f.p.name)} <small style="color:${f.g.color}">${f.g.name}</small></span><span class="pmeta">${st.ok}/${st.total}</span><a class="btn small ghost go" href="#/g/${f.g.id}/${f.p.id}">abrir ▶</a></li>`;
      }
      let extra = '';
      if (it.weak) extra = `<div class="weak">${weakest(it.weak).map(w => `<a href="#/g/${w.g.id}/${w.p.id}">${w.p.icon} ${esc(w.p.name)} (${w.st.pct}%)</a>`).join('')}</div>`;
      return `<li class="pitem rev ${on ? 'on' : ''}"><button class="chk" data-chk="${s.d}|${i}" aria-label="marcar como feito">${on ? '✔' : ''}</button><span class="pname">🔄 ${esc(it.rev)}${extra}</span></li>`;
    }).join('');
    const d = dt(s.d);
    return `<div class="sess ${status} ${s.extra ? 'extra' : ''}" id="s-${s.d}" style="--c:${pr.cor}">
      <div class="when"><div class="dnum">${d.getDate()}</div><div class="dname">${DIAS[d.getDay()].slice(0, 3)}</div><div class="dtime">${h.hora}${h.fim ? '–' + h.fim : ''}<br>${h.dur} min</div></div>
      <div class="sbody"><div class="shead"><b>${fmtLong(s.d)}</b>${s.extra ? ' <span class="badge extra">sábado extra</span>' : ''}<span class="badge st ${status}">${label}</span></div>
      <ul class="plist">${items}</ul>
      ${done ? `<div class="sdone">🏅 Sessão completa! +${SESSION_BONUS} ⭐ de disciplina. Arrasou, Ju!</div>` : `<div class="stip">Marque ✔ cada tópico que estudar. Completar a sessão vale +${SESSION_BONUS} ⭐!</div>`}</div></div>`;
  }

  function planPage() {
    renderTabs('plano');
    const t = today(); const nx = nextSession();
    const hor = PLANO.horarios.map(h => `<span class="chip">📌 ${h.nome} ${h.hora}${h.fim ? '–' + h.fim : ''}</span>`).join('') + `<span class="chip">📌 sábado antes da prova ${PLANO.sabado.hora} (${PLANO.sabado.dur} min)</span>`;
    const proxProva = PLANO.provas.find(pr => pr.data >= t);
    let msg = proxProva ? `Ju, aqui está o nosso <b>plano de estudos</b> até as provas! 💜 Faltam <b>${daysUntil(proxProva.data)} dias</b> para a <b>${proxProva.nome}</b> (${fmtLong(proxProva.data)}). ` : 'Ju, as provas já passaram — mas o plano continua aqui se você quiser revisar! 💜 ';
    msg += nx ? `A próxima sessão é <b>${nx.s.d === t ? 'HOJE' : fmtLong(nx.s.d)}</b>, às ${sessTime(nx.s).hora}. É só seguir a lista e marcar ✔ o que estudou. Sem pressa e sem pressão: um passinho por vez, que dá certo!` : 'Todas as sessões estão feitas. Que orgulho! 🎉';
    let html = `<div class="crumb"><a href="#/">🏠 Início</a> › <b>📅 Plano de estudos</b></div>
      <div class="card hero" style="border-top:8px solid #F18F01">${CLARA_SVG}<div class="bubble">${msg}</div></div>
      <div class="card"><h3 class="fred" style="margin:0 0 8px">⏰ Horários de estudo da Ju</h3><div class="chips">${hor}</div><p class="legend" style="margin:8px 0 0">Feriados sem sessão: ${Object.keys(PLANO.feriados).map(f => `${fmtShort(f)} (${PLANO.feriados[f]})`).join(' · ')}.</p></div>`;
    PLANO.provas.forEach(pr => {
      const total = pr.sessoes.length, feitas = pr.sessoes.filter(sessDone).length; const du = daysUntil(pr.data); const past = du < 0;
      const body = pr.sessoes.map(s => sessCard(pr, s, nx && nx.s === s)).join('') +
        `<div class="sess exam" style="--c:${pr.cor}"><div class="when"><div class="dnum">${dt(pr.data).getDate()}</div><div class="dname">${DIAS[dt(pr.data).getDay()].slice(0, 3)}</div></div><div class="sbody"><div class="shead"><b>${pr.emoji} DIA DA ${pr.nome.toUpperCase()} — ${fmtLong(pr.data)}</b></div><p style="margin:6px 0 0">Dormir bem, tomar café da manhã e lembrar: você se preparou! Tô torcendo por você, Ju. 💜</p></div></div>`;
      html += `<details class="prova" ${past ? '' : 'open'} style="--c:${pr.cor}"><summary><span class="ptit">${pr.emoji} ${pr.nome} · ${fmtShort(pr.data)}</span><span class="badge st">${past ? 'já passou' : du === 0 ? 'É HOJE!' : `faltam ${du} dias`}</span><span class="pprog"><i style="width:${Math.round(feitas / total * 100)}%"></i></span><span class="pcount">${feitas}/${total} sessões</span></summary>
        <p class="pdesc">${esc(pr.desc)}</p>${body}</details>`;
    });
    html += `<div class="foot">Plano feito com carinho pela Professora Clara 📅💜 · Marcações salvas neste navegador</div>`;
    el('main').innerHTML = html;
    if (nx) { const c = el('s-' + nx.s.d); if (c && location.hash.includes('?next')) c.scrollIntoView({ block: 'center' }); }
  }

  function planBanner(g, p) {
    const f = pointInPlan(g, p); if (!f) return '';
    const on = !!sessChecks(f.s)[itemKey(f.s.itens[f.i], f.i)]; const t = today();
    const when = f.s.d === t ? 'de <b>hoje</b>' : `de <b>${fmtLong(f.s.d)}</b>`;
    return `<div class="plan-banner ${on ? 'on' : ''}"><span>📅 Esse ponto está no plano ${when}!</span><button class="btn small ${on ? 'green' : ''}" data-chk="${f.s.d}|${f.i}">${on ? '✔ Estudado!' : 'Marcar como estudado'}</button><a href="#/plano" class="btn small ghost">ver plano</a></div>`;
  }

  /* ---------- cabeçalho ---------- */
  function renderHeader() {
    const s = totalStars(); const nl = nextLevel(s);
    el('stars').innerHTML = `⭐ ${s} <span class="lvlname">${levelName(s)}</span>` + (nl ? `<span class="next" style="font-size:.75rem;opacity:.9">faltam ${nl[0] - s} p/ ${nl[1]}</span>` : '');
  }
  function renderTabs(active) {
    const nx = nextSession(); const nxTag = nx ? `<span class="pct">${nx.s.d === today() ? 'hoje' : fmtShort(nx.s.d)}</span>` : '';
    el('tabs').innerHTML = `<button class="tab ${!active ? 'active' : ''}" style="${!active ? 'background:#2d3142;border-color:#2d3142' : ''}" data-go="#/">🏠 Início</button>` +
      `<button class="tab ${active === 'plano' ? 'active' : ''}" style="border-color:#F18F01;${active === 'plano' ? 'background:#F18F01' : ''}" data-go="#/plano">📅 Plano ${nxTag}</button>` +
      GROUPS.map(g => { const st = groupStats(g); return `<button class="tab ${active === g.id ? 'active' : ''}" style="border-color:${g.color};${active === g.id ? 'background:' + g.color + (g.dark ? ';color:#3d3000' : '') : ''}" data-go="#/g/${g.id}">${g.icon} ${g.name} <span class="pct">${st.pct}%</span></button>`; }).join('');
  }

  /* ---------- páginas ---------- */
  function home() {
    renderTabs(null);
    const s = totalStars(); let totalOk = 0, totalEx = 0; GROUPS.forEach(g => { const st = groupStats(g); totalOk += st.ok; totalEx += st.total; });
    const last = P.last ? GROUPS.find(g => g.id === P.last.g) : null; const lastP = last ? last.points.find(p => p.id === P.last.p) : null;
    let msg = s === 0 ? `Oiii, <b>Ju</b>! Tudo bem, minha querida? Eu sou a <b>Professora Clara</b> e vou ser sua parceira de estudos de Matemática! 💜<br><br>Funciona assim: você escolhe um tema, dá uma lida rapidinha no resumo e parte pros exercícios — cada acerto vale estrelas ⭐. Eles começam fáceis e vão ficando mais desafiadores, no seu ritmo.<br><br>E o mais importante: <b>não existe erro feio</b>. Errar é o cérebro aprendendo! A gente tá aqui pra aprender juntinhas. Bora começar?`
      : `Que bom te ver de novo, <b>Ju</b>! Você já tem <b>${s} estrelas</b> e é uma <b>${levelName(s)}</b> — ${totalOk} de ${totalEx} exercícios feitos. Tô orgulhosa! ${lastP ? `A gente parou em <b>${lastP.name}</b>. Quer continuar de lá?` : 'Qual tema a gente ataca hoje?'}`;
    let medals = ''; GROUPS.forEach(g => g.points.forEach(p => { const st = pointStats(g, p); medals += `<div class="medal ${st.pct === 100 ? '' : 'off'}" title="${esc(p.name)}">${p.icon} ${esc(p.name)}</div>`; }));
    el('main').innerHTML = `
      <div class="card hero">${CLARA_SVG}<div class="bubble">${msg}${lastP ? ` <br><br><button class="btn small" data-go="#/g/${last.id}/${lastP.id}">▶ Continuar: ${lastP.icon} ${esc(lastP.name)}</button>` : ''}</div></div>
      ${(() => { const nx = nextSession(); if (!nx) return ''; const t = today(); const du = daysUntil(nx.s.d); const pr = PLANO.provas.find(p => p.data >= t); const n = nx.s.itens.filter(i => typeof i === 'string').length; return `<div class="card nextsess" data-go="#/plano?next"><div class="ic">📅</div><div><b>${nx.s.d === t ? 'Sessão de estudo de HOJE' : du < 0 ? 'Sessão que ficou pra depois' : 'Próxima sessão de estudo'}:</b> ${fmtLong(nx.s.d)} às ${sessTime(nx.s).hora} · ${n ? n + ' tópicos' : 'revisão'}${pr ? ` · faltam <b>${daysUntil(pr.data)} dias</b> para a ${pr.nome}` : ''}</div><span class="btn small warn">ver plano ▶</span></div>`; })()}
      <h2 class="fred" style="margin:18px 0 10px">📚 Escolhe um tema, Ju!</h2>
      <div class="grid-groups">${GROUPS.map(g => { const st = groupStats(g); return `<div class="gcard ${g.dark ? 'dark' : ''}" style="background:${g.color}" data-go="#/g/${g.id}"><div class="ic">${g.icon}</div><h3>${g.name}</h3><p>${esc(g.desc)}</p><div class="bar"><i style="width:${st.pct}%"></i></div><p style="margin-top:4px">${st.ok}/${st.total} exercícios · ${g.points.length} pontos de estudo</p></div>`; }).join('')}</div>
      <h2 class="fred" style="margin:22px 0 10px">🏅 Medalhas da Ju (complete um ponto de estudo para ganhar)</h2>
      <div class="medals">${medals}</div>
      <div class="foot">Com carinho, Professora Clara ⭐💜 · Progresso salvo neste navegador · <button id="reset">zerar progresso</button></div>`;
    el('reset').onclick = () => { if (confirm('Tem certeza que quer apagar TODO o progresso e as estrelas?')) { P = { done: {}, genStars: 0 }; save(); route(); } };
  }

  function groupPage(g) {
    renderTabs(g.id);
    el('main').innerHTML = `
      <div class="crumb"><a href="#/">🏠 Início</a> › <b>${g.icon} ${g.name}</b></div>
      <div class="card hero" style="border-top:8px solid ${g.color}">${CLARA_SVG}<div class="bubble">Ju, em <b>${g.name}</b> a gente tem ${g.points.length} pontos de estudo. Pode começar pelo primeiro ou ir direto no que a professora está passando na escola agora. Cada um tem um resumo rapidinho e exercícios do fácil ao desafio. Vai com tudo! 🚀</div></div>
      <div class="grid-points">${g.points.map(p => { const st = pointStats(g, p); return `<div class="pcard ${st.pct === 100 ? 'done' : ''}" style="border-left-color:${st.pct === 100 ? '' : g.color}" data-go="#/g/${g.id}/${p.id}"><h3>${p.icon} ${esc(p.name)}</h3><div class="bar dark"><i style="width:${st.pct}%"></i></div><div class="meta"><span>${st.ok}/${st.total} exercícios</span>${st.pct === 100 ? '<span class="badge ok">🏅 completo</span>' : ''}</div></div>`; }).join('')}</div>`;
  }

  function pointPage(g, p) {
    renderTabs(g.id); P.last = { g: g.id, p: p.id }; save();
    const st = pointStats(g, p);
    let html = `
      <div class="crumb"><a href="#/">🏠 Início</a> › <a href="#/g/${g.id}">${g.icon} ${g.name}</a> › <b>${esc(p.name)}</b></div>
      <div class="ptitle"><h2>${p.icon} ${esc(p.name)}</h2>${lvlTag(1)} ${lvlTag(2)} ${lvlTag(3)}</div>
      ${p.intro ? `<div class="card hero intro">${CLARA_SVG}<div class="bubble">${p.intro}</div></div>` : ''}
      ${planBanner(g, p)}
      <details class="summary" ${st.ok === 0 ? 'open' : ''}><summary>📖 Resumo rápido da Prof. Clara</summary><div class="sbody">${p.summary}</div></details>
      ${st.pct === 100 ? `<div class="done-banner">🏅 Arrasou, Ju! Ponto de estudo completo! Que tal refazer os desafios ou treinar no modo infinito?</div>` : ''}
      <div class="exhead"><h3>✨ Hora de Brilhar, Ju!</h3><span class="legend">Começa pelo 1 — eles vão ficando mais difíceis. ${st.ok}/${st.total} feitos.</span></div>
      <div id="exlist">${p.ex.map((ex, i) => exCard(g, p, ex, i)).join('')}</div>`;
    if (p.gen && GEN.has(p.gen)) html += `<div class="card treino" id="treino"><h3>🎲 Treino infinito</h3><p>Ju, aqui a gente gera exercícios novos na hora, quantos você quiser. Cada acerto vale ⭐ 1 estrela!</p><button class="btn green" id="gen-btn">Gerar exercício</button><div id="gen-area"></div></div>`;
    html += `<div class="card" style="text-align:center"><button class="btn ghost" id="redo">🔄 Refazer este ponto do zero</button></div>`;
    el('main').innerHTML = html;
    p.ex.forEach((ex, i) => bindEx(g, p, ex, i));
    if (p.gen && GEN.has(p.gen)) el('gen-btn').onclick = () => newGen(p.gen);
    el('redo').onclick = () => { if (confirm('Refazer todos os exercícios deste ponto? As estrelas dele serão zeradas.')) { p.ex.forEach((e, i) => delete P.done[exId(g, p, i)]); save(); route(); } };
  }

  function exCard(g, p, ex, i, idOverride) {
    const id = idOverride || exId(g, p, i); const d = P.done[id] || {};
    const state = d.ok ? 'ok' : d.seen ? 'seen' : '';
    let body = '';
    if (ex.t === 'mc') body = `<div class="opts">${ex.o.map((o, k) => `<button class="opt ${d.ok && k === ex.a ? 'right' : ''}" data-k="${k}" ${d.ok || d.seen ? 'disabled' : ''}>${String.fromCharCode(65 + k)}) ${o}</button>`).join('')}</div>`;
    else body = `<div class="ans"><input type="text" inputmode="${ex.t === 'num' ? 'decimal' : 'text'}" placeholder="${ex.t === 'num' ? 'sua resposta' : 'escreva aqui'}" ${d.ok || d.seen ? 'disabled' : ''} value="${d.ok ? esc(Array.isArray(ex.a) ? ex.a[0] : String(ex.a).replace('.', ',')) : ''}"></div>`;
    const btns = d.ok || d.seen ? '' : `<div class="ans"><button class="btn check">Verificar ✔</button>${ex.h ? '<button class="btn ghost hint">💡 Dica da Prof. Clara</button>' : ''}<span class="tries"></span></div>`;
    const done = d.ok ? fb('good', `Feito, Ju! +${d.stars} ⭐ <span class="exp">${ex.e || ''}</span>`) : d.seen ? fb('info', `Você viu a solução dessa, Ju. Quer tentar de novo depois? Clique em "Refazer". <span class="exp">${ex.e || ''}</span>`) : '';
    return `<div class="ex ${state}" id="ex-${id.replace(/\./g, '-')}"><div class="top"><div class="num">${ex.gen ? '🎲' : i + 1}</div>${lvlTag(ex.l || 1)}</div><div class="q">${ex.q}</div>${ex.v || ''}${body}${btns}<div class="fbarea">${done}</div></div>`;
  }

  function bindEx(g, p, ex, i, idOverride, onDone) {
    const id = idOverride || exId(g, p, i); const card = el('ex-' + id.replace(/\./g, '-')); if (!card) return;
    const d = P.done[id]; if (d && (d.ok || d.seen)) return;
    let sel = null, tries = 0;
    const fbarea = card.querySelector('.fbarea'), check = card.querySelector('.check'), hint = card.querySelector('.hint'), input = card.querySelector('input'), triesEl = card.querySelector('.tries');
    card.querySelectorAll('.opt').forEach(b => b.onclick = () => { card.querySelectorAll('.opt').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = +b.dataset.k; });
    if (hint) hint.onclick = () => { fbarea.innerHTML = fb('hint', `💡 Dica da Prof. Clara: ${ex.h}`); };
    if (input) { input.onkeydown = e => { if (e.key === 'Enter') check.click(); }; setTimeout(() => { }, 0); }
    check.onclick = () => {
      const val = ex.t === 'mc' ? sel : (input.value || '').trim();
      if (val === null || val === '') { fbarea.innerHTML = fb('info', ex.t === 'mc' ? 'Ju, escolhe uma alternativa primeiro! 😉' : 'Ju, digita uma resposta primeiro! 😉'); return; }
      tries++;
      if (checkAnswer(ex, val)) {
        const stars = ex.gen ? 1 : starsOf(ex) + (tries === 1 ? 1 : 0);
        if (ex.gen) P.genStars = (P.genStars || 0) + 1; else P.done[id] = { ok: true, tries, stars };
        save(); renderHeader();
        card.classList.add('ok'); card.querySelectorAll('.opt').forEach(b => { b.disabled = true; if (+b.dataset.k === ex.a) b.classList.add('right'); });
        if (input) input.disabled = true; check.parentElement.remove();
        fbarea.innerHTML = fb('good', `${pick(GOOD)} <span class="gain">+${stars} ⭐${tries === 1 && !ex.gen ? ' (bônus de primeira!)' : ''}</span><span class="exp">${ex.e || ''}</span>`);
        if (!ex.gen) { const st = pointStats(g, p); if (st.pct === 100) { confetti(200); setTimeout(() => { fbarea.innerHTML += fb('good', `🏅 <b>ARRASOU, JU! Ponto de estudo completo!</b> Você ganhou a medalha de <b>${esc(p.name)}</b>. Tô muito orgulhosa de você! Volte ao início para ver suas medalhas.`); }, 300); } else if (tries === 1 && Math.random() < .25) confetti(50); renderTabs(g.id); }
        if (onDone) onDone(true);
      } else {
        card.querySelectorAll('.opt.sel').forEach(b => { b.classList.remove('sel'); b.classList.add('wrong'); b.disabled = true; });
        sel = null;
        if (tries < 3) { fbarea.innerHTML = fb('bad', pick(RETRY) + (ex.h && tries >= 1 ? `<span class="exp">💡 Dica: ${ex.h}</span>` : '')); triesEl.textContent = `tentativa ${tries} de 3`; if (input) { input.select(); } }
        else {
          if (!ex.gen) { P.done[id] = { seen: true, tries, stars: 0 }; save(); }
          card.classList.add('seen'); card.querySelectorAll('.opt').forEach(b => { b.disabled = true; if (+b.dataset.k === ex.a) b.classList.add('right'); });
          if (input) { input.disabled = true; input.value = Array.isArray(ex.a) ? ex.a[0] : String(ex.a).replace('.', ','); } check.parentElement.remove();
          fbarea.innerHTML = fb('info', `${pick(SEEN)} <span class="exp"><b>Resposta:</b> ${ex.t === 'mc' ? ex.o[ex.a] : (Array.isArray(ex.a) ? ex.a[0] : String(ex.a).replace('.', ','))}. ${ex.e || ''}</span>${ex.gen ? '' : ' <br><button class="btn small" style="margin-top:8px" data-redo="' + id + '">Tentar de novo mais tarde</button>'}`);
          renderTabs(g.id); if (onDone) onDone(false);
        }
      }
    };
  }

  let genCount = 0;
  function newGen(key) {
    const ex = GEN.make(key); const id = 'gen.' + key + '.' + (++genCount);
    const area = el('gen-area'); area.innerHTML = exCard(null, null, ex, 0, id) + area.innerHTML;
    bindEx(null, null, ex, 0, id, () => { const b = document.createElement('div'); b.innerHTML = `<div style="text-align:center;margin:6px 0 14px"><button class="btn green" id="gen-next">Próximo! 🎲</button></div>`; el('ex-' + id.replace(/\./g, '-')).after(b.firstChild); el('gen-next').onclick = () => newGen(key); });
    const inp = area.querySelector('input'); if (inp) inp.focus();
  }

  /* ---------- rotas ---------- */
  function route() {
    const h = location.hash || '#/'; const m = h.match(/^#\/g\/([^/]+)(?:\/([^/]+))?/);
    renderHeader();
    if (h.startsWith('#/plano')) return planPage();
    if (!m) return home();
    const g = GROUPS.find(x => x.id === m[1]); if (!g) return home();
    if (m[2]) { const p = g.points.find(x => x.id === m[2]); if (p) return pointPage(g, p); }
    groupPage(g);
  }
  document.addEventListener('click', e => {
    const go = e.target.closest('[data-go]'); if (go) { location.hash = go.dataset.go; window.scrollTo({ top: 0 }); return; }
    const rd = e.target.closest('[data-redo]'); if (rd) { delete P.done[rd.dataset.redo]; save(); route(); return; }
    const ck = e.target.closest('[data-chk]'); if (ck) {
      const [d, i] = ck.dataset.chk.split('|'); let s = null; PLANO.provas.forEach(pr => pr.sessoes.forEach(x => { if (x.d === d) s = x; })); if (!s) return;
      const wasDone = sessDone(s); toggleItem(s, s.itens[+i], +i); const nowDone = sessDone(s);
      renderHeader(); route();
      if (nowDone && !wasDone) { confetti(150); const c = el('s-' + d) || document.querySelector('.plan-banner'); if (c) c.insertAdjacentHTML('afterend', fb('good', `🏅 <b>Sessão de ${fmtShort(d)} completa, Ju!</b> +${SESSION_BONUS} ⭐ de disciplina. Estudar no dia certo é coisa de campeã! 💜`)); }
    }
  });
  window.addEventListener('hashchange', route);
  el('logo').onclick = () => { location.hash = '#/'; };
  route();
})();
