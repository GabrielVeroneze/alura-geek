import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAutenticarUsuario } from '@/hooks/useAutenticarUsuario'
import styles from './LayoutAdmin.module.scss'

const LayoutAdmin = () => {
    const { usuario } = useAutenticarUsuario()
    const navigate = useNavigate()

    useEffect(() => {
        if (!usuario) {
            navigate('/login')
        }
    }, [navigate, usuario])

    return (
        <main className={styles.principal}>
            <Outlet />
        </main>
    )
}

export default LayoutAdmin
