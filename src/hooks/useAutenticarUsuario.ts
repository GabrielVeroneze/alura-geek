import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { usuarioAtom } from '@/state/atoms'
import { login } from '@/services/autenticacao'
import { clearUsuarioLocalStorage, getUsuarioLocalStorage, setUsuarioLocalStorage } from '@/utils/usuarioLocalStorage'

export const useAutenticarUsuario = () => {
    const [usuario, setUsuario] = useRecoilState(usuarioAtom)

    useEffect(() => {
        (async () => {
            const usuarioStorage = getUsuarioLocalStorage()

            if (usuarioStorage) {
                setUsuario(usuarioStorage)
            }
        })()
    }, [setUsuario])

    const fazerLogin = async (email: string, senha: string) => {
        const dados = await login(email, senha)

        if (dados) {
            setUsuario(dados)
            setUsuarioLocalStorage(dados.id, dados.email)

            return true
        }

        return false
    }

    const fazerLogout = async () => {
        setUsuario(null)
        clearUsuarioLocalStorage()
    }

    return {
        usuario,
        fazerLogin,
        fazerLogout,
    }
}
