import shuffle from 'just-shuffle'
import { filtrarProdutosPorCategoria } from '@/utils/operacoesCategorias'
import { IProduto } from '@/interfaces/IProduto'

export const obterProdutosRelacionados = (produtos: IProduto[], produtoSelecionado: IProduto) => {
    const produtosSemSelecionado = produtos.filter(produto =>
        produto.id !== produtoSelecionado.id
    )

    const produtosRelacionados = filtrarProdutosPorCategoria(
        produtosSemSelecionado,
        produtoSelecionado.categoria
    )

    const produtosRelacionadosEmbaralhados = shuffle(produtosRelacionados)

    return produtosRelacionadosEmbaralhados
}
