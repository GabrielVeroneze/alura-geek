import { selector } from 'recoil'
import { produtosAtom, termoDePesquisaAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'

export const produtosPesquisadosSelector = selector<IProduto[]>({
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
