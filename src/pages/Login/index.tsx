import { useFormularioLogin } from '@/hooks/useFormularioLogin'
import { useValidacaoLogin } from '@/hooks/useValidacaoLogin'
import CampoTexto from '@/components/CampoTexto'
import MensagemErro from '@/components/MensagemErro'
import styles from './Login.module.scss'

const Login = () => {
    const { loginDados, handleDadosChange, handleSubmit } = useFormularioLogin()
    const { erros, validarCampo, validarFormulario } = useValidacaoLogin()

    return (
        <main className={styles.principal}>
            <h2 className={styles.titulo}>Iniciar Sessão</h2>
            <form
                className={styles.formulario}
                onSubmit={evento => handleSubmit(evento)}
                onInvalid={evento => validarFormulario(evento.target)}
            >
                <fieldset className={styles.campo}>
                    <CampoTexto
                        placeholder="Escreva seu email"
                        type="email"
                        name="email"
                        value={loginDados.email}
                        onChange={evento => handleDadosChange(evento)}
                        onInvalid={evento => evento.preventDefault()}
                        onBlur={evento => validarCampo(evento.target)}
                        pattern="^[a-zA-Z0-9._+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                        required={true}
                    />
                    {erros.email && (
                        <MensagemErro>{erros.email}</MensagemErro>
                    )}
                </fieldset>
                <fieldset className={styles.campo}>
                    <CampoTexto
                        placeholder="Escreva sua senha"
                        type="password"
                        name="senha"
                        value={loginDados.senha}
                        onChange={evento => handleDadosChange(evento)}
                        onInvalid={evento => evento.preventDefault()}
                        onBlur={evento => validarCampo(evento.target)}
                        pattern="^(?=.*[A-Z])(?=.*[0-9]).{8,}$"
                        required={true}
                    />
                    {erros.senha && (
                        <MensagemErro>{erros.senha}</MensagemErro>
                    )}
                </fieldset>
                <button className={styles.botao}>Entrar</button>
            </form>
        </main>
    )
}

export default Login
