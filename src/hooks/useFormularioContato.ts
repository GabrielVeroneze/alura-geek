import { useState } from 'react'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'
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
                exibirAlerta('success', 'Mensagem enviada com sucesso!')
            })
            .catch(() => {
                exibirAlerta('error', 'Erro ao enviar a mensagem.')
            })
    }

    return {
        contatoDados,
        handleDadosChange,
        handleSubmit,
    }
}
