import { IProduto } from '@/interfaces/IProduto'

export const obterCategoriasUnicas = (produtos: IProduto[]) => {
    const todasCategorias = produtos.map(produto => produto.categoria)

    const categoriasUnicas = new Set(todasCategorias)

    return [...categoriasUnicas]
}

export const filtrarProdutosPorCategoria = (produtos: IProduto[], categoria: string) => {
    const produtosFiltrados = produtos.filter(produto =>
        produto.categoria === categoria
    )

    produtosFiltrados.splice(6, produtosFiltrados.length)

    return produtosFiltrados
}
