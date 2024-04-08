import { atom } from 'recoil'
import { produtosAsyncSelector } from '@/state/selectors'
import { IProduto } from '@/interfaces/IProduto'
import { IUsuario } from '@/interfaces/IUsuario'

export const produtosAtom = atom<IProduto[]>({
    key: 'produtosAtom',
    default: produtosAsyncSelector,
})

export const termoDePesquisaAtom = atom<string>({
    key: 'termoDePesquisaAtom',
    default: '',
})

export const usuarioAtom = atom<IUsuario | null>({
    key: 'usuarioAtom',
    default: null,
})
