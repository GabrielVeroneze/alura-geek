import { useFormularioContato } from '@/hooks/useFormularioContato'
import styles from './Contato.module.scss'

const Contato = () => {
    const { dadosContato, handleDadosChange, handleSubmit } = useFormularioContato()

    return (
        <form
            className={styles.formulario}
            onSubmit={evento => handleSubmit(evento)}
        >
            <h3 className={styles.titulo}>Fale conosco</h3>
            <div className={styles.campo}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={dadosContato.nome}
                    onChange={evento =>
                        handleDadosChange('nome', evento.target.value)
                    }
                />
            </div>
            <textarea
                className={styles.mensagem}
                placeholder="Escreva sua mensagem"
                value={dadosContato.mensagem}
                onChange={evento =>
                    handleDadosChange('mensagem', evento.target.value)
                }
            ></textarea>
            <button className={styles.botao} type="submit">
                Enviar mensagem
            </button>
        </form>
    )
}

export default Contato
