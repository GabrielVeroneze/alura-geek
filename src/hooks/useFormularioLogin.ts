import { useState } from 'react'

export const useFormularioLogin = () => {
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

    return {
        loginDados,
        handleDadosChange,
    }
}
