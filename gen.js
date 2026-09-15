/* Geradores de exercícios aleatórios — "Treino infinito" */
window.GEN = (function () {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[r(0, arr.length - 1)];
  const fmt = n => n.toLocaleString('pt-BR');
  const nomes = ['Júlia', 'Pedro', 'Ana', 'Lucas', 'Bia', 'Rafa', 'Sofia', 'Davi'];

  const G = {
    add() {
      const a = r(120, 4999), b = r(120, 4999);
      return { t: 'num', q: `Calcule: <b>${fmt(a)} + ${fmt(b)}</b>`, a: a + b, e: `${fmt(a)} + ${fmt(b)} = ${fmt(a + b)}. Lembre de alinhar unidade com unidade, dezena com dezena!` };
    },
    sub() {
      let a = r(500, 9999), b = r(100, 4999); if (b > a) [a, b] = [b, a];
      return { t: 'num', q: `Calcule: <b>${fmt(a)} − ${fmt(b)}</b>`, a: a - b, e: `${fmt(a)} − ${fmt(b)} = ${fmt(a - b)}. Prova real: ${fmt(a - b)} + ${fmt(b)} = ${fmt(a)}.` };
    },
    mul() {
      const modo = r(1, 3);
      if (modo === 1) { const a = r(2, 9), b = r(2, 9); return { t: 'num', q: `Tabuada: <b>${a} × ${b}</b>`, a: a * b, e: `${a} × ${b} = ${a * b}` }; }
      if (modo === 2) { const a = r(12, 99), b = r(2, 9); return { t: 'num', q: `Calcule: <b>${a} × ${b}</b>`, a: a * b, e: `${a} × ${b} = ${a * b}. Dica: ${Math.floor(a / 10) * 10} × ${b} = ${Math.floor(a / 10) * 10 * b} e ${a % 10} × ${b} = ${(a % 10) * b}; some os dois.` }; }
      const a = r(12, 99), b = r(11, 39); return { t: 'num', q: `Calcule: <b>${a} × ${b}</b>`, a: a * b, e: `${a} × ${b} = ${fmt(a * b)}. Separe: ${a} × ${Math.floor(b / 10) * 10} = ${fmt(a * Math.floor(b / 10) * 10)} e ${a} × ${b % 10} = ${a * (b % 10)}.` };
    },
    div() {
      const modo = r(1, 3);
      if (modo === 1) { const b = r(2, 9), q = r(2, 9); return { t: 'num', q: `Calcule: <b>${b * q} ÷ ${b}</b>`, a: q, e: `${b * q} ÷ ${b} = ${q}, porque ${b} × ${q} = ${b * q}.` }; }
      if (modo === 2) { const b = r(2, 9), q = r(12, 199); return { t: 'num', q: `Calcule: <b>${b * q} ÷ ${b}</b>`, a: q, e: `${b * q} ÷ ${b} = ${q}. Confira: ${b} × ${q} = ${b * q}.` }; }
      const b = r(2, 9), q = r(5, 30), rest = r(1, b - 1); const d = b * q + rest;
      return { t: 'num', q: `Qual é o <b>resto</b> de <b>${d} ÷ ${b}</b>?`, a: rest, e: `${d} = ${b} × ${q} + ${rest}. O quociente é ${q} e o resto é ${rest}.` };
    },
    expr() {
      const modo = r(1, 4); let q, a, e;
      if (modo === 1) { const x = r(2, 20), y = r(2, 9), z = r(2, 9); q = `${x} + ${y} × ${z}`; a = x + y * z; e = `Primeiro a multiplicação: ${y} × ${z} = ${y * z}. Depois ${x} + ${y * z} = ${a}.`; }
      else if (modo === 2) { const x = r(2, 12), y = r(2, 12), z = r(2, 9); q = `(${x} + ${y}) × ${z}`; a = (x + y) * z; e = `Primeiro o parêntese: ${x} + ${y} = ${x + y}. Depois ${x + y} × ${z} = ${a}.`; }
      else if (modo === 3) { const z = r(2, 9), y = r(2, 9), x = r(z * y + 5, 80); q = `${x} − ${y * z} ÷ ${z}`; a = x - y; e = `Primeiro a divisão: ${y * z} ÷ ${z} = ${y}. Depois ${x} − ${y} = ${a}.`; }
      else { const x = r(20, 60), y = r(2, 6), z = r(2, 5), w = r(1, 4); q = `${x} − [${y} × (${z} + ${w})]`; a = x - y * (z + w); e = `Parêntese: ${z} + ${w} = ${z + w}. Colchete: ${y} × ${z + w} = ${y * (z + w)}. Por fim ${x} − ${y * (z + w)} = ${a}.`; }
      return { t: 'num', q: `Resolva a expressão: <b>${q}</b>`, a, e };
    },
    snd() {
      const n = r(1000, 99999), s = String(n), i = r(0, s.length - 1); const dig = s[i], pos = s.length - 1 - i;
      const nomesPos = ['unidade', 'dezena', 'centena', 'unidade de milhar', 'dezena de milhar'];
      const modo = r(1, 2);
      if (modo === 1) return { t: 'num', q: `No número <b>${fmt(n)}</b>, qual é o <b>valor</b> do algarismo <b>${dig}</b>${s.split(dig).length > 2 ? ' (o primeiro da esquerda para a direita)' : ''}?`, a: dig * Math.pow(10, s.length - 1 - s.indexOf(dig)), e: `O algarismo ${dig} está na ordem das ${nomesPos[s.length - 1 - s.indexOf(dig)]}s, então vale ${fmt(dig * Math.pow(10, s.length - 1 - s.indexOf(dig)))}.` };
      const dz = Math.floor(n / 10);
      return { t: 'num', q: `Quantas <b>dezenas</b> há em <b>${fmt(n)}</b>?`, a: dz, e: `Cubra o algarismo das unidades: ${fmt(n)} tem ${fmt(dz)} dezenas.` };
    },
    dec() {
      const modo = r(1, 3);
      if (modo === 1) { let a = (r(10, 99) / 10), b = (r(100, 999) / 100); while (a === b) b = r(100, 999) / 100; const big = Math.max(a, b); return { t: 'mc', q: `Qual número é <b>maior</b>?`, o: [a.toFixed(1).replace('.', ','), b.toFixed(2).replace('.', ',')], a: big === a ? 0 : 1, e: `Compare a parte inteira; se for igual, compare os décimos, depois os centésimos. ${a.toFixed(1).replace('.', ',')} = ${a.toFixed(2).replace('.', ',')}.` }; }
      if (modo === 2) { const a = r(10, 999) / 100, b = r(10, 999) / 100; return { t: 'num', q: `Calcule: <b>${a.toFixed(2).replace('.', ',')} + ${b.toFixed(2).replace('.', ',')}</b>`, a: Math.round((a + b) * 100) / 100, e: `Alinhe as vírgulas: ${a.toFixed(2).replace('.', ',')} + ${b.toFixed(2).replace('.', ',')} = ${(a + b).toFixed(2).replace('.', ',')}.` }; }
      const p = r(200, 2000) / 100, pago = Math.ceil(p / 10) * 10 + pick([0, 10]); return { t: 'num', q: `${pick(nomes)} comprou um lanche de <b>R$ ${p.toFixed(2).replace('.', ',')}</b> e pagou com <b>R$ ${pago},00</b>. Quanto recebeu de troco?`, a: Math.round((pago - p) * 100) / 100, e: `Troco = ${pago},00 − ${p.toFixed(2).replace('.', ',')} = R$ ${(pago - p).toFixed(2).replace('.', ',')}.` };
    },
    frac() {
      const d = pick([2, 3, 4, 5, 6, 8, 10]), n = r(1, d - 1), k = r(2, 12) * d; const res = n * k / d;
      return { t: 'num', q: `Calcule <b>${n}/${d} de ${k}</b>.`, a: res, e: `${k} ÷ ${d} = ${k / d}. Depois ${k / d} × ${n} = ${res}.` };
    },
    tempo() {
      const modo = r(1, 3);
      if (modo === 1) { const h = r(0, 23), m = pick([0, 15, 30, 45, 20, 40, 10, 50]); return { t: 'num', q: `Quantos minutos há em <b>${h} h e ${m} min</b>?`, a: h * 60 + m, e: `${h} × 60 = ${h * 60}; ${h * 60} + ${m} = ${h * 60 + m} minutos.` }; }
      if (modo === 2) { const h = r(6, 20), m = pick([0, 15, 30, 45]), dur = pick([25, 35, 40, 50, 55, 70, 90]); let tm = h * 60 + m + dur; const hh = Math.floor(tm / 60) % 24, mm = tm % 60; return { t: 'mc', q: `Uma atividade começa às <b>${h}h${String(m).padStart(2, '0')}</b> e dura <b>${dur} minutos</b>. A que horas termina?`, o: [`${hh}h${String(mm).padStart(2, '0')}`, `${hh}h${String((mm + 10) % 60).padStart(2, '0')}`, `${(hh + 1) % 24}h${String(mm).padStart(2, '0')}`, `${hh}h${String((mm + 30) % 60).padStart(2, '0')}`].sort(() => Math.random() - 0.5), a: null, ans: `${hh}h${String(mm).padStart(2, '0')}`, e: `${h}h${String(m).padStart(2, '0')} + ${dur} min = ${hh}h${String(mm).padStart(2, '0')}. Quando passa de 60 minutos, vira 1 hora!` }; }
      const min = pick([75, 90, 100, 120, 135, 150, 200]); return { t: 'mc', q: `<b>${min} minutos</b> é o mesmo que:`, o: [`${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`, `${Math.floor(min / 60)}h${String((min % 60 + 15) % 60).padStart(2, '0')}`, `${Math.floor(min / 60) + 1}h${String(min % 60).padStart(2, '0')}`, `${Math.floor(min / 60)}h${min % 60 + 30 > 59 ? '05' : String(min % 60 + 30).padStart(2, '0')}`].sort(() => Math.random() - 0.5), a: null, ans: `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`, e: `${min} ÷ 60 = ${Math.floor(min / 60)} horas e sobram ${min % 60} minutos.` };
    },
    conv() {
      const modo = r(1, 4);
      if (modo === 1) { const k = pick([1.5, 2, 2.5, 3, 0.5, 4, 0.25, 1.2]); return { t: 'num', q: `<b>${String(k).replace('.', ',')} kg</b> = quantos gramas?`, a: k * 1000, e: `1 kg = 1.000 g, então ${String(k).replace('.', ',')} × 1.000 = ${fmt(k * 1000)} g.` }; }
      if (modo === 2) { const g = pick([500, 1500, 2500, 3000, 250, 750, 4500]); return { t: 'num', q: `<b>${fmt(g)} g</b> = quantos quilogramas? (use vírgula se precisar)`, a: g / 1000, e: `${fmt(g)} ÷ 1.000 = ${String(g / 1000).replace('.', ',')} kg.` }; }
      if (modo === 3) { const l = pick([1.5, 2, 2.5, 3, 0.5, 0.75, 1.25]); return { t: 'num', q: `<b>${String(l).replace('.', ',')} L</b> = quantos mililitros?`, a: l * 1000, e: `1 L = 1.000 mL, então ${String(l).replace('.', ',')} × 1.000 = ${fmt(l * 1000)} mL.` }; }
      const ml = pick([500, 1500, 2500, 250, 750, 3500]); return { t: 'num', q: `<b>${fmt(ml)} mL</b> = quantos litros? (use vírgula se precisar)`, a: ml / 1000, e: `${fmt(ml)} ÷ 1.000 = ${String(ml / 1000).replace('.', ',')} L.` };
    },
    perim() {
      const modo = r(1, 3);
      if (modo === 1) { const l = r(3, 25); return { t: 'num', q: `Qual é o <b>perímetro</b> de um quadrado com lado de <b>${l} cm</b>?`, a: 4 * l, e: `Quadrado tem 4 lados iguais: 4 × ${l} = ${4 * l} cm.` }; }
      if (modo === 2) { const w = r(3, 20), h = r(2, w - 1); return { t: 'num', q: `Qual é o <b>perímetro</b> deste retângulo (em cm)?`, v: V.rect(w, h), a: 2 * (w + h), e: `${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} cm.` }; }
      const w = r(3, 20), h = r(2, w - 1); return { t: 'num', q: `Qual é a <b>área</b> deste retângulo (em cm²)?`, v: V.rect(w, h), a: w * h, e: `Área = comprimento × largura = ${w} × ${h} = ${w * h} cm².` };
    },
    prob() {
      const modo = r(1, 4);
      if (modo === 1) { const c = r(3, 12), p = r(12, 45); return { t: 'num', q: `${pick(['Júlia', 'Pedro', 'Ana'])} comprou <b>${c} pacotes</b> de figurinhas com <b>${p} figurinhas</b> em cada um. Quantas figurinhas ao todo?`, a: c * p, e: `${c} × ${p} = ${c * p} figurinhas.` }; }
      if (modo === 2) { const tot = r(200, 900), gasto = r(50, tot - 20); return { t: 'num', q: `${pick(['Lucas', 'Bia', 'Rafa'])} tinha <b>R$ ${tot}</b> e gastou <b>R$ ${gasto}</b>. Com quanto ficou?`, a: tot - gasto, e: `${tot} − ${gasto} = ${tot - gasto} reais.` }; }
      if (modo === 3) { const q = r(3, 9), cada = r(4, 30); return { t: 'num', q: `<b>${q * cada} balas</b> serão divididas igualmente entre <b>${q} crianças</b>. Quantas cada uma recebe?`, a: cada, e: `${q * cada} ÷ ${q} = ${cada} balas para cada criança.` }; }
      const a = r(3, 8), pa = r(2, 9), b = r(2, 6), pb = r(3, 12); return { t: 'num', q: `Na feira, ${pick(['Sofia', 'Davi'])} comprou <b>${a} kg de banana</b> a <b>R$ ${pa} o quilo</b> e <b>${b} kg de maçã</b> a <b>R$ ${pb} o quilo</b>. Quanto gastou ao todo?`, a: a * pa + b * pb, e: `Banana: ${a} × ${pa} = ${a * pa}. Maçã: ${b} × ${pb} = ${b * pb}. Total: ${a * pa + b * pb} reais.` };
    }
  };

  function make(key) {
    const ex = G[key]();
    if (ex.t === 'mc' && ex.a === null) ex.a = ex.o.indexOf(ex.ans);
    ex.l = 1; ex.gen = true; return ex;
  }
  return { make, has: k => !!G[k] };
})();
