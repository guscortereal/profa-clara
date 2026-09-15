/* Plano de estudos da Júlia — datas das provas, horários e o que estudar em cada sessão.
   Para ajustar: mude as datas, os horários ou a lista "itens" de cada sessão.
   Um item pode ser:
     'grupo.ponto'                          → ponto de estudo do site (ids em dados-*.js)
     { rev: 'texto livre', weak: 3 }        → tarefa de revisão; "weak" lista os N pontos com menos estrelas
*/
window.PLANO = {
  horarios: [
    { dia: 1, hora: '19:30', dur: 50, nome: 'segunda' },
    { dia: 2, hora: '10:30', dur: 50, nome: 'terça', fim: '11:20' },
    { dia: 5, hora: '10:00', dur: 50, nome: 'sexta' },
  ],
  sabado: { hora: '10:00', dur: 60 },   // sábado do fim de semana anterior a cada prova
  provas: [
    {
      id: 'p1', nome: 'Prova 1', emoji: '🎯', data: '2026-10-02', cor: '#E8638B',
      desc: 'Conteúdo dos módulos 21 a 28 (28/07 a 18/09).',
      sessoes: [
        { d: '2026-09-18', itens: ['numeros.snd', 'operacoes.addsub', 'operacoes.mult', 'operacoes.div'] },
        { d: '2026-09-21', itens: ['operacoes.expr', 'numeros.decimais', 'problemas.situacoes', 'problemas.logica'] },
        { d: '2026-09-22', itens: ['fracoes.fracao', 'fracoes.equiv', 'fracoes.fracqtd', 'medidas.tempo'] },
        { d: '2026-09-25', itens: ['medidas.capacidade', 'medidas.massa', 'medidas.perimetro', 'medidas.area'] },
        { d: '2026-09-26', extra: true, itens: ['geometria.angulos', 'geometria.poligonos', 'geometria.solidos', 'geometria.plano', 'geometria.escala'] },
        { d: '2026-09-28', itens: ['dados.graficos', 'dados.prob', 'problemas.canguru'] },
        { d: '2026-09-29', itens: [{ rev: 'Revisão geral: refazer os pontos com menos estrelas', weak: 3 }, { rev: '🎲 Treino infinito: 10 exercícios de operações e 10 de expressões' }] },
      ],
    },
    {
      id: 'p2', nome: 'Prova 2', emoji: '🏆', data: '2026-11-23', cor: '#7B68EE',
      desc: 'Segunda passada, mais profunda: foco nos exercícios ⭐⭐ e ⭐⭐⭐ e no treino infinito. Quando chegarem os roteiros dos próximos módulos, a gente encaixa os conteúdos novos aqui.',
      sessoes: [
        { d: '2026-10-05', itens: ['numeros.snd', 'numeros.decimais'] },
        { d: '2026-10-06', itens: ['operacoes.addsub', 'operacoes.mult'] },
        { d: '2026-10-09', itens: ['operacoes.div', 'operacoes.expr'] },
        { d: '2026-10-13', itens: ['problemas.situacoes', 'problemas.logica'] },
        { d: '2026-10-16', itens: ['fracoes.fracao', 'fracoes.equiv'] },
        { d: '2026-10-19', itens: ['fracoes.fracqtd', 'problemas.canguru'] },
        { d: '2026-10-20', itens: ['medidas.tempo', 'medidas.capacidade'] },
        { d: '2026-10-23', itens: ['medidas.massa', 'medidas.perimetro'] },
        { d: '2026-10-26', itens: ['medidas.area', 'geometria.angulos'] },
        { d: '2026-10-27', itens: ['geometria.poligonos', 'geometria.solidos'] },
        { d: '2026-10-30', itens: ['geometria.plano', 'geometria.escala'] },
        { d: '2026-11-03', itens: ['dados.graficos', 'dados.prob'] },
        { d: '2026-11-06', itens: [{ rev: 'Revisão de Operações: só os exercícios ⭐⭐ e ⭐⭐⭐ + treino infinito' }, 'operacoes.expr'] },
        { d: '2026-11-09', itens: [{ rev: 'Revisão de Decimais e Frações: só os exercícios ⭐⭐ e ⭐⭐⭐' }, 'numeros.decimais', 'fracoes.fracqtd'] },
        { d: '2026-11-10', itens: [{ rev: 'Revisão de Medidas: tempo, perímetro e área' }, 'medidas.tempo', 'medidas.area'] },
        { d: '2026-11-13', itens: [{ rev: 'Revisão de Geometria e Dados' }, 'geometria.angulos', 'dados.graficos'] },
        { d: '2026-11-16', itens: ['problemas.situacoes', 'problemas.canguru'] },
        { d: '2026-11-17', itens: [{ rev: 'Refazer os pontos com menos estrelas', weak: 3 }] },
        { d: '2026-11-21', extra: true, itens: [{ rev: 'Revisão geral: 🎲 treino infinito (15 exercícios) e 5 desafios Canguru' }, { rev: 'Reler os resumos dos pontos que ainda dão dúvida', weak: 2 }] },
      ],
    },
  ],
  feriados: { '2026-10-12': 'N. Sra. Aparecida', '2026-11-02': 'Finados', '2026-11-20': 'Consciência Negra' },
};
