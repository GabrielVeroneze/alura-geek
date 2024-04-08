import { useRecoilState } from 'recoil'
import { usuarioAtom } from '@/state/atoms'
import { login, logout } from '@/utils/autenticacao'

export const useAutenticarUsuario = () => {
    const [usuario, setUsuario] = useRecoilState(usuarioAtom)

    const fazerLogin = async (email: string, senha: string) => {
        const dados = await login(email, senha)

        if (dados.user && dados.token) {
            setUsuario(dados.usuario)

            return true
        }

        return false
    }

    const fazerLogout = async () => {
        await logout()
        setUsuario(null)
    }

    return {
        usuario,
        fazerLogin,
        fazerLogout,
    }
}
