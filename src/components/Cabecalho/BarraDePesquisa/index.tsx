import styles from './BarraDePesquisa.module.scss'

const BarraDePesquisa = () => {
    return (
        <input
            className={styles.barra}
            type="search"
            placeholder="O que deseja encontrar?"
        />
    )
}

export default BarraDePesquisa
