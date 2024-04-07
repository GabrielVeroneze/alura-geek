import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jsonServerApi } from '@/services/api'
import { IProduto } from '@/interfaces/IProduto'

export const useObterProduto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<IProduto | null>(null)

    useEffect(() => {
        if (id) {
            carregarProduto(id)
        }
    }, [id])

    const carregarProduto = (id: string) => {
        jsonServerApi
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
