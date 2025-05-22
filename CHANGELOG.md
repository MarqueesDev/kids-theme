# 📓 Pitch Black Theme — Changelog

Todas as mudanças, melhorias e correções no tema serão registradas aqui.  
Este changelog segue o estilo `Keep a Changelog` e o versionamento semântico (semver).

---

📦 [0.4.4] — Correção pendente para lógica de notificação

• Identified - Foi detectado um erro na lógica da versão que controla a exibição da notificação para aplicar o settings.json.
• Note - A notificação pode não estar sendo exibida corretamente após a instalação ou atualização.
• Info - Uma correção será implementada na próxima versão para garantir a execução adequada.

---

📦 [0.4.3] — Detecção de versão para aplicar configurações

• Added - Verificação automática da versão da extensão para exibir a notificação de configurações apenas em instalação ou atualização.
• Updated - Ajustes no tsconfig.json para permitir importação do package.json.
• Fixed - Prevenção da repetição da notificação a cada reinicialização do VS Code.
• Refactored - Lógica anterior substituída por controle baseado em kidsThemeVersion.
• Testing - A funcionalidade está sendo testada para garantir consistência nas ativações corretas.

---

📦 [0.4.2] — Correções e melhorias na extensão

• Updated - O *activation event* foi alterado para `onLanguage` para uma ativação mais eficiente.
• Fixed - Correção no código da extensão para garantir a verificação correta das extensões instaladas.
• Fixed - Ajustes nas configurações do editor, incluindo `workbench.startupEditor`, `editor.fontSize` e outras.
• Refactored - O código foi reorganizado para melhorar a estrutura e clareza na aplicação das configurações.
• Added - Tema de ícones `material-icon-theme` instalado automaticamente, se necessário.
• Updated - A configuração do terminal foi alterada para `PowerShell` no Windows.
• Testing - A solução está sendo testada para garantir que as configurações recomendadas funcionem corretamente.
• Fixed - Correção na lógica de aplicação de configurações no VS Code após a instalação da extensão.

---

📦 [0.4.1] — Atualização de eventos de ativação e melhorias

• Updated - O *activation event* foi alterado para `onLanguage` para uma ativação mais eficiente.
• Fixed - Correção no código relacionado ao evento de ativação.
• Testing - A solução está sendo testada para garantir a funcionalidade correta.
• Refactored - Código reorganizado para melhorar a estrutura e clareza.
• Updated - README atualizado para refletir as novas alterações e explicações de configuração.
• Added - Testes adicionais para verificar a integração com o novo evento de ativação.
• Fixed - Corrigido o comportamento do evento de ativação em diferentes linguagens.

---

## 📦 [0.4.0] — 2025-04-29  
### 🧹 Refatorações e Correções

- **Retornando a versão**:
  - Versão foi retornada para uma anterior por problemas com versões mais novas.

---

## 📦 [0.3.4] — 2025-04-29  
### 🧹 Refatorações e Correções

- **Correção na verificação do tema**:
  - Adicionada verificação de tipo para garantir que o tema atual seja uma string antes de aplicar as configurações, evitando erro de tipo.

- **Correção na lógica da notificação**:
  - Ajustada a lógica para garantir que a notificação seja mostrada apenas se o tema for válido e a configuração ainda não tiver sido aplicada.

---

## 📦 [0.3.3] — 2025-04-29  
### 🧹 Refatorações e Correções

- **Ajustes na ativação da extensão**:
  - Corrigida a forma de ativação da extensão, garantindo que a notificação apareça corretamente ao instalar ou atualizar o tema.
  
- **Melhoria no log de desenvolvimento**:
  - Adicionada a linha de log para verificar o tema atual em uso, facilitando a depuração da ativação da extensão.


---

## 📦 [0.3.2] — 2025-04-29  
### 🧹 Refatorações e Correções

- **Correção na formatação do README**:
  - Quebra de linha corrigida para as seções de feedback no README, garantindo que as informações fiquem corretamente formatadas.

- **Aprimoramento na usabilidade**:
  - Melhoria na clareza das instruções de feedback, garantindo uma melhor experiência para os usuários ao buscar suporte.

- **Atualização de conteúdo**:
  - Novas informações adicionadas ao README para orientar melhor os usuários sobre o uso e suporte da extensão.

---

## 📦 [0.3.1] — 2025-04-29  
### 🛠️ Atualizações e Melhorias

- **Atualização das configurações de tema e extensões**:
  - Agora, a notificação de configuração recomendada da extensão só é exibida se o tema ativo for `kids-theme` ou `kids-theme-colorful`, e se a notificação não tiver sido exibida anteriormente.
  - Garantido que a configuração do terminal integrado seja alterada para o **PowerShell** por padrão nas configurações recomendadas.

- **Melhoria no processo de configuração**:
  - A extensão agora verifica e instala automaticamente o tema de ícones `material-icon-theme` caso não esteja presente.
  - As configurações recomendadas foram ajustadas para garantir uma experiência mais estável e personalizada, incluindo ajustes para o editor, terminal e a execução de código.

