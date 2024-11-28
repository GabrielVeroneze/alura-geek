import { selector } from 'recoil'
import { produtosAtom, termoDePesquisaAtom } from '@/state/atoms'
import { Produto } from '@/types/Produto'

export const produtosPesquisadosSelector = selector<Produto[]>({
    key: 'produtosPesquisadosSelector',
    get: ({ get }) => {
        const produtos = get(produtosAtom)
        const termo = get(termoDePesquisaAtom)

        const regex = new RegExp(termo, 'i')

        const resultadoPesquisa = produtos.filter(produto =>
            regex.test(produto.nome)
        )

        return resultadoPesquisa
    },
})
