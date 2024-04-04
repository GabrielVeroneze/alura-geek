import CampoTexto from '@/components/CampoTexto'
import styles from './Login.module.scss'

const Login = () => {
    return (
        <main className={styles.principal}>
            <h2 className={styles.titulo}>Iniciar Sessão</h2>
            <form className={styles.formulario}>
                <CampoTexto
                    placeholder="Escreva seu email"
                    inputConfig={{
                        type: 'email',
                        name: 'email',
                    }}
                />
                <CampoTexto
                    placeholder="Escreva sua senha"
                    inputConfig={{
                        type: 'password',
                        name: 'senha',
                    }}
                />
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
