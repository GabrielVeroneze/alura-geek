import { Link } from 'react-router-dom'
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
        <section id={categoria} className={`${styles.grupo} ${styles[modelo]}`}>
            <div className={styles.topo}>
                <h3 className={styles.categoria}>{categoria}</h3>
                {modelo === 'destaque' && (
                    <button className={styles.botao}>Ver tudo</button>
                )}
                {modelo === 'editar' && (
                    <Link to="/admin/novo-produto" className={styles.botao}>
                        Adicionar produto
                    </Link>
                )}
            </div>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <Produto
                        key={produto.id}
                        modelo={modelo === 'editar' ? 'editar' : 'visualizar'}
                        produto={produto}
                    />
                ))}
            </ul>
        </section>
    )
}

export default GrupoProdutos
