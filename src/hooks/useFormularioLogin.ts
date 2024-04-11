import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAutenticarUsuario } from '@/hooks/useAutenticarUsuario'

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
            toast.error('E-mail ou senha inválido.', {
                position: 'bottom-right',
                theme: 'colored',
            })
        }
    }

    return {
        loginDados,
        handleDadosChange,
        handleSubmit,
    }
}
