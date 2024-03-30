import { useFormularioContato } from '@/hooks/useFormularioContato'
import { useValidarFormularioContato } from '@/hooks/useValidarFormularioContato'
import CampoTexto from '@/components/CampoTexto'
import styles from './Contato.module.scss'

const Contato = () => {
    const { dadosContato, handleDadosChange, handleSubmit } = useFormularioContato()
    const { errosValidacao, validarCampo } = useValidarFormularioContato()

    return (
        <form
            className={styles.formulario}
            onSubmit={evento => handleSubmit(evento)}
        >
            <h3 className={styles.titulo}>Fale conosco</h3>
            <fieldset>
                <CampoTexto
                    modelo='float-label'
                    inputConfig={{
                        id: "nome",
                        name: "nome",
                        value: dadosContato.nome,
                        onChange: evento => handleDadosChange('nome', evento.target.value),
                        onInvalid: evento => evento.preventDefault(),
                        onBlur: evento => validarCampo(evento.target),
                        minLength: 3,
                        maxLength: 40,
                        required: true,
                    }}
                    labelConfig={{
                        label: "Nome",
                        htmlFor: "nome",
                    }}
                />
                {errosValidacao.nome && (
                    <span className={styles.erro}>
                        {errosValidacao.nome}
                    </span>
                )}
            </fieldset>
            <fieldset>
                <textarea
                    name="mensagem"
                    className={styles.mensagem}
                    placeholder="Escreva sua mensagem"
                    value={dadosContato.mensagem}
                    onChange={evento =>
                        handleDadosChange('mensagem', evento.target.value)
                    }
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    minLength={10}
                    maxLength={120}
                    required
                ></textarea>
                {errosValidacao.mensagem && (
                    <span className={styles.erro}>
                        {errosValidacao.mensagem}
                    </span>
                )}
            </fieldset>
            <button className={styles.botao} type="submit">
                Enviar mensagem
            </button>
        </form>
    )
}

export default Contato
