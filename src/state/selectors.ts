import { selector } from 'recoil'
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
