import { useFormularioContato } from '@/hooks/useFormularioContato'
import { useValidarFormularioContato } from '@/hooks/useValidarFormularioContato'
import styles from './Contato.module.scss'

const Contato = () => {
    const { dadosContato, handleDadosChange, handleSubmit } = useFormularioContato()
    const { validarCampo } = useValidarFormularioContato()

    return (
        <form
            className={styles.formulario}
            onSubmit={evento => handleSubmit(evento)}
        >
            <h3 className={styles.titulo}>Fale conosco</h3>
            <div className={styles.campo}>
                <label htmlFor="nome">Nome</label>
                <input
                    name="nome"
                    type="text"
                    id="nome"
                    value={dadosContato.nome}
                    onChange={evento =>
                        handleDadosChange('nome', evento.target.value)
                    }
                    onInvalid={evento => evento.preventDefault()}
                    onBlur={evento => validarCampo(evento.target)}
                    minLength={3}
                    maxLength={40}
                    required
                />
            </div>
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
            <button className={styles.botao} type="submit">
                Enviar mensagem
            </button>
        </form>
    )
}

export default Contato
