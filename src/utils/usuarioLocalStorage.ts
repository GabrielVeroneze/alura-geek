import { IUsuario } from '@/interfaces/IUsuario'

export const setUsuarioLocalStorage = (usuario: IUsuario | null) => {
    localStorage.setItem('usuario', JSON.stringify(usuario))
}

export const getUsuarioLocalStorage = () => {
    const usuario = localStorage.getItem('usuario')

    if (!usuario) {
        return null
    }

    return JSON.parse(usuario)
}
