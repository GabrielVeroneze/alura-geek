import { toast } from 'react-toastify'

export const exibirAlerta = (tipo: 'success' | 'error', mensagem: string) => {
    toast[tipo](mensagem, {
        position: 'bottom-right',
        theme: 'colored',
    })
}
