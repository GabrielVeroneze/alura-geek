import { useState } from 'react'
import { toast } from 'react-toastify'
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
            .then(() => {
                toast.success('Mensagem enviada com sucesso!', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
            .catch(() => {
                toast.error('Erro ao enviar a mensagem.', {
                    position: 'bottom-right',
                    theme: 'colored',
                })
            })
    }

    return {
        contatoDados,
        handleDadosChange,
        handleSubmit,
    }
}
