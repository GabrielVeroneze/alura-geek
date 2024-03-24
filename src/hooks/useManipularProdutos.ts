import { useRecoilValue } from 'recoil'
import { produtosAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'

export const useManipularProdutos = () => {
    const produtos = useRecoilValue<IProduto[]>(produtosAtom)

    return {
        produtos,
    }
}
