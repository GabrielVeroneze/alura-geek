import { useState } from 'react'
import { useManipularProdutos } from '@/hooks/useManipularProdutos'
import { obterId } from '@/utils/gerarIdProduto'

export const useFormularioProduto = () => {
    const { cadastrarProduto } = useManipularProdutos()

    const [produtoDados, setProdutoDados] = useState({
        imagem: '',
        categoria: '',
        nome: '',
        preco: 0,
        descricao: '',
    })

    const handleDadosChange = (
        evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        let novoValor: string | number = evento.target.value

        if (evento.target.name === 'preco') {
            novoValor = Number(evento.target.value)
        }

        setProdutoDados({
            ...produtoDados,
            [evento.target.name]: novoValor,
        })
    }

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const novoProduto = {
            ...produtoDados,
            id: obterId(),
        }

        cadastrarProduto(novoProduto)
    }

    return {
        produtoDados,
        handleDadosChange,
        handleSubmit,
    }
}
