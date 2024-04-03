import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styles from './LayoutAdmin.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const LayoutAdmin = () => {
    return (
        <main className={styles.principal}>
            <Outlet />
            <ToastContainer />
        </main>
    )
}

export default LayoutAdmin
