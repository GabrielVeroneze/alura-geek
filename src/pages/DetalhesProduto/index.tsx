import { useObterProduto } from '@/hooks/useObterProduto'
import styles from './DetalhesProduto.module.scss'

const DetalhesProduto = () => {
    const { produto } = useObterProduto()
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
        </main>
    )
}

export default DetalhesProduto
