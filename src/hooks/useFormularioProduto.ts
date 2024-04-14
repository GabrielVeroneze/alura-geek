import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNumberFormat } from '@react-input/number-format'
import { useObterProduto } from '@/hooks/useObterProduto'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { converterPrecoEmNumero, formatarPrecoEmReal } from '@/utils/formatarPrecoProduto'
import { obterId } from '@/utils/gerarIdProduto'
import { IProduto } from '@/interfaces/IProduto'

export const useFormularioProduto = () => {
    const { id } = useParams()
    const { produto } = useObterProduto()
    const { cadastrarProduto, editarProduto } = useManipularProdutos()

    const [produtoDados, setProdutoDados] = useState({
        imagem: '',
        categoria: '',
        nome: '',
        preco: '',
        descricao: '',
    })

    useEffect(() => {
        if (id && produto) {
            processarProdutoEmEdicao(produto)
        }
    }, [id, produto])

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

    const processarProdutoEmEdicao = (produto: IProduto) => {
        setProdutoDados({
            imagem: produto.imagem,
            categoria: produto.categoria,
            nome: produto.nome,
            preco: formatarPrecoEmReal(produto.preco),
            descricao: produto.descricao,
        })
    }

    return {
        produtoDados,
        setProdutoDados,
        handleDadosChange,
        handleSubmit,
        mascaraMonetaria,
    }
}
