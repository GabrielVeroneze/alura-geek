import { useObterProduto } from '@/hooks/useObterProduto'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { filtrarProdutosPorCategoria } from '@/utils/operacoesCategorias'
import GrupoProdutos from '@/components/GrupoProdutos'
import styles from './DetalhesProduto.module.scss'

const DetalhesProduto = () => {
    const { produto } = useObterProduto()
    const { produtos } = useManipularProdutos()

    if (!produto) {
        return null
    }

    return (
        <main className={styles.principal}>
            <section className={styles.produto}>
                <div className={styles.wrapper}>
                    <img
                        className={styles.imagem}
                        src={produto.imagem}
                        alt={produto.nome}
                    />
                </div>
                <div className={styles.info}>
                    <h4 className={styles.nome}>{produto.nome}</h4>
                    <p className={styles.preco}>R$ {produto.preco}</p>
                    <p className={styles.descricao}>{produto.descricao}</p>
                </div>
            </section>
            <GrupoProdutos
                modelo="relacionado"
                categoria="Produtos similares"
                produtos={filtrarProdutosPorCategoria(
                    produtos,
                    produto.categoria
                )}
            />
        </main>
    )
}

export default DetalhesProduto
