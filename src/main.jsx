import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import {HashRouter} from 'react-router-dom'
import {ThemeProvider} from '@material-tailwind/react'
import {MaterialTailwindControllerProvider} from '@/context'
import '../public/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
