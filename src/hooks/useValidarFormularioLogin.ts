import { useValidarFormulario } from '@/hooks/useValidarFormulario'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioLogin = () => {
    const campos = {
        email: '',
        senha: '',
    }

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

    return useValidarFormulario({ campos, tiposDeErro, mensagensDeErro })
}
