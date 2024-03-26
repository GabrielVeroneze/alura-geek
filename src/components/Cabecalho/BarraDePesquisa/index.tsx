import { useState } from 'react'
import { useTermoDePesquisa } from '@/hooks/useTermoDePesquisa'
import { usePesquisarProdutos } from '@/hooks/usePesquisarProdutos'
import styles from './BarraDePesquisa.module.scss'

const BarraDePesquisa = () => {
    const { termo, setTermo } = useTermoDePesquisa()
    const { redirecionarParaResultados } = usePesquisarProdutos()
    const [barraAberta, setBarraAberta] = useState<boolean>(false)

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            redirecionarParaResultados()
        }
    }

    return (
        <div
            className={`
                ${styles.wrapper}
                ${barraAberta ? styles.aberta : ''}
            `}
        >
            <div className={styles.barraPesquisa}>
                <input
                    className={styles.campo}
                    type="search"
                    placeholder="O que deseja encontrar?"
                    value={termo}
                    onChange={evento => setTermo(evento.target.value)}
                    onKeyDown={evento => handleKeyDown(evento)}
                />
                <button
                    className={styles.botaoLupa}
                    onClick={() => redirecionarParaResultados()}
                ></button>
            </div>
            <button
                className={styles.botaoAlternar}
                onClick={() => setBarraAberta(!barraAberta)}
            ></button>
        </div>
    )
}

export default BarraDePesquisa
