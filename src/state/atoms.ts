import { atom } from 'recoil'
import { Produto } from '@/types/Produto'
import { Usuario } from '@/types/Usuario'

export const produtosAtom = atom<Produto[]>({
    key: 'produtosAtom',
    default: [],
})

export const termoDePesquisaAtom = atom<string>({
    key: 'termoDePesquisaAtom',
    default: '',
})

export const usuarioAtom = atom<Usuario | null>({
    key: 'usuarioAtom',
    default: null,
})
