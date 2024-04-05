import { useState } from 'react'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioLogin = () => {
    const [errosValidacao, setErrosValidacao] = useState({
        email: '',
        senha: '',
    })

    const tiposDeErro: Erro[] = []

    const mensagensDeErro: IMensagensDeErro = {
        email: {},
        senha: {},
    }

    const validarCampo = (campo: HTMLInputElement) => {
        console.log(campo.validity)
    }

    return {
        errosValidacao,
        validarCampo,
    }
}
