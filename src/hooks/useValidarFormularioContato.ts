import { useState } from 'react'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioContato = () => {
    const [errosValidacao, setErrosValidacao] = useState({
        nome: '',
        mensagem: '',
    })

    const tiposDeErro: Erro[] = ['tooLong', 'tooShort', 'valueMissing']

    const mensagensDeErro: IMensagensDeErro = {
        nome: {
            valueMissing: 'O campo de nome não pode estar vazio.',
            tooShort: 'O campo de nome não tem caractéres suficientes.',
            tooLong: 'O nome não pode ter mais de 40 caracteres.',
        },
        mensagem: {
            valueMissing: 'O campo de mensagem não pode estar vazio.',
            tooShort: 'O campo de mensagem não tem caractéres suficientes.',
            tooLong:
                'A mensagem não pode ultrapassar 120 caracteres. Diminua um pouco o texto!',
        },
    }

    const validarCampo = (campo: HTMLInputElement | HTMLTextAreaElement) => {
        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                setErrosValidacao({
                    ...errosValidacao,
                    [campo.name]: mensagensDeErro[campo.name][erro],
                })
            }
        })

        if (campo.validity.valid) {
            setErrosValidacao({
                ...errosValidacao,
                [campo.name]: '',
            })
        }
    }

    const validarFormulario = (campo: EventTarget) => {
        const campoValidavel = campo as HTMLInputElement | HTMLTextAreaElement

        tiposDeErro.forEach(erro => {
            if (campoValidavel.validity[erro]) {
                setErrosValidacao({
                    ...errosValidacao,
                    [campoValidavel.name]: mensagensDeErro[campoValidavel.name][erro],
                })
            }
        })
    }

    return {
        errosValidacao,
        validarCampo,
        validarFormulario,
    }
}
