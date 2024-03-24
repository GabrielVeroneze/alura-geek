import { atom } from 'recoil'

export const termoDePesquisaState = atom<string>({
    key: 'termoDePesquisaState',
    default: '',
})
