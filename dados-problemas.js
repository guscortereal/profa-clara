window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'problemas', icon: '🧩', name: 'Problemas', color: '#F18F01',
  desc: 'Situações-problema, lógica e desafios de olimpíada.',
  points: [
    {
      id: 'situacoes', icon: '📝', name: 'Situações-problema', intro: 'Minha querida, aqui você vira detetive: cada problema esconde pistas (os números) e uma pergunta. Lê com calma, descobre a operação e resolve. Anota o "como pensei" — sua professora adora ver isso!', gen: 'prob',
      summary: `
<p>Resolver um problema é como ser detetive! Siga os <b>6 passos da Clara</b>:</p>
<div class="box">
<ol>
<li><b>Leia duas vezes</b> (a segunda bem devagar).</li>
<li><b>O que o problema pede?</b> Sublinhe a pergunta.</li>
<li><b>Quais são os dados?</b> Circule os números importantes.</li>
<li><b>Qual operação?</b> Palavras-chave: <i>juntar, ganhar, ao todo</i> → <b>+</b> · <i>tirar, perder, sobrar, diferença, quanto falta</i> → <b>−</b> · <i>vezes, cada, dobro, triplo</i> → <b>×</b> · <i>repartir, dividir, metade, cabem</i> → <b>÷</b></li>
<li><b>Calcule</b> com capricho (às vezes são 2 contas!).</li>
<li><b>Confira:</b> a resposta faz sentido? Escreva a resposta completa com unidade (reais, alunos, km…).</li>
</ol></div>
<p>Registre o <b>"Como pensei"</b>: desenhe, faça um esquema ou escreva a conta. Isso vale ouro na prova!</p>`,
      ex: [
        { l: 1, t: 'num', q: 'Júlia tinha <b>35 figurinhas</b> e ganhou mais <b>18</b>. Com quantas figurinhas ela ficou?', a: 53, h: 'Ganhou = juntar.', e: '35 + 18 = 53 figurinhas.' },
        { l: 1, t: 'num', q: 'Um ônibus tinha <b>42 passageiros</b>. Em um ponto, <b>17</b> desceram. Quantos ficaram?', a: 25, h: 'Desceram = tirar.', e: '42 − 17 = 25 passageiros.' },
        { l: 1, t: 'num', q: 'Cada caixa tem <b>6 ovos</b>. Quantos ovos há em <b>8 caixas</b>?', a: 48, h: '"Cada" = multiplicar.', e: '6 × 8 = 48 ovos.' },
        { l: 1, t: 'num', q: '<b>36 balas</b> serão repartidas igualmente entre <b>4 crianças</b>. Quantas balas cada uma recebe?', a: 9, h: 'Repartir igualmente = dividir.', e: '36 ÷ 4 = 9 balas.' },
        { l: 2, t: 'num', q: 'Uma escola tem <b>5 turmas</b> de 5º ano com <b>28 alunos</b> em cada uma. Quantos alunos de 5º ano há na escola?', a: 140, e: '5 × 28 = 140 alunos.' },
        { l: 2, t: 'num', q: 'Pedro tem <b>R$ 120</b> e quer comprar um jogo que custa <b>R$ 185</b>. Quanto ainda falta?', a: 65, h: '"Quanto falta" = subtrair.', e: '185 − 120 = 65 reais.' },
        { l: 2, t: 'num', q: 'Um livro tem <b>240 páginas</b>. Júlia lê <b>30 páginas por dia</b>. Em quantos dias ela termina o livro?', a: 8, h: 'Quantos grupos de 30 cabem em 240?', e: '240 ÷ 30 = 8 dias.' },
        { l: 2, t: 'num', q: 'Ana comprou <b>3 cadernos</b> de <b>R$ 12</b> cada e pagou com uma nota de <b>R$ 50</b>. Quanto recebeu de troco?', a: 14, h: 'São duas contas: quanto gastou e depois o troco.', e: '3 × 12 = 36. Troco: 50 − 36 = 14 reais.' },
        { l: 2, t: 'num', q: 'Uma sala tem <b>6 fileiras</b> com <b>7 carteiras</b> cada. Hoje <b>5 carteiras</b> ficaram vazias. Quantos alunos estão sentados?', a: 37, e: '6 × 7 = 42 carteiras. 42 − 5 = 37 alunos.' },
        { l: 2, t: 'num', q: 'Um elevador suporta <b>480 kg</b>. Já entraram pessoas que somam <b>335 kg</b>. Quantos kg ainda cabem?', a: 145, e: '480 − 335 = 145 kg.' },
        { l: 3, t: 'num', q: 'Na feira, Júlia comprou <b>4 kg de maçã</b> a <b>R$ 8 o quilo</b> e <b>2 kg de uva</b> a <b>R$ 15 o quilo</b>. Quanto gastou ao todo?', a: 62, h: 'Calcule cada fruta separadamente e some.', e: 'Maçã: 4 × 8 = 32. Uva: 2 × 15 = 30. Total: 32 + 30 = 62 reais.' },
        { l: 3, t: 'num', q: 'Um cinema tem <b>12 fileiras</b> com <b>15 poltronas</b> cada. Numa sessão havia <b>148 pessoas</b>. Quantas poltronas ficaram vazias?', a: 32, e: '12 × 15 = 180 poltronas. 180 − 148 = 32 vazias.' },
        { l: 3, t: 'num', q: 'Uma fábrica produz <b>250 brinquedos por dia</b>. Os brinquedos de <b>5 dias</b> serão embalados em caixas com <b>25 brinquedos</b> cada. Quantas caixas serão necessárias?', a: 50, h: 'Primeiro o total de brinquedos, depois divida.', e: '250 × 5 = 1.250 brinquedos. 1.250 ÷ 25 = 50 caixas.' },
        { l: 3, t: 'num', q: '<b>384 alunos</b> vão a uma excursão em ônibus com <b>45 lugares</b>. Quantos ônibus são necessários para levar todos?', a: 9, h: '384 ÷ 45 não é exato. E os que sobram? Precisam de ônibus também!', e: '384 ÷ 45 = 8 e sobram 24 alunos. Então são necessários 9 ônibus.' },
        { l: 3, t: 'num', q: 'Lucas tem o <b>dobro</b> da idade de Ana. Juntos eles têm <b>27 anos</b>. Quantos anos tem Lucas?', a: 18, h: 'Ana = 1 parte, Lucas = 2 partes. São 3 partes iguais no total.', e: '27 ÷ 3 = 9 (idade de Ana). Lucas: 9 × 2 = 18 anos.' },
        { l: 3, t: 'num', q: 'Uma torneira enche <b>15 litros em 3 minutos</b>. Quantos litros ela enche em <b>12 minutos</b>?', a: 60, h: 'Descubra quantos litros por minuto.', e: '15 ÷ 3 = 5 litros por minuto. 5 × 12 = 60 litros.' }
      ]
    },
    {
      id: 'logica', icon: '🧠', name: 'Problemas de lógica', intro: 'Ju, problemas de lógica são tipo quebra-cabeça: não precisa de conta difícil, precisa de organização e paciência. Desenha, faz tabelinha, testa. Errar aqui é normal — é o cérebro fazendo musculação! 🧠',
      summary: `
<p>Problemas de lógica não dependem de contas difíceis: dependem de <b>pensar com organização</b>.</p>
<div class="box"><b>Ferramentas da detetive:</b>
<ul>
<li><b>Sequências:</b> descubra a regra (soma sempre 3? dobra? repete um padrão?).</li>
<li><b>"Quem é quem":</b> faça uma <b>tabela</b> e vá riscando o que é impossível.</li>
<li><b>Balanças/trocas:</b> substitua um objeto pelo seu valor.</li>
<li><b>Desenhe!</b> Filas, dias da semana, palitos… um desenho resolve metade.</li>
<li><b>Teste as alternativas:</b> quando o problema tem opções, experimente cada uma.</li>
<li><b>Padrões que se repetem:</b> divida pela quantidade de figuras do padrão e olhe o resto.</li>
</ul></div>`,
      ex: [
        { l: 1, t: 'mc', q: 'Qual é o próximo número da sequência? <b>2, 4, 6, 8, ?</b>', o: ['9', '10', '12', '16'], a: 1, h: 'De quanto em quanto ela cresce?', e: 'A sequência soma 2 a cada passo: 8 + 2 = 10.' },
        { l: 1, t: 'mc', q: 'Qual é o próximo número? <b>1, 4, 7, 10, ?</b>', o: ['11', '12', '13', '14'], a: 2, e: 'Soma 3 a cada passo: 10 + 3 = 13.' },
        { l: 1, t: 'num', q: 'Em uma fila, Júlia é a <b>5ª</b> contando da frente e a <b>3ª</b> contando de trás. Quantas pessoas há na fila?', a: 7, h: 'Desenhe a fila! Cuidado para não contar a Júlia duas vezes.', e: '4 pessoas na frente + Júlia + 2 pessoas atrás = 7.' },
        { l: 2, t: 'mc', q: 'Ana, Bia e Carla têm, cada uma, um animal: <b>gato, cão ou peixe</b>. Ana <b>não</b> tem gato nem cão. Bia <b>não</b> tem cão. Quem tem o cão?', o: ['Ana', 'Bia', 'Carla'], a: 2, h: 'Se Ana não tem gato nem cão, ela tem o…', e: 'Ana tem o peixe. Bia não tem cão, então tem o gato. Sobrou o cão para Carla.' },
        { l: 2, t: 'num', q: 'Qual é o próximo número? <b>1, 1, 2, 3, 5, 8, ?</b>', a: 13, h: 'Some os dois últimos.', e: 'Cada número é a soma dos dois anteriores: 5 + 8 = 13. (É a sequência de Fibonacci!)' },
        { l: 2, t: 'num', q: 'Numa balança, <b>1 maçã</b> pesa o mesmo que <b>2 morangos</b>, e <b>1 pera</b> pesa o mesmo que <b>3 morangos</b>. Quantos morangos equilibram <b>2 maçãs e 1 pera</b>?', a: 7, h: 'Troque cada fruta por morangos.', e: '2 maçãs = 4 morangos; 1 pera = 3 morangos; 4 + 3 = 7 morangos.' },
        { l: 2, t: 'mc', q: '<i>(OBMEP Mirim)</i> Num restaurante há bancos com <b>3 pés</b> e bancos com <b>4 pés</b>. São <b>6 bancos</b> e <b>21 pés</b> ao todo. Quantos bancos de cada tipo há?', o: ['2 de três pés e 4 de quatro pés', '3 de três pés e 3 de quatro pés', '4 de três pés e 2 de quatro pés', '5 de três pés e 1 de quatro pés'], a: 1, h: 'Teste cada alternativa: multiplique e some os pés.', e: '3 × 3 + 3 × 4 = 9 + 12 = 21 pés ✔ (as outras dão 22, 20 e 19).' },
        { l: 2, t: 'num', q: '<i>(OBMEP Mirim)</i> Ana tem <b>80</b> figurinhas, Bruna tem <b>30</b> e Camila tem <b>40</b>. As figurinhas de Ana e Bruna juntas são iguais às de Camila e Daniele juntas. Quantas figurinhas tem Daniele?', a: 70, h: 'Ana + Bruna = Camila + Daniele.', e: '80 + 30 = 110. Então 40 + Daniele = 110 → Daniele = 70.' },
        { l: 3, t: 'mc', q: 'Hoje é <b>terça-feira</b>. Que dia da semana será daqui a <b>10 dias</b>?', o: ['quinta-feira', 'sexta-feira', 'sábado', 'domingo'], a: 1, h: 'A cada 7 dias volta o mesmo dia da semana. 10 = 7 + 3.', e: 'Daqui a 7 dias é terça de novo; mais 3 dias: quarta, quinta, <b>sexta</b>.' },
        { l: 3, t: 'num', q: 'Quantos números de <b>2 algarismos diferentes</b> podemos formar usando só os algarismos <b>1, 2 e 3</b>?', a: 6, h: 'Liste todos: 12, 13, 21…', e: '12, 13, 21, 23, 31, 32 → 6 números.' },
        { l: 3, t: 'num', q: 'Um relógio <b>atrasa 2 minutos a cada hora</b>. Depois de <b>12 horas</b>, quantos minutos ele estará atrasado?', a: 24, e: '2 × 12 = 24 minutos.' },
        { l: 3, t: 'num', q: 'Uma caixa tem <b>5 bolas vermelhas</b> e <b>4 bolas azuis</b>. Qual é o <b>menor</b> número de bolas que devo tirar, de olhos fechados, para ter <b>certeza</b> de pegar 2 bolas da mesma cor?', a: 3, h: 'Pense no pior caso: as duas primeiras podem ser de cores diferentes…', e: 'Com 2 bolas posso pegar 1 vermelha e 1 azul. A 3ª bola será, com certeza, igual a uma das duas. Resposta: 3.' },
        { l: 3, t: 'num', q: 'Com palitos: <b>1 quadrado</b> usa 4 palitos; <b>2 quadrados lado a lado</b> usam 7. Quantos palitos são usados para <b>5 quadrados em fila</b>?', a: 16, h: 'Cada quadrado novo acrescenta 3 palitos.', e: '4 + 3 + 3 + 3 + 3 = 16 palitos.' },
        { l: 3, t: 'num', q: 'Qual é a soma de <b>todos os números de 1 até 10</b>?', a: 55, h: 'Junte em pares: 1+10, 2+9, 3+8…', e: '5 pares que somam 11: 5 × 11 = 55.' },
        { l: 3, t: 'mc', q: 'Se <b>todos os gatos da Vila são pretos</b> e <b>Tom é um gato da Vila</b>, então:', o: ['Tom é preto', 'Tom não é preto', 'não dá para saber'], a: 0, e: 'Se TODOS são pretos e Tom é um deles, Tom é preto. Isso é uma dedução lógica!' }
      ]
    },
    {
      id: 'canguru', icon: '🦘', name: 'Desafios Canguru & OBMEP', intro: 'Ju, esses são desafios de OLIMPÍADA, adaptados das provas de verdade do Canguru e da OBMEP! Não precisa acertar todos — cada um que você tentar já é uma vitória. Tô muito orgulhosa só de você chegar aqui!',
      summary: `
<p>O <b>Canguru de Matemática</b> e a <b>OBMEP Mirim</b> são olimpíadas com questões divertidas que exigem <b>raciocínio</b>, não contas gigantes. Aqui estão questões <b>adaptadas das provas oficiais</b> (Canguru níveis P e E, 2024 e 2025).</p>
<div class="box"><b>Estratégias de olimpíada:</b>
<ul>
<li>Leia com calma e <b>desenhe</b> a situação.</li>
<li>Comece pelo que você <b>tem certeza</b> e vá deduzindo o resto.</li>
<li>Nas questões de múltipla escolha, <b>teste as alternativas</b>.</li>
<li>Procure <b>padrões</b> e use a <b>divisão com resto</b> em coisas que se repetem.</li>
<li>Se travar, pule e volte depois. Errar faz parte do treino!</li>
</ul></div>`,
      ex: [
        { l: 1, t: 'mc', q: '<i>(Canguru E 2025)</i> Simone vai colocar os dígitos <b>2, 0, 2 e 5</b> nas caixas da conta <b>▢ + ▢ − ▢ + ▢</b>. Qual ordem dá o <b>maior resultado</b>?', o: ['0, 2, 2, 5', '0, 5, 2, 2', '2, 5, 2, 0', '5, 0, 2, 2', '5, 2, 0, 2'], a: 4, h: 'O número que está depois do sinal de − é o que "tira". Qual deve ser o menor possível?', e: 'O terceiro número é subtraído, então coloque o 0 lá: 5 + 2 − 0 + 2 = 9. É o máximo possível.' },
        { l: 1, t: 'mc', q: '<i>(Canguru P 2024)</i> Uma fila de figuras repete sempre este padrão: <b>🌞 👻 🐱 🌙 🔥</b> 🌞 👻 🐱 🌙 🔥 🌞 👻 … Qual figura aparece na <b>27ª posição</b>?', o: ['🌞', '👻', '🐱', '🌙', '🔥'], a: 1, h: 'O padrão tem 5 figuras. Divida 27 por 5 e olhe o resto.', e: '27 ÷ 5 = 5 e sobram 2. Depois de 5 padrões completos (25 figuras), a 26ª é 🌞 e a 27ª é 👻.' },
        { l: 1, t: 'mc', q: '<i>(Canguru E 2025)</i> Nico faz contas com conchas 🐚 e pérolas ⚪. Cada <b>concha vale 6</b> e cada <b>pérola vale 1</b>. Qual conjunto vale <b>16</b>?', o: ['🐚🐚⚪', '🐚⚪⚪⚪⚪⚪⚪⚪⚪', '🐚🐚🐚', '🐚⚪⚪⚪⚪⚪', '🐚🐚⚪⚪⚪⚪'], a: 4, h: 'Calcule o valor de cada alternativa.', e: '2 conchas = 12, mais 4 pérolas = 16 ✔ (as outras valem 13, 14, 18 e 11).' },
        { l: 2, t: 'mc', q: '<i>(Canguru P 2024)</i> No quadro, cada figurinha tem um valor. As somas das linhas e colunas estão indicadas. Qual é o valor da ⭐?', v: V.table(['', '', '', 'soma →'], [['😊', '💜', '💜', '9'], ['😊', '⭐', '💜', '10'], ['10', '5', '4', '↓ soma']]), o: ['2', '3', '4', '5', '6'], a: 1, h: 'Comece pela coluna que tem só 💜💜 = 4.', e: '💜 + 💜 = 4 → 💜 = 2. Linha de cima: 😊 + 2 + 2 = 9 → 😊 = 5. Coluna do meio: 2 + ⭐ = 5 → ⭐ = 3.' },
        { l: 2, t: 'num', q: '<i>(Canguru P 2024)</i> André começou com <b>10 dardos</b>. A cada vez que acertava o alvo, ganhava <b>2 dardos novos</b>. Ao todo, ele lançou <b>20 dardos</b>. Quantas vezes André acertou o alvo?', a: 5, h: 'Quantos dardos a mais ele ganhou? Cada acerto vale 2.', e: 'Ganhou 20 − 10 = 10 dardos. Como cada acerto dá 2, acertou 10 ÷ 2 = 5 vezes.' },
        { l: 2, t: 'num', q: '<i>(Canguru E 2025)</i> Ana tem <b>3 biscoitos</b>, Bia tem <b>4</b> e Carlos tem <b>5</b>. Sobraram <b>15 biscoitos</b> na bandeja e eles querem dividi-los de modo que todos fiquem com a <b>mesma quantidade</b>. Quantos biscoitos Ana precisa ganhar?', a: 6, h: 'Some tudo e divida por 3 para saber quanto cada um terá no final.', e: 'Total: 3 + 4 + 5 + 15 = 27. Cada um fica com 27 ÷ 3 = 9. Ana precisa de 9 − 3 = 6.' },
        { l: 2, t: 'num', q: '<i>(Canguru P 2024)</i> Estêvão escolhe <b>dois números diferentes</b> entre <b>1, 2, 3, 4 e 5</b> e calcula a soma. Quantos <b>resultados diferentes</b> ele pode obter?', a: 7, h: 'Qual é a menor soma possível? E a maior? Todas entre elas aparecem?', e: 'A menor soma é 1 + 2 = 3 e a maior é 4 + 5 = 9. Todas as somas de 3 a 9 são possíveis: 3, 4, 5, 6, 7, 8, 9 → 7 resultados.' },
        { l: 2, t: 'num', q: '<i>(Canguru P 2024)</i> Zuza monta torres com três tipos de peças. ⏳ + ▮ mede <b>15</b>. 🔺 + ⏳ mede <b>13</b>. 🔺 + ▮ + ⏳ mede <b>20</b>. Quanto mede a torre <b>🔺 + ▮</b>?', a: 12, h: 'Compare a torre de 20 com a de 15: a diferença é uma peça só.', e: '🔺 = 20 − 15 = 5. ▮ = 20 − 13 = 7. Então 🔺 + ▮ = 5 + 7 = 12.' },
        { l: 3, t: 'mc', q: '<i>(Canguru E 2025)</i> Renata alimenta <b>6 ovelhas</b> com <b>210 gramas</b> de legumes. A ovelha menor recebe o <b>dobro</b> do que cada uma das outras. Quantos gramas a ovelha menor recebe?', o: ['55 g', '60 g', '70 g', '75 g', '80 g'], a: 1, h: 'Se cada ovelha grande recebe 1 parte, a menor recebe 2 partes. Quantas partes ao todo?', e: '5 ovelhas × 1 parte + 2 partes = 7 partes. 210 ÷ 7 = 30 g por parte. A menor recebe 2 × 30 = 60 g.' },
        { l: 3, t: 'mc', q: '<i>(Canguru P 2024)</i> Uma ponte foi ocupada primeiro por <b>3 carros iguais</b> com espaços de 1 m, 2 m, 1 m e 2 m entre as pontas e os carros. Depois, por <b>2 carros</b> com espaços de 4 m, 4 m e 3 m. Qual é o comprimento de cada carro?', o: ['3 m', '4 m', '5 m', '6 m', '7 m'], a: 2, h: 'A ponte tem o mesmo comprimento nas duas situações. Escreva as duas somas.', e: 'Ponte = 3 carros + 6 m = 2 carros + 11 m. Então 1 carro = 11 − 6 = 5 m.' },
        { l: 3, t: 'mc', q: '<i>(Canguru P 2024)</i> Um cavalinho está numa caixa de <b>1 m de altura, 1 m de largura e 2 m de comprimento</b>. Uma fita foi passada em volta da caixa nas <b>duas direções</b> (passando pelas 6 faces) e gastou-se <b>1 m</b> para o laço. Qual é o comprimento total da fita?', o: ['9 m', '11 m', '13 m', '15 m', '17 m'], a: 1, h: 'Uma volta passa pelo comprimento (2 m) e altura (1 m) duas vezes cada; a outra volta passa pela largura e altura.', e: 'Volta 1: 2 + 1 + 2 + 1 = 6 m. Volta 2: 1 + 1 + 1 + 1 = 4 m. Laço: 1 m. Total: 11 m.' },
        { l: 3, t: 'mc', q: '<i>(Canguru E 2025)</i> Maria vai preencher os quadrados com <b>1, 2, 3, 4, 5 e 7</b> (o 6 já está). O número em cada círculo é a <b>soma</b> dos dois quadrados ligados a ele. Que número vai no <b>círculo cinza</b>?', v: V.boxCircle(['6', '?', '?', '?'], ['?', '?', '?']), o: ['2', '3', '4', '5', '7'], a: 2, h: 'O primeiro círculo é 6 + algo e só pode ser 7. Então o segundo quadrado é…', e: '6 + ▢ deve estar na lista: só 6 + 1 = 7 serve. Depois 1 + ▢ ∈ lista restante {2,3,4,5}: testando, 1 + 3 = 4 e sobra 2 e 5 (3 + 2 = 5 ✔). O círculo cinza = 1 + 3 = 4.' },
        { l: 3, t: 'mc', q: '<i>(Canguru E 2025)</i> A figura mostra o calendário de um mês sem os números. A soma dos números das <b>duas casas destacadas</b> é <b>29</b>. Em que dia da semana esse mês começa?', v: V.calendar(3, 31, { hide: true, hi: [8, 21] }), o: ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'domingo'], a: 3, h: 'Do primeiro quadrado destacado (quinta) ao segundo (quarta, duas semanas depois) são 13 dias.', e: 'Se a primeira casa é o dia D, a segunda é D + 13. D + D + 13 = 29 → D = 8. Como o dia 8 é quinta-feira, o dia 1 também é <b>quinta-feira</b>.' },
        { l: 3, t: 'mc', q: '<i>(Canguru E 2025)</i> Cinco tubos iguais têm água e bolinhas iguais. Os tubos <b>1, 2 e 3</b> têm o mesmo nível de água e contêm <b>1, 2 e 3 bolinhas</b>. Os tubos <b>4 e 5</b> têm o <b>dobro</b> desse nível e contêm <b>4 e 5 bolinhas</b>. Tirando todas as bolinhas, qual tubo fica com <b>menos água</b>?', o: ['tubo 1', 'tubo 2', 'tubo 3', 'tubo 4', 'tubo 5'], a: 2, h: 'Entre os tubos de mesmo nível, quem tem mais bolinhas tem menos água. Compare depois o tubo 3 com o tubo 5.', e: 'Entre 1, 2 e 3, o tubo 3 tem mais bolinhas ocupando espaço → menos água. Os tubos 4 e 5 têm o dobro do nível: mesmo tirando 5 bolinhas, sobra mais água que no tubo 3. Resposta: tubo 3.' },
        { l: 3, t: 'mc', q: '<i>(Canguru P 2024)</i> Júlia tem uma lista de problemas para resolver em maio, começando no <b>dia 1º (quarta-feira)</b>. Se resolver <b>2 por dia</b>, termina num <b>domingo</b>. Se resolver <b>3 por dia</b>, termina numa <b>quarta-feira</b>. Quantos problemas há na lista?', v: V.calendar(2, 31, { title: 'Maio' }), o: ['6', '12', '18', '24', '30'], a: 3, h: 'Teste as alternativas: divida por 2 e veja o dia; divida por 3 e veja o dia.', e: '24 ÷ 2 = 12 dias → termina dia 12 (domingo ✔). 24 ÷ 3 = 8 dias → termina dia 8 (quarta ✔). Resposta: 24.' },
        { l: 3, t: 'mc', q: '<i>(Canguru E 2025)</i> Rosana anotou suas frutas, mas o algarismo das dezenas borrou: <b>?2 mangas, ?0 maçãs, ?1 peras, ?3 bananas e 30 laranjas</b>, num total de <b>106</b>. Ela tem a mesma quantidade de dois tipos de fruta, tem o dobro de um tipo em relação a outro, e mais de 10 de cada tipo. Quantas bananas ela tem?', o: ['13', '23', '43', '53', '63'], a: 0, h: 'Dois tipos iguais precisam terminar com o mesmo algarismo. Qual combina com as 30 laranjas?', e: 'Só as maçãs (?0) podem ser iguais às laranjas: 30 maçãs. Sobram 106 − 60 = 46 para mangas + peras + bananas, cujas unidades somam 2 + 1 + 3 = 6, então as dezenas somam 4. Com "o dobro": 22 mangas = 2 × 11 peras, e sobra 13 bananas (22 + 11 + 13 = 46 ✔).' }
      ]
    }
  ]
});
