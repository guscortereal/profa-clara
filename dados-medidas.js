window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'medidas', icon: '📏', name: 'Medidas', color: '#7B68EE',
  desc: 'Tempo, capacidade, massa, perímetro e área.',
  points: [
    {
      id: 'tempo', icon: '⏰', name: 'Medida de tempo', intro: 'Ju, o relógio é um bicho engraçado: em vez de contar de 10 em 10, ele conta de 60 em 60! Por isso 90 minutos não é "1 hora e 90"... é 1h30. Depois desse ponto, você vai calcular quanto tempo falta pro recreio sem errar nunca mais.', gen: 'tempo',
      summary: `
<div class="box"><b>1 minuto = 60 segundos</b> · <b>1 hora = 60 minutos</b> · <b>1 dia = 24 horas</b> · 1 semana = 7 dias<br>
meia hora = 30 min · um quarto de hora = 15 min · 1 h 30 min = 90 min</div>
<ul>
<li><b>Relógio de ponteiros:</b> ponteiro pequeno = horas; ponteiro grande = minutos (cada número vale 5 minutos).</li>
<li><b>Somar tempo:</b> some horas com horas e minutos com minutos. Se os minutos passarem de 60, <b>troque 60 min por 1 h</b>. (3 h 45 min + 1 h 30 min = 4 h 75 min = 5 h 15 min)</li>
<li><b>Subtrair tempo:</b> se faltar minuto, <b>pegue 1 h emprestada = 60 min</b>. (2 h 20 min − 45 min = 1 h 80 min − 45 min = 1 h 35 min)</li>
<li><b>Intervalo:</b> conte até a hora cheia, depois o resto. De 14h10 às 16h: 50 min até 15h + 60 min = 110 min.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: '<b>1 hora</b> tem quantos <b>minutos</b>?', a: 60, e: '1 h = 60 min.' },
        { l: 1, t: 'num', q: '<b>2 horas</b> = quantos minutos?', a: 120, e: '2 × 60 = 120 minutos.' },
        { l: 1, t: 'mc', q: 'Que horas o relógio marca?', v: V.clock(3, 30), o: ['3h30', '6h15', '3h15', '12h30'], a: 0, h: 'O ponteiro pequeno está entre o 3 e o 4; o grande está no 6.', e: 'Ponteiro grande no 6 = 30 minutos. Ponteiro pequeno passou do 3 = 3 horas. São 3h30.' },
        { l: 1, t: 'num', q: '<b>Meia hora</b> tem quantos minutos?', a: 30, e: '60 ÷ 2 = 30 minutos.' },
        { l: 2, t: 'mc', q: 'A aula começa às <b>8h</b> e dura <b>50 minutos</b>. A que horas termina?', o: ['8h50', '9h10', '8h30', '9h50'], a: 0, e: '8h00 + 50 min = 8h50.' },
        { l: 2, t: 'mc', q: '<b>90 minutos</b> é o mesmo que:', o: ['1h30', '1h50', '9h', '1h90'], a: 0, h: '90 = 60 + 30.', e: '60 min = 1 h, sobram 30 min → 1h30.' },
        { l: 2, t: 'num', q: 'Um filme começou às <b>14h10</b> e terminou às <b>16h</b>. Quantos <b>minutos</b> durou?', a: 110, h: 'De 14h10 até 15h são 50 min. Depois, mais 1 hora.', e: '50 min + 60 min = 110 minutos (1 h 50 min).' },
        { l: 2, t: 'mc', q: 'Que horas o relógio marca?', v: V.clock(10, 15), o: ['10h15', '3h50', '10h03', '9h15'], a: 0, e: 'Ponteiro grande no 3 = 15 min. Ponteiro pequeno logo depois do 10 = 10 horas. 10h15.' },
        { l: 2, t: 'mc', q: 'Calcule: <b>3 h 45 min + 1 h 30 min</b>', o: ['4h75', '5h15', '4h15', '5h05'], a: 1, h: '45 + 30 = 75 minutos. Isso passa de 60!', e: '3 h + 1 h = 4 h; 45 + 30 = 75 min = 1 h 15 min. Total: 5 h 15 min.' },
        { l: 2, t: 'num', q: '<b>1 dia</b> tem quantas horas?', a: 24, e: '1 dia = 24 horas.' },
        { l: 3, t: 'mc', q: 'Júlia dormiu às <b>21h30</b> e acordou às <b>6h45</b>. Quanto tempo ela dormiu?', o: ['9h15', '8h45', '9h45', '8h15'], a: 0, h: 'Das 21h30 até a meia-noite são 2h30. Depois conte até 6h45.', e: '21h30 → 0h = 2 h 30 min; 0h → 6h45 = 6 h 45 min. Total: 8 h 75 min = 9 h 15 min.' },
        { l: 3, t: 'mc', q: 'Calcule: <b>2 h 20 min − 45 min</b>', o: ['1h35', '1h75', '2h25', '1h25'], a: 0, h: 'Não dá para tirar 45 de 20. Pegue 1 hora emprestada (60 min).', e: '2 h 20 min = 1 h 80 min. 80 − 45 = 35 → 1 h 35 min.' },
        { l: 3, t: 'num', q: 'Quantos minutos há em <b>2 h e 35 min</b>?', a: 155, e: '2 × 60 = 120; 120 + 35 = 155 minutos.' },
        { l: 3, t: 'mc', q: 'Um ônibus passa <b>a cada 25 minutos</b>. O primeiro passa às <b>7h</b>. A que horas passa o <b>4º</b> ônibus?', o: ['8h15', '7h50', '8h40', '8h00'], a: 0, h: 'Do 1º ao 4º são 3 intervalos.', e: '7h00 → 7h25 → 7h50 → 8h15. O 4º passa às 8h15.' },
        { l: 3, t: 'num', q: 'Quantas horas tem <b>uma semana</b>?', a: 168, e: '7 dias × 24 horas = 168 horas.' }
      ]
    },
    {
      id: 'capacidade', icon: '🥤', name: 'Medida de capacidade', intro: 'Minha querida, olha a garrafa de refrigerante da sua casa: 2 litros. E a latinha: 350 mL. Litro e mililitro são a dupla que mede líquidos. A regra de ouro é só uma: 1 L = 1.000 mL. Bora?', gen: 'conv',
      summary: `
<p><b>Capacidade</b> é quanto líquido cabe em um recipiente. Unidades: <b>litro (L)</b> e <b>mililitro (mL)</b>.</p>
<div class="box"><b>1 L = 1.000 mL</b> · meio litro = 500 mL · 1/4 de litro = 250 mL · 1,5 L = 1.500 mL</div>
<ul>
<li>Referências: garrafa grande de refrigerante = 2 L; caixa de leite = 1 L; lata de refrigerante = 350 mL; xícara ≈ 250 mL; colher de sopa ≈ 15 mL.</li>
<li><b>L → mL:</b> multiplique por 1.000 (a vírgula anda 3 casas para a direita). 2,5 L = 2.500 mL.</li>
<li><b>mL → L:</b> divida por 1.000. 750 mL = 0,75 L.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: '<b>1 litro</b> = quantos mililitros?', a: 1000, e: '1 L = 1.000 mL.' },
        { l: 1, t: 'num', q: '<b>Meio litro</b> = quantos mL?', a: 500, e: '1.000 ÷ 2 = 500 mL.' },
        { l: 1, t: 'mc', q: 'Qual unidade é melhor para medir a água de uma <b>piscina</b>?', o: ['mililitro', 'litro', 'grama', 'metro'], a: 1, e: 'Piscina tem MUITA água: usamos litros (milhares deles!).' },
        { l: 2, t: 'num', q: '<b>3 L</b> = quantos mL?', a: 3000, e: '3 × 1.000 = 3.000 mL.' },
        { l: 2, t: 'num', q: '<b>2.500 mL</b> = quantos litros? (use vírgula)', a: 2.5, e: '2.500 ÷ 1.000 = 2,5 L.' },
        { l: 2, t: 'mc', q: 'Qual recipiente tem <b>mais</b> líquido?', o: ['1 garrafa de 2 L', '3 copos de 300 mL', '1 lata de 350 mL', '1 caixa de 1 L'], a: 0, h: 'Transforme tudo em mL.', e: '2 L = 2.000 mL; 3 × 300 = 900 mL; 350 mL; 1.000 mL. A garrafa de 2 L ganha.' },
        { l: 2, t: 'num', q: 'Uma receita usa <b>250 mL</b> de leite. Para fazer <b>4 receitas</b>, quantos <b>litros</b> de leite são necessários?', a: 1, e: '4 × 250 = 1.000 mL = 1 L.' },
        { l: 2, t: 'num', q: '<b>1,5 L</b> = quantos mL?', a: 1500, e: '1,5 × 1.000 = 1.500 mL.' },
        { l: 3, t: 'num', q: 'Uma garrafa tem <b>2 L</b> de suco. Júlia bebeu <b>750 mL</b>. Quantos <b>mL</b> sobraram?', a: 1250, h: 'Transforme 2 L em mL primeiro.', e: '2.000 − 750 = 1.250 mL.' },
        { l: 3, t: 'num', q: 'Um balde tem <b>10 L</b>. Quantas jarras de <b>500 mL</b> são necessárias para enchê-lo?', a: 20, e: '10 L = 10.000 mL. 10.000 ÷ 500 = 20 jarras.' },
        { l: 3, t: 'num', q: '<b>6 garrafas de 600 mL</b> equivalem a quantos <b>litros</b>? (use vírgula)', a: 3.6, e: '6 × 600 = 3.600 mL = 3,6 L.' },
        { l: 3, t: 'num', q: '<b>0,25 L</b> = quantos mL?', a: 250, e: '0,25 × 1.000 = 250 mL (um quarto de litro).' }
      ]
    },
    {
      id: 'massa', icon: '⚖️', name: 'Medida de massa', intro: 'Ju, um clipe pesa 1 grama, um pacote de açúcar pesa 1 quilo e um carro pesa 1 tonelada. A escada é sempre de 1.000 em 1.000 — e é aqui que os números decimais aparecem de novo (1,5 kg = 1.500 g). Você já sabe isso!', gen: 'conv',
      summary: `
<p><b>Massa</b> é o "peso" das coisas. Unidades: <b>tonelada (t)</b>, <b>quilograma (kg)</b>, <b>grama (g)</b> e <b>miligrama (mg)</b>.</p>
<div class="box"><b>1 t = 1.000 kg</b> · <b>1 kg = 1.000 g</b> · <b>1 g = 1.000 mg</b><br>meio quilo = 500 g · 1,5 kg = 1.500 g · 250 g = 0,25 kg</div>
<ul>
<li>Referências: 1 clipe ≈ 1 g; 1 pacote de açúcar = 1 kg; 1 carro ≈ 1 t; 1 lata de refrigerante ≈ 350 g.</li>
<li><b>kg → g:</b> × 1.000 (vírgula anda 3 casas para a direita). <b>g → kg:</b> ÷ 1.000.</li>
<li>Os <b>números decimais</b> aparecem aqui: 3.500 g = 3,5 kg.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: '<b>1 kg</b> = quantos gramas?', a: 1000, e: '1 kg = 1.000 g.' },
        { l: 1, t: 'num', q: '<b>Meio quilo</b> = quantos gramas?', a: 500, e: '1.000 ÷ 2 = 500 g.' },
        { l: 1, t: 'mc', q: 'Qual unidade é melhor para medir a massa de um <b>elefante</b>?', o: ['grama', 'miligrama', 'tonelada', 'litro'], a: 2, e: 'Elefantes pesam milhares de quilos: toneladas.' },
        { l: 2, t: 'num', q: '<b>2 kg</b> = quantos gramas?', a: 2000, e: '2 × 1.000 = 2.000 g.' },
        { l: 2, t: 'num', q: '<b>1 tonelada</b> = quantos kg?', a: 1000, e: '1 t = 1.000 kg.' },
        { l: 2, t: 'num', q: '<b>1,5 kg</b> = quantos gramas?', a: 1500, e: '1,5 × 1.000 = 1.500 g.' },
        { l: 2, t: 'num', q: '<b>3.500 g</b> = quantos kg? (use vírgula)', a: 3.5, e: '3.500 ÷ 1.000 = 3,5 kg.' },
        { l: 2, t: 'mc', q: 'Qual é o <b>mais pesado</b>?', o: ['1.200 g', '1,5 kg', '900 g', '1 kg'], a: 1, h: 'Transforme tudo em gramas.', e: '1,5 kg = 1.500 g, que é mais que 1.200 g, 900 g e 1.000 g.' },
        { l: 3, t: 'num', q: 'Um elefante pesa <b>4 t</b>. Quantos kg são?', a: 4000, e: '4 × 1.000 = 4.000 kg.' },
        { l: 3, t: 'num', q: 'Um pacote tem <b>2 kg</b> de arroz. Usaram <b>750 g</b>. Quantos <b>gramas</b> sobraram?', a: 1250, e: '2.000 − 750 = 1.250 g.' },
        { l: 3, t: 'num', q: '<b>5 pacotes de 250 g</b> pesam, juntos, quantos <b>kg</b>? (use vírgula)', a: 1.25, e: '5 × 250 = 1.250 g = 1,25 kg.' },
        { l: 3, t: 'num', q: '<b>1 grama</b> = quantos miligramas?', a: 1000, e: '1 g = 1.000 mg.' },
        { l: 3, t: 'num', q: 'Uma caixa tem <b>12 latas de 350 g</b>. Qual é a massa total em <b>kg</b>? (use vírgula)', a: 4.2, e: '12 × 350 = 4.200 g = 4,2 kg.' }
      ]
    },
    {
      id: 'perimetro', icon: '🔲', name: 'Perímetro', intro: 'Ju, imagina dar uma volta completa andando pela beirada do seu quarto: a distância que você andou é o perímetro! É só somar todos os lados. Simples assim — vem provar!', gen: 'perim',
      summary: `
<p><b>Perímetro</b> é a medida do <b>contorno</b> de uma figura: <b>some todos os lados</b>. É como dar uma volta completa na figura!</p>
<div class="box">Quadrado: <b>4 × lado</b> · Retângulo: <b>comprimento + largura + comprimento + largura</b> (ou 2 × (c + l)) · Triângulo: lado + lado + lado</div>
<ul>
<li>Unidades: cm, m, km (medidas de <b>comprimento</b>).</li>
<li>Na <b>malha quadriculada</b>, conte quantos "ladinhos" de quadradinho há no contorno.</li>
<li>Se souber o perímetro e a figura for regular, <b>divida</b> pelo número de lados para achar cada lado.</li>
<li>Usos: cerca de um terreno, rodapé de uma sala, moldura de um quadro.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Qual é o perímetro de um <b>quadrado com lado de 5 cm</b>? (em cm)', v: V.polygon(4, { side: '5 cm' }), a: 20, e: '5 + 5 + 5 + 5 = 4 × 5 = 20 cm.' },
        { l: 1, t: 'num', q: 'Qual é o perímetro deste retângulo? (em cm)', v: V.rect(6, 3), a: 18, e: '6 + 3 + 6 + 3 = 18 cm.' },
        { l: 1, t: 'num', q: 'Um triângulo tem lados de <b>3 cm, 4 cm e 5 cm</b>. Qual é o perímetro? (em cm)', a: 12, e: '3 + 4 + 5 = 12 cm.' },
        { l: 2, t: 'num', q: 'Cada quadradinho tem lado 1 cm. Qual é o <b>perímetro</b> da figura pintada? (em cm)', v: V.grid([[0, 0], [0, 1], [0, 2], [1, 0]]), a: 10, h: 'Conte os ladinhos do contorno, um por um, dando a volta.', e: 'Dando a volta na figura em L: 2 + 3 + 1 + 2 + 1 + 1 = 10 cm.' },
        { l: 2, t: 'num', q: 'Um terreno retangular mede <b>12 m por 8 m</b>. Quantos metros de cerca são necessários para contorná-lo?', a: 40, e: '12 + 8 + 12 + 8 = 40 m.' },
        { l: 2, t: 'num', q: 'Um <b>pentágono regular</b> tem lados de <b>7 cm</b>. Qual é o seu perímetro? (em cm)', v: V.polygon(5, { side: '7 cm' }), a: 35, e: 'Pentágono tem 5 lados iguais: 5 × 7 = 35 cm.' },
        { l: 2, t: 'num', q: 'O perímetro de um quadrado é <b>36 cm</b>. Quanto mede cada lado? (em cm)', a: 9, h: 'O quadrado tem 4 lados iguais.', e: '36 ÷ 4 = 9 cm.' },
        { l: 3, t: 'num', q: 'Um retângulo tem perímetro <b>30 cm</b> e comprimento <b>10 cm</b>. Qual é a largura? (em cm)', a: 5, h: 'Dois comprimentos somam 20. O que sobra é dividido entre as duas larguras.', e: '30 − 10 − 10 = 10; 10 ÷ 2 = 5 cm.' },
        { l: 3, t: 'num', q: 'Uma sala mede <b>8 m por 6 m</b>. Vai receber rodapé em toda a volta, exceto na <b>porta de 1 m</b>. Quantos metros de rodapé? ', a: 27, e: 'Perímetro: 8 + 6 + 8 + 6 = 28 m. Tirando a porta: 28 − 1 = 27 m.' },
        { l: 3, t: 'num', q: 'Um terreno quadrado tem <b>25 m</b> de lado. Serão dadas <b>3 voltas</b> de arame em volta dele. Quantos metros de arame? ', a: 300, e: 'Perímetro: 4 × 25 = 100 m. Três voltas: 3 × 100 = 300 m.' },
        { l: 3, t: 'num', q: 'Dois quadrados de <b>lado 4 cm</b> foram colados lado a lado formando um retângulo. Qual é o perímetro do retângulo? (em cm)', v: V.rect(8, 4), a: 24, h: 'O retângulo formado mede 8 cm por 4 cm.', e: '8 + 4 + 8 + 4 = 24 cm. (Não é 32: dois lados "sumiram" ao colar!)' }
      ]
    },
    {
      id: 'area', icon: '🟩', name: 'Área (m² e cm²)', intro: 'Minha estudiosa favorita, lembra do metro quadrado que vocês construíram na escola? Área é quantos desses quadradinhos cabem numa superfície. Perímetro é a volta, área é o preenchimento — não deixa esses dois se confundirem!', gen: 'perim',
      summary: `
<p><b>Área</b> é a medida da <b>superfície</b>: quanto "chão" a figura ocupa. Medimos com quadradinhos!</p>
<div class="box"><b>1 cm²</b> = quadradinho de 1 cm × 1 cm · <b>1 m²</b> = quadrado de 1 m × 1 m (aquele que vocês construíram!)<br>
Retângulo: <b>comprimento × largura</b> · Quadrado: <b>lado × lado</b></div>
<ul>
<li>Na malha quadriculada, <b>conte os quadradinhos</b> (meio quadradinho + meio = 1).</li>
<li>Figuras "com cantos" (formato de L): <b>separe em retângulos</b> e some, ou calcule o retângulo grande e tire o pedaço que falta.</li>
<li><b>Perímetro ≠ área!</b> Perímetro é a volta (cm, m); área é o preenchimento (cm², m²). Duas figuras podem ter a mesma área e perímetros diferentes.</li>
<li>1 m² = 100 cm × 100 cm = <b>10.000 cm²</b>.</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Qual é a área deste retângulo? (em cm²)', v: V.rect(5, 3), a: 15, e: '5 × 3 = 15 cm².' },
        { l: 1, t: 'num', q: 'Qual é a área de um quadrado com <b>4 m</b> de lado? (em m²)', a: 16, e: '4 × 4 = 16 m².' },
        { l: 1, t: 'num', q: 'Cada quadradinho tem 1 cm². Qual é a área da figura pintada? (em cm²)', v: V.grid([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [0, 2], [3, 0]]), a: 7, e: 'Basta contar os quadradinhos pintados: 7 cm².' },
        { l: 2, t: 'num', q: 'Uma sala mede <b>6 m por 4 m</b>. Qual é a área? (em m²)', a: 24, e: '6 × 4 = 24 m².' },
        { l: 2, t: 'mc', q: 'Qual unidade usamos para medir a <b>área</b> de uma folha de caderno?', o: ['cm', 'cm²', 'm²', 'km'], a: 1, h: 'Área usa unidade "ao quadrado". E a folha é pequena.', e: 'Área → cm². (O m² seria grande demais para uma folha.)' },
        { l: 2, t: 'num', q: 'Um piso retangular mede <b>8 m por 5 m</b>. Quantos <b>metros quadrados</b> tem esse piso?', a: 40, e: '8 × 5 = 40 m².' },
        { l: 2, t: 'num', q: 'Um retângulo tem área <b>24 cm²</b> e comprimento <b>6 cm</b>. Qual é a largura? (em cm)', a: 4, h: 'Comprimento × largura = 24. Use a divisão.', e: '24 ÷ 6 = 4 cm.' },
        { l: 3, t: 'num', q: 'Uma sala de <b>5 m por 4 m</b> tem um tapete de <b>2 m por 3 m</b>. Qual é a área da sala que ficou <b>sem tapete</b>? (em m²)', a: 14, e: 'Sala: 5 × 4 = 20 m². Tapete: 2 × 3 = 6 m². Livre: 20 − 6 = 14 m².' },
        { l: 3, t: 'num', q: 'Quantos azulejos de <b>1 m²</b> são necessários para cobrir um pátio de <b>12 m por 3 m</b>?', a: 36, e: '12 × 3 = 36 m² → 36 azulejos.' },
        { l: 3, t: 'num', q: 'Cada quadradinho tem 1 cm². Qual é a área da figura em L? (em cm²)', v: V.grid([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [0, 2], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [3, 3]], { cols: 7, rows: 5 }), a: 20, h: 'Separe em dois retângulos: um de 6 × 2 e outro de 4 × 2.', e: '6 × 2 = 12 e 4 × 2 = 8 → 12 + 8 = 20 cm². (Ou 6 × 4 = 24 menos o canto 2 × 2 = 4.)' },
        { l: 3, t: 'mc', q: 'Um <b>quadrado de lado 3 cm</b> e um <b>retângulo de 9 cm por 1 cm</b> têm…', o: ['mesma área e mesmo perímetro', 'mesma área, perímetros diferentes', 'mesmo perímetro, áreas diferentes', 'tudo diferente'], a: 1, h: 'Calcule a área e o perímetro de cada um.', e: 'Áreas: 3 × 3 = 9 e 9 × 1 = 9 (iguais). Perímetros: 12 cm e 20 cm (diferentes).' },
        { l: 3, t: 'num', q: '<b>1 m²</b> equivale a quantos <b>cm²</b>?', a: 10000, h: '1 m = 100 cm. Então 100 cm × 100 cm.', e: '100 × 100 = 10.000 cm².' }
      ]
    }
  ]
});
