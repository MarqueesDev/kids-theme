# 📓 Pitch Black Theme — Changelog

Todas as mudanças, melhorias e correções no tema serão registradas aqui.  
Este changelog segue o estilo `Keep a Changelog` e o versionamento semântico (semver).

---

## 📦 [0.2.2] — 2025-04-20
### 🎨 Ajustes Visuais
- **Cores refinadas** para elementos de Markdown visando melhor contraste e coerência visual:
  - `markup.inline.raw.string.markdown`: `#E6B673` — tom caramelo suave para o conteúdo inline.
  - `punctuation.definition.raw.markdown`: `#999999` — cinza claro discreto para a pontuação de bloco de código.
  - `meta.image.inline.markdown`: `#C792EA` — lilás elegante para imagens inline.
  - `markup.bold`: `#80EEEE` — azul claro vibrante para negrito.
  - `markup.italic`: `#FFFF00` — amarelo claro para itálico.
  - `markup.bold.italic`: `#FF0000` — vermelho forte para negrito + itálico.
  - `punctuation.definition.list_item.markdown`: `#FF0055` — vermelho marcante para marcadores de lista.

### ✨ Novos Escopos Adicionados
- Inclusão de novas regras específicas com escopos mais precisos e descritivos:
  - `Markup - Bold Italic`
  - `punctuation.definition.list_item.markdown`
  - `meta.image.inline.markdown`
  - `markup.inline.raw.string.markdown`
  - `punctuation.definition.raw.markdown`

### 🧪 Testado
- Estilos testados com marcações como:
  - `***negrito e itálico***`
  - `*itálico*` e `**negrito**`
  - URLs, imagens e listas com renderização consistente no preview Markdown do VS Code.

---

## 📦 [0.2.1] — 2025-04-20
### 🎨 Refinado
- Paleta de cores dos escopos de **Markdown** ajustada para melhor harmonia com o restante do tema:
  - Títulos agora com azul mais balanceado para reduzir o cansaço visual.
  - Citações (`>`) com tom coral suavizado para manter contraste sem saturar.
  - Blocos de código levemente escurecidos no fundo para maior distinção.

### 🧼 Limpeza
- Remoção de escopos redundantes e reorganização dos `tokenColors` para melhor manutenção e leitura do código do tema.

### ✨ Adicionado
- Implementação de escopos com nomes descritivos e estrutura padronizada para **Markdown**:
  - `Markdown - Plain`
  - `Markdown - Heading`
  - `Markdown - Markup Raw Inline`
  - `Markdown - Markup Raw Inline Punctuation`
  - `Markup - Italic`
  - `Markup - Bold`
  - `Markup - Bold-Italic`
  - `Markup - Underline`
  - `Markdown - Blockquote`
  - `Markup - Quote`
  - `Markdown - Link`
  - `Markdown - Link Description`
  - `Markdown - Link Anchor`
  - `Markup - Raw Block`
  - `Markdown - Raw Block Fenced`
  - `Markdown - Fenced Bode Block`
  - `Markdown - Fenced Bode Block Variable`
  - `Markdown - Fenced Language`
  - `Markdown - Separator`
  - `Markup - Table`

---

## 📦 [0.2.0] — 2025-04-20
### ✨ Adicionado
- Suporte completo a escopos de **Markdown** com cores personalizadas:
  - Títulos (`#`, `##`, `###`) com azul suave.
  - Blocos de código e trechos `inline` com amarelo específico de destaque.
  - Links e imagens com azul link tradicional.
  - Citações com tom coral e estilo itálico.
  - Negrito com vermelho intenso.

### 🛠 Melhorado
- Organização e estilização dos escopos Markdown para maior clareza e contraste visual durante leitura de arquivos `README.md` e documentação no VS Code.

### 🔧 Corrigido
- Ajustes finais em comentários de arquivos `.json` usando o escopo `meta.structure.dictionary.json.comments`.

---

## 📦 [0.1.9] — 2025-04-20
### 🔧 Corrigido
- Ajustes de cores para arquivos `.json` e extensões relacionadas (JSONC).
- Comentários em JSON agora são corretamente destacados usando o escopo `meta.structure.dictionary.json.comments`.

---

## 📦 [0.1.8] — 2025-04-19
### 🎨 Adicionado
- Estilização para `invalid.illegal` e `invalid.deprecated` para melhor contraste.
- Suporte ao escopo `constant.other.placeholder` (útil em snippets e templates).

---

## 📦 [0.1.7] — 2025-04-19
### ⚙️ Atualizado
- Melhor contraste de texto em seleções (`selection.background` e `selection.foreground`).
- Refinamento na paleta base para manter a estética "pitch black" mais uniforme.

---

## 📦 [0.1.6] — 2025-04-18
### 🧪 Adicionado
- Paleta de cores personalizada adicionada no `workbench.colorCustomizations`.

---

## 📦 [0.1.5] — 2025-04-18
### 💅 Melhorado
- Estilo de strings e funções atualizado para leitura confortável em ambientes escuros.

---

## 🚀 [0.1.0] — 2025-04-17
### ✨ Lançamento Inicial
- Primeira versão pública do tema **Kids-Theme**.
- Foco total em um visual escuro puro com contrastes suaves e sem saturação agressiva.
- Suporte básico a: JS, TS, JSON, HTML, CSS, Markdown e arquivos de configuração.

---

> 📫 Para feedback, sugestões ou bugs, abra uma issue no [repositório oficial](https://github.com/MarqueesDev/kids-theme).

