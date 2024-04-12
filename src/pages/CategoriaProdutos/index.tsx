import { useParams } from 'react-router-dom'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { filtrarProdutosPorCategoria } from '@/utils/operacoesCategorias'
import GrupoProdutos from '@/components/GrupoProdutos'
import styles from './CategoriaProdutos.module.scss'

const CategoriaProdutos = () => {
    const { produtos } = useManipularProdutos()
    const { categoria } = useParams()

    const categoriaValida = categoria || ''

    return (
        <main className={styles.principal}>
            <GrupoProdutos
                categoria={`Todos os Produtos - ${categoria}`}
                produtos={filtrarProdutosPorCategoria(
                    produtos,
                    categoriaValida,
                    produtos.length
                )}
            />
        </main>
    )
}

export default CategoriaProdutos
