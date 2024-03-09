import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h2 className={styles.titulo}>Dezembro Promocional</h2>
            <p className={styles.texto}>
                Produtos selecionados com 33% de desconto
            </p>
            <button className={styles.botao}>Ver Consoles</button>
        </section>
    )
}

export default Banner
