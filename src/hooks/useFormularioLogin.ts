import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAutenticarUsuario } from '@/hooks/useAutenticarUsuario'
import { exibirAlerta } from '@/utils/mensagensDeAlerta'

export const useFormularioLogin = () => {
    const { fazerLogin } = useAutenticarUsuario()
    const navigate = useNavigate()

    const [loginDados, setLoginDados] = useState({
        email: '',
        senha: '',
    })

    const handleDadosChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setLoginDados({
            ...loginDados,
            [evento.target.name]: evento.target.value,
        })
    }

    const handleSubmit = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const estaLogado = await fazerLogin(loginDados.email, loginDados.senha)

        if (estaLogado) {
            navigate('/admin/menu')
        } else {
            exibirAlerta('error', 'E-mail ou senha inválido.')
        }
    }

    return {
        loginDados,
        handleDadosChange,
        handleSubmit,
    }
}
