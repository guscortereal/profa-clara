# 🧮 Matemática com a Professora Clara — 5º ano

Site de estudos de Matemática para a Júlia (5º ano do Ensino Fundamental), com a **Professora Clara** como guia.
Conteúdo baseado nos Roteiros de Atividades dos Módulos 21 a 28 (2026) — coluna **Conteúdo** de Matemática.

**Regra de ouro: praticar!** Cada ponto de estudo tem um resumo curto e muitos exercícios, do fácil (⭐) ao desafio (⭐⭐⭐).

## O que tem no site

| Aba | Pontos de estudo |
|---|---|
| 🔢 Números | Sistema de Numeração Decimal · Números decimais |
| ➕ Operações | Adição e subtração · Multiplicação · Divisão · Expressões numéricas |
| 🧩 Problemas | Situações-problema · Problemas de lógica · 🦘 Desafios Canguru & OBMEP |
| 🍕 Frações | O que é fração · Equivalentes e comparação · Fração de quantidade |
| 📏 Medidas | Tempo · Capacidade · Massa · Perímetro · Área (m² e cm²) |
| 📐 Geometria | Ângulos · Figuras planas e polígonos · Poliedros e corpos redondos · Plano cartesiano · Escala |
| 📊 Dados e Chance | Tabelas e gráficos · Probabilidade |

- **339 exercícios** fixos, graduados por dificuldade, com dica, correção automática e explicação.
- **🎲 Treino infinito**: exercícios gerados aleatoriamente (operações, expressões, decimais, frações, medidas, problemas).
- Estrelas ⭐, níveis (Aprendiz → Lenda), medalhas por ponto concluído e confete 🎉.
- Progresso salvo no navegador (não precisa de login).
- Questões de olimpíada adaptadas do **Concurso Canguru de Matemática Brasil** (níveis P e E, 2024/2025) e da **OBMEP Mirim**.

## Estrutura dos arquivos

```
index.html          página única
style.css           visual
viz.js              gráficos e figuras (SVG)
gen.js              geradores do treino infinito
app.js              navegação, correção, progresso
dados-*.js          conteúdo: resumos e exercícios de cada grupo
```

Todos os arquivos ficam na mesma pasta (sem subpastas) para facilitar o envio ao GitHub.

Não há build nem dependências: é só abrir o `index.html` ou publicar a pasta em qualquer hospedagem estática.

## Como publicar no GitHub Pages (passo a passo)

### Opção A — pelo site do GitHub (sem instalar nada)

1. Entre em <https://github.com> e clique no **+** (canto superior direito) → **New repository**.
2. Nome do repositório: `matematica-julia` (pode ser outro). Deixe **Public**. Clique em **Create repository**.
3. Na página do repositório novo, clique em **uploading an existing file**.
4. Clique em **choose your files**, abra a pasta `ProfaClara`, selecione **todos os arquivos** (⌘A) e clique em **Abrir**. São 12 arquivos: `index.html`, `README.md`, `style.css`, `app.js`, `gen.js`, `viz.js` e os sete `dados-*.js`. (A pasta oculta `.claude` não aparece e não é necessária.)
5. Embaixo, clique em **Commit changes**.
6. Vá em **Settings** (aba do repositório) → menu lateral **Pages**.
7. Em **Build and deployment → Source**, escolha **Deploy from a branch**. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
8. Aguarde 1–2 minutos e recarregue a página de Pages: aparecerá o endereço, no formato
   **`https://SEU-USUARIO.github.io/matematica-julia/`**.
9. Abra o endereço no celular/tablet da Júlia e **adicione à tela inicial** (no Safari: Compartilhar → Adicionar à Tela de Início) para ficar como um app.

### Opção B — pelo terminal (git)

```bash
cd /Users/guscortereal/Documents/ProfaClara
git init
git add index.html README.md style.css app.js gen.js viz.js dados-*.js .gitignore
git commit -m "Site Matemática com a Professora Clara"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/matematica-julia.git
git push -u origin main
```

Depois, faça os passos 6 a 8 da Opção A para ligar o GitHub Pages.

### Para atualizar o site depois

- Opção A: no repositório, clique em **Add file → Upload files**, arraste os arquivos alterados e faça **Commit changes**. O site atualiza sozinho em ~1 minuto.
- Opção B: `git add -A && git commit -m "atualização" && git push`.

## Créditos

- Questões de olimpíada adaptadas de: Concurso Canguru de Matemática Brasil (<https://www.cangurudematematicabrasil.com.br/provas-anteriores>) e Olimpíada Mirim – OBMEP (<https://olimpiadamirim.obmep.org.br>).
- Fontes: Fredoka e Nunito (Google Fonts).
