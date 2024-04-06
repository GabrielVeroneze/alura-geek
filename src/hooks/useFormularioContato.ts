import { useState } from 'react'
import emailjs from '@emailjs/browser'

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

        emailjs.send('service_zoqh3sp', 'template_x54gazo', contatoDados)
    }

    return {
        contatoDados,
        handleDadosChange,
        handleSubmit,
    }
}
