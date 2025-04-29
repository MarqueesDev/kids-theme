"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    // Verifica se a notificação já foi mostrada antes
    const hasShown = context.globalState.get('welcomeShown');
    // Verifica o tema atual e garante que é uma string
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    if (typeof currentTheme !== 'string') {
        console.error("Tema atual não é uma string:", currentTheme);
        return; // Se não for uma string, não continua
    }
    console.log(`🎨 Tema atual: ${currentTheme}`); // Verifica se está retornando o tema atual corretamente
    // Lista de temas válidos para a notificação
    const validThemes = ['kids-theme-colorful', 'kids-theme-color-theme'];
    // Se o tema for um dos válidos e a notificação ainda não foi mostrada
    if (!hasShown && validThemes.includes(currentTheme)) {
        vscode.window.showInformationMessage('Deseja aplicar as configurações recomendadas do tema?', 'Sim', 'Agora não').then((resposta) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (resposta === 'Sim') {
                const config = vscode.workspace.getConfiguration();
                const target = vscode.ConfigurationTarget.Global;
                try {
                    // Instala o tema de ícones se necessário
                    const extensions = vscode.extensions.all.map(ext => ext.id);
                    if (!extensions.includes('PKief.material-icon-theme')) {
                        yield vscode.commands.executeCommand('workbench.extensions.installExtension', 'PKief.material-icon-theme');
                    }
                    // Atualiza as configurações principais
                    yield config.update('workbench.startupEditor', 'none', target);
                    yield config.update('editor.fontSize', 17, target);
                    yield config.update('editor.lineNumbers', 'on', target);
                    yield config.update('editor.wordWrap', 'on', target);
                    yield config.update('explorer.compactFolders', false, target);
                    yield config.update('code-runner.runInTerminal', true, target);
                    yield config.update('code-runner.clearPreviousOutput', true, target);
                    yield config.update('code-runner.executorMap', { "python": "cls ; python -u" }, target);
                    yield config.update('code-runner.ignoreSelection', true, target);
                    yield config.update('security.workspace.trust.untrustedFiles', 'open', target);
                    yield config.update('workbench.editorAssociations', {
                        "*.exe": "default",
                        "*.pf": "default"
                    }, target);
                    // Verifica se a configuração do Live Server existe antes de atualizar
                    if (((_a = config.inspect('liveServer.settings.donotShowInfoMsg')) === null || _a === void 0 ? void 0 : _a.globalValue) !== undefined) {
                        yield config.update('liveServer.settings.donotShowInfoMsg', true, target);
                    }
                    // Outras configurações adicionais
                    yield config.update('git.autofetch', true, target);
                    yield config.update('files.autoSave', 'afterDelay', target);
                    yield config.update('files.associations', {
                        "*.cfg": "cpp"
                    }, target);
                    yield config.update('workbench.colorTheme', 'KIDS THEME COLORFUL', target);
                    yield config.update('workbench.iconTheme', 'material-icon-theme', target);
                    yield config.update('terminal.integrated.defaultProfile.windows', 'Command Prompt', target);
                    // Marcar a notificação como mostrada
                    context.globalState.update('welcomeShown', true);
                }
                catch (error) {
                    console.error("Erro ao aplicar configurações recomendadas:", error);
                }
            }
        }));
    }
}
function deactivate() { }
