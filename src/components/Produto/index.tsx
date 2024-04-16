import { memo } from 'react'
import { Link } from 'react-router-dom'
import { formatarPrecoEmReal } from '@/utils/formatarPrecoProduto'
import { IProduto } from '@/interfaces/IProduto'
import styles from './Produto.module.scss'

interface ProdutoProps {
    modelo: 'visualizar' | 'editar'
    produto: IProduto
    removerProduto?: (id: string) => void
}

const Produto = memo(({ modelo, produto, removerProduto }: ProdutoProps) => {
    return (
        <li className={styles.card}>
            <div className={styles.wrapper}>
                {modelo === 'editar' && removerProduto && (
                    <div className={styles.icones}>
                        <button
                            className={styles.excluir}
                            aria-label="Excluir"
                            onClick={() => removerProduto(produto.id!)}
                        ></button>
                        <Link
                            to={`/admin/editar-produto/${produto.id}`}
                            className={styles.editar}
                            aria-label="Editar"
                        ></Link>
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
                <p className={styles.preco}>
                    {formatarPrecoEmReal(produto.preco)}
                </p>
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
})

export default Produto
