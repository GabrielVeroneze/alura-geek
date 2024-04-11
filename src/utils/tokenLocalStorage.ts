export const setTokenLocalStorage = (token: string) => {
    localStorage.setItem('token', token)
}

export const getTokenLocalStorage = () => {
    const token = localStorage.getItem('token')

    if (!token) {
        return null
    }

    return token
}
