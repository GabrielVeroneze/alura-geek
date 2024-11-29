import { MensagensDeErro } from '@/types/MensagensDeErro'
import { Erro } from '@/types/Erro'
import { Campo } from '@/types/Campo'

export const validarMensagemErro = (
    campo: Campo,
    tiposDeErro: Erro[],
    mensagensDeErro: MensagensDeErro
): string => {
    let erroMensagem = ''

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            erroMensagem = mensagensDeErro[campo.name][erro]!
        }
    })

    if (campo.validity.valid) {
        erroMensagem = ''
    }

    return erroMensagem
}
