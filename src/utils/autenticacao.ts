import { jsonServerApi } from '@/services/api'

export const validarToken = async (token: string) => {
    const resposta = await jsonServerApi.post('/validate', { token })

    return resposta.data
}

export const login = async (email: string, senha: string) => {
    const resposta = await jsonServerApi.post('/login', { email, senha })

    return resposta.data
}

export const logout = async () => {
    const resposta = await jsonServerApi.post('/logout')

    return resposta.data
}
