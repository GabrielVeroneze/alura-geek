import { nanoid } from 'nanoid'
import { Usuario } from '@/types/Usuario'

/* 
    Devido às limitações do json-server, foi necessário implementar estas funções para
    fornecer respostas simuladas para operações de login, validação de token e logout.
*/

let usuario: Usuario | null = null

export const simularRequisicaoValidarToken = async (token: string) => {
    return {
        data: {
            usuario,
        },
    }
}

export const simularRequisicaoLogin = async (email: string, senha: string) => {
    usuario = {
        id: nanoid(9),
        email: email,
        senha: senha,
    }

    return {
        data: {
            token: nanoid(17),
            usuario,
        },
    }
}

export const simularRequisicaoLogout = async () => {
    return {
        data: {
            status: true,
        },
    }
}
