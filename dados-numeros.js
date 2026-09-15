window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'numeros', icon: '🔢', name: 'Números', color: '#E8638B',
  desc: 'Como os números são escritos, lidos e comparados.',
  points: [
    {
      id: 'snd', icon: '🏛️', name: 'Sistema de Numeração Decimal', intro: 'Ju, esse é o alicerce de TUDO na Matemática! Imagina que cada algarismo mora num "apartamento" diferente: o mesmo 5 pode valer 5, 50 ou 500 dependendo do andar em que ele está. Bora descobrir como esse prédio funciona?', gen: 'snd',
      summary: `
<p>Nosso sistema é <b>decimal</b> porque agrupa de <b>10 em 10</b>: 10 unidades = 1 dezena, 10 dezenas = 1 centena, 10 centenas = 1 unidade de milhar…</p>
<div class="box">
<b>Ordens e classes</b> (da direita para a esquerda):
<table class="vt small"><tr><th colspan="3">Classe dos milhares</th><th colspan="3">Classe das unidades simples</th></tr>
<tr><td>centena de milhar</td><td>dezena de milhar</td><td>unidade de milhar</td><td>centena</td><td>dezena</td><td>unidade</td></tr>
<tr><td>100.000</td><td>10.000</td><td>1.000</td><td>100</td><td>10</td><td>1</td></tr></table>
</div>
<ul>
<li><b>Valor posicional:</b> o mesmo algarismo vale coisas diferentes dependendo da posição. Em <b>3.5</b>12 o 5 vale <b>500</b>; em 3.51<b>5</b> o 5 vale <b>5</b>.</li>
<li><b>Decomposição:</b> 4.327 = 4.000 + 300 + 20 + 7.</li>
<li><b>Comparar:</b> primeiro veja quem tem mais algarismos; se for igual, compare da esquerda para a direita.</li>
<li><b>Arredondar:</b> olhe o algarismo à direita da ordem escolhida: 5 ou mais → sobe; 4 ou menos → mantém. (3.472 → centena mais próxima = 3.500)</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Qual é o <b>valor</b> do algarismo <b>7</b> no número <b>3.712</b>?', o: ['7', '70', '700', '7.000'], a: 2, h: 'O 7 está na terceira casa da direita para a esquerda: a casa das centenas.', e: '3.712 = 3.000 + 700 + 10 + 2. O 7 está na ordem das centenas, então vale 700.' },
        { l: 1, t: 'num', q: 'Complete a decomposição: <b>5.204 = 5.000 + 200 + ?</b>', a: 4, h: 'O que falta para chegar em 5.204?', e: '5.000 + 200 = 5.200. Faltam 4 unidades: 5.204 = 5.000 + 200 + 4.' },
        { l: 1, t: 'mc', q: 'Como se lê o número <b>2.350</b>?', o: ['dois mil e trezentos e cinquenta', 'dois mil trezentos e cinquenta', 'duzentos e trinta e cinco', 'dois mil e trinta e cinco'], a: 1, h: 'Depois do "mil", só usamos "e" antes das dezenas/unidades.', e: '2.350 = dois mil trezentos e cinquenta.' },
        { l: 1, t: 'mc', q: 'Qual destes números é o <b>maior</b>?', o: ['9.876', '10.234', '9.999', '10.099'], a: 1, h: 'Quem tem mais algarismos é maior. Se empatar, compare da esquerda para a direita.', e: '10.234 e 10.099 têm 5 algarismos (são maiores que os de 4). Entre eles, 10.<b>2</b>34 > 10.<b>0</b>99.' },
        { l: 2, t: 'num', q: 'Escreva com algarismos: <b>doze mil quatrocentos e oito</b>.', a: 12408, h: 'Doze mil = 12.000. Quatrocentos e oito = 408.', e: '12.000 + 408 = 12.408. Atenção: não tem dezena, então o algarismo das dezenas é 0.' },
        { l: 2, t: 'num', q: 'Quantas <b>dezenas</b> há no número <b>340</b>?', a: 34, h: 'Cubra o algarismo das unidades e leia o que sobrou.', e: '340 = 34 dezenas (34 × 10 = 340). Não são só 4 dezenas: as centenas também contêm dezenas!' },
        { l: 2, t: 'mc', q: 'No número <b>45.678</b>, o algarismo <b>5</b> ocupa a ordem da(s):', o: ['dezena', 'centena', 'unidade de milhar', 'dezena de milhar'], a: 2, h: 'Conte as ordens da direita: unidade (8), dezena (7), centena (6)…', e: '8 = unidade, 7 = dezena, 6 = centena, 5 = unidade de milhar, 4 = dezena de milhar.' },
        { l: 2, t: 'num', q: 'Arredonde <b>3.472</b> para a <b>centena</b> mais próxima.', a: 3500, h: 'Olhe o algarismo das dezenas (7). É 5 ou mais?', e: '3.472 está entre 3.400 e 3.500. Como o 7 (dezenas) é maior que 5, arredonda para cima: 3.500.' },
        { l: 2, t: 'mc', q: 'Qual sequência está em <b>ordem crescente</b> (do menor para o maior)?', o: ['4.521, 4.512, 4.215', '4.215, 4.512, 4.521', '4.512, 4.215, 4.521', '4.521, 4.215, 4.512'], a: 1, h: 'Todos começam com 4. Compare o segundo algarismo.', e: '4.<b>2</b>15 < 4.<b>5</b>12 < 4.<b>5</b>21 (nos dois últimos, 12 < 21).' },
        { l: 2, t: 'num', q: 'Qual é o <b>sucessor</b> de <b>7.999</b>?', a: 8000, h: 'Sucessor = o número + 1.', e: '7.999 + 1 = 8.000.' },
        { l: 3, t: 'num', q: 'Usando os algarismos <b>3, 8, 0 e 5</b> uma vez cada, qual é o <b>maior</b> número de 4 algarismos que dá para formar?', a: 8530, h: 'Coloque o maior algarismo na maior ordem.', e: 'Do maior para o menor: 8, 5, 3, 0 → 8.530.' },
        { l: 3, t: 'num', q: 'Com os mesmos algarismos <b>3, 8, 0 e 5</b>, qual é o <b>menor</b> número de 4 algarismos? (Um número não pode começar com 0!)', a: 3058, h: 'O menor algarismo diferente de zero vai na frente; o zero vem logo depois.', e: '3 na frente, depois 0, 5, 8 → 3.058.' },
        { l: 3, t: 'mc', q: '<b>250 centenas</b> é o mesmo que:', o: ['250', '2.500', '25.000', '250.000'], a: 2, h: '1 centena = 100. Então 250 centenas = 250 × 100.', e: '250 × 100 = 25.000.' },
        { l: 3, t: 'num', q: 'Um milhão (1.000.000) tem quantos <b>milhares</b>?', a: 1000, h: '1.000.000 ÷ 1.000 = ?', e: '1.000.000 = 1.000 × 1.000. Um milhão são mil milhares!' },
        { l: 3, t: 'num', q: 'Qual é o <b>antecessor</b> de <b>10.000</b>?', a: 9999, h: 'Antecessor = o número − 1.', e: '10.000 − 1 = 9.999.' }
      ]
    },
    {
      id: 'decimais', icon: '🔸', name: 'Números decimais', intro: 'Minha querida, você já usa números decimais todo dia sem perceber: R$ 2,50 do lanche, 1,5 litro de refrigerante, 1,42 m de altura… A vírgula é só uma portinha entre os inteiros e os pedacinhos. Vem que a gente abre essa porta juntas!', gen: 'dec',
      summary: `
<p>Os <b>números decimais</b> têm <b>vírgula</b>: à esquerda fica a <b>parte inteira</b> e à direita a <b>parte decimal</b>. Ex.: em <b>2,35</b> a parte inteira é 2 e a decimal é 35.</p>
<div class="box"><table class="vt small"><tr><th>parte inteira</th><th>,</th><th>décimos</th><th>centésimos</th><th>milésimos</th></tr><tr><td>2</td><td>,</td><td>3</td><td>5</td><td>0</td></tr></table>
<b>Lê-se:</b> "dois inteiros e trinta e cinco centésimos".</div>
<ul>
<li><b>Décimo</b> = 1/10 = 0,1 &nbsp;|&nbsp; <b>Centésimo</b> = 1/100 = 0,01 &nbsp;|&nbsp; <b>Milésimo</b> = 1/1000 = 0,001</li>
<li>Fração decimal → decimal: 3/10 = 0,3 &nbsp; 7/100 = 0,07 &nbsp; 25/100 = 0,25</li>
<li><b>Zeros no final não mudam o valor:</b> 0,5 = 0,50 = 0,500.</li>
<li><b>Comparar:</b> primeiro a parte inteira; se empatar, compare os décimos; depois os centésimos. (0,8 > 0,75 porque 8 décimos > 7 décimos)</li>
<li><b>Somar/subtrair:</b> alinhe <b>vírgula embaixo de vírgula</b>. Dinheiro é o melhor exemplo: R$ 2,50 + R$ 1,75 = R$ 4,25.</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'A fração <b>3/10</b> escrita como número decimal é:', o: ['3,10', '0,3', '0,03', '30'], a: 1, h: 'Décimos ficam na primeira casa depois da vírgula.', e: '3/10 = 3 décimos = 0,3.' },
        { l: 1, t: 'num', q: 'Calcule: <b>0,5 + 0,5</b>', a: 1, h: 'Meio mais meio…', e: '0,5 + 0,5 = 1,0 = 1. Cinco décimos + cinco décimos = dez décimos = 1 inteiro.' },
        { l: 1, t: 'mc', q: 'Como se lê <b>2,7</b>?', o: ['dois inteiros e sete décimos', 'dois inteiros e sete centésimos', 'vinte e sete', 'dois inteiros e sete milésimos'], a: 0, h: 'Depois da vírgula há só UMA casa.', e: 'Uma casa depois da vírgula = décimos. 2,7 = dois inteiros e sete décimos.' },
        { l: 1, t: 'mc', q: 'Qual número é <b>maior</b>: 0,8 ou 0,75?', o: ['0,8', '0,75', 'são iguais'], a: 0, h: 'Escreva 0,8 como 0,80 e compare.', e: '0,8 = 0,80. E 80 centésimos > 75 centésimos. Cuidado: mais algarismos não significa número maior!' },
        { l: 1, t: 'num', q: 'No número <b>15,963</b>, qual algarismo está na casa dos <b>centésimos</b>?', a: 6, h: 'Depois da vírgula: décimos, centésimos, milésimos.', e: '9 = décimos, <b>6</b> = centésimos, 3 = milésimos.' },
        { l: 2, t: 'num', q: 'Júlia pagou um sorvete de <b>R$ 4,35</b> com uma nota de <b>R$ 10,00</b>. Quanto recebeu de troco?', a: 5.65, h: '10,00 − 4,35. Alinhe as vírgulas!', e: '10,00 − 4,35 = 5,65. Troco de R$ 5,65.' },
        { l: 2, t: 'mc', q: '<b>7/100</b> em decimal é:', o: ['0,7', '7,100', '0,07', '0,007'], a: 2, h: 'Centésimos ocupam DUAS casas depois da vírgula.', e: '7/100 = 7 centésimos = 0,07 (o zero dos décimos precisa aparecer).' },
        { l: 2, t: 'mc', q: 'Qual lista está em <b>ordem crescente</b>?', o: ['0,9 ; 0,45 ; 0,5', '0,45 ; 0,5 ; 0,9', '0,5 ; 0,45 ; 0,9', '0,9 ; 0,5 ; 0,45'], a: 1, h: 'Transforme todos em centésimos: 0,90 ; 0,45 ; 0,50.', e: '45 centésimos < 50 centésimos < 90 centésimos → 0,45 ; 0,5 ; 0,9.' },
        { l: 2, t: 'num', q: 'Calcule: <b>2,5 + 1,75</b>', a: 4.25, h: 'Escreva 2,5 como 2,50 e some alinhando as vírgulas.', e: '2,50 + 1,75 = 4,25.' },
        { l: 2, t: 'num', q: 'Júlia correu <b>1,2 km</b> de manhã e <b>0,8 km</b> à tarde. Quantos km correu no total?', a: 2, h: '1,2 + 0,8 = ?', e: '1,2 + 0,8 = 2,0 = 2 km.' },
        { l: 2, t: 'num', q: 'Uma régua marca <b>0,25 m</b>. Isso é o mesmo que quantos <b>centímetros</b>?', a: 25, h: '1 m = 100 cm. Então 0,25 m = 25/100 do metro.', e: '0,25 m = 25 centésimos de metro = 25 cm.' },
        { l: 3, t: 'mc', q: 'Qual número está <b>entre 3,4 e 3,5</b>?', o: ['3,45', '3,55', '3,35', '4,0'], a: 0, h: 'Pense em 3,40 e 3,50. O que fica no meio?', e: '3,40 < 3,45 < 3,50. Sempre existe um número entre dois decimais!' },
        { l: 3, t: 'num', q: 'Calcule: <b>3,6 − 1,85</b>', a: 1.75, h: 'Escreva 3,6 como 3,60.', e: '3,60 − 1,85 = 1,75.' },
        { l: 3, t: 'num', q: 'Calcule: <b>0,25 × 4</b>', a: 1, h: '0,25 é um quarto. Quatro quartos = ?', e: '0,25 + 0,25 + 0,25 + 0,25 = 1,00 = 1.' },
        { l: 3, t: 'mc', q: 'Os números <b>4,30</b> e <b>4,3</b> são:', o: ['iguais', '4,30 é maior', '4,3 é maior'], a: 0, h: 'Zeros no final da parte decimal não mudam o valor.', e: '4,3 = 4,30 = 43 décimos = 430 centésimos. São o mesmo número!' },
        { l: 3, t: 'num', q: 'Qual é a <b>diferença</b> entre <b>5,1</b> e <b>5,01</b>?', a: 0.09, h: '5,10 − 5,01', e: '5,10 − 5,01 = 0,09 (nove centésimos).' }
      ]
    }
  ]
});
