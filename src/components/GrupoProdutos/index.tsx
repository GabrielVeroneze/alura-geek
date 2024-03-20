import { IProduto } from '@/interfaces/IProduto'
import Produto from './Produto'
import styles from './GrupoProdutos.module.scss'

interface GrupoProdutosProps {
    modelo: 'destaque' | 'relacionado' | 'editar'
    categoria: string
    produtos: IProduto[]
}

const GrupoProdutos = ({ modelo, categoria, produtos }: GrupoProdutosProps) => {
    return (
        <section className={styles.grupo}>
            <div className={styles.topo}>
                <h3 className={styles.categoria}>{categoria}</h3>
                {modelo === 'destaque' && (
                    <button className={styles.botaoDestaque}>
                        Ver tudo
                    </button>
                )}
                {modelo === 'editar' && (
                    <button className={styles.botaoEditar}>
                        Adicionar produto
                    </button>
                )}
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
