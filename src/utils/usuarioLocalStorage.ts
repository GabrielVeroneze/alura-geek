export const setUsuarioLocalStorage = (id: string, email: string) => {
    localStorage.setItem('usuario', JSON.stringify({ id, email }))
}

export const getUsuarioLocalStorage = () => {
    const usuario = localStorage.getItem('usuario')

    if (!usuario) {
        return null
    }

    return JSON.parse(usuario)
}

export const clearUsuarioLocalStorage = () => {
    localStorage.removeItem('usuario')
}
