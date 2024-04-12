import { IProduto } from '@/interfaces/IProduto'
import Produto from '@/components/Produto'
import styles from './GrupoProdutos.module.scss'

interface GrupoProdutosProps {
    categoria: string
    produtos: IProduto[]
}

const GrupoProdutos = ({ categoria, produtos }: GrupoProdutosProps) => {
    return (
        <section id={categoria} className={styles.grupo}>
            <div className={styles.topo}>
                <h3 className={styles.titulo}>{categoria}</h3>
            </div>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <Produto
                        key={produto.id}
                        modelo="visualizar"
                        produto={produto}
                    />
                ))}
            </ul>
        </section>
    )
}

export default GrupoProdutos
