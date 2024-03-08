import styles from './BarraDePesquisa.module.scss'

const BarraDePesquisa = () => {
    return (
        <div className={styles.barra}>
            <input
                className={styles.input}
                type="search"
                placeholder="O que deseja encontrar?"
            />
            <button className={styles.lupa}></button>
        </div>
    )
}

export default BarraDePesquisa
