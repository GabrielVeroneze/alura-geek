import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { jsonServerApi } from '@/services/api'
import { produtosAtom } from '@/state/atoms'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'
import { IProduto } from '@/interfaces/IProduto'

export const useManipularProdutos = () => {
    const [produtos, setProdutos] = useRecoilState<IProduto[]>(produtosAtom)

    useEffect(() => {
        const carregarProdutos = () => {
            jsonServerApi
                .get<IProduto[]>('produtos')
                .then(resposta => {
                    setProdutos(resposta.data)
                })
        }
        carregarProdutos()
    }, [setProdutos])

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

    const editarProduto = (produto: IProduto) => {
        jsonServerApi
            .put<IProduto>(`produtos/${produto.id}`, produto)
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
