import { useState } from 'react'
import { validarMensagemErro } from '@/utils/validacaoErro'
import { MensagensDeErro } from '@/types/MensagensDeErro'
import { Erro } from '@/types/Erro'
import { Campo } from '@/types/Campo'

export const useValidacaoProduto = () => {
    const [erros, setErros] = useState({
        imagem: '',
        categoria: '',
        nome: '',
        preco: '',
        descricao: '',
    })

    const tiposDeErro: Erro[] = [
        'badInput',
        'patternMismatch',
        'rangeUnderflow',
        'tooLong',
        'tooShort',
        'typeMismatch',
        'valueMissing',
    ]

    const mensagensDeErro: MensagensDeErro = {
        imagem: {
            patternMismatch: 'A URL da imagem deve conter uma extensão válida, como .png ou .jpg.',
            typeMismatch: 'Por favor, insira uma URL válida para a imagem.',
            valueMissing: 'Por favor, adicione uma imagem para o produto.',
        },
        categoria: {
            valueMissing: 'O campo de categoria não pode estar vazio.',
        },
        nome: {
            tooLong: 'O nome não pode ter mais de 20 caracteres.',
            tooShort: 'O nome não tem caractéres suficientes.',
            valueMissing: 'O campo de nome não pode estar vazio.',
        },
        preco: {
            badInput: 'Insira um valor numérico válido para o preço do produto.',
            rangeUnderflow: 'O preço do produto deve ser maior que zero.',
            valueMissing: 'O campo de preço não pode estar vazio.',
        },
        descricao: {
            tooLong: 'A descrição não pode ter mais de 150 caracteres.',
            tooShort: 'A descrição não tem caractéres suficientes.',
            valueMissing: 'O campo de descrição não pode estar vazio.',
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
