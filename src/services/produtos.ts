import api from '@/services/api'
import { Produto } from '@/types/Produto'

export async function buscarProdutos(): Promise<Produto[]> {
    try {
        const resposta = await api.get<Produto[]>('produtos')
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os produtos.')
    }
}

export async function buscarProdutoPorId(produtoId: string): Promise<Produto> {
    try {
        const resposta = await api.get<Produto>(`produtos/${produtoId}`)
        return resposta.data
    } catch (error) {
        throw new Error('Erro ao carregar o produto.')
    }
}

export async function criarProduto(produto: Produto): Promise<void> {
    try {
        await api.post<Produto>('produtos', produto)
    } catch {
        throw new Error('Erro ao adicionar o produto.')
    }
}

export async function atualizarProduto(produtoId: string, produto: Produto): Promise<void> {
    try {
        await api.put<Produto>(`produtos/${produtoId}`, produto)
    } catch {
        throw new Error('Erro ao editar o produto.')
    }
}

export async function removerProduto(produtoId: string): Promise<void> {
    try {
        await api.delete<Produto>(`produtos/${produtoId}`)
    } catch {
        throw new Error('Erro ao remover o produto.')
    }
}
