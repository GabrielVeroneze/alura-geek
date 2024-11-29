import { useState } from 'react'
import { validarMensagemErro } from '@/utils/validacaoErro'
import { MensagensDeErro } from '@/types/MensagensDeErro'
import { Erro } from '@/types/Erro'
import { Campo } from '@/types/Campo'

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

    const validarCampo = (campo: Campo) => {
        const erro = validarMensagemErro(campo, tiposDeErro, mensagensDeErro)

        setErros({
            ...erros,
            [campo.name]: erro,
        })
    }

    const validarFormulario = (campo: EventTarget) => {
        const campoValidavel = campo as Campo

        validarCampo(campoValidavel)
    }

    return {
        erros,
        validarCampo,
        validarFormulario,
    }
}
