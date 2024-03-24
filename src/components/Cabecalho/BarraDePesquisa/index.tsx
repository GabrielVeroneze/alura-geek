import { useTermoDePesquisa } from '@/hooks/useTermoDePesquisa'
import styles from './BarraDePesquisa.module.scss'

const BarraDePesquisa = () => {
    const { termo, setTermo } = useTermoDePesquisa()

    return (
        <div className={styles.barra}>
            <input
                className={styles.input}
                type="search"
                placeholder="O que deseja encontrar?"
                value={termo}
                onChange={evento => setTermo(evento.target.value)}
            />
            <button className={styles.lupa}></button>
        </div>
    )
}

export default BarraDePesquisa
