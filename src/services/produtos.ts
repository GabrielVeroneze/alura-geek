import api from '@/services/api'
import { IProduto } from '@/interfaces/IProduto'

export async function buscarProdutos(): Promise<IProduto[]> {
    try {
        const resposta = await api.get<IProduto[]>('produtos')
        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os produtos.')
    }
}

export async function criarProduto(produto: IProduto): Promise<void> {
    try {
        await api.post<IProduto>('produtos', produto)
    } catch {
        throw new Error('Erro ao adicionar o produto.')
    }
}

export async function atualizarProduto(produtoId: string, produto: IProduto): Promise<void> {
    try {
        await api.put<IProduto>(`produtos/${produtoId}`, produto)
    } catch {
        throw new Error('Erro ao editar o produto.')
    }
}

export async function removerProduto(produtoId: string): Promise<void> {
    try {
        await api.delete(`produtos/${produtoId}`)
    } catch {
        throw new Error('Erro ao remover o produto.')
    }
}
