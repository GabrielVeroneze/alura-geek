import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { filtrarProdutosPorCategoria, obterCategoriasUnicas } from '@/utils/operacoesCategorias'
import GrupoProdutos from '@/components/GrupoProdutos'
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
                    <GrupoProdutos
                        key={self.crypto.randomUUID()}
                        modelo="destaque"
                        categoria={categoria}
                        produtos={filtrarProdutosPorCategoria(
                            produtos,
                            categoria
                        )}
                    />
                ))}
            </main>
        </>
    )
}

export default Home
