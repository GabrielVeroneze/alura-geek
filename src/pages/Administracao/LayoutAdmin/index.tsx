import { Outlet } from 'react-router-dom'
import styles from './LayoutAdmin.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const LayoutAdmin = () => {
    return (
        <main className={styles.principal}>
            <Outlet />
        </main>
    )
}

export default LayoutAdmin
