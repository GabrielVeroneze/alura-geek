import { useState } from 'react'
import { MensagensDeErro } from '@/types/MensagensDeErro'
import { Erro } from '@/types/Erro'

export const useValidacaoLogin = () => {
    const [erros, setErros] = useState({
        email: '',
        senha: '',
    })

    const tiposDeErro: Erro[] = ['patternMismatch', 'valueMissing']

    const mensagensDeErro: MensagensDeErro = {
        email: {
            patternMismatch: 'O email deve estar no formato correto, por exemplo: exemplo@email.com.',
            valueMissing: 'Por favor, preencha o campo de email.',
        },
        senha: {
            patternMismatch: 'A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número.',
            valueMissing: 'Por favor, preencha o campo de senha.',
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
