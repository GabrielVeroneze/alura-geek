import { useEffect, useState } from 'react'
import { IProduto } from '@/interfaces/IProduto'
import http from '@/http'

export const useManipularProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([])

    useEffect(() => {
        carregarProdutos()
    }, [])

    const carregarProdutos = () => {
        http.get<IProduto[]>('produtos')
            .then(resposta => {
                setProdutos(resposta.data)
            })
            .catch(erro => {
                throw new Error(erro)
            })
    }

    return {
        produtos,
        carregarProdutos,
    }
}
