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
                        pattern: '^[a-zA-Z0-9._+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$',
                        required: true,
                    }}
                />
                <CampoTexto
                    placeholder="Escreva sua senha"
                    inputConfig={{
                        type: 'password',
                        name: 'senha',
                        value: loginDados.senha,
                        onChange: evento => handleDadosChange(evento),
                        pattern: '^(?=.*[A-Z])(?=.*[0-9]).{8,}$',
                        required: true,
                    }}
                />
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
