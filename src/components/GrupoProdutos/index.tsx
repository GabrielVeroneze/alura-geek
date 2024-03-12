import { IProduto } from '@/interfaces/IProduto'
import Produto from './Produto'
import styles from './GrupoProdutos.module.scss'

interface GrupoProdutosProps {
    categoria: string
    produtos: IProduto[]
}

const GrupoProdutos = ({ categoria, produtos }: GrupoProdutosProps) => {
    return (
        <section className={styles.grupo}>
            <div className={styles.topo}>
                <h3 className={styles.categoria}>{categoria}</h3>
                <button className={styles.botao}>Ver tudo</button>
            </div>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <Produto key={produto.id} {...produto} />
                ))}
            </ul>
        </section>
    )
}

export default GrupoProdutos
