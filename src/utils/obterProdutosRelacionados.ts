import shuffle from 'just-shuffle'
import { filtrarProdutosPorCategoria } from '@/utils/operacoesCategorias'
import { Produto } from '@/types/Produto'

export const obterProdutosRelacionados = (produtos: Produto[], produtoSelecionado: Produto) => {
    const produtosSemSelecionado = produtos.filter(produto =>
        produto.id !== produtoSelecionado.id
    )

    const produtosRelacionados = filtrarProdutosPorCategoria(
        produtosSemSelecionado,
        produtoSelecionado.categoria,
        6
    )

    const produtosRelacionadosEmbaralhados = shuffle(produtosRelacionados)

    return produtosRelacionadosEmbaralhados
}
