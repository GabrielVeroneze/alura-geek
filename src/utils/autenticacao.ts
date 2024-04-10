import { nanoid } from 'nanoid'
import { IUsuario } from '@/interfaces/IUsuario'

let usuario: IUsuario | null = null

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
