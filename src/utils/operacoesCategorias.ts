import { Produto } from '@/types/Produto'

export const obterCategoriasUnicas = (produtos: Produto[]) => {
    const todasCategorias = produtos.map(produto => produto.categoria)

    const categoriasUnicas = new Set(todasCategorias)

    return [...categoriasUnicas]
}

export const filtrarProdutosPorCategoria = (
    produtos: Produto[],
    categoria: string,
    quantidade: number
) => {
    const produtosFiltrados = produtos.filter(produto =>
        produto.categoria === categoria
    )

    produtosFiltrados.splice(quantidade, produtosFiltrados.length)

    return produtosFiltrados
}
