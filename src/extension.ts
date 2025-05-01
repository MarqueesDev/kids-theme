import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
    const hasShown = await context.globalState.get<boolean>('welcomeShown');
    if (!hasShown) {
        const resposta = await vscode.window.showInformationMessage(
            'Deseja aplicar as configurações recomendadas do tema?',
            'Sim',
            'Agora não'
        );

        if (resposta === 'Sim') {
            const config = vscode.workspace.getConfiguration();
            const target = vscode.ConfigurationTarget.Global;

            try {
                const extensions = vscode.extensions.all.map(ext => ext.id);
                if (!extensions.includes('PKief.material-icon-theme')) {
                    await vscode.commands.executeCommand(
                        'workbench.extensions.installExtension',
                        'PKief.material-icon-theme'
                    );
                }

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

                if (config.inspect('liveServer.settings.donotShowInfoMsg')?.globalValue !== undefined) {
                    await config.update('liveServer.settings.donotShowInfoMsg', true, target);
                }

                await config.update('git.autofetch', true, target);
                await config.update('files.autoSave', 'afterDelay', target);
                await config.update('files.associations', {
                    "*.cfg": "cpp"
                }, target);
                await config.update('workbench.colorTheme', 'KIDS THEME COLORFUL', target);
                await config.update('workbench.iconTheme', 'material-icon-theme', target);
                await config.update('terminal.integrated.defaultProfile.windows', 'PowerShell', target);

                await context.globalState.update('welcomeShown', true);
            } catch (error) {
                console.error("Erro ao aplicar configurações recomendadas:", error);
            }
        }
    }
}

export function deactivate() {}
