import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { produtosAtom } from '@/state/atoms'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'
import { IProduto } from '@/interfaces/IProduto'
import api from '@/services/api'

export const useManipularProdutos = () => {
    const [produtos, setProdutos] = useRecoilState(produtosAtom)

    useEffect(() => {
        const carregarProdutos = () => {
            api
                .get<IProduto[]>('produtos')
                .then(resposta => {
                    setProdutos(resposta.data)
                })
        }
        carregarProdutos()
    }, [setProdutos])

    const cadastrarProduto = (produto: IProduto) => {
        api
            .post<IProduto>('produtos', produto)
            .then(() => {
                exibirAlerta('success', 'Produto adicionado com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao adicionar o produto.')
            })
    }

    const editarProduto = (produtoId: string, produto: IProduto) => {
        api
            .put<IProduto>(`produtos/${produtoId}`, produto)
            .then(() => {
                exibirAlerta('success', 'Produto atualizado com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao editar o produto.')
            })
    }

    const removerProduto = (produtoId: string) => {
        api
            .delete(`produtos/${produtoId}`)
            .then(() => {
                setProdutos(
                    produtos.filter(produto => produto.id !== produtoId)
                )

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
