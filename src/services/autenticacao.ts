import api from '@/services/api'

export async function login(email: string, senha: string) {
    try {
        const resposta = await api.post('/usuarios', { email, senha })
        return resposta.data
    } catch {
        throw new Error('Erro ao realizar o login.')
    }
}
