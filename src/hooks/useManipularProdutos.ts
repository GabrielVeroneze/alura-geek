import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'
import { jsonServerApi } from '@/services/api'
import { produtosAtom } from '@/state/atoms'
import { IProduto } from '@/interfaces/IProduto'

export const useManipularProdutos = () => {
    const produtos = useRecoilValue<IProduto[]>(produtosAtom)

    const cadastrarProduto = (produto: IProduto) => {
        jsonServerApi
            .post<IProduto>('produtos', produto)
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

    const editarProduto = (produto: IProduto) => {
        jsonServerApi
            .put<IProduto>(`produtos/${produto.id}`, produto)
            .then(() => {
                toast.success('Produto atualizado com sucesso!', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
            .catch(() => {
                toast.error('Erro ao editar o produto.', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
    }
    return {
        produtos,
        cadastrarProduto,
        editarProduto,
    }
}
