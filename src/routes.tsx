import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import DetalhesProduto from '@/pages/DetalhesProduto'
import LayoutAdmin from '@/pages/Administracao/LayoutAdmin'
import FormularioProduto from '@/pages/Administracao/FormularioProduto'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="produto/:id" element={<DetalhesProduto />} />
                    <Route path="admin" element={<LayoutAdmin />}>
                        <Route path="novo-produto" element={<FormularioProduto />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
