import { useTermoDePesquisa } from '@/hooks/useTermoDePesquisa'
import { usePesquisarProdutos } from '@/hooks/usePesquisarProdutos'
import styles from './BarraDePesquisa.module.scss'

const BarraDePesquisa = () => {
    const { termo, setTermo } = useTermoDePesquisa()
    const { redirecionarParaResultados } = usePesquisarProdutos()

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            redirecionarParaResultados()
        }
    }

    return (
        <div
            className={`
                ${styles.container}
                ${barraAberta ? styles.aberta : styles.fechada}
            `}
        >
            <div className={styles.barraPesquisa}>
                <input
                    className={styles.input}
                    type="search"
                    placeholder="O que deseja encontrar?"
                    value={termo}
                    onChange={evento => setTermo(evento.target.value)}
                    onKeyDown={evento => handleKeyDown(evento)}
                />
                <button
                    className={styles.lupa}
                    onClick={() => redirecionarParaResultados()}
                ></button>
            </div>
            <button
                className={styles.botaoAlternar}
            ></button>
        </div>
    )
}

export default BarraDePesquisa
