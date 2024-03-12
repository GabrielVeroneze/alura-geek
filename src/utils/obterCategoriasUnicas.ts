import { IProduto } from '@/interfaces/IProduto'

export const obterCategoriasUnicas = (produtos: IProduto[]) => {
    const todasCategorias = produtos.map(produto => produto.categoria)

    const categoriasUnicas = new Set(todasCategorias)

    return [...categoriasUnicas]
}
