import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduto } from '@/interfaces/IProduto'
import api from '@/services/api'

export const useObterProduto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<IProduto | null>(null)

    useEffect(() => {
        if (id) {
            carregarProduto(id)
        }
    }, [id])

    const carregarProduto = (id: string) => {
        api
            .get<IProduto>(`produtos/${id}`)
            .then(resposta => {
                setProduto(resposta.data)
            })
            .catch(erro => {
                throw new Error(erro)
            })
    }

    return {
        produto,
        carregarProduto,
    }
}
