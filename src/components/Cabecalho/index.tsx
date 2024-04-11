import { Link, useLocation } from 'react-router-dom'
import { useAutenticarUsuario } from '@/hooks/useAutenticarUsuario'
import BarraDePesquisa from './BarraDePesquisa'
import styles from './Cabecalho.module.scss'
import logo from '@/assets/images/logo.svg'

const Cabecalho = () => {
    const { pathname } = useLocation()
    const { usuario } = useAutenticarUsuario()

    return (
        <header className={styles.cabecalho}>
            <Link to="/" className={styles.logo}>
                <img
                    className={styles.imagem}
                    src={logo}
                    alt="Logotipo da AluraGeek"
                />
            </Link>
            {!usuario && pathname !== '/login' && (
                <Link
                    to="/login"
                    className={`${styles.botao} ${styles.login}`}
                >
                    Login
                </Link>
            )}
            {usuario && pathname !== '/admin/produtos' && (
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
