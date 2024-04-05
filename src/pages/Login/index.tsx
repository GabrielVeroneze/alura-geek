import { useFormularioLogin } from '@/hooks/useFormularioLogin'
import { useValidarFormularioLogin } from '@/hooks/useValidarFormularioLogin'
import CampoTexto from '@/components/CampoTexto'
import MensagemErro from '@/components/MensagemErro'
import styles from './Login.module.scss'

const Login = () => {
    const { loginDados, handleDadosChange } = useFormularioLogin()
    const { errosValidacao, validarCampo, validarFormulario } = useValidarFormularioLogin()

    return (
        <main className={styles.principal}>
            <h2 className={styles.titulo}>Iniciar Sessão</h2>
            <form
                className={styles.formulario}
                onInvalid={evento => validarFormulario(evento.target)}
            >
                <fieldset className={styles.campo}>
                    <CampoTexto
                        placeholder="Escreva seu email"
                        inputConfig={{
                            type: 'email',
                            name: 'email',
                            value: loginDados.email,
                            onChange: evento => handleDadosChange(evento),
                            onInvalid: evento => evento.preventDefault(),
                            onBlur: evento => validarCampo(evento.target),
                            pattern: '^[a-zA-Z0-9._+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$',
                            required: true,
                        }}
                    />
                    {errosValidacao.email && (
                        <MensagemErro>{errosValidacao.email}</MensagemErro>
                    )}
                </fieldset>
                <fieldset className={styles.campo}>
                    <CampoTexto
                        placeholder="Escreva sua senha"
                        inputConfig={{
                            type: 'password',
                            name: 'senha',
                            value: loginDados.senha,
                            onChange: evento => handleDadosChange(evento),
                            onInvalid: evento => evento.preventDefault(),
                            onBlur: evento => validarCampo(evento.target),
                            pattern: '^(?=.*[A-Z])(?=.*[0-9]).{8,}$',
                            required: true,
                        }}
                    />
                    {errosValidacao.senha && (
                        <MensagemErro>{errosValidacao.senha}</MensagemErro>
                    )}
                </fieldset>
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
