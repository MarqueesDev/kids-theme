# 🌑 Kids theme para VS Code

Um **tema preto absoluto**, feito para seguir os **padrões visuais do VS Code** — mas pensado para quem acha os temas oficiais **claros demais**.  
Inclui também **compatibilidade com arquivos `.cfg`**, garantindo consistência até nos arquivos personalizados.

---

## ✨ Recursos

- 🎨 Fundo **preto profundo**, confortável para os olhos  
- 🧩 Alinhado com as cores nativas da **interface do VS Code**
- 🗂️ Suporte estendido para arquivos `.cfg`  
- 💻 Ideal para longas sessões de codificação ou ambientes escuros  
- ⚙️ Instalação super fácil com atualizações automatizadas: o tema aplica automaticamente as configurações no `settings.json` para uma experiência pronta para usar

- 📦 Já vem com o ***`Material Icon Theme`*** ativado para uma visualização moderna e organizada dos arquivos

---

## ⚙️ Instalação

1. Clone ou baixe o repositório do tema.  
2. No VS Code: `Arquivo → Preferências → Tema de Cor → Instalar do VSIX...`  
3. Selecione o `.vsix` (caso tenha), ou mova a pasta do tema para `.vscode/extensions`  
4. Ative o tema pela lista de temas de cor.

---

## 📂 Suporte de Arquivos

Realce de sintaxe para:

- `.js`
- `.ts`
- `.json`
- `.yaml`
- `.yml`
- `.xml`
- `.html`
- `.css`
- `.sql`
- `.cpp`
- `.py`
- `.sh`
- `.bash`
- `.zsh`
- `.cfg`
- `.ini`
- `.properties`
- `.env`
- `.markdown`
- `.php`
- `.blade.php`

Extensões personalizadas podem ser suportadas via `settings.json`.

---

## 🖼️ Visualização

> _"Tão escuro que absorve seus pensamentos..."_

![Preview](https://github.com/MarqueesDev/kids-theme/blob/main/screenshots/preview.png?raw=true)

---

## 📌 Por que usar o Kids Theme?

- Perfeito para **displays OLED** (economiza energia)
- Mais agradável aos olhos do que temas cinza escuro
- Ótimo para programar à noite ou para tarefas que exigem concentração
- Reduz a desordem visual com uma abordagem **minimalista**

---

## 🛠️ Personalização

Quer ajustar as cores ou adicionar suporte para mais tipos de arquivos?  
Basta abrir o arquivo `theme.json` e editar os valores, use o editor de temas integrado no VS Code, 
and even if you want you can edit it through your `settings.json`.

---

## 🛠️ Configurações Recomendadas

> Para garantir a melhor experiência com o **Kids Theme**, recomendamos aplicar as configurações abaixo no seu `settings.json` — agora automatizadas para uma instalação ainda mais fácil e prática!

```json
{
  "workbench.startupEditor": "none",
  "editor.fontSize": 17,
  "editor.lineNumbers": "on",
  "editor.wordWrap": "on",
  "explorer.compactFolders": false,
  "code-runner.runInTerminal": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "python": "cls ; python -u"
  },
  "code-runner.ignoreSelection": true,
  "security.workspace.trust.untrustedFiles": "open",
  "workbench.editorAssociations": {
    "*.exe": "default",
    "*.pf": "default"
  },
  "explorer.confirmDelete": false,
  "git.autofetch": true,
  "files.autoSave": "afterDelay",
  "files.associations": {
    "*.cfg": "cpp"
  },
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "KIDS THEME COLORFUL",
  "terminal.integrated.defaultProfile.windows": "Powershell",
}
```

---

## 🙌 Créditos

> Criado com ❤️ por [Alan Marques (M0rdek4y)](https://github.com/MarqueesDev)

---

## 🧠 Licença

[©Licença MIT](https://github.com/MarqueesDev/kids-theme/blob/main/LICENSE.txt) — Livre para usar, modificar e compartilhar.
