import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { produtosPesquisadosSelector } from '@/state/selectors'

export const usePesquisarProdutos = () => {
    const resultadoProdutos = useRecoilValue(produtosPesquisadosSelector)
    const navigate = useNavigate()

    const redirecionarParaResultados = () => {
        navigate('/resultados')
    }

    return {
        resultadoProdutos,
        redirecionarParaResultados,
    }
}
