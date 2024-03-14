import styles from './Desenvolvedor.module.scss'

const Desenvolvedor = () => {
    return (
        <section className={styles.container}>
            <p className={styles.texto}>
                Desenvolvido por{' '}
                <a
                    className={styles.link}
                    href="https://github.com/GabrielVeroneze"
                    target="_blank"
                >
                    Gabriel Veroneze
                </a>
                <br />
                2024
            </p>
        </section>
    )
}

export default Desenvolvedor
