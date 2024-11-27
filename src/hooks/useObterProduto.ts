import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarProdutoPorId } from '@/services/produtos'
import { IProduto } from '@/interfaces/IProduto'

export const useObterProduto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<IProduto | null>(null)

    useEffect(() => {
        if (id) {
            carregarProduto(id)
        }
    }, [id])

    const carregarProduto = async (id: string) => {
        try {
            const produtoCarregado = await buscarProdutoPorId(id)
            setProduto(produtoCarregado)
        } catch (erro) {
            console.log(erro)
        }
    }

    return {
        produto,
        carregarProduto,
    }
}
