import styles from './Login.module.scss'

const Login = () => {
    return (
        <main className={styles.principal}>
            <h2 className={styles.titulo}>Iniciar Sessão</h2>
            <form className={styles.formulario}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Escreva seu email"
                    aria-label="Escreva seu email"
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Escreva sua senha"
                    aria-label="Escreva sua senha"
                />
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
