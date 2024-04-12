import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { filtrarProdutosPorCategoria, obterCategoriasUnicas } from '@/utils/operacoesCategorias'
import GrupoProdutosDestaque from '@/components/GrupoProdutosDestaque'
import Banner from './Banner'
import styles from './Home.module.scss'

const Home = () => {
    const { produtos } = useManipularProdutos()
    const categorias = obterCategoriasUnicas(produtos)

    return (
        <>
            <Banner />
            <main className={styles.principal}>
                {categorias.map(categoria => (
                    <GrupoProdutosDestaque
                        key={self.crypto.randomUUID()}
                        categoria={categoria}
                        produtos={filtrarProdutosPorCategoria(
                            produtos,
                            categoria,
                            6
                        )}
                    />
                ))}
            </main>
        </>
    )
}

export default Home
