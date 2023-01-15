// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from "electron"
import { ICard } from "./types/ICard"

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld("electronAPI", {
  getAllCards: () => ipcRenderer.invoke("db:card_get_all"),
  getCardById: (id: number) => ipcRenderer.invoke("db:card_get_by_id", id),
  addCard: (dto: ICard) => ipcRenderer.invoke("db:card_add", dto),
  editCard: (dto: ICard) => ipcRenderer.invoke("db:card_edit", dto),
  deleteCardById: (id: number) =>
    ipcRenderer.invoke("db:card_delete_by_id", id),
})
