/* Ajudantes visuais: gráficos, tabelas, figuras geométricas (SVG inline) */
window.V = (function () {
  const COLORS = ['#E8638B', '#44BBA4', '#F4D35E', '#7B68EE', '#F18F01', '#2E86AB', '#A23B72', '#54A0FF'];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function table(headers, rows, caption) {
    let h = '<div class="viz"><table class="vt">';
    if (caption) h += `<caption>${esc(caption)}</caption>`;
    h += '<thead><tr>' + headers.map(x => `<th>${esc(x)}</th>`).join('') + '</tr></thead><tbody>';
    rows.forEach(r => { h += '<tr>' + r.map(c => `<td>${esc(c)}</td>`).join('') + '</tr>'; });
    return h + '</tbody></table></div>';
  }

  function bars(labels, values, opt = {}) {
    const W = 360, H = 220, padL = 40, padB = 40, padT = 20;
    const max = opt.max || Math.ceil(Math.max(...values) / 5) * 5 || 5;
    const step = opt.step || (max <= 10 ? 1 : max <= 30 ? 5 : 10);
    const cw = (W - padL - 10) / labels.length;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="${esc(opt.title || 'gráfico de barras')}">`;
    if (opt.title) s += `<text x="${W / 2}" y="14" text-anchor="middle" class="ct">${esc(opt.title)}</text>`;
    for (let v = 0; v <= max; v += step) {
      const y = H - padB - (v / max) * (H - padB - padT);
      s += `<line x1="${padL}" y1="${y}" x2="${W - 10}" y2="${y}" stroke="#ddd"/><text x="${padL - 6}" y="${y + 4}" text-anchor="end" class="cl">${v}</text>`;
    }
    values.forEach((v, i) => {
      const bh = (v / max) * (H - padB - padT);
      const x = padL + i * cw + cw * 0.2;
      s += `<rect x="${x}" y="${H - padB - bh}" width="${cw * 0.6}" height="${bh}" rx="4" fill="${COLORS[i % COLORS.length]}"/>`;
      if (opt.showValues) s += `<text x="${x + cw * 0.3}" y="${H - padB - bh - 4}" text-anchor="middle" class="cl">${v}</text>`;
      s += `<text x="${x + cw * 0.3}" y="${H - padB + 16}" text-anchor="middle" class="cl">${esc(labels[i])}</text>`;
    });
    s += `<line x1="${padL}" y1="${H - padB}" x2="${W - 10}" y2="${H - padB}" stroke="#555"/>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  function line(labels, values, opt = {}) {
    const W = 360, H = 220, padL = 40, padB = 40, padT = 20;
    const max = opt.max || Math.ceil(Math.max(...values) / 5) * 5 || 5;
    const step = opt.step || (max <= 10 ? 1 : max <= 30 ? 5 : 10);
    const cw = (W - padL - 20) / (labels.length - 1);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="chart">`;
    if (opt.title) s += `<text x="${W / 2}" y="14" text-anchor="middle" class="ct">${esc(opt.title)}</text>`;
    for (let v = 0; v <= max; v += step) {
      const y = H - padB - (v / max) * (H - padB - padT);
      s += `<line x1="${padL}" y1="${y}" x2="${W - 10}" y2="${y}" stroke="#ddd"/><text x="${padL - 6}" y="${y + 4}" text-anchor="end" class="cl">${v}</text>`;
    }
    const pts = values.map((v, i) => [padL + i * cw, H - padB - (v / max) * (H - padB - padT)]);
    s += `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="#7B68EE" stroke-width="3"/>`;
    pts.forEach((p, i) => {
      s += `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#E8638B"/><text x="${p[0]}" y="${p[1] - 10}" text-anchor="middle" class="cl">${values[i]}</text>`;
      s += `<text x="${p[0]}" y="${H - padB + 16}" text-anchor="middle" class="cl">${esc(labels[i])}</text>`;
    });
    s += `<line x1="${padL}" y1="${H - padB}" x2="${W - 10}" y2="${H - padB}" stroke="#555"/>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  function pie(labels, values, opt = {}) {
    const total = values.reduce((a, b) => a + b, 0);
    const cx = 100, cy = 100, r = 80;
    const cols = opt.colors || COLORS;
    let a0 = -Math.PI / 2, s = `<svg viewBox="0 0 340 200" class="chart">`;
    values.forEach((v, i) => {
      const a1 = a0 + (v / total) * 2 * Math.PI;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const big = a1 - a0 > Math.PI ? 1 : 0;
      s += `<path d="M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${big} 1 ${x1},${y1} Z" fill="${cols[i]}" stroke="#fff" stroke-width="2"/>`;
      const am = (a0 + a1) / 2;
      if (opt.showPct) s += `<text x="${cx + r * 0.6 * Math.cos(am)}" y="${cy + r * 0.6 * Math.sin(am) + 4}" text-anchor="middle" class="cl" fill="#fff" font-weight="700">${Math.round(v / total * 100)}%</text>`;
      s += `<rect x="200" y="${30 + i * 26}" width="16" height="16" rx="3" fill="${cols[i]}"/><text x="222" y="${43 + i * 26}" class="cl">${esc(labels[i])}</text>`;
      a0 = a1;
    });
    return `<div class="viz">${s}</svg></div>`;
  }

  /* malha quadriculada com células pintadas: cells = [[x,y],...], unidade 1 */
  function grid(cells, opt = {}) {
    const u = opt.u || 28, cols = opt.cols || (Math.max(...cells.map(c => c[0])) + 2), rows = opt.rows || (Math.max(...cells.map(c => c[1])) + 2);
    let s = `<svg viewBox="0 0 ${cols * u + 2} ${rows * u + 2}" class="chart" style="max-width:${cols * u + 2}px">`;
    for (let x = 0; x <= cols; x++) s += `<line x1="${x * u + 1}" y1="1" x2="${x * u + 1}" y2="${rows * u + 1}" stroke="#ccc"/>`;
    for (let y = 0; y <= rows; y++) s += `<line x1="1" y1="${y * u + 1}" x2="${cols * u + 1}" y2="${y * u + 1}" stroke="#ccc"/>`;
    cells.forEach(([x, y]) => { s += `<rect x="${x * u + 1}" y="${(rows - 1 - y) * u + 1}" width="${u}" height="${u}" fill="${opt.color || '#44BBA4'}" stroke="#2f8f7d"/>`; });
    if (opt.note) s += `<text x="4" y="${rows * u - 4}" class="cl">${esc(opt.note)}</text>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  /* retângulo com medidas */
  function rect(w, h, opt = {}) {
    const unit = opt.unit || 'cm', sc = opt.scale || Math.min(200 / w, 120 / h);
    const W = w * sc, H = h * sc;
    let s = `<svg viewBox="0 0 ${W + 70} ${H + 40}" class="chart" style="max-width:${W + 70}px">`;
    s += `<rect x="10" y="10" width="${W}" height="${H}" fill="${opt.color || '#F4D35E'}" stroke="#c9a227" stroke-width="2"/>`;
    s += `<text x="${10 + W / 2}" y="${H + 30}" text-anchor="middle" class="cl">${w} ${unit}</text>`;
    s += `<text x="${W + 20}" y="${10 + H / 2 + 4}" class="cl">${h} ${unit}</text>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  function polygon(n, opt = {}) {
    const cx = 70, cy = 70, r = 55;
    const pts = [];
    for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / n; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    let s = `<svg viewBox="0 0 140 140" class="chart" style="max-width:140px"><polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="${opt.color || '#2E86AB'}" stroke="#1f5f7a" stroke-width="2"/>`;
    if (opt.side) s += `<text x="70" y="135" text-anchor="middle" class="cl">lado = ${opt.side}</text>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  function angle(deg, opt = {}) {
    const cx = 75, cy = 82, L = 65, a = deg * Math.PI / 180;
    const x2 = cx + L * Math.cos(a), y2 = cy - L * Math.sin(a);
    const ra = 25;
    const big = deg > 180 ? 1 : 0;
    let s = `<svg viewBox="0 0 160 95" class="chart" style="max-width:160px">`;
    s += `<path d="M${cx + ra},${cy} A${ra},${ra} 0 ${big} 0 ${cx + ra * Math.cos(a)},${cy - ra * Math.sin(a)}" fill="rgba(232,99,139,.3)" stroke="#E8638B" stroke-width="2"/>`;
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + L}" y2="${cy}" stroke="#333" stroke-width="3"/><line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#333" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="3"/>`;
    if (opt.label) s += `<text x="${cx + 34}" y="${cy - 8}" class="cl">${esc(opt.label)}</text>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  function clock(h, m) {
    const cx = 70, cy = 70;
    let s = `<svg viewBox="0 0 140 140" class="chart" style="max-width:140px"><circle cx="${cx}" cy="${cy}" r="64" fill="#fff" stroke="#7B68EE" stroke-width="4"/>`;
    for (let i = 1; i <= 12; i++) { const a = i * Math.PI / 6; s += `<text x="${cx + 52 * Math.sin(a)}" y="${cy - 52 * Math.cos(a) + 5}" text-anchor="middle" class="cl" font-weight="700">${i}</text>`; }
    const ah = ((h % 12) + m / 60) * Math.PI / 6, am = m * Math.PI / 30;
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + 32 * Math.sin(ah)}" y2="${cy - 32 * Math.cos(ah)}" stroke="#333" stroke-width="5" stroke-linecap="round"/>`;
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + 46 * Math.sin(am)}" y2="${cy - 46 * Math.cos(am)}" stroke="#E8638B" stroke-width="3" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="4"/>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  /* fração: barra ou pizza com n de d partes pintadas */
  function fraction(n, d, opt = {}) {
    if (opt.shape === 'circle') {
      const cx = 60, cy = 60, r = 50; let s = `<svg viewBox="0 0 120 120" class="chart" style="max-width:120px">`;
      for (let i = 0; i < d; i++) {
        const a0 = -Math.PI / 2 + i * 2 * Math.PI / d, a1 = a0 + 2 * Math.PI / d;
        const big = 2 * Math.PI / d > Math.PI ? 1 : 0;
        s += `<path d="M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${big} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z"  fill="${i < n ? (opt.color || '#F18F01') : '#fff'}" stroke="#333" stroke-width="2"/>`;
      }
      return `<div class="viz">${s}</svg></div>`;
    }
    const w = Math.min(300, d * 40), cw = w / d; let s = `<svg viewBox="0 0 ${w + 4} 44" class="chart" style="max-width:${w + 4}px">`;
    for (let i = 0; i < d; i++) s += `<rect x="${2 + i * cw}" y="2" width="${cw}" height="40"  fill="${i < n ? (opt.color || '#44BBA4') : '#fff'}" stroke="#333" stroke-width="2"/>`;
    return `<div class="viz">${s}</svg></div>`;
  }

  /* plano cartesiano com pontos nomeados: pts = [{n:'A',x:2,y:3}] */
  function plane(pts, opt = {}) {
    const N = opt.n || 6, u = 32, o = 30, W = N * u + o + 10;
    let s = `<svg viewBox="0 0 ${W} ${W}" class="chart" style="max-width:${W}px">`;
    for (let i = 0; i <= N; i++) {
      s += `<line x1="${o + i * u}" y1="${10}" x2="${o + i * u}" y2="${10 + N * u}" stroke="#ddd"/><line x1="${o}" y1="${10 + i * u}" x2="${o + N * u}" y2="${10 + i * u}" stroke="#ddd"/>`;
      s += `<text x="${o + i * u}" y="${10 + N * u + 16}" text-anchor="middle" class="cl">${i}</text><text x="${o - 8}" y="${10 + N * u - i * u + 4}" text-anchor="end" class="cl">${i}</text>`;
    }
    s += `<line x1="${o}" y1="${10}" x2="${o}" y2="${10 + N * u}" stroke="#333" stroke-width="2"/><line x1="${o}" y1="${10 + N * u}" x2="${o + N * u}" y2="${10 + N * u}" stroke="#333" stroke-width="2"/>`;
    s += `<text x="${o + N * u - 4}" y="${10 + N * u - 6}" class="cl" text-anchor="end">x</text><text x="${o + 6}" y="${20}" class="cl">y</text>`;
    pts.forEach((p, i) => {
      const x = o + p.x * u, y = 10 + N * u - p.y * u;
      s += `<circle cx="${x}" cy="${y}" r="6" fill="${COLORS[i % COLORS.length]}" stroke="#333"/><text x="${x + 9}" y="${y - 6}" class="cl" font-weight="800">${esc(p.n)}</text>`;
    });
    return `<div class="viz">${s}</svg></div>`;
  }

  /* reta numérica de a até b com d divisões e um ponto marcado na divisão k */
  function numberLine(a, b, d, k, opt = {}) {
    const W = 320, x0 = 20, x1 = 300;
    let s = `<svg viewBox="0 0 ${W} 60" class="chart" style="max-width:${W}px"><line x1="${x0}" y1="30" x2="${x1}" y2="30" stroke="#333" stroke-width="2"/>`;
    for (let i = 0; i <= d; i++) {
      const x = x0 + (x1 - x0) * i / d;
      s += `<line x1="${x}" y1="24" x2="${x}" y2="36" stroke="#333" stroke-width="2"/>`;
      if (i === 0) s += `<text x="${x}" y="52" text-anchor="middle" class="cl">${a}</text>`;
      if (i === d) s += `<text x="${x}" y="52" text-anchor="middle" class="cl">${b}</text>`;
    }
    if (k != null) { const x = x0 + (x1 - x0) * k / d; s += `<circle cx="${x}" cy="30" r="7" fill="#E8638B" stroke="#333"/><text x="${x}" y="16" text-anchor="middle" class="cl" font-weight="800">${opt.label || '?'}</text>`; }
    return `<div class="viz">${s}</svg></div>`;
  }

  /* calendário: first = índice do dia da semana (0=Seg) do dia 1; days = total; hi = dias destacados; hide = esconder números */
  function calendar(first, days, opt = {}) {
    const names = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    let h = `<div class="viz"><table class="vt cal">${opt.title ? `<caption>${esc(opt.title)}</caption>` : ''}<thead><tr>${names.map(n => `<th>${n}</th>`).join('')}</tr></thead><tbody><tr>`;
    let col = 0; for (; col < first; col++) h += '<td></td>';
    for (let d = 1; d <= days; d++) {
      const hi = (opt.hi || []).includes(d);
      h += `<td class="${hi ? 'hi' : ''}">${opt.hide ? '' : d}</td>`;
      col++; if (col === 7 && d < days) { h += '</tr><tr>'; col = 0; }
    }
    while (col < 7 && col !== 0) { h += '<td></td>'; col++; }
    return h + '</tr></tbody></table></div>';
  }

  /* diagrama de somas (quadrados e círculos) para desafios */
  function boxCircle(squares, circles) {
    // squares: 4 valores ('?' permitido), circles: 3 valores; círculo i liga quadrados i e i+1
    let s = `<svg viewBox="0 0 300 110" class="chart" style="max-width:300px">`;
    squares.forEach((v, i) => { const x = 20 + i * 80; s += `<rect x="${x}" y="10" width="40" height="40" fill="#fff" stroke="#333" stroke-width="2"/><text x="${x + 20}" y="37" text-anchor="middle" class="cl" font-size="20" font-weight="800">${v}</text>`; });
    circles.forEach((v, i) => { const x = 60 + i * 80; s += `<line x1="${40 + i * 80}" y1="50" x2="${x}" y2="70" stroke="#333"/><line x1="${120 + i * 80}" y1="50" x2="${x}" y2="70" stroke="#333"/><circle cx="${x}" cy="85" r="20" fill="${v === '?' ? '#bbb' : '#fff'}" stroke="#333" stroke-width="2"/><text x="${x}" y="92" text-anchor="middle" class="cl" font-size="18" font-weight="800">${v}</text>`; });
    return `<div class="viz">${s}</svg></div>`;
  }

  return { table, bars, line, pie, grid, rect, polygon, angle, clock, fraction, plane, numberLine, calendar, boxCircle, COLORS };
})();
