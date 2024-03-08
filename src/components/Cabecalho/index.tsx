import BarraDePesquisa from './BarraDePesquisa'
import styles from './Cabecalho.module.scss'
import logo from '@/assets/images/logo.svg'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img
                className={styles.imagem}
                src={logo}
                alt="Logotipo da AluraGeek"
            />
            <button className={styles.botao}>Login</button>
            <BarraDePesquisa />
        </header>
    )
}

export default Cabecalho
