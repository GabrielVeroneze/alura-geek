import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import '@/sass/_reset.scss'
import '@/sass/_global.scss'
import AppRoutes from '@/routes'

emailjs.init({
    publicKey: '1MAqJjgbgztL3hvIp',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense>
                <AppRoutes />
            </Suspense>
            <ToastContainer />
        </RecoilRoot>
    </React.StrictMode>
)
