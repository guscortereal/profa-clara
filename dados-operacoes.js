window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'operacoes', icon: '➕', name: 'Operações', color: '#2E86AB',
  desc: 'As quatro operações e as expressões numéricas.',
  points: [
    {
      id: 'addsub', icon: '➕➖', name: 'Adição e subtração', intro: 'Ju, somar e subtrair é como guardar e tirar figurinhas do álbum. O segredo é alinhar direitinho — unidade com unidade, dezena com dezena — e não ter medo do "vai um". Sabia que você ia pegar rapidinho!', gen: 'add',
      summary: `
<div class="box"><b>Adição:</b> parcela + parcela = <b>soma</b> (ou total). Ideias: juntar, acrescentar.<br>
<b>Subtração:</b> minuendo − subtraendo = <b>diferença</b> (ou resto). Ideias: tirar, completar, comparar.</div>
<ul>
<li><b>Arme a conta alinhando as ordens:</b> unidade embaixo de unidade, dezena embaixo de dezena…</li>
<li><b>"Vai um":</b> se a soma de uma ordem passa de 9, leve 1 para a ordem seguinte. (7 + 8 = 15 → escreve 5, vai 1)</li>
<li><b>"Pede emprestado":</b> se o de cima é menor que o de baixo, pegue 1 da ordem vizinha (vale 10).</li>
<li><b>Prova real:</b> a subtração se confere com uma adição: 845 − 362 = 483, então 483 + 362 = 845 ✔</li>
<li><b>Estimativa:</b> arredonde para ter uma ideia do resultado antes de calcular (4.987 + 3.012 ≈ 5.000 + 3.000 = 8.000).</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Calcule: <b>245 + 132</b>', a: 377, e: '245 + 132 = 377 (sem "vai um").' },
        { l: 1, t: 'num', q: 'Calcule: <b>580 − 230</b>', a: 350, e: '580 − 230 = 350.' },
        { l: 1, t: 'num', q: 'Calcule: <b>367 + 258</b>', a: 625, h: '7 + 8 = 15: escreve 5 e vai 1.', e: '367 + 258 = 625. Unidades: 7+8=15 (vai 1). Dezenas: 6+5+1=12 (vai 1). Centenas: 3+2+1=6.' },
        { l: 1, t: 'num', q: 'Calcule: <b>604 − 289</b>', a: 315, h: '4 é menor que 9: precisa pedir emprestado.', e: '604 − 289 = 315. Prova: 315 + 289 = 604 ✔' },
        { l: 2, t: 'num', q: 'Calcule: <b>1.250 + 3.875</b>', a: 5125, e: '1.250 + 3.875 = 5.125.' },
        { l: 2, t: 'num', q: 'Calcule: <b>5.000 − 1.234</b>', a: 3766, h: 'Vai precisar pedir emprestado várias vezes. Vá com calma!', e: '5.000 − 1.234 = 3.766. Prova: 3.766 + 1.234 = 5.000 ✔' },
        { l: 2, t: 'mc', q: 'Qual conta é a <b>prova real</b> de <b>845 − 362 = 483</b>?', o: ['483 + 362 = 845', '483 − 362 = 121', '845 + 362 = 1.207', '362 − 483'], a: 0, h: 'A prova da subtração é uma adição: resultado + o que foi tirado.', e: 'Diferença + subtraendo = minuendo: 483 + 362 = 845 ✔' },
        { l: 2, t: 'num', q: 'Calcule: <b>12.345 + 6.789</b>', a: 19134, e: '12.345 + 6.789 = 19.134.' },
        { l: 2, t: 'num', q: 'Calcule: <b>10.000 − 4.567</b>', a: 5433, e: '10.000 − 4.567 = 5.433. Dica: 4.567 + 5.433 = 10.000.' },
        { l: 2, t: 'num', q: 'Uma escola tem <b>1.348 alunos</b> de manhã e <b>976</b> à tarde. Quantos alunos ao todo?', a: 2324, e: '1.348 + 976 = 2.324 alunos.' },
        { l: 3, t: 'num', q: 'Calcule: <b>23.456 + 8.907 + 1.234</b>', a: 33597, h: 'Some dois primeiro, depois some o terceiro.', e: '23.456 + 8.907 = 32.363; 32.363 + 1.234 = 33.597.' },
        { l: 3, t: 'num', q: 'Calcule: <b>50.000 − 27.688</b>', a: 22312, e: '50.000 − 27.688 = 22.312.' },
        { l: 3, t: 'mc', q: 'Sem calcular exatamente, qual é a <b>melhor estimativa</b> para <b>4.987 + 3.012</b>?', o: ['7.000', '8.000', '9.000', '10.000'], a: 1, h: '4.987 está perto de 5.000 e 3.012 está perto de 3.000.', e: '5.000 + 3.000 = 8.000. (O valor exato é 7.999!)' },
        { l: 3, t: 'num', q: 'Descubra o número que falta: <b>? + 3.450 = 8.000</b>', a: 4550, h: 'Use a operação inversa: 8.000 − 3.450.', e: '8.000 − 3.450 = 4.550. Confira: 4.550 + 3.450 = 8.000 ✔' },
        { l: 3, t: 'num', q: 'Descubra o número que falta: <b>7.203 − ? = 4.876</b>', a: 2327, h: 'O que foi tirado = 7.203 − 4.876.', e: '7.203 − 4.876 = 2.327. Confira: 7.203 − 2.327 = 4.876 ✔' }
      ]
    },
    {
      id: 'mult', icon: '✖️', name: 'Multiplicação', intro: 'Minha estudiosa favorita, multiplicar é somar do jeito esperto: em vez de 8 + 8 + 8 + 8 + 8, a gente faz 8 × 5 e pronto! A tabuada é a sua varinha mágica aqui. Bora treinar?', gen: 'mul',
      summary: `
<div class="box"><b>fator × fator = produto</b>. Ideias: somar parcelas iguais (3 × 4 = 4 + 4 + 4), combinar, "vezes mais", proporção.</div>
<ul>
<li><b>Tabuada na ponta da língua</b> é a chave! Truques: ×9 → os algarismos do resultado somam 9 (9×7=63 → 6+3=9).</li>
<li><b>× 10, × 100, × 1.000:</b> só acrescente zeros: 25 × 100 = 2.500.</li>
<li><b>Decompor facilita:</b> 56 × 12 = 56 × 10 + 56 × 2 = 560 + 112 = 672. (Propriedade <b>distributiva</b>)</li>
<li><b>Ordem não importa:</b> 7 × 8 = 8 × 7 (<b>comutativa</b>).</li>
<li><b>Algoritmo:</b> multiplique pelas unidades, depois pelas dezenas (deixando um espaço/zero), e some.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Tabuada: <b>7 × 8</b>', a: 56, e: '7 × 8 = 56.' },
        { l: 1, t: 'num', q: 'Tabuada: <b>9 × 6</b>', a: 54, h: 'Truque do 9: 5 + 4 = 9.', e: '9 × 6 = 54.' },
        { l: 1, t: 'num', q: 'Calcule: <b>25 × 10</b>', a: 250, e: 'Multiplicar por 10 = acrescentar um zero: 250.' },
        { l: 1, t: 'num', q: 'Calcule: <b>43 × 100</b>', a: 4300, e: 'Multiplicar por 100 = acrescentar dois zeros: 4.300.' },
        { l: 2, t: 'num', q: 'Calcule: <b>124 × 3</b>', a: 372, e: '100×3 = 300, 20×3 = 60, 4×3 = 12 → 300 + 60 + 12 = 372.' },
        { l: 2, t: 'num', q: 'Calcule: <b>56 × 12</b>', a: 672, h: '56 × 10 + 56 × 2', e: '560 + 112 = 672.' },
        { l: 2, t: 'num', q: 'Calcule: <b>235 × 4</b>', a: 940, e: '200×4 = 800, 30×4 = 120, 5×4 = 20 → 940.' },
        { l: 2, t: 'mc', q: '<b>6 × (10 + 3)</b> dá o mesmo resultado que:', o: ['6 × 10 + 3', '6 × 10 + 6 × 3', '60 + 3 × 3', '6 + 13'], a: 1, h: 'O 6 multiplica cada parte que está dentro do parêntese.', e: '6 × 13 = 78 e 6 × 10 + 6 × 3 = 60 + 18 = 78. É a propriedade distributiva.' },
        { l: 2, t: 'num', q: 'Calcule: <b>48 × 25</b>', a: 1200, h: '48 × 25 = 48 × 100 ÷ 4, ou 40×25 + 8×25.', e: '40 × 25 = 1.000 e 8 × 25 = 200 → 1.200.' },
        { l: 2, t: 'num', q: 'Um pacote tem <b>36 figurinhas</b>. Quantas figurinhas há em <b>15 pacotes</b>?', a: 540, e: '36 × 15 = 36 × 10 + 36 × 5 = 360 + 180 = 540.' },
        { l: 3, t: 'num', q: 'Calcule: <b>327 × 46</b>', a: 15042, h: '327 × 40 = 13.080 e 327 × 6 = 1.962.', e: '13.080 + 1.962 = 15.042.' },
        { l: 3, t: 'num', q: 'Calcule: <b>1.250 × 8</b>', a: 10000, e: '1.000×8 = 8.000, 250×8 = 2.000 → 10.000.' },
        { l: 3, t: 'num', q: 'Calcule: <b>409 × 37</b>', a: 15133, h: 'Cuidado com o zero no meio do 409!', e: '409 × 30 = 12.270 e 409 × 7 = 2.863 → 15.133.' },
        { l: 3, t: 'num', q: 'Se <b>15 × 24 = 360</b>, então <b>15 × 48</b> é igual a:', a: 720, h: '48 é o dobro de 24. O resultado também dobra.', e: '15 × 48 = 2 × (15 × 24) = 2 × 360 = 720.' },
        { l: 3, t: 'num', q: 'Calcule: <b>999 × 9</b>', a: 8991, h: '999 = 1.000 − 1. Então 9.000 − 9.', e: '1.000 × 9 = 9.000; tire 1 × 9 = 9 → 8.991.' }
      ]
    },
    {
      id: 'div', icon: '➗', name: 'Divisão', intro: 'Ju, dividir é repartir com justiça: 36 balas para 4 amigas, cada uma leva 9 e ninguém briga! E quando sobra, a gente chama de resto. Calma que essa parte confunde todo mundo no começo — mas você vai dominar.', gen: 'div',
      summary: `
<div class="box"><b>dividendo ÷ divisor = quociente</b>, e pode sobrar <b>resto</b>.<br>
Regra de ouro: <b>Dividendo = divisor × quociente + resto</b>, e o <b>resto é sempre menor que o divisor</b>.<br>
Ex.: 29 ÷ 6 → quociente 4, resto 5 (6 × 4 + 5 = 29).</div>
<ul>
<li>Ideias: <b>repartir igualmente</b> (36 balas para 4 crianças) e <b>medir/quantos cabem</b> (quantos grupos de 4 há em 36).</li>
<li>Divisão é a operação <b>inversa</b> da multiplicação: 56 ÷ 7 = 8 porque 7 × 8 = 56.</li>
<li><b>÷ 10, ÷ 100:</b> tire zeros: 4.500 ÷ 100 = 45.</li>
<li><b>Algoritmo (chave):</b> comece pela maior ordem, veja quantas vezes o divisor cabe, multiplique, subtraia, abaixe o próximo algarismo.</li>
<li>Divisão <b>exata</b>: resto 0. Divisão <b>não exata</b>: sobra resto.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Calcule: <b>56 ÷ 7</b>', a: 8, e: '7 × 8 = 56, então 56 ÷ 7 = 8.' },
        { l: 1, t: 'num', q: 'Calcule: <b>81 ÷ 9</b>', a: 9, e: '9 × 9 = 81.' },
        { l: 1, t: 'num', q: 'Calcule: <b>4.500 ÷ 100</b>', a: 45, e: 'Dividir por 100 = tirar dois zeros: 45.' },
        { l: 1, t: 'num', q: 'Qual é o <b>resto</b> de <b>17 ÷ 5</b>?', a: 2, h: '5 × 3 = 15. Quanto falta para 17?', e: '17 = 5 × 3 + 2. Quociente 3, resto 2.' },
        { l: 2, t: 'num', q: 'Calcule: <b>144 ÷ 12</b>', a: 12, e: '12 × 12 = 144.' },
        { l: 2, t: 'num', q: 'Calcule: <b>375 ÷ 5</b>', a: 75, e: '35 ÷ 5 = 7 (centenas e dezenas), 25 ÷ 5 = 5 → 75. Confira: 5 × 75 = 375.' },
        { l: 2, t: 'num', q: 'Calcule: <b>852 ÷ 4</b>', a: 213, e: '8 ÷ 4 = 2; 5 ÷ 4 = 1 (sobra 1); 12 ÷ 4 = 3 → 213.' },
        { l: 2, t: 'mc', q: 'Na divisão <b>29 ÷ 6</b>, o quociente e o resto são:', o: ['quociente 4 e resto 5', 'quociente 5 e resto 1', 'quociente 4 e resto 1', 'quociente 5 e resto 0'], a: 0, h: '6 × 4 = 24 e 6 × 5 = 30 (passa de 29!).', e: '6 × 4 = 24; 29 − 24 = 5. O resto (5) é menor que o divisor (6) ✔' },
        { l: 2, t: 'num', q: 'Calcule: <b>1.000 ÷ 8</b>', a: 125, e: '8 × 125 = 1.000.' },
        { l: 2, t: 'num', q: '<b>96 lápis</b> serão guardados em caixas com <b>8 lápis</b> cada. Quantas caixas serão usadas?', a: 12, e: '96 ÷ 8 = 12 caixas.' },
        { l: 3, t: 'num', q: 'Calcule: <b>1.536 ÷ 12</b>', a: 128, e: '12 × 128 = 1.536. (15 ÷ 12 = 1, sobra 3; 33 ÷ 12 = 2, sobra 9; 96 ÷ 12 = 8)' },
        { l: 3, t: 'num', q: 'Calcule: <b>2.964 ÷ 13</b>', a: 228, e: '13 × 228 = 2.964.' },
        { l: 3, t: 'num', q: 'Calcule: <b>4.725 ÷ 25</b>', a: 189, h: '25 × 4 = 100. Quantos 25 cabem em 4.725?', e: '25 × 189 = 4.725.' },
        { l: 3, t: 'num', q: 'Numa divisão, o dividendo é <b>100</b>, o divisor é <b>7</b> e o quociente é <b>14</b>. Qual é o <b>resto</b>?', a: 2, h: 'Dividendo = divisor × quociente + resto.', e: '7 × 14 = 98. 100 − 98 = 2. Resto 2.' },
        { l: 3, t: 'num', q: 'Calcule: <b>3.000 ÷ 24</b>', a: 125, e: '24 × 125 = 3.000.' }
      ]
    },
    {
      id: 'expr', icon: '🧮', name: 'Expressões numéricas', intro: 'Ju, esse assunto é INCRÍVEL! Expressão numérica é como uma receita: se você misturar os ingredientes na ordem errada, o bolo desanda. Parênteses primeiro, depois × e ÷, depois + e −. Segue a receita que dá certo!', gen: 'expr',
      summary: `
<p>Uma <b>expressão numérica</b> tem várias operações juntas. Para todo mundo chegar ao mesmo resultado, existe uma <b>ordem</b>:</p>
<div class="box">
<b>1º</b> O que está dentro dos <b>( ) parênteses</b>, depois <b>[ ] colchetes</b>, depois <b>{ } chaves</b>.<br>
<b>2º</b> Dentro de cada um: primeiro <b>× e ÷</b> (na ordem em que aparecem)…<br>
<b>3º</b> …depois <b>+ e −</b> (na ordem em que aparecem, da esquerda para a direita).
</div>
<p><b>Exemplo passo a passo:</b> 50 − 2 × (7 + 3)<br>
→ parêntese: 7 + 3 = 10 → 50 − 2 × 10<br>
→ multiplicação: 2 × 10 = 20 → 50 − 20<br>
→ subtração: <b>30</b></p>
<p>Dica da Clara: <b>reescreva a expressão a cada passo</b>, resolvendo uma coisa por vez. Nada de pular etapas!</p>`,
      ex: [
        { l: 1, t: 'num', q: 'Resolva: <b>10 − 3 + 5</b>', a: 12, h: 'Só + e −: resolva da esquerda para a direita.', e: '10 − 3 = 7; 7 + 5 = 12.' },
        { l: 1, t: 'num', q: 'Resolva: <b>4 + 2 × 5</b>', a: 14, h: 'Multiplicação vem antes da adição!', e: '2 × 5 = 10; 4 + 10 = 14. (Não é 30!)' },
        { l: 1, t: 'num', q: 'Resolva: <b>(4 + 2) × 5</b>', a: 30, h: 'Agora o parêntese manda: primeiro 4 + 2.', e: '(4 + 2) = 6; 6 × 5 = 30. Veja como o parêntese mudou tudo!' },
        { l: 1, t: 'num', q: 'Resolva: <b>20 ÷ 4 + 3</b>', a: 8, e: '20 ÷ 4 = 5; 5 + 3 = 8.' },
        { l: 2, t: 'num', q: 'Resolva: <b>15 + (8 + 2)</b>', a: 25, e: '(8 + 2) = 10; 15 + 10 = 25.' },
        { l: 2, t: 'num', q: 'Resolva: <b>30 − (12 − 4)</b>', a: 22, e: '(12 − 4) = 8; 30 − 8 = 22.' },
        { l: 2, t: 'num', q: 'Resolva: <b>3 × 4 + 6 ÷ 2</b>', a: 15, h: 'Faça a multiplicação E a divisão antes de somar.', e: '3 × 4 = 12; 6 ÷ 2 = 3; 12 + 3 = 15.' },
        { l: 2, t: 'num', q: 'Resolva: <b>50 − 2 × (7 + 3)</b>', a: 30, e: '(7 + 3) = 10; 2 × 10 = 20; 50 − 20 = 30.' },
        { l: 2, t: 'mc', q: 'Adriana tinha <b>R$ 50</b> e comprou <b>2 calças de R$ 18 cada</b>. Qual expressão mostra quanto sobrou?', o: ['50 − 18 × 2', '50 − 18 + 2', '(50 − 18) × 2', '50 + 18 × 2'], a: 0, h: 'Primeiro descubra quanto ela gastou (2 calças), depois tire dos 50.', e: 'Gastou 18 × 2 = 36. Sobrou 50 − 36 = 14. A expressão é 50 − 18 × 2.' },
        { l: 2, t: 'num', q: 'Resolva: <b>100 ÷ (5 × 4)</b>', a: 5, e: '(5 × 4) = 20; 100 ÷ 20 = 5.' },
        { l: 3, t: 'num', q: 'Resolva: <b>[20 + (15 − 5)] ÷ 6</b>', a: 5, h: 'Parêntese primeiro, depois o colchete, depois a divisão.', e: '(15 − 5) = 10; [20 + 10] = 30; 30 ÷ 6 = 5.' },
        { l: 3, t: 'num', q: 'Resolva: <b>2 × [10 + (12 ÷ 4)]</b>', a: 26, e: '(12 ÷ 4) = 3; [10 + 3] = 13; 2 × 13 = 26.' },
        { l: 3, t: 'num', q: 'Resolva: <b>45 − [3 × (2 + 4) − 8]</b>', a: 35, e: '(2 + 4) = 6; 3 × 6 = 18; [18 − 8] = 10; 45 − 10 = 35.' },
        { l: 3, t: 'num', q: 'Resolva: <b>{40 − [2 × (3 + 4)]} ÷ 2</b>', a: 13, h: 'Parêntese → colchete → chave → divisão.', e: '(3 + 4) = 7; [2 × 7] = 14; {40 − 14} = 26; 26 ÷ 2 = 13.' },
        { l: 3, t: 'num', q: 'Resolva: <b>8 × 5 − 30 ÷ 6 + 4</b>', a: 39, e: '8 × 5 = 40; 30 ÷ 6 = 5; 40 − 5 + 4 = 39.' }
      ]
    }
  ]
});
