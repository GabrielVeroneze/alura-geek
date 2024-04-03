import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'
import { produtosAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'
import http from '@/http'

export const useManipularProdutos = () => {
    const produtos = useRecoilValue<IProduto[]>(produtosAtom)

    const cadastrarProduto = (produto: IProduto) => {
        http.post<IProduto>('produtos', produto)
            .then(() => {
                toast.success('Produto adicionado com sucesso!', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
            .catch(() => {
                toast.error('Erro ao adicionar o produto.', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
    }

    return {
        produtos,
        cadastrarProduto,
    }
}
