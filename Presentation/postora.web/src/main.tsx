import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n'
import App from './App.tsx'
import AppDataProvider from './store/AppDataProvider'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppDataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
