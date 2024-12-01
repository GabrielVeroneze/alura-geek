import { useFormularioContato } from '@/hooks/useFormularioContato'
import { useValidacaoContato } from '@/hooks/useValidacaoContato'
import CampoTextoFloatLabel from '@/components/CampoTextoFloatLabel'
import MensagemErro from '@/components/MensagemErro'
import styles from './Contato.module.scss'

const Contato = () => {
    const { contatoDados, handleDadosChange, handleSubmit } = useFormularioContato()
    const { erros, validarCampo, validarFormulario } = useValidacaoContato()

    return (
        <form
            className={styles.formulario}
            onSubmit={evento => handleSubmit(evento)}
            onInvalid={evento => validarFormulario(evento.target)}
        >
            <h3 className={styles.titulo}>Fale conosco</h3>
            <fieldset>
                <CampoTextoFloatLabel
                    label="Nome"
                    type="text"
                    id="nome"
                    name="nome"
                    value={contatoDados.nome}
                    onChange={evento =>
                        handleDadosChange('nome', evento.target.value)
                    }
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    minLength={3}
                    maxLength={40}
                    required={true}
                />
                {erros.nome && (
                    <MensagemErro>{erros.nome}</MensagemErro>
                )}
            </fieldset>
            <fieldset>
                <textarea
                    name="mensagem"
                    className={styles.mensagem}
                    placeholder="Escreva sua mensagem"
                    value={contatoDados.mensagem}
                    onChange={evento =>
                        handleDadosChange('mensagem', evento.target.value)
                    }
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    minLength={10}
                    maxLength={120}
                    required
                ></textarea>
                {erros.mensagem && (
                    <MensagemErro>{erros.mensagem}</MensagemErro>
                )}
            </fieldset>
            <button className={styles.botao} type="submit">
                Enviar mensagem
            </button>
        </form>
    )
}

export default Contato
