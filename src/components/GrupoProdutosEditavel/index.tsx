import { Link } from 'react-router-dom'
import { IProduto } from '@/interfaces/IProduto'
import Produto from '@/components/Produto'
import styles from './GrupoProdutosEditavel.module.scss'

interface GrupoProdutosEditavelProps {
    categoria: string
    produtos: IProduto[]
    removerProduto: (id: string) => void
}

const GrupoProdutosEditavel = ({ categoria, produtos, removerProduto }: GrupoProdutosEditavelProps) => {
    return (
        <section id={categoria} className={styles.grupo}>
            <div className={styles.topo}>
                <h3 className={styles.titulo}>{categoria}</h3>
                <Link to="/admin/novo-produto" className={styles.botao}>
                    Adicionar produto
                </Link>
            </div>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <Produto
                        key={produto.id}
                        modelo="editar"
                        produto={produto}
                        removerProduto={removerProduto}
                    />
                ))}
            </ul>
        </section>
    )
}

export default GrupoProdutosEditavel
