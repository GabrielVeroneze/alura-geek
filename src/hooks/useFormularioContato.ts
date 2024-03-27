import { useState } from 'react'

export const useFormularioContato = () => {
    const [dadosContato, setDadosContato] = useState({
        nome: '',
        mensagem: '',
    })

    const handleDadosChange = (campo: 'nome' | 'mensagem', valor: string) => {
        setDadosContato({
            ...dadosContato,
            [campo]: valor,
        })
    }

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
    }

    return {
        dadosContato,
        handleDadosChange,
        handleSubmit,
    }
}
