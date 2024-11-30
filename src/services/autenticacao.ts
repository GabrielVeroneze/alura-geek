import api from '@/services/api'
import { Usuario } from '@/types/Usuario'

export async function login(email: string, senha: string): Promise<Usuario> {
    try {
        const resposta = await api.post<Usuario>('/usuarios', { email, senha })
        return resposta.data
    } catch {
        throw new Error('Erro ao realizar o login.')
    }
}
