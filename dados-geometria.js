window.GROUPS = window.GROUPS || [];
window.GROUPS.push({
  id: 'geometria', icon: '📐', name: 'Geometria', color: '#44BBA4',
  desc: 'Ângulos, figuras planas, sólidos, plano cartesiano e escala.',
  points: [
    {
      id: 'angulos', icon: '📐', name: 'Ângulos', intro: 'Ju, abre uma tesoura devagarinho: o espaço que se forma entre as lâminas é um ângulo! O canto de uma folha de papel é o famoso ângulo reto, de 90°. Menor que ele é agudo, maior é obtuso. Vamos girar?',
      summary: `
<p><b>Ângulo</b> é a <b>abertura</b> entre duas semirretas que partem do mesmo ponto (o <b>vértice</b>). Medimos em <b>graus (°)</b>.</p>
<div class="box">
<b>Reto</b> = 90° (o canto de um quadrado, o "L") · <b>Agudo</b> = menor que 90° (fininho) · <b>Obtuso</b> = maior que 90° e menor que 180° (aberto) · <b>Raso</b> = 180° (uma linha reta) · <b>Volta completa</b> = 360°
</div>
<ul>
<li><b>Giros:</b> 1/4 de volta = 90° · meia volta = 180° · 3/4 de volta = 270° · volta inteira = 360°.</li>
<li><b>No relógio:</b> entre dois números vizinhos há 30°. Às 3h os ponteiros formam 90°; às 6h formam 180°.</li>
<li>Dica: use o canto de uma folha para testar se um ângulo é reto, menor (agudo) ou maior (obtuso).</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Um ângulo <b>reto</b> mede:', o: ['45°', '90°', '180°', '360°'], a: 1, e: 'Ângulo reto = 90°, o canto do quadrado.' },
        { l: 1, t: 'mc', q: 'Este ângulo é…', v: V.angle(40), o: ['agudo', 'reto', 'obtuso', 'raso'], a: 0, h: 'É menor ou maior que o canto de um quadrado?', e: 'Ele é bem menor que 90°: é agudo.' },
        { l: 1, t: 'mc', q: 'Este ângulo é…', v: V.angle(130), o: ['agudo', 'reto', 'obtuso', 'raso'], a: 2, e: 'Ele é maior que 90° e menor que 180°: é obtuso.' },
        { l: 1, t: 'num', q: '<b>Meia volta</b> corresponde a quantos graus?', a: 180, e: 'Volta completa = 360°; metade = 180°.' },
        { l: 2, t: 'num', q: 'Um <b>quadrado</b> tem quantos ângulos <b>retos</b>?', a: 4, e: 'Os 4 cantos do quadrado são ângulos de 90°.' },
        { l: 2, t: 'num', q: 'Uma <b>volta completa</b> tem quantos graus?', a: 360, e: '360°.' },
        { l: 2, t: 'mc', q: 'Este ângulo é…', v: V.angle(90), o: ['agudo', 'reto', 'obtuso', 'raso'], a: 1, e: 'Exatamente 90°: reto.' },
        { l: 2, t: 'mc', q: 'Às <b>3 horas</b>, qual é o ângulo entre os ponteiros do relógio?', v: V.clock(3, 0), o: ['30°', '60°', '90°', '180°'], a: 2, h: 'Do 12 ao 3 são 3 espaços de 30°.', e: '3 × 30° = 90°: um ângulo reto.' },
        { l: 2, t: 'num', q: '<b>1/4 de volta</b> corresponde a quantos graus?', a: 90, e: '360 ÷ 4 = 90°.' },
        { l: 2, t: 'mc', q: 'Um ângulo de <b>180°</b> é chamado de:', o: ['agudo', 'reto', 'obtuso', 'raso'], a: 3, e: '180° = ângulo raso, parece uma linha reta.' },
        { l: 3, t: 'mc', q: 'Júlia está olhando para o <b>norte</b> e gira <b>meia volta</b>. Para onde ela fica olhando?', o: ['leste', 'oeste', 'sul', 'norte'], a: 2, h: 'Meia volta = ficar de costas para onde estava.', e: 'Meia volta (180°) a partir do norte → sul.' },
        { l: 3, t: 'num', q: 'Dois ângulos juntos formam um ângulo <b>reto</b>. Um deles mede <b>35°</b>. Quanto mede o outro?', a: 55, e: '90 − 35 = 55°.' },
        { l: 3, t: 'mc', q: 'Às <b>6 horas</b>, qual é o ângulo entre os ponteiros?', v: V.clock(6, 0), o: ['90°', '120°', '180°', '360°'], a: 2, e: 'Do 12 ao 6 são 6 espaços × 30° = 180° (ângulo raso).' },
        { l: 3, t: 'mc', q: 'Júlia olha para o norte, gira <b>1/4 de volta para a direita</b> e depois mais <b>1/4 de volta para a direita</b>. Para onde ela olha agora?', o: ['leste', 'sul', 'oeste', 'norte'], a: 1, e: '1/4 para a direita: leste. Mais 1/4: sul. (Duas vezes 90° = 180° = meia volta.)' },
        { l: 3, t: 'num', q: 'Um triângulo tem ângulos de <b>60°</b> e <b>70°</b>. Sabendo que os três ângulos de um triângulo somam <b>180°</b>, quanto mede o terceiro?', a: 50, e: '180 − 60 − 70 = 50°.' }
      ]
    },
    {
      id: 'poligonos', icon: '🔷', name: 'Figuras planas e polígonos', intro: 'Ju, polígono parece nome de dinossauro, mas é só uma figura fechada feita de lados retos! Triângulo, quadrado, pentágono… A placa PARE da rua é um octógono, sabia? Bora contar lados!',
      summary: `
<p><b>Polígono</b> é uma figura plana, <b>fechada</b>, formada só por <b>segmentos de reta</b> (os lados). O círculo <b>não</b> é polígono (é curvo).</p>
<div class="box"><b>Nome pelo número de lados:</b> 3 triângulo · 4 quadrilátero · 5 pentágono · 6 hexágono · 7 heptágono · 8 octógono · 9 eneágono · 10 decágono<br>
Um polígono tem o <b>mesmo número</b> de lados, vértices (cantos) e ângulos.</div>
<ul>
<li><b>Regular:</b> todos os lados e ângulos iguais (quadrado, triângulo equilátero).</li>
<li><b>Quadriláteros:</b> quadrado (4 lados iguais, 4 ângulos retos), retângulo (4 ângulos retos), losango (4 lados iguais), paralelogramo, trapézio (só um par de lados paralelos).</li>
<li>Todo <b>quadrado</b> é também um retângulo (tem 4 ângulos retos) e um losango (tem 4 lados iguais)!</li>
<li><b>Triângulos pelos lados:</b> equilátero (3 iguais), isósceles (2 iguais), escaleno (todos diferentes).</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Como se chama o polígono de <b>5 lados</b>?', o: ['hexágono', 'pentágono', 'octógono', 'quadrilátero'], a: 1, e: 'Penta = 5. Pentágono.' },
        { l: 1, t: 'mc', q: 'Qual é o nome desta figura?', v: V.polygon(6), o: ['pentágono', 'hexágono', 'heptágono', 'octógono'], a: 1, h: 'Conte os lados.', e: '6 lados = hexágono (como o favo de mel).' },
        { l: 1, t: 'mc', q: 'Qual destas figuras <b>NÃO</b> é um polígono?', o: ['triângulo', 'círculo', 'quadrado', 'pentágono'], a: 1, e: 'O círculo é curvo, não tem lados retos. Não é polígono.' },
        { l: 1, t: 'num', q: 'Quantos <b>vértices</b> tem um triângulo?', a: 3, e: 'Triângulo: 3 lados, 3 vértices, 3 ângulos.' },
        { l: 2, t: 'num', q: 'Quantos lados tem um <b>octógono</b>?', a: 8, e: 'Octo = 8.' },
        { l: 2, t: 'mc', q: 'Todo <b>retângulo</b> tem:', o: ['4 lados iguais', '4 ângulos retos', '3 lados', '5 vértices'], a: 1, e: 'Retângulo = quadrilátero com 4 ângulos retos. Os lados são iguais dois a dois.' },
        { l: 2, t: 'mc', q: 'Todo <b>quadrado</b> é também um:', o: ['triângulo', 'retângulo', 'pentágono', 'círculo'], a: 1, h: 'O quadrado tem 4 ângulos retos…', e: 'O quadrado tem 4 ângulos retos, então é um retângulo especial (com todos os lados iguais).' },
        { l: 2, t: 'num', q: 'Um <b>decágono</b> tem quantos <b>ângulos</b>?', a: 10, e: 'Deca = 10. Número de ângulos = número de lados = 10.' },
        { l: 2, t: 'mc', q: 'Um triângulo com os <b>3 lados iguais</b> é chamado de:', o: ['equilátero', 'isósceles', 'escaleno', 'retângulo'], a: 0, e: 'Equilátero = lados iguais.' },
        { l: 2, t: 'mc', q: 'Qual é o nome desta figura?', v: V.polygon(8), o: ['hexágono', 'heptágono', 'octógono', 'decágono'], a: 2, e: '8 lados = octógono.' },
        { l: 3, t: 'mc', q: 'A placa de trânsito <b>PARE</b> tem o formato de um:', o: ['hexágono', 'octógono', 'pentágono', 'losango'], a: 1, e: 'A placa PARE tem 8 lados: é um octógono.' },
        { l: 3, t: 'num', q: 'Um polígono tem <b>7 vértices</b>. Quantos <b>lados</b> ele tem?', a: 7, e: 'Sempre o mesmo número: 7 lados (heptágono).' },
        { l: 3, t: 'mc', q: 'Qual destes polígonos é <b>regular</b>?', o: ['retângulo de 6 cm por 3 cm', 'quadrado', 'triângulo de lados 3, 4 e 5', 'trapézio'], a: 1, h: 'Regular = todos os lados E todos os ângulos iguais.', e: 'Só o quadrado tem todos os lados iguais e todos os ângulos iguais.' },
        { l: 3, t: 'num', q: 'Um <b>heptágono</b> e um <b>pentágono</b> juntos têm quantos lados?', a: 12, e: '7 + 5 = 12 lados.' },
        { l: 3, t: 'mc', q: 'Qual quadrilátero tem <b>apenas um par</b> de lados paralelos?', o: ['trapézio', 'quadrado', 'losango', 'retângulo'], a: 0, e: 'O trapézio tem só um par de lados paralelos. Os outros têm dois pares.' }
      ]
    },
    {
      id: 'solidos', icon: '🧊', name: 'Poliedros e corpos redondos', intro: 'Minha querida, olha em volta: a caixa de sapato, a bola, a lata de milho, a casquinha de sorvete… tudo isso são sólidos geométricos! Uns rolam (corpos redondos), outros não (poliedros). Vem conhecer a turma!',
      summary: `
<p>Os <b>sólidos geométricos</b> são as formas <b>3D</b> (têm volume). Dividem-se em dois grupos:</p>
<div class="box">
<b>Poliedros:</b> só têm <b>faces planas</b> (não rolam). Ex.: cubo, paralelepípedo (bloco retangular), pirâmides, prismas.<br>
<b>Corpos redondos:</b> têm alguma <b>superfície curva</b> (rolam). Ex.: esfera ⚽, cilindro 🥫, cone 🍦.
</div>
<ul>
<li><b>Face</b> = cada "parede" plana · <b>Aresta</b> = onde duas faces se encontram (linha) · <b>Vértice</b> = ponta onde as arestas se encontram.</li>
<li><b>Cubo:</b> 6 faces quadradas, 12 arestas, 8 vértices. <b>Paralelepípedo:</b> 6 faces retangulares, 12 arestas, 8 vértices.</li>
<li><b>Pirâmide de base quadrada:</b> 5 faces (1 quadrado + 4 triângulos), 8 arestas, 5 vértices.</li>
<li><b>Planificação:</b> o sólido "aberto" e esticado no plano. A do cubo tem 6 quadrados.</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Qual destes é um <b>corpo redondo</b>?', o: ['cubo', 'esfera', 'pirâmide', 'paralelepípedo'], a: 1, e: 'A esfera é toda curva: corpo redondo.' },
        { l: 1, t: 'num', q: 'Um <b>cubo</b> tem quantas <b>faces</b>?', a: 6, e: 'Pense num dado: 6 faces.' },
        { l: 1, t: 'mc', q: 'Uma <b>bola de futebol</b> lembra qual sólido?', o: ['cilindro', 'cone', 'esfera', 'cubo'], a: 2, e: 'Bola = esfera.' },
        { l: 1, t: 'mc', q: 'Uma <b>lata de refrigerante</b> lembra qual sólido?', o: ['cilindro', 'cone', 'esfera', 'cubo'], a: 0, e: 'Lata = cilindro (duas bases circulares e uma superfície curva).' },
        { l: 2, t: 'num', q: 'Um <b>cubo</b> tem quantos <b>vértices</b>?', a: 8, h: 'Conte as "pontas": 4 em cima e 4 embaixo.', e: '8 vértices.' },
        { l: 2, t: 'num', q: 'Um <b>cubo</b> tem quantas <b>arestas</b>?', a: 12, h: '4 em cima, 4 embaixo e 4 "em pé".', e: '4 + 4 + 4 = 12 arestas.' },
        { l: 2, t: 'mc', q: 'A <b>casquinha de sorvete</b> lembra qual sólido?', o: ['cilindro', 'cone', 'esfera', 'pirâmide'], a: 1, e: 'Casquinha = cone.' },
        { l: 2, t: 'mc', q: 'As faces de um <b>cubo</b> são:', o: ['triângulos', 'quadrados', 'círculos', 'retângulos diferentes'], a: 1, e: 'Todas as 6 faces do cubo são quadrados iguais.' },
        { l: 2, t: 'mc', q: 'Uma <b>caixa de sapato</b> lembra qual sólido?', o: ['cubo', 'paralelepípedo', 'pirâmide', 'cilindro'], a: 1, e: 'Caixa de sapato = paralelepípedo (bloco retangular).' },
        { l: 3, t: 'num', q: 'Uma <b>pirâmide de base quadrada</b> tem quantas <b>faces</b>?', a: 5, h: 'A base + os triângulos dos lados.', e: '1 base quadrada + 4 faces triangulares = 5 faces.' },
        { l: 3, t: 'num', q: 'Uma <b>pirâmide de base quadrada</b> tem quantos <b>vértices</b>?', a: 5, e: '4 vértices na base + 1 no topo = 5.' },
        { l: 3, t: 'mc', q: 'Qual destes sólidos <b>NÃO</b> é um poliedro?', o: ['prisma', 'cubo', 'cilindro', 'pirâmide'], a: 2, e: 'O cilindro tem superfície curva: é corpo redondo.' },
        { l: 3, t: 'num', q: 'A <b>planificação de um cubo</b> tem quantos quadrados?', a: 6, e: 'Um para cada face: 6 quadrados.' },
        { l: 3, t: 'num', q: 'Um <b>paralelepípedo</b> tem quantas <b>arestas</b>?', a: 12, e: 'Igual ao cubo: 12 arestas.' },
        { l: 3, t: 'mc', q: 'Qual sólido <b>rola</b> quando deitado, mas também <b>fica em pé</b> sem rolar?', o: ['esfera', 'cilindro', 'cubo', 'pirâmide'], a: 1, e: 'O cilindro rola deitado (lado curvo) e fica em pé sobre a base circular.' }
      ]
    },
    {
      id: 'plano', icon: '🗺️', name: 'Localização no plano cartesiano', intro: 'Ju, o plano cartesiano é um mapa do tesouro: primeiro você anda para o lado (x), depois sobe (y). Como batalha naval! O par (2, 3) é diferente de (3, 2) — a ordem importa. Bora achar os tesouros?',
      summary: `
<p>O <b>plano cartesiano</b> é uma malha com dois eixos: o <b>horizontal (x)</b> e o <b>vertical (y)</b>. Eles se cruzam na <b>origem (0, 0)</b>.</p>
<div class="box">Cada ponto é um <b>par ordenado (x, y)</b>: <b>primeiro anda para o lado</b> (x), <b>depois sobe</b> (y).<br>
Dica: "primeiro o <b>corredor</b>, depois o <b>elevador</b>"! O ponto (2, 3) está 2 para a direita e 3 para cima.</div>
<ul>
<li><b>(3, 0)</b> está sobre o eixo x (não subiu nada). <b>(0, 4)</b> está sobre o eixo y.</li>
<li>Em mapas e batalha naval, usamos <b>letra + número</b> (B4) — é a mesma ideia.</li>
<li>Ordem importa: (2, 5) é diferente de (5, 2)!</li>
</ul>`,
      ex: [
        { l: 1, t: 'mc', q: 'Quais são as coordenadas do ponto <b>A</b>?', v: V.plane([{ n: 'A', x: 2, y: 3 }]), o: ['(2, 3)', '(3, 2)', '(2, 2)', '(3, 3)'], a: 0, h: 'Primeiro para o lado, depois para cima.', e: 'A está 2 para a direita e 3 para cima: (2, 3).' },
        { l: 1, t: 'mc', q: 'Para chegar ao ponto <b>(4, 1)</b> partindo da origem, devo andar:', o: ['4 para a direita e 1 para cima', '1 para a direita e 4 para cima', '4 para cima e 1 para a direita', '4 para a esquerda e 1 para baixo'], a: 0, e: 'O primeiro número (4) é o x: para a direita. O segundo (1) é o y: para cima.' },
        { l: 1, t: 'mc', q: 'Qual ponto está em <b>(4, 1)</b>?', v: V.plane([{ n: 'A', x: 1, y: 4 }, { n: 'B', x: 4, y: 1 }]), o: ['A', 'B'], a: 1, e: 'B está 4 para a direita e 1 para cima. (A está em (1, 4) — a ordem importa!)' },
        { l: 2, t: 'mc', q: 'O ponto onde os dois eixos se cruzam é a <b>origem</b>. Suas coordenadas são:', o: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'], a: 0, e: 'A origem é (0, 0).' },
        { l: 2, t: 'mc', q: 'Quais são as coordenadas do ponto <b>B</b>?', v: V.plane([{ n: 'A', x: 1, y: 1 }, { n: 'B', x: 5, y: 2 }, { n: 'C', x: 3, y: 4 }]), o: ['(2, 5)', '(5, 2)', '(3, 4)', '(5, 5)'], a: 1, e: 'B está 5 para a direita e 2 para cima: (5, 2).' },
        { l: 2, t: 'mc', q: 'O ponto <b>(3, 0)</b> está:', o: ['sobre o eixo horizontal (x)', 'sobre o eixo vertical (y)', 'na origem', 'longe dos dois eixos'], a: 0, h: 'O y é 0: ele não subiu nada.', e: 'Como y = 0, o ponto fica em cima do eixo x.' },
        { l: 2, t: 'num', q: 'Qual é a distância (em unidades) entre os pontos <b>(1, 2)</b> e <b>(5, 2)</b>?', v: V.plane([{ n: 'P', x: 1, y: 2 }, { n: 'Q', x: 5, y: 2 }]), a: 4, h: 'Eles estão na mesma altura. Conte os passos para o lado.', e: 'Mesmo y. De x = 1 até x = 5 são 5 − 1 = 4 unidades.' },
        { l: 2, t: 'mc', q: 'Qual ponto está em <b>(0, 3)</b>?', v: V.plane([{ n: 'A', x: 3, y: 0 }, { n: 'B', x: 3, y: 3 }, { n: 'C', x: 0, y: 3 }]), o: ['A', 'B', 'C'], a: 2, e: 'x = 0 (não anda para o lado) e y = 3 (sobe 3): é o ponto C, sobre o eixo y.' },
        { l: 3, t: 'mc', q: 'Três vértices de um quadrado são <b>(1, 1), (4, 1) e (4, 4)</b>. Qual é o quarto vértice?', v: V.plane([{ n: '', x: 1, y: 1 }, { n: '', x: 4, y: 1 }, { n: '', x: 4, y: 4 }]), o: ['(1, 4)', '(4, 1)', '(1, 1)', '(0, 4)'], a: 0, h: 'Desenhe os três pontos e feche o quadrado.', e: 'O quadrado tem lado 3. O vértice que falta fica acima de (1, 1): (1, 4).' },
        { l: 3, t: 'mc', q: 'Uma formiga está em <b>(2, 3)</b>. Ela anda <b>3 para a direita</b> e <b>2 para cima</b>. Onde ela chega?', o: ['(5, 5)', '(4, 6)', '(5, 1)', '(0, 5)'], a: 0, e: 'x: 2 + 3 = 5. y: 3 + 2 = 5. Chega em (5, 5).' },
        { l: 3, t: 'num', q: 'Um retângulo tem vértices em <b>(0, 0), (6, 0), (6, 2) e (0, 2)</b>. Qual é o seu <b>perímetro</b> (em unidades)?', a: 16, h: 'Comprimento 6, largura 2.', e: '6 + 2 + 6 + 2 = 16.' },
        { l: 3, t: 'mc', q: 'Kelvin sai de <b>(1, 1)</b> e segue as instruções: <b>↑2, →3, ↓1</b>. Onde ele para?', o: ['(4, 2)', '(3, 4)', '(4, 3)', '(2, 4)'], a: 0, h: '↑ muda o y (sobe), → muda o x (direita), ↓ desce.', e: '(1, 1) → ↑2 → (1, 3) → →3 → (4, 3) → ↓1 → (4, 2).' }
      ]
    },
    {
      id: 'escala', icon: '🗾', name: 'Noção de escala', intro: 'Ju, um mapa não pode ser do tamanho da cidade, né? Então a gente encolhe tudo: 1 cm no papel vale 10 km de verdade. Isso é escala. Maquetes, plantas de casa e mapas usam essa ideia. Vem que é rapidinho!',
      summary: `
<p>Mapas, plantas e maquetes são <b>reduções</b> da realidade. A <b>escala</b> diz quanto cada medida do desenho vale de verdade.</p>
<div class="box"><b>1 cm no mapa = 10 km na realidade</b> → 3 cm no mapa = 3 × 10 = <b>30 km</b>.<br>
Escala <b>1:100</b> significa: 1 cm no desenho = 100 cm (1 m) na realidade.</div>
<ul>
<li><b>Desenho → real:</b> multiplique pela escala. <b>Real → desenho:</b> divida pela escala.</li>
<li><b>Ampliar/reduzir na malha:</b> multiplique (ou divida) <b>todos os lados</b> pelo mesmo número. Se dobrar os lados, a figura fica com a mesma forma, só maior.</li>
<li>Cuidado: ao <b>dobrar os lados</b>, a <b>área fica 4 vezes maior</b> (2 × 2)!</li>
</ul>`,
      ex: [
        { l: 1, t: 'num', q: 'Num mapa, <b>1 cm representa 10 km</b>. Duas cidades estão a <b>3 cm</b> no mapa. Qual é a distância real? (em km)', a: 30, e: '3 × 10 = 30 km.' },
        { l: 1, t: 'num', q: 'Na planta de uma casa, <b>1 cm = 1 m</b>. Uma sala desenhada com <b>5 cm</b> mede, na realidade, quantos metros?', a: 5, e: '5 × 1 = 5 m.' },
        { l: 2, t: 'num', q: 'Num mapa, <b>1 cm = 50 km</b>. Uma estrada mede <b>4 cm</b> no mapa. Quantos km ela tem?', a: 200, e: '4 × 50 = 200 km.' },
        { l: 2, t: 'num', q: 'Na escala <b>1:100</b>, 1 cm do desenho corresponde a quantos <b>cm</b> reais?', a: 100, e: '1:100 → 1 cm vale 100 cm (= 1 m).' },
        { l: 2, t: 'num', q: 'Um quadrado de <b>lado 2</b> foi <b>ampliado 3 vezes</b> na malha. Quanto mede o lado do novo quadrado?', a: 6, e: '2 × 3 = 6.' },
        { l: 2, t: 'num', q: 'A distância real entre duas cidades é <b>500 km</b>. Num mapa em que <b>1 cm = 100 km</b>, quantos cm separam as cidades?', a: 5, h: 'Real → desenho: divida.', e: '500 ÷ 100 = 5 cm.' },
        { l: 3, t: 'mc', q: 'Um retângulo de <b>2 por 3</b> teve os lados <b>dobrados</b>. A área do novo retângulo…', o: ['dobrou', 'ficou 4 vezes maior', 'ficou igual', 'ficou 3 vezes maior'], a: 1, h: 'Calcule as duas áreas: 2 × 3 e 4 × 6.', e: 'Antes: 2 × 3 = 6. Depois: 4 × 6 = 24. 24 = 4 × 6 → a área ficou 4 vezes maior.' },
        { l: 3, t: 'num', q: 'Uma maquete está na escala <b>1:50</b>. Um carro real de <b>4 m</b> (400 cm) terá quantos <b>cm</b> na maquete?', a: 8, e: '400 ÷ 50 = 8 cm.' },
        { l: 3, t: 'num', q: 'Uma figura foi <b>reduzida à metade</b>. Um lado que media <b>12 cm</b> passa a medir quantos cm?', a: 6, e: '12 ÷ 2 = 6 cm.' },
        { l: 3, t: 'num', q: 'Num mapa, <b>1 cm = 25 km</b>. Duas cidades estão a <b>175 km</b>. Qual é a distância entre elas no mapa? (em cm)', a: 7, e: '175 ÷ 25 = 7 cm.' }
      ]
    }
  ]
});
