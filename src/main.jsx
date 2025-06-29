import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Contexttoshare from './context/Contexttoshare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='437162839186-0aili8lin5f33kfq6u98tajhhuaq290r.apps.googleusercontent.com'>
        <Contexttoshare><App /></Contexttoshare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