- **Refatoração de código**:
  - Código otimizado e limpo para uma manutenção mais fácil e integração de novas funcionalidades sem impactos negativos no funcionamento da extensão.

- **Atualização e reformulação dos README**:
  - As informações dos arquivos README foram reformuladas para melhor explicação sobre as funcionalidades e como utilizar a extensão de forma eficiente.

---

## 📦 [0.3.0] — 2025-04-21  
### 🧹 Refatorações e Estabilidade

- **Remoção de configuração inválida**:
  - A configuração `runme.flags.disableSaveRestriction` foi removida por não ser reconhecida pelo VS Code, evitando erros críticos no momento da aplicação das preferências recomendadas.

- **Melhoria na robustez da extensão**:
  - Garantido que todas as configurações aplicadas estejam dentro do escopo válido e suportado pelo VS Code, proporcionando uma experiência mais estável e confiável.

- **Preparação para futuras versões**:
  - Código limpo e otimizado para facilitar a manutenção e inclusão de novas funcionalidades sem conflitos com o schema de configurações.

---

## 📦 [0.2.9] — 2025-04-21  
### 🐛 Correções e Melhorias

- **Correção de travamentos durante a instalação da extensão dependente**:
  - Ajuste no processo de instalação do tema `material-icon-theme`, garantindo maior compatibilidade e desempenho ao verificar se a extensão já está instalada.
  - Utilização do método `vscode.commands.executeCommand` para instalar a extensão de ícones de maneira segura e eficaz.

- **Refinamento nas configurações do workspace**:
  - As configurações de editor e terminal foram ajustadas para uma experiência mais fluida e otimizada.
  - Melhorias no comportamento do VS Code ao configurar as preferências, como fonte, quebra de linha e visualização de ícones.

- **Ajustes em comportamentos de extensões**:
  - Implementação de controles para garantir que a extensão `material-icon-theme` seja instalada apenas quando necessário.
  - Configuração do ícone e tema do VS Code de forma automática ao aplicar as configurações recomendadas.

- **Melhorias no fluxo de trabalho do usuário**:
  - Aplicação das configurações recomendadas do tema de forma interativa e sem erros.

---

## 📦 [0.2.8] — 2025-04-21  
### 🐛 Correções e Melhorias

- **Correção de travamentos durante a instalação da extensão dependente**:
  - Ajuste no processo de instalação do tema `material-icon-theme`, garantindo maior compatibilidade e desempenho ao verificar se a extensão já está instalada.
  - Utilização do método `vscode.commands.executeCommand` para instalar a extensão de ícones de maneira segura e eficaz.

- **Refinamento nas configurações do workspace**:
  - As configurações de editor e terminal foram ajustadas para uma experiência mais fluida e otimizada.
  - Melhorias no comportamento do VS Code ao configurar as preferências, como fonte, quebra de linha e visualização de ícones.

- **Ajustes em comportamentos de extensões**:
  - Implementação de controles para garantir que a extensão `material-icon-theme` seja instalada apenas quando necessário.
  - Configuração do ícone e tema do VS Code de forma automática ao aplicar as configurações recomendadas.

- **Melhorias no fluxo de trabalho do usuário**:
  - Apliacação das configurações recomendadas do tema de forma interativa e sem erros.

---

## 📦 [0.2.7] — 2025-04-21  
### 🐛 Correções e Ajustes

- **Correção de travamentos na instalação automática da extensão dependente**:
  - Ajustado o uso do método `executeCommand` para instalar o tema `material-icon-theme` de forma mais segura e compatível com o carregamento do VS Code.
  - Tratamento de erros adicionado para evitar que o processo falhe silenciosamente.

- **Melhorias na inicialização da extensão**:
  - A lógica de verificação e configuração do ícone e tema foi refinada, evitando travamentos em sistemas mais lentos ou com extensões desativadas.

- **Ajustes no comportamento da extensão ao compilar**:
  - Agora o arquivo `extension.js` é atualizado corretamente sem duplicações, mantendo a estabilidade da pasta `out/`.

- **Estabilidade aprimorada durante a ativação do tema**:
  - Prevenção contra múltiplas ativações simultâneas.
  - Verificação de ambiente do VS Code para evitar problemas de performance ao usar `*` como evento de ativação.

---

## 📦 [0.2.6] — 2025-04-21  
### 🎨 Atualizações no Tema

