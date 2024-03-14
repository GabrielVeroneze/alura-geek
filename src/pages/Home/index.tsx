import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { filtrarProdutosPorCategoria, obterCategoriasUnicas } from '@/utils/operacoesCategorias'
import Cabecalho from '@/components/Cabecalho'
import GrupoProdutos from '@/components/GrupoProdutos'
import Rodape from '@/components/Rodape'
import Desenvolvedor from '@/components/Desenvolvedor'
import Banner from './Banner'
import styles from './Home.module.scss'

const Home = () => {
    const { produtos } = useManipularProdutos()
    const categorias = obterCategoriasUnicas(produtos)

    return (
        <>
            <Cabecalho />
            <Banner />
            <main className={styles.principal}>
                {categorias.map(categoria => (
                    <GrupoProdutos
                        key={self.crypto.randomUUID()}
                        categoria={categoria}
                        produtos={filtrarProdutosPorCategoria(
                            produtos,
                            categoria
                        )}
                    />
                ))}
            </main>
            <Rodape />
            <Desenvolvedor />
        </>
    )
}

export default Home
