import { useState } from 'react'

export const useFormularioLogin = () => {
    const [loginDados, setLoginDados] = useState({
        email: '',
        senha: '',
    })

    return {
        loginDados,
    }
}
