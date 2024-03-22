import { Link, useLocation } from 'react-router-dom'
import BarraDePesquisa from './BarraDePesquisa'
import styles from './Cabecalho.module.scss'
import logo from '@/assets/images/logo.svg'

const Cabecalho = () => {
    const { pathname } = useLocation()

    return (
        <header className={styles.cabecalho}>
            <img
                className={styles.imagem}
                src={logo}
                alt="Logotipo da AluraGeek"
            />
            {pathname === '/' && (
                <Link
                    to="/login"
                    className={`${styles.botao} ${styles.login}`}
                >
                    Login
                </Link>
            )}
            {pathname === '/admin/novo-produto' && (
                <Link
                    to="/admin/produtos"
                    className={`${styles.botao} ${styles.menu}`}
                >
                    Menu administrador
                </Link>
            )}
            <BarraDePesquisa />
        </header>
    )
}

export default Cabecalho
