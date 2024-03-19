import { Outlet } from 'react-router-dom'
import styles from './LayoutAdmin.module.scss'

const LayoutAdmin = () => {
    return (
        <main className={styles.principal}>
            <Outlet />
        </main>
    )
}

export default LayoutAdmin
