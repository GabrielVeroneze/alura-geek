import { useState } from 'react'

export const useFormularioContato = () => {
    const [contatoDados, setContatoDados] = useState({
        nome: '',
        mensagem: '',
    })

    const handleDadosChange = (campo: 'nome' | 'mensagem', valor: string) => {
        setContatoDados({
            ...contatoDados,
            [campo]: valor,
        })
    }

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
    }

    return {
        contatoDados,
        handleDadosChange,
        handleSubmit,
    }
}
