import { useValidarFormulario } from '@/hooks/useValidarFormulario'
import { Erro, IMensagensDeErro } from '@/interfaces/IMensagensDeErro'

export const useValidarFormularioContato = () => {
    const campos = {
        nome: '',
        mensagem: '',
    }

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

    return useValidarFormulario({ campos, tiposDeErro, mensagensDeErro })
}
