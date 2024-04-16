import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { produtosAtom } from '@/state/atoms'
import { jsonServerApi } from '@/services/api'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'
import { IProduto } from '@/interfaces/IProduto'

export const useManipularProdutos = () => {
    const [produtos, setProdutos] = useRecoilState(produtosAtom)

    useEffect(() => {
        carregarProdutos()
    }, [])

    const carregarProdutos = () => {
        jsonServerApi
            .get<IProduto[]>('produtos')
            .then(resposta => {
                setProdutos(resposta.data)
            })
    }

    const cadastrarProduto = (produto: IProduto) => {
        jsonServerApi
            .post<IProduto>('produtos', produto)
            .then(() => {
                exibirAlerta('success', 'Produto adicionado com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao adicionar o produto.')
            })
    }

    const editarProduto = (produtoId: string, produto: IProduto) => {
        jsonServerApi
            .put<IProduto>(`produtos/${produtoId}`, produto)
            .then(() => {
                exibirAlerta('success', 'Produto atualizado com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao editar o produto.')
            })
    }

    const removerProduto = (produtoId: string) => {
        jsonServerApi
            .delete(`produtos/${produtoId}`)
            .then(() => {
                exibirAlerta('success', 'Produto removido com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao remover o produto.')
            })
    }

    return {
        produtos,
        cadastrarProduto,
        editarProduto,
        removerProduto,
    }
}
