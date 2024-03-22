import { Link } from 'react-router-dom'
import { IProduto } from '@/interfaces/IProduto'
import styles from './Produto.module.scss'

interface ProdutoProps {
    modelo: 'visualizar' | 'editar'
    produto: IProduto
}

const Produto = ({ modelo, produto }: ProdutoProps) => {
    return (
        <li className={styles.card}>
            <div className={styles.wrapper}>
                {modelo === 'editar' && (
                    <div className={styles.icones}>
                        <button
                            className={styles.excluir}
                            aria-label="Excluir"
                        ></button>
                        <button
                            className={styles.editar}
                            aria-label="Editar"
                        ></button>
                    </div>
                )}
                <img
                    className={styles.imagem}
                    src={produto.imagem}
                    alt={produto.nome}
                />
            </div>
            <div className={styles.info}>
                <h4 className={styles.nome}>{produto.nome}</h4>
                <p className={styles.preco}>R$ {produto.preco}</p>
                {modelo === 'visualizar' ? (
                    <Link
                        to={`/produto/${produto.id}`}
                        className={styles.botao}
                    >
                        Ver produto
                    </Link>
                ) : (
                    <p className={styles.identificador}>#{produto.id}</p>
                )}
            </div>
        </li>
    )
}

export default Produto
