import { IProduto } from '@/interfaces/IProduto'
import styles from './Produto.module.scss'

const Produto = ({ imagem, nome, preco }: IProduto) => {
    return (
        <li className={styles.card}>
            <div className={styles.wrapper}>
                <img className={styles.imagem} src={imagem} alt={nome} />
            </div>
            <div className={styles.info}>
                <h4 className={styles.nome}>{nome}</h4>
                <p className={styles.preco}>R$ {preco}</p>
                <button className={styles.botao}>Ver produto</button>
            </div>
        </li>
    )
}

export default Produto
