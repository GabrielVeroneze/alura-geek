import { atom } from 'recoil'
import { produtosAsyncSelector } from '@/state/selectors'
import { IProduto } from '@/interfaces/IProduto'

export const produtosAtom = atom<IProduto[]>({
    key: 'produtosAtom',
    default: produtosAsyncSelector,
})

export const termoDePesquisaAtom = atom<string>({
    key: 'termoDePesquisaAtom',
    default: '',
})
