import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import AppRoutes from '@/routes'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <AppRoutes />
        </RecoilRoot>
    </React.StrictMode>
)
