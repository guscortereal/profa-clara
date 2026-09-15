window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'fracoes', icon: '🍕', name: 'Frações', color: '#A23B72',
  desc: 'Partes de um todo, frações equivalentes e fração de quantidade.',
  points: [
    {
      id: 'fracao', icon: '🍕', name: 'O que é fração', intro: 'Ju, imagina uma pizza cortada em 8 fatias e você comendo 3: você comeu 3/8 da pizza! Fração é só isso — pedaços iguais de um todo. Vem que a gente vai fatiar pizzas, barras de chocolate e bolos (só na imaginação, tá?).',
      summary: `
<p>Uma <b>fração</b> mostra <b>partes de um todo</b> dividido em partes <b>iguais</b>.</p>
<div class="box" style="text-align:center;font-size:1.3em"><b>3</b> ← numerador (quantas partes eu peguei)<br><b>—</b><br><b>4</b> ← denominador (em quantas partes o todo foi dividido)</div>
<ul>
<li><b>Leitura:</b> 1/2 um meio · 1/3 um terço · 1/4 um quarto · 1/5 um quinto · 1/6 um sexto · 1/7 um sétimo · 1/8 um oitavo · 1/9 um nono · 1/10 um décimo · 1/12 "um doze avos".</li>
<li><b>Fração é divisão:</b> 3/4 = 3 ÷ 4 = 0,75. Se 3 chocolates são divididos entre 4 crianças, cada uma ganha 3/4.</li>
<li><b>Na reta numérica:</b> divida o espaço entre 0 e 1 em partes iguais (denominador) e conte (numerador).</li>
<li><b>Fração igual a 1:</b> 4/4 = 6/6 = 1 inteiro. <b>Maior que 1:</b> 5/4 = 1 inteiro e 1/4 (número misto).</li>
<li><b>Décimos:</b> 1/10 = 0,1 · 1/4 = 0,25 · 1/2 = 0,5.</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Uma pizza foi cortada em <b>8 fatias iguais</b> e Júlia comeu <b>3</b>. Que fração da pizza ela comeu?', v: V.fraction(3, 8, { shape: 'circle' }), o: ['3/8', '8/3', '3/5', '5/8'], a: 0, h: 'Partes comidas em cima, total de partes embaixo.', e: '3 fatias de 8 = 3/8 (três oitavos).' },
        { l: 1, t: 'mc', q: 'Como se lê a fração <b>2/5</b>?', o: ['dois quintos', 'dois quartos', 'cinco segundos', 'dois cincos'], a: 0, e: 'Denominador 5 → "quintos". 2/5 = dois quintos.' },
        { l: 1, t: 'num', q: 'Na fração <b>7/10</b>, qual é o <b>denominador</b>?', a: 10, h: 'O denominador fica embaixo.', e: 'Numerador = 7 (em cima), denominador = 10 (embaixo).' },
        { l: 1, t: 'mc', q: 'Que fração da barra está pintada?', v: V.fraction(4, 6), o: ['4/6', '6/4', '2/6', '4/10'], a: 0, e: '4 partes pintadas de 6 partes = 4/6.' },
        { l: 2, t: 'mc', q: 'Qual fração representa a <b>metade</b> de alguma coisa?', o: ['1/2', '2/1', '1/4', '2/2'], a: 0, e: 'Metade = 1 parte de 2 = 1/2.' },
        { l: 2, t: 'mc', q: 'A fração <b>3/4</b> é o mesmo que a divisão:', o: ['4 ÷ 3', '3 ÷ 4', '3 × 4', '3 − 4'], a: 1, h: 'Numerador dividido pelo denominador.', e: '3/4 = 3 ÷ 4 = 0,75.' },
        { l: 2, t: 'num', q: 'Escreva <b>1/2</b> como número decimal.', a: 0.5, h: '1 ÷ 2 = ?', e: '1 ÷ 2 = 0,5.' },
        { l: 2, t: 'mc', q: 'Qual destas frações é <b>maior que 1</b>?', o: ['3/4', '5/5', '7/4', '2/9'], a: 2, h: 'Uma fração é maior que 1 quando o numerador é maior que o denominador.', e: '7/4 = 7 ÷ 4 = 1 inteiro e 3/4. As outras são menores ou iguais a 1.' },
        { l: 2, t: 'mc', q: 'A reta de 0 a 1 foi dividida em partes iguais. Que fração o ponto vermelho representa?', v: V.numberLine(0, 1, 4, 3), o: ['1/4', '2/4', '3/4', '4/4'], a: 2, h: 'Conte em quantas partes a reta foi dividida e em qual marca está o ponto.', e: '4 partes iguais → quartos. O ponto está na 3ª marca: 3/4.' },
        { l: 2, t: 'mc', q: 'Que fração do círculo está pintada?', v: V.fraction(1, 3, { shape: 'circle' }), o: ['1/2', '1/3', '1/4', '2/3'], a: 1, e: '1 parte pintada de 3 partes iguais = 1/3 (um terço).' },
        { l: 3, t: 'txt', q: '<b>3 chocolates</b> iguais serão repartidos igualmente entre <b>4 crianças</b>. Que fração de chocolate cada criança recebe? (escreva como 1/2)', a: ['3/4'], h: '3 chocolates ÷ 4 crianças.', e: 'Cada criança recebe 3 ÷ 4 = 3/4 de chocolate.' },
        { l: 3, t: 'mc', q: '<b>6/6</b> é igual a:', o: ['0', '1', '6', '1/6'], a: 1, e: '6 partes de 6 = o inteiro todo = 1.' },
        { l: 3, t: 'mc', q: 'A fração <b>5/4</b> escrita como número misto é:', o: ['1 inteiro e 1/4', '1 inteiro e 4/5', '4 inteiros e 1/5', '5 inteiros e 1/4'], a: 0, h: '4/4 é um inteiro. Quanto sobra?', e: '5/4 = 4/4 + 1/4 = 1 inteiro e 1/4.' },
        { l: 3, t: 'num', q: 'Escreva <b>1/4</b> como número decimal.', a: 0.25, h: '1 ÷ 4 = ? (pense em R$ 1,00 dividido por 4)', e: '1 ÷ 4 = 0,25 (25 centavos!).' },
        { l: 3, t: 'mc', q: '<b>1/10</b> em decimal é:', o: ['0,1', '1,0', '0,01', '10'], a: 0, e: '1/10 = um décimo = 0,1.' }
      ]
    },
    {
      id: 'equiv', icon: '⚖️', name: 'Frações equivalentes e comparação', intro: 'Minha querida, meia pizza é a mesma coisa que duas fatias de uma pizza cortada em 4, né? Pois é: 1/2 = 2/4. Frações equivalentes são "disfarces" da mesma quantidade. Pega as tiras de frações e bora comparar!',
      summary: `
<p><b>Frações equivalentes</b> representam a <b>mesma quantidade</b> com números diferentes: 1/2 = 2/4 = 4/8.</p>
<div class="box">Para achar uma equivalente, <b>multiplique (ou divida) o numerador E o denominador pelo mesmo número</b>:<br>
1/3 → (×2) → 2/6 → (×2) → 4/12 &nbsp;&nbsp;|&nbsp;&nbsp; 10/15 → (÷5) → 2/3 (isso é <b>simplificar</b>)</div>
<p><b>Comparar frações:</b></p>
<ul>
<li><b>Mesmo denominador:</b> ganha o maior numerador. 5/8 > 3/8.</li>
<li><b>Mesmo numerador:</b> ganha o <b>menor</b> denominador (partes maiores!). 1/3 > 1/5.</li>
<li><b>Diferentes:</b> transforme em equivalentes com o mesmo denominador. 2/3 ou 3/4? → 8/12 e 9/12 → 3/4 é maior.</li>
</ul>
<p>Use as <b>tiras de frações</b> da sala para enxergar!</p>`,
      ex: [
        { l: 1, t: 'mc', q: 'Qual fração é <b>equivalente</b> a <b>1/2</b>?', v: V.fraction(1, 2) + V.fraction(2, 4), o: ['2/4', '1/4', '2/3', '3/4'], a: 0, e: '1/2 × (2/2) = 2/4. As barras mostram a mesma quantidade pintada.' },
        { l: 1, t: 'num', q: 'Complete: <b>1/3 = ?/6</b>', a: 2, h: 'O denominador foi multiplicado por 2. Faça o mesmo com o numerador.', e: '1 × 2 = 2 → 1/3 = 2/6.' },
        { l: 1, t: 'mc', q: 'Qual é <b>maior</b>: 3/8 ou 5/8?', o: ['3/8', '5/8', 'são iguais'], a: 1, e: 'Mesmo denominador: ganha o maior numerador. 5/8 > 3/8.' },
        { l: 1, t: 'mc', q: 'Qual é <b>maior</b>: 1/3 ou 1/5?', o: ['1/3', '1/5', 'são iguais'], a: 0, h: 'Um bolo dividido em 3 pedaços tem pedaços maiores ou menores que um dividido em 5?', e: 'Mesmo numerador: quanto menor o denominador, maior a fração. 1/3 > 1/5.' },
        { l: 2, t: 'num', q: 'Complete: <b>2/5 = 6/?</b>', a: 15, h: 'O numerador foi multiplicado por 3.', e: '5 × 3 = 15 → 2/5 = 6/15.' },
        { l: 2, t: 'mc', q: 'Simplifique a fração <b>4/8</b>:', o: ['1/2', '2/8', '1/4', '4/2'], a: 0, h: 'Divida os dois por 4.', e: '4 ÷ 4 = 1 e 8 ÷ 4 = 2 → 1/2.' },
        { l: 2, t: 'mc', q: 'Qual fração <b>NÃO</b> é equivalente a <b>2/3</b>?', o: ['4/6', '6/9', '8/12', '3/4'], a: 3, e: '4/6, 6/9 e 8/12 vêm de 2/3 multiplicando por 2, 3 e 4. Já 3/4 é diferente (é maior).' },
        { l: 2, t: 'mc', q: 'Coloque em <b>ordem crescente</b>: 1/2, 1/4, 1/8', o: ['1/2, 1/4, 1/8', '1/8, 1/4, 1/2', '1/4, 1/8, 1/2'], a: 1, e: 'Mesmo numerador: maior denominador = fração menor. 1/8 < 1/4 < 1/2.' },
        { l: 2, t: 'txt', q: 'Simplifique <b>10/15</b> até não dar mais. (escreva como 1/2)', a: ['2/3'], h: 'Que número divide 10 e 15 ao mesmo tempo?', e: '10 ÷ 5 = 2 e 15 ÷ 5 = 3 → 2/3.' },
        { l: 2, t: 'mc', q: 'As duas barras mostram frações. Elas são…', v: V.fraction(3, 4) + V.fraction(6, 8), o: ['equivalentes', 'a primeira é maior', 'a segunda é maior'], a: 0, e: '3/4 e 6/8 pintam a mesma quantidade: são equivalentes (3/4 × 2/2 = 6/8).' },
        { l: 3, t: 'mc', q: 'Qual fração é <b>maior</b>: 2/3 ou 3/4?', o: ['2/3', '3/4', 'são iguais'], a: 1, h: 'Transforme as duas em doze avos.', e: '2/3 = 8/12 e 3/4 = 9/12. Então 3/4 é maior.' },
        { l: 3, t: 'num', q: 'Complete: <b>3/4 = ?/12</b>', a: 9, e: '4 × 3 = 12, então 3 × 3 = 9 → 9/12.' },
        { l: 3, t: 'mc', q: 'As frações <b>6/8</b> e <b>9/12</b> são:', o: ['equivalentes', '6/8 é maior', '9/12 é maior'], a: 0, h: 'Simplifique as duas.', e: '6/8 ÷ 2 = 3/4 e 9/12 ÷ 3 = 3/4. São equivalentes!' },
        { l: 3, t: 'num', q: 'Calcule <b>1/2 + 1/4</b>. O resultado é <b>?/4</b>.', a: 3, h: 'Transforme 1/2 em quartos: 1/2 = 2/4.', e: '2/4 + 1/4 = 3/4.' },
        { l: 3, t: 'mc', q: 'Qual fração está <b>entre 1/2 e 1</b>?', o: ['1/4', '3/4', '1/3', '5/4'], a: 1, e: '1/2 = 2/4 e 1 = 4/4. Entre elas fica 3/4.' }
      ]
    },
    {
      id: 'fracqtd', icon: '🎯', name: 'Fração de uma quantidade', intro: 'Ju, essa é uma das partes mais úteis: "2/3 dos alunos", "3/4 do preço"… O truque é DIVIDE e MULTIPLICA. Dois passinhos e pronto. Sabia que você ia entender rapidinho!', gen: 'frac',
      summary: `
<p>Para calcular a fração de um número, é <b>divide e multiplica</b>:</p>
<div class="box"><b>2/3 de 12</b> → <b>divida</b> 12 pelo denominador: 12 ÷ 3 = 4 → <b>multiplique</b> pelo numerador: 4 × 2 = <b>8</b></div>
<ul>
<li>1/2 de 20 = 20 ÷ 2 = 10 (metade)</li>
<li>1/4 de 12 = 12 ÷ 4 = 3 (um quarto)</li>
<li>3/4 de 20 = 20 ÷ 4 = 5 → 5 × 3 = 15</li>
<li><b>Caminho inverso:</b> se 1/5 de um número é 6, o número é 6 × 5 = 30.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Calcule <b>1/2 de 20</b>.', a: 10, e: '20 ÷ 2 = 10.' },
        { l: 1, t: 'num', q: 'Calcule <b>1/4 de 12</b>.', a: 3, e: '12 ÷ 4 = 3.' },
        { l: 1, t: 'num', q: 'Calcule <b>1/3 de 15</b>.', a: 5, e: '15 ÷ 3 = 5.' },
        { l: 2, t: 'num', q: 'Calcule <b>2/3 de 12</b>.', a: 8, h: 'Divida por 3 e multiplique por 2.', e: '12 ÷ 3 = 4; 4 × 2 = 8.' },
        { l: 2, t: 'num', q: 'Calcule <b>3/4 de 20</b>.', a: 15, e: '20 ÷ 4 = 5; 5 × 3 = 15.' },
        { l: 2, t: 'num', q: 'Calcule <b>2/5 de 30</b>.', a: 12, e: '30 ÷ 5 = 6; 6 × 2 = 12.' },
        { l: 2, t: 'num', q: 'Numa turma de <b>28 alunos</b>, <b>1/4</b> usa óculos. Quantos alunos usam óculos?', a: 7, e: '28 ÷ 4 = 7 alunos.' },
        { l: 2, t: 'num', q: 'Júlia já leu <b>3/5</b> de um livro de <b>100 páginas</b>. Quantas páginas ainda <b>faltam</b>?', a: 40, h: 'Primeiro descubra quantas ela leu. Depois tire de 100.', e: '100 ÷ 5 = 20; 20 × 3 = 60 páginas lidas. Faltam 100 − 60 = 40.' },
        { l: 3, t: 'num', q: 'Calcule <b>3/8 de 64</b>.', a: 24, e: '64 ÷ 8 = 8; 8 × 3 = 24.' },
        { l: 3, t: 'num', q: '<b>1/5</b> de um número é <b>6</b>. Qual é o número?', a: 30, h: 'Se um quinto é 6, o inteiro são cinco vezes isso.', e: '6 × 5 = 30.' },
        { l: 3, t: 'num', q: 'Quantos minutos são <b>2/3 de uma hora</b>?', a: 40, h: '1 hora = 60 minutos.', e: '60 ÷ 3 = 20; 20 × 2 = 40 minutos.' },
        { l: 3, t: 'num', q: 'Uma caixa tem <b>48 lápis</b>: <b>1/4</b> são azuis, <b>1/3</b> são vermelhos e o resto é verde. Quantos lápis são <b>verdes</b>?', a: 20, h: 'Calcule os azuis, os vermelhos e tire do total.', e: 'Azuis: 48 ÷ 4 = 12. Vermelhos: 48 ÷ 3 = 16. Verdes: 48 − 12 − 16 = 20.' },
        { l: 3, t: 'num', q: 'Um brinquedo custa <b>R$ 200</b> e está com desconto: Júlia vai pagar só <b>3/4</b> do preço. Quanto ela vai pagar?', a: 150, e: '200 ÷ 4 = 50; 50 × 3 = 150 reais.' }
      ]
    }
  ]
});
