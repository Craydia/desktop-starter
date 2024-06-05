import { WIN_MINIMIZE_CHANNEL, WIN_MAXIMIZE_CHANNEL, WIN_CLOSE_CHANNEL } from "./window-channels";

export function exposeWindowContext() {
    const { contextBridge, ipcRenderer } = window.require("electron");

    // Check if the OS is not Windows, return early if true
    if (process.platform !== 'win32') {
        return;
    }

    console.log(process.platform)

    contextBridge.exposeInMainWorld("electronWindow", {
        minimize: () => ipcRenderer.invoke(""),
        maximize: () => ipcRenderer.invoke(""),
        close: () => ipcRenderer.invoke(""),
    });
}
