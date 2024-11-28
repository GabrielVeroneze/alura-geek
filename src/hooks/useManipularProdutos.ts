import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { produtosAtom } from '@/state/atoms'
import { atualizarProduto, buscarProdutos, criarProduto, removerProduto } from '@/services/produtos'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'
import { Produto } from '@/types/Produto'

export const useManipularProdutos = () => {
    const [produtos, setProdutos] = useRecoilState(produtosAtom)

    useEffect(() => {
        const carregarProdutos = async () => {
            try {
                const produtosCarregados = await buscarProdutos()
                setProdutos(produtosCarregados)
            } catch (erro) {
                console.log(erro)
            }
        }
        carregarProdutos()
    }, [setProdutos])

    const cadastrarProduto = async (produto: Produto) => {
        try {
            await criarProduto(produto)

            exibirAlerta('success', 'Produto adicionado com sucesso!')
        } catch (erro) {
            if (erro instanceof Error) {
                exibirAlerta('error', erro.message)
            }
        }
    }

    const editarProduto = async (produtoId: string, produto: Produto) => {
        try {
            await atualizarProduto(produtoId, produto)

            exibirAlerta('success', 'Produto atualizado com sucesso!')
        } catch (erro) {
            if (erro instanceof Error) {
                exibirAlerta('error', erro.message)
            }
        }
    }

    const excluirProduto = async (produtoId: string) => {
        try {
            await removerProduto(produtoId)

            setProdutos(
                produtos.filter(produto => produto.id !== produtoId)
            )

            exibirAlerta('success', 'Produto removido com sucesso!')
        } catch (erro) {
            if (erro instanceof Error) {
                exibirAlerta('error', erro.message)
            }
        }
    }

    return {
        produtos,
        cadastrarProduto,
        editarProduto,
        excluirProduto,
    }
}