- **Melhoria nas configurações do workspace**, proporcionando uma experiência ainda mais fluida:
  - `"workbench.startupEditor": "none"` — configura a inicialização do editor para não abrir um editor ao iniciar o VS Code.
  - `"editor.fontSize": 17` — fonte mais legível.
  - `"editor.lineNumbers": "on"` — ativa os números das linhas no editor.
  - `"editor.wordWrap": "on"` — quebras de linha automáticas para melhor visualização de conteúdo.
  - `"explorer.compactFolders": false` — pastas exibidas de forma mais clara.
  - `"code-runner.runInTerminal": true` — executa o código no terminal.
  - `"code-runner.clearPreviousOutput": true` — limpa a saída anterior ao rodar código novamente.
  - `"code-runner.executorMap": { "python": "cls ; python -u" }` — configuração personalizada para o executor Python.
  - `"code-runner.ignoreSelection": true` — ignora a seleção ao rodar o código.
  - `"security.workspace.trust.untrustedFiles": "open"` — abre arquivos não confiáveis sem perguntar.
  - `"workbench.iconTheme": "material-icon-theme"` — visual mais intuitivo e moderno para ícones.
  - `"workbench.colorTheme": "KIDS THEME"` — define automaticamente o tema do VS Code para o tema "KIDS THEME".

- **Integração aprimorada com extensões e UX refinada**:
  - Arquivos `.cfg` agora associados à linguagem C++.
  - Remoção de confirmações desnecessárias ao excluir arquivos.
  - Desativação de mensagens informativas do Live Server.

- **Melhoria na execução automática de código**:
  - Ajustes para otimizar a execução de código com o Code Runner.

- **Ajustes de compatibilidade**:
  - Agora, o tema é mais consistente e ajustado para uso com o VS Code em diferentes ambientes.

---

## 📦 [0.2.5] — 2025-04-21  
### 🎨 Atualizações no Tema

- **Adição de configurações recomendadas para workspaces**, proporcionando uma experiência de uso mais fluida com o tema:
  - `"editor.fontSize": 17` — fonte mais legível.
  - `"editor.wordWrap": "on"` — quebras de linha automáticas para melhor visualização de conteúdo.
  - `"explorer.compactFolders": false` — pastas exibidas de forma mais clara.
  - `"workbench.iconTheme": "material-icon-theme"` — visual mais intuitivo e moderno.
  - `"workbench.colorTheme": "KIDS THEME"` — define automaticamente o tema do VS Code.

- **Melhor integração com extensões** como Code Runner e Live Server:
  - Ajustes no executor Python com `cls ; python -u`.
  - Ocultadas mensagens informativas desnecessárias.
  - Otimizações de salvamento e execução automática de código.

- **Compatibilidade e UX refinada**:
  - Arquivos `.cfg` associados à linguagem C++.
  - Remoção de confirmações e restrições desnecessárias ao salvar/excluir arquivos.

---

## 📦 [0.2.4] — 2025-04-20
### 🎨 Refinamento Final
- **Ajustes em cores e estilos** de Markdown, visando um visual mais fluido e coeso:
  - `markup.inline.raw.string.markdown`: `#E6B673` — tom caramelo mais suave para dar mais contraste sem perder a legibilidade.
  - `punctuation.definition.raw.markdown`: `#999999` — cinza neutro para pontuação de bloco de código, proporcionando um visual mais suave.
  - `meta.image.inline.markdown`: `#C792EA` — lilás com um toque de sofisticação para imagens inline.
  - `markup.bold`: `#80EEEE` — azul claro para destacar negritos sem chamar atenção excessiva.
  - `markup.italic`: `#FFFF00` — amarelo suave, mas destacado para textos em itálico.
  - `markup.bold.italic`: `#FF0000` — vermelho intenso para negrito e itálico, criando contraste e destaque.
  - `punctuation.definition.list_item.markdown`: `#FF0055` — vermelho forte para itens de lista, facilitando a distinção visual.

### 🧹 Ajustes Finais
- **Padronização** e revisão final da paleta de cores para garantir consistência visual no tema.

---

## 📦 [0.2.3] — 2025-04-20
### 🎨 Ajustes Visuais
- **Refinamento das cores** para melhor harmonia no tema e distinção de elementos Markdown:
  - `markup.inline.raw.string.markdown`: `#E6B673` — tom caramelo suave para o conteúdo inline.
  - `punctuation.definition.raw.markdown`: `#999999` — cinza claro discreto para a pontuação de bloco de código.
  - `meta.image.inline.markdown`: `#C792EA` — lilás elegante para imagens inline.
  - `markup.bold`: `#80EEEE` — azul claro vibrante para negrito.
  - `markup.italic`: `#FFFF00` — amarelo claro para itálico.
  - `markup.bold.italic`: `#FF0000` — vermelho forte para negrito + itálico.
  - `punctuation.definition.list_item.markdown`: `#FF0055` — vermelho marcante para marcadores de lista.

### 🧼 Limpeza
- **Organização e remoção** de escopos redundantes no arquivo `tokenColors` para melhorar a manutenção.

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

> 📫 Para feedback, sugestões ou bugs, abra uma issue no [repositório oficial](https://github.com/MarqueesDev/kids-theme/issues).
> 📫 For feedback, suggestions, or bugs, please open an issue in the [official repository](https://github.com/MarqueesDev/kids-theme/issues).