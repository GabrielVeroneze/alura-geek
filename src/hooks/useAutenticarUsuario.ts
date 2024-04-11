import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { usuarioAtom } from '@/state/atoms'
import { useAPIAutenticacao } from '@/hooks/useAPIAutenticacao'
import { setTokenLocalStorage } from '@/utils/tokenLocalStorage'

export const useAutenticarUsuario = () => {
    const [usuario, setUsuario] = useRecoilState(usuarioAtom)
    const { login, logout, validarToken } = useAPIAutenticacao()

    useEffect(() => {
        (async () => {
            const storageToken = localStorage.getItem('token')

            if (storageToken) {
                const dados = await validarToken(storageToken)

                if (dados.usuario) {
                    setUsuario(dados.usuario)
                }
            }
        })()
    }, [setUsuario, validarToken])

    const fazerLogin = async (email: string, senha: string) => {
        const dados = await login(email, senha)

        if (dados.usuario && dados.token) {
            setUsuario(dados.usuario)
            setTokenLocalStorage(dados.token)

            return true
        }

        return false
    }

    const fazerLogout = async () => {
        await logout()

        setUsuario(null)
        setTokenLocalStorage('')
    }

    return {
        usuario,
        fazerLogin,
        fazerLogout,
    }
}
