import { Link } from 'react-router-dom'
import Contato from './Contato'
import logo from '@/assets/images/logo.svg'
import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <img
                className={styles.imagem}
                src={logo}
                alt="Logotipo da AluraGeek"
            />
            <ul className={styles.lista}>
                <li>
                    <Link className={styles.link} to="#">
                        Quem somos nós
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="#">
                        Política de privacidade
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="#">
                        Programa fidelidade
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="#">
                        Nossas lojas
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="#">
                        Quero ser franqueado
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to="#">
                        Anuncie aqui
                    </Link>
                </li>
            </ul>
            <Contato />
        </footer>
    )
}

export default Rodape
