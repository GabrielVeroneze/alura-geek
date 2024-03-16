import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduto } from '@/interfaces/IProduto'
import http from '@/http'

export const useObterProduto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState<IProduto | null>(null)

    useEffect(() => {
        if (id) {
            carregarProduto(id)
        }
    }, [id])

    const carregarProduto = (id: string) => {
        http.get<IProduto>(`produtos/${id}`)
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
