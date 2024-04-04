import { useFormularioLogin } from '@/hooks/useFormularioLogin'
import CampoTexto from '@/components/CampoTexto'
import styles from './Login.module.scss'

const Login = () => {
    const { loginDados, handleDadosChange } = useFormularioLogin()

    return (
        <main className={styles.principal}>
            <h2 className={styles.titulo}>Iniciar Sessão</h2>
            <form className={styles.formulario}>
                <CampoTexto
                    placeholder="Escreva seu email"
                    inputConfig={{
                        type: 'email',
                        name: 'email',
                        value: loginDados.email,
                        onChange: evento => handleDadosChange(evento),
                    }}
                />
                <CampoTexto
                    placeholder="Escreva sua senha"
                    inputConfig={{
                        type: 'password',
                        name: 'senha',
                        value: loginDados.senha,
                        onChange: evento => handleDadosChange(evento),
                    }}
                />
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
