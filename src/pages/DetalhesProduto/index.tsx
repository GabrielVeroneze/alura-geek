import { useObterProduto } from '@/hooks/useObterProduto'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { obterProdutosRelacionados } from '@/utils/obterProdutosRelacionados'
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
                    <h2 className={styles.nome}>{produto.nome}</h2>
                    <p className={styles.preco}>R$ {produto.preco}</p>
                    <p className={styles.descricao}>{produto.descricao}</p>
                </div>
            </section>
            <GrupoProdutos
                modelo="relacionado"
                categoria="Produtos similares"
                produtos={obterProdutosRelacionados(produtos, produto)}
            />
        </main>
    )
}

export default DetalhesProduto
