import { useState } from 'react'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioProduto = () => {
    const [errosValidacao, setErrosValidacao] = useState({
        imagem: '',
        categoria: '',
        nome: '',
        preco: '',
        descricao: '',
    })

    const validarCampo = (campo: HTMLInputElement | HTMLTextAreaElement) => {}

    return {
        errosValidacao,
        validarCampo,
    }
}
