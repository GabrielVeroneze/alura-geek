import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { usuarioAtom } from '@/state/atoms'
import { login, logout, validarToken } from '@/utils/autenticacao'

export const useAutenticarUsuario = () => {
    const [usuario, setUsuario] = useRecoilState(usuarioAtom)

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
    }, [setUsuario])

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
        setToken('')
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
