import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import DetalhesProduto from '@/pages/DetalhesProduto'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="produto/:id" element={<DetalhesProduto />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
