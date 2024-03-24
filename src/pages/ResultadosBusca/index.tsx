import { usePesquisarProdutos } from '@/hooks/usePesquisarProdutos'
import GrupoProdutos from '@/components/GrupoProdutos'
import styles from './ResultadoBusca.module.scss'

const ResultadosBusca = () => {
    const { resultadoProdutos } = usePesquisarProdutos()

    return (
        <main className={styles.resultados}>
            <GrupoProdutos
                modelo="relacionado"
                categoria={`${resultadoProdutos.length} produtos encontrados`}
                produtos={resultadoProdutos}
            />
        </main>
    )
}

export default ResultadosBusca
