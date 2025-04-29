import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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
        vscode.window.showInformationMessage(
            'Deseja aplicar as configurações recomendadas do tema?', 
            'Sim', 'Agora não'
        ).then(async (resposta) => {
            if (resposta === 'Sim') {
                const config = vscode.workspace.getConfiguration();
                const target = vscode.ConfigurationTarget.Global;

                try {
                    // Instala o tema de ícones se necessário
                    const extensions = vscode.extensions.all.map(ext => ext.id);
                    if (!extensions.includes('PKief.material-icon-theme')) {
                        await vscode.commands.executeCommand(
                            'workbench.extensions.installExtension',
                            'PKief.material-icon-theme'
                        );
                    }

                    // Atualiza as configurações principais
                    await config.update('workbench.startupEditor', 'none', target);
                    await config.update('editor.fontSize', 17, target);
                    await config.update('editor.lineNumbers', 'on', target);
                    await config.update('editor.wordWrap', 'on', target);
                    await config.update('explorer.compactFolders', false, target);
                    await config.update('code-runner.runInTerminal', true, target);
                    await config.update('code-runner.clearPreviousOutput', true, target);
                    await config.update('code-runner.executorMap', { "python": "cls ; python -u" }, target);
                    await config.update('code-runner.ignoreSelection', true, target);
                    await config.update('security.workspace.trust.untrustedFiles', 'open', target);
                    await config.update('workbench.editorAssociations', {
                        "*.exe": "default",
                        "*.pf": "default"
                    }, target);

                    // Verifica se a configuração do Live Server existe antes de atualizar
                    if (config.inspect('liveServer.settings.donotShowInfoMsg')?.globalValue !== undefined) {
                        await config.update('liveServer.settings.donotShowInfoMsg', true, target);
                    }

                    // Outras configurações adicionais
                    await config.update('git.autofetch', true, target);
                    await config.update('files.autoSave', 'afterDelay', target);
                    await config.update('files.associations', {
                        "*.cfg": "cpp"
                    }, target);
                    await config.update('workbench.colorTheme', 'KIDS THEME COLORFUL', target);
                    await config.update('workbench.iconTheme', 'material-icon-theme', target);
                    await config.update('terminal.integrated.defaultProfile.windows', 'Command Prompt', target);

                    // Marcar a notificação como mostrada
                    context.globalState.update('welcomeShown', true);
                } catch (error) {
                    console.error("Erro ao aplicar configurações recomendadas:", error);
                }
            }
        });
    }
}

export function deactivate() {}
