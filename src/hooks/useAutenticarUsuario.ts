import { useRecoilState } from 'recoil'
import { usuarioAtom } from '@/state/atoms'
import { login, logout } from '@/utils/autenticacao'

export const useAutenticarUsuario = () => {
    const [usuario, setUsuario] = useRecoilState(usuarioAtom)

    const fazerLogin = async (email: string, senha: string) => {
        const dados = await login(email, senha)

        if (dados.usuario && dados.token) {
            setUsuario(dados.usuario)
            setToken(dados.token)

            return true
        }

        return false
    }

    const fazerLogout = async () => {
        await logout()
        setUsuario(null)
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    return {
        usuario,
        fazerLogin,
        fazerLogout,
    }
}
