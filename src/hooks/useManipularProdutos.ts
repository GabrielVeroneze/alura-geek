import { useRecoilValue } from 'recoil'
import { produtosAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'
import http from '@/http'

export const useManipularProdutos = () => {
    const produtos = useRecoilValue<IProduto[]>(produtosAtom)

    const cadastrarProduto = (produto: IProduto) => {
        http.post<IProduto>('produtos', produto)
            .then(() => {
                alert('Projeto adicionado com sucesso!')
            })
            .catch(() => {
                alert('Erro ao cadastrar o projeto.')
            })
    }

    return {
        produtos,
        cadastrarProduto,
    }
}
