import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from './context/Datacontext.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <DataContextProvider>
        <App />
    </DataContextProvider>  
    </BrowserRouter>
  </StrictMode>,
)
