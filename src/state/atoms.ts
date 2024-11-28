import { atom } from 'recoil'
import { IUsuario } from '@/interfaces/IUsuario'
import { Produto } from '@/types/Produto'

export const produtosAtom = atom<Produto[]>({
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
