import { useState } from 'react'
import { MensagensDeErro } from '@/types/MensagensDeErro'
import { Erro } from '@/types/Erro'

export const useValidacaoContato = () => {
    const [erros, setErros] = useState({
        nome: '',
        mensagem: '',
    })

    const tiposDeErro: Erro[] = ['tooLong', 'tooShort', 'valueMissing']

    const mensagensDeErro: MensagensDeErro = {
        nome: {
            valueMissing: 'O campo de nome não pode estar vazio.',
            tooShort: 'O campo de nome não tem caractéres suficientes.',
            tooLong: 'O nome não pode ter mais de 40 caracteres.',
        },
        mensagem: {
            valueMissing: 'O campo de mensagem não pode estar vazio.',
            tooShort: 'O campo de mensagem não tem caractéres suficientes.',
            tooLong: 'A mensagem não pode ultrapassar 120 caracteres. Diminua um pouco o texto!',
        },
    }

    const validarCampo = (campo: HTMLInputElement | HTMLTextAreaElement) => {
        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                setErros({
                    ...erros,
                    [campo.name]: mensagensDeErro[campo.name][erro]!,
                })
            }
        })

        if (campo.validity.valid) {
            setErros({
                ...erros,
                [campo.name]: '',
            })
        }
    }

    const validarFormulario = (campo: EventTarget) => {
        const campoValidavel = campo as HTMLInputElement | HTMLTextAreaElement

        validarCampo(campoValidavel)
    }

    return {
        erros,
        validarCampo,
        validarFormulario,
    }
}
