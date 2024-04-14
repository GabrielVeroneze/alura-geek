import { useState } from 'react'
import { useNumberFormat } from '@react-input/number-format'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { converterPrecoEmNumero } from '@/utils/formatarPrecoProduto'
import { obterId } from '@/utils/gerarIdProduto'

export const useFormularioProduto = () => {
    const { cadastrarProduto, editarProduto } = useManipularProdutos()

    const [produtoDados, setProdutoDados] = useState({
        imagem: '',
        categoria: '',
        nome: '',
        preco: '',
        descricao: '',
    })

    const mascaraMonetaria = useNumberFormat({
        currency: 'BRL',
        format: 'currency',
        locales: 'pt-BR',
        maximumFractionDigits: 2,
    })

    const handleDadosChange = (
        evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setProdutoDados({
            ...produtoDados,
            [evento.target.name]: evento.target.value,
        })
    }

    const handleSubmit = (
        evento: React.FormEvent<HTMLFormElement>,
        id: string | undefined
    ) => {
        evento.preventDefault()

        const precoConvertido = converterPrecoEmNumero(produtoDados.preco)

        if (id) {
            const produtoEditado = {
                ...produtoDados,
                preco: precoConvertido,
            }

            editarProduto(produtoEditado)
        } else {
            const novoProduto = {
                ...produtoDados,
                id: obterId(),
                preco: precoConvertido,
            }

            cadastrarProduto(novoProduto)
        }
    }

    return {
        produtoDados,
        setProdutoDados,
        handleDadosChange,
        handleSubmit,
        mascaraMonetaria,
    }
}
