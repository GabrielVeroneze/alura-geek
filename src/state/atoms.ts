import { atom } from 'recoil'
export const termoDePesquisaAtom = atom<string>({
    key: 'termoDePesquisaAtom',
    default: '',
})
