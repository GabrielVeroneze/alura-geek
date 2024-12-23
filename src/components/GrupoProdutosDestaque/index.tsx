import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Produto } from '@/types/Produto'
import ProdutoCard from '@/components/ProdutoCard'
import styles from './GrupoProdutosDestaque.module.scss'

interface GrupoProdutosDestaqueProps {
    categoria: string
    produtos: Produto[]
}

const GrupoProdutosDestaque = memo(({ categoria, produtos }: GrupoProdutosDestaqueProps) => {
    return (
        <section id={categoria} className={styles.grupo}>
            <div className={styles.topo}>
                <h3 className={styles.titulo}>{categoria}</h3>
                <Link to={`/produtos/${categoria}`} className={styles.botao}>
                    Ver tudo
                </Link>
            </div>
            <ul className={styles.lista}>
                {produtos.map(produto => (
                    <ProdutoCard
                        key={produto.id}
                        modelo="visualizar"
                        produto={produto}
                    />
                ))}
            </ul>
        </section>
    )
})

export default GrupoProdutosDestaque
