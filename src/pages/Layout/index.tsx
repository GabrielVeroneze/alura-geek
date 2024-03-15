import { Outlet } from 'react-router-dom'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
import Desenvolvedor from '@/components/Desenvolvedor'

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
            <Desenvolvedor />
        </>
    )
}

export default Layout
