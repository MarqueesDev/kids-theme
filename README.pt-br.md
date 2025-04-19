# 🌑 Tema Pitch Black para VS Code

Um **tema preto absoluto**, feito para seguir os **padrões visuais do VS Code** — mas pensado para quem acha os temas oficiais **claros demais**.  
Inclui também **compatibilidade com arquivos `.cfg`**, garantindo consistência até nos arquivos personalizados.

---

## ✨ Recursos

- 🎨 Fundo preto profundo, confortável para os olhos  
- 🧩 Alinhado com as cores nativas da interface do VS Code  
- 🗂️ Suporte estendido para arquivos `.cfg`  
- 💻 Ideal para longas sessões de codificação ou ambientes escuros  

---

## ⚙️ Instalação

1. Clone ou baixe o repositório do tema.  
2. No VS Code: `Arquivo → Preferências → Tema de Cor → Instalar do VSIX...`  
3. Selecione o `.vsix` (caso tenha), ou mova a pasta do tema para `.vscode/extensions`  
4. Ative o tema pela lista de temas de cor.

---

## 📂 Suporte de Arquivos

Realce de sintaxe para:

`.js`, `.ts`, `.json`, `.yaml`, `.yml`, `.xml`, `.html`, `.css`, `.sql`,  
`.cpp`, `.py`, `.sh`, `.bash`, `.zsh`, `.cfg`, `.ini`, `.properties`,  
`.env`, `.markdown`, `.php`, `.blade.php`

---

## 🛠️ Configurações Recomendadas

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
  "liveServer.settings.donotShowInfoMsg": true,
  "git.autofetch": true,
  "files.autoSave": "afterDelay",
  "files.associations": {
    "*.cfg": "cpp"
  },
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Pitch Black",
  "terminal.integrated.defaultProfile.windows": "Prompt de Comando",
  "runme.flags.disableSaveRestriction": true
}
```

---

## 🖼️ Visualização

![Preview](https://github.com/MarqueesDev/kids-theme/blob/main/screenshots/preview.png?raw=true)

---

## 🙌 Créditos

> Criado com ❤️ por [Alan Marques (M0rdek4y)](https://github.com/MarqueesDev)

---

## 🧠 Licença

Licença MIT — Livre para usar, modificar e compartilhar.
