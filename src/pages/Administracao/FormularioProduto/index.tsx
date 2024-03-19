import styles from './FormularioProduto.module.scss'

const FormularioProduto = () => {
    return (
        <form className={styles.formulario}>
            <h2 className={styles.titulo}>Adicionar novo produto</h2>
            <div className={styles.campo}>
                <label htmlFor="url">URL da imagem</label>
                <input type="text" id="url" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="nome">Nome do produto</label>
                <input type="text" id="nome" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="preco">Preço do produto</label>
                <input type="number" id="preco" />
            </div>
            <textarea
                className={styles.descricao}
                placeholder="Descrição do produto"
            ></textarea>
            <button className={styles.botao}>Adicionar produto</button>
        </form>
    )
}

export default FormularioProduto
