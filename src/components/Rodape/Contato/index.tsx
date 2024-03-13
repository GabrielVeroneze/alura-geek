import styles from './Contato.module.scss'

const Contato = () => {
    return (
        <form className={styles.formulario}>
            <h3 className={styles.titulo}>Fale conosco</h3>
            <div className={styles.campo}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" />
            </div>
            <textarea
                className={styles.mensagem}
                placeholder="Escreva sua mensagem"
            ></textarea>
            <button className={styles.botao}>Enviar mensagem</button>
        </form>
    )
}

export default Contato
