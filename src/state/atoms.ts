import { atom } from 'recoil'
import { IProduto } from '@/interfaces/IProduto'
import { IUsuario } from '@/interfaces/IUsuario'

export const produtosAtom = atom<IProduto[]>({
    key: 'produtosAtom',
    default: [],
})

export const termoDePesquisaAtom = atom<string>({
    key: 'termoDePesquisaAtom',
    default: '',
})

export const usuarioAtom = atom<IUsuario | null>({
    key: 'usuarioAtom',
    default: null,
})
