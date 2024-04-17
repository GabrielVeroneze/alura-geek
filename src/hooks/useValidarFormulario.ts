import { useState } from 'react'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

interface ICampos {
    [chave: string]: string
}

interface IFormulario {
    campos: ICampos
    tiposDeErro: Erro[]
    mensagensDeErro: IMensagensDeErro
}

export const useValidarFormulario = (formulario: IFormulario) => {
    const [errosValidacao, setErrosValidacao] = useState(formulario.campos)

    const validarCampo = (campo: HTMLInputElement | HTMLTextAreaElement) => {
        formulario.tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                setErrosValidacao({
                    ...errosValidacao,
                    [campo.name]: formulario.mensagensDeErro[campo.name][erro]!,
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

        validarCampo(campoValidavel)
    }

    return {
        errosValidacao,
        validarCampo,
        validarFormulario,
    }
}
