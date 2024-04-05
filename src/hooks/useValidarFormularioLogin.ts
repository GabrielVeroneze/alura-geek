import { useState } from 'react'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioLogin = () => {
    const [errosValidacao, setErrosValidacao] = useState({
        email: '',
        senha: '',
    })

    const tiposDeErro: Erro[] = ['patternMismatch', 'valueMissing']

    const mensagensDeErro: IMensagensDeErro = {
        email: {
            patternMismatch: 'O email deve estar no formato correto, por exemplo: exemplo@email.com.',
            valueMissing: 'Por favor, preencha o campo de email.',
        },
        senha: {
            patternMismatch: 'A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número.',
            valueMissing: 'Por favor, preencha o campo de senha.',
        },
    }

    const validarCampo = (campo: HTMLInputElement) => {
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
        const campoValidavel = campo as HTMLInputElement

        validarCampo(campoValidavel)
    }

    return {
        errosValidacao,
        validarCampo,
        validarFormulario,
    }
}
