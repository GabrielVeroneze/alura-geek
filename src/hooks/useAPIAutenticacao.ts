import { jsonServerApi } from '@/services/api'
import { simularRequisicaoLogin, simularRequisicaoLogout, simularRequisicaoValidarToken } from '@/utils/mockRequisicoesAutenticacao'

export const useAPIAutenticacao = () => {
    const validarToken = async (token: string) => {
        const resposta = await simularRequisicaoValidarToken(token)
        // const resposta = await jsonServerApi.post('/validate', { token })

        return resposta.data
    }

    const login = async (email: string, senha: string) => {
        const resposta = await simularRequisicaoLogin(email, senha)
        // const resposta = await jsonServerApi.post('/login', { email, senha })

        return resposta.data
    }

    const logout = async () => {
        const resposta = await simularRequisicaoLogout()
        // const resposta = await jsonServerApi.post('/logout')

        return resposta.data
    }

    return {
        validarToken,
        login,
        logout,
    }
}
