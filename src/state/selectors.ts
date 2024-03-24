import { selector } from 'recoil'
import { produtosAtom, termoDePesquisaAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'
import http from '@/http'

export const produtosAsyncSelector = selector<IProduto[]>({
    key: 'produtosAsyncSelector',
    get: async () => {
        const resposta = await http.get<IProduto[]>('produtos')
        const dados = resposta.data

        return dados
    },
})

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
