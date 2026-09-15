window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'dados', icon: '📊', name: 'Dados e Chance', color: '#F4D35E', dark: true,
  desc: 'Tabelas, gráficos e probabilidade.',
  points: [
    {
      id: 'graficos', icon: '📊', name: 'Tabelas e gráficos', intro: 'Minha querida, gráficos e tabelas contam histórias com números: qual fruta a turma mais gosta, como a temperatura mudou na semana… O segredo é ler o título, os eixos e a legenda antes de responder. Você vai brilhar aqui!',
      summary: `
<p><b>Tratamento da informação</b> é organizar dados para entender melhor. Sempre olhe o <b>título</b>, os <b>nomes dos eixos</b> e a <b>legenda</b>!</p>
<div class="box">
<b>Tabela:</b> linhas e colunas; boa para consultar valores exatos.<br>
<b>Gráfico de barras/colunas:</b> compara quantidades (qual é o maior? qual é o menor?).<br>
<b>Gráfico de linha:</b> mostra como algo <b>muda com o tempo</b> (temperatura, altura de uma planta, vendas por mês).<br>
<b>Gráfico de setores (pizza):</b> mostra <b>partes de um todo</b> (metade, um quarto, porcentagem).
</div>
<ul>
<li>Para ler uma barra, siga até o eixo e veja o valor. Atenção à <b>escala</b> (cada risquinho pode valer 2, 5, 10…).</li>
<li>Para <b>construir</b> um gráfico: título, eixos com nome, escala regular, barras da mesma largura.</li>
<li>No gráfico de setores, 1/2 do círculo = metade dos dados; 1/4 = um quarto.</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'O gráfico mostra a fruta preferida dos alunos do 5º ano. Qual fruta foi a <b>mais votada</b>?', v: V.bars(['maçã', 'banana', 'uva', 'manga'], [8, 12, 5, 7], { title: 'Fruta preferida', showValues: true }), o: ['maçã', 'banana', 'uva', 'manga'], a: 1, e: 'A barra mais alta é a da banana (12 votos).' },
        { l: 1, t: 'num', q: 'No mesmo gráfico, quantos alunos votaram em <b>uva</b>?', v: V.bars(['maçã', 'banana', 'uva', 'manga'], [8, 12, 5, 7], { title: 'Fruta preferida', showValues: true }), a: 5, e: 'A barra da uva chega até o 5.' },
        { l: 1, t: 'num', q: 'A tabela mostra os gols de cada time. Quantos gols o time <b>C</b> marcou?', v: V.table(['Time', 'Gols'], [['A', 7], ['B', 12], ['C', 9], ['D', 12]]), a: 9, e: 'Na linha do time C, a coluna Gols mostra 9.' },
        { l: 2, t: 'num', q: 'No gráfico das frutas, quantos alunos votaram <b>ao todo</b>?', v: V.bars(['maçã', 'banana', 'uva', 'manga'], [8, 12, 5, 7], { title: 'Fruta preferida', showValues: true }), a: 32, e: '8 + 12 + 5 + 7 = 32 alunos.' },
        { l: 2, t: 'num', q: 'Quantos votos a banana teve <b>a mais</b> que a uva?', v: V.bars(['maçã', 'banana', 'uva', 'manga'], [8, 12, 5, 7], { title: 'Fruta preferida', showValues: true }), a: 7, e: '12 − 5 = 7 votos.' },
        { l: 2, t: 'mc', q: 'O gráfico mostra a altura de uma planta a cada semana. Entre quais semanas ela <b>cresceu mais</b>?', v: V.line(['sem 1', 'sem 2', 'sem 3', 'sem 4'], [2, 5, 6, 10], { title: 'Altura da planta (cm)', max: 12, step: 2 }), o: ['da 1ª para a 2ª', 'da 2ª para a 3ª', 'da 3ª para a 4ª'], a: 2, h: 'Veja onde a linha sobe mais.', e: 'Da 3ª para a 4ª semana: de 6 cm para 10 cm (cresceu 4 cm).' },
        { l: 2, t: 'mc', q: 'Qual tipo de gráfico é <b>melhor</b> para mostrar a temperatura de uma cidade ao longo de uma semana?', o: ['setores (pizza)', 'linha', 'barras', 'nenhum'], a: 1, e: 'O gráfico de linha mostra mudanças ao longo do tempo.' },
        { l: 2, t: 'num', q: 'A tabela mostra as vendas de uma lanchonete. Qual foi o total vendido nos três dias?', v: V.table(['Dia', 'Lanches vendidos'], [['segunda', 120], ['terça', 95], ['quarta', 140]]), a: 355, e: '120 + 95 + 140 = 355 lanches.' },
        { l: 3, t: 'mc', q: 'O gráfico de setores mostra a cor preferida da turma. Qual cor foi escolhida por <b>metade</b> da turma?', v: V.pie(['azul', 'verde', 'vermelho'], [50, 25, 25], { showPct: true, colors: ['#54A0FF', '#1DD1A1', '#FF6B6B'] }), o: ['azul', 'verde', 'vermelho'], a: 0, e: 'O setor azul ocupa metade do círculo (50%).' },
        { l: 3, t: 'num', q: 'A turma tem <b>32 alunos</b>. Pelo gráfico, quantos alunos preferem <b>verde</b>?', v: V.pie(['azul', 'verde', 'vermelho'], [50, 25, 25], { showPct: true, colors: ['#54A0FF', '#1DD1A1', '#FF6B6B'] }), a: 8, h: 'Verde é 1/4 do círculo.', e: '25% = 1/4. 32 ÷ 4 = 8 alunos.' },
        { l: 3, t: 'mc', q: 'O gráfico mostra a temperatura máxima de cada dia. Entre quais dias a temperatura <b>caiu</b>?', v: V.line(['seg', 'ter', 'qua', 'qui', 'sex'], [28, 30, 25, 27, 31], { title: 'Temperatura (°C)', max: 35, step: 5 }), o: ['de seg para ter', 'de ter para qua', 'de qua para qui', 'de qui para sex'], a: 1, e: 'De terça (30°) para quarta (25°) a linha desce.' },
        { l: 3, t: 'num', q: 'Neste gráfico, cada linha da escala vale 5. Quantos livros a turma <b>B</b> leu?', v: V.bars(['A', 'B', 'C'], [10, 15, 25], { title: 'Livros lidos por turma', max: 30, step: 5 }), a: 15, h: 'A barra de B fica entre 10 e 20, bem no meio.', e: 'A barra da turma B chega ao 15.' },
        { l: 3, t: 'mc', q: 'Na tabela de gols, quais times estão <b>empatados</b>?', v: V.table(['Time', 'Gols'], [['A', 7], ['B', 12], ['C', 9], ['D', 12]]), o: ['A e C', 'B e D', 'A e B', 'C e D'], a: 1, e: 'B e D marcaram 12 gols cada.' },
        { l: 3, t: 'num', q: 'Júlia vai construir um gráfico de barras com os dados: 4, 8, 12, 20. Se cada risquinho da escala valer <b>4</b>, quantos risquinhos a barra do <b>20</b> vai ocupar?', a: 5, e: '20 ÷ 4 = 5 risquinhos.' }
      ]
    },
    {
      id: 'prob', icon: '🎲', name: 'Probabilidade', intro: 'Ju, jogar um dado e torcer pra sair 6… qual é a chance? 1 em 6! Probabilidade é a matemática da sorte — e depois desse ponto você vai saber quando um jogo é justo ou não. Bora apostar (só nas contas)?',
      summary: `
<p><b>Probabilidade</b> é a <b>chance</b> de algo acontecer.</p>
<div class="box">
<b>Impossível</b> (nunca acontece: tirar 7 num dado) → <b>pouco provável</b> → <b>provável</b> → <b>muito provável</b> → <b>certo</b> (sempre acontece: o sol nascer amanhã)
</div>
<ul>
<li><b>Espaço amostral</b> = todos os resultados possíveis. Moeda: cara ou coroa (2). Dado: 1, 2, 3, 4, 5, 6 (6).</li>
<li><b>Probabilidade como fração:</b> <b>casos que eu quero ÷ total de casos</b>. Sair 4 no dado = 1/6. Sair número par = 3/6 (2, 4, 6).</li>
<li>Se todos os resultados têm a <b>mesma chance</b>, o jogo é justo. Num saco com 5 vermelhas e 1 azul, é mais provável tirar vermelha.</li>
<li>Duas moedas: os resultados são cara-cara, cara-coroa, coroa-cara, coroa-coroa (4 possibilidades).</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Ao jogar um dado comum, sair o número <b>7</b> é:', o: ['certo', 'impossível', 'provável', 'pouco provável'], a: 1, e: 'O dado só tem de 1 a 6. Sair 7 é impossível.' },
        { l: 1, t: 'mc', q: 'Ao jogar uma moeda, qual é a chance de sair <b>cara</b>?', o: ['1/2', '1/4', '1', '0'], a: 0, e: '1 caso (cara) em 2 possíveis: 1/2.' },
        { l: 1, t: 'mc', q: 'Um saco tem <b>5 bolas vermelhas</b> e <b>1 azul</b>. Sem olhar, é mais provável tirar:', o: ['vermelha', 'azul', 'as duas têm a mesma chance'], a: 0, e: 'Há muito mais vermelhas (5 contra 1).' },
        { l: 1, t: 'mc', q: 'O evento "<b>amanhã o sol vai nascer</b>" é:', o: ['impossível', 'pouco provável', 'certo'], a: 2, e: 'Acontece todos os dias: é certo.' },
        { l: 2, t: 'mc', q: 'Ao jogar um dado, qual é a probabilidade de sair o <b>4</b>?', o: ['1/6', '4/6', '1/4', '1/2'], a: 0, e: '1 caso favorável em 6 possíveis: 1/6.' },
        { l: 2, t: 'mc', q: 'Ao jogar um dado, qual é a probabilidade de sair um número <b>par</b>?', o: ['1/6', '3/6', '2/6', '6/6'], a: 1, h: 'Quais números do dado são pares?', e: 'Pares: 2, 4, 6 → 3 casos em 6: 3/6 (= 1/2).' },
        { l: 2, t: 'mc', q: 'Um saco tem <b>3 bolas verdes, 2 amarelas e 5 azuis</b>. Qual é a probabilidade de tirar uma <b>amarela</b>?', o: ['2/10', '5/10', '3/10', '2/5'], a: 0, e: 'Total: 3 + 2 + 5 = 10 bolas. Amarelas: 2 → 2/10.' },
        { l: 2, t: 'mc', q: 'Uma roleta tem <b>4 partes iguais</b>: vermelho, azul, verde e amarelo. Qual é a chance de parar no <b>azul</b>?', v: V.pie(['vermelho', 'azul', 'verde', 'amarelo'], [1, 1, 1, 1], { colors: ['#FF6B6B', '#54A0FF', '#1DD1A1', '#FFD93D'] }), o: ['1/4', '1/2', '4/4', '1/3'], a: 0, e: '1 parte azul em 4: 1/4.' },
        { l: 2, t: 'mc', q: 'Quais são <b>todos</b> os resultados possíveis ao lançar uma moeda?', o: ['cara ou coroa', 'só cara', '1, 2, 3, 4, 5 ou 6', 'cara, coroa ou em pé'], a: 0, e: 'O espaço amostral da moeda é {cara, coroa}.' },
        { l: 3, t: 'mc', q: 'Cartas numeradas de <b>1 a 10</b> estão viradas para baixo. Qual é a probabilidade de tirar um número <b>maior que 7</b>?', o: ['3/10', '7/10', '1/10', '8/10'], a: 0, h: 'Quais números são maiores que 7?', e: '8, 9 e 10 → 3 casos em 10: 3/10.' },
        { l: 3, t: 'mc', q: 'Ao jogar um dado, qual é a probabilidade de sair um número <b>menor que 3</b>?', o: ['3/6', '2/6', '1/6', '4/6'], a: 1, e: 'Menores que 3: 1 e 2 → 2/6.' },
        { l: 3, t: 'mc', q: 'Um saco tem <b>4 bolas vermelhas e 4 azuis</b>. A chance de tirar uma vermelha é:', o: ['1/2', '1/4', '4/4', '1/8'], a: 0, e: '4 vermelhas em 8 bolas = 4/8 = 1/2. É um jogo justo!' },
        { l: 3, t: 'num', q: 'Ao lançar <b>duas moedas</b> ao mesmo tempo, quantos resultados diferentes são possíveis?', a: 4, h: 'Liste: cara-cara, cara-coroa…', e: 'cara-cara, cara-coroa, coroa-cara, coroa-coroa → 4 resultados.' },
        { l: 3, t: 'mc', q: 'Num saco há <b>2 bolas brancas e 6 pretas</b>. Qual frase é verdadeira?', o: ['É impossível tirar branca', 'É mais provável tirar preta', 'Branca e preta têm a mesma chance', 'É certo tirar preta'], a: 1, e: 'Há brancas (não é impossível) e há muito mais pretas (6 de 8): é mais provável tirar preta, mas não é certo.' }
      ]
    }
  ]
});
