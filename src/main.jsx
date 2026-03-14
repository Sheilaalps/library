import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom' // 1. Adicione este import!
import './index.css'
import Header from './components/header/header.jsx'
import Principal from './components/Principal/Principal.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Coloque o Router aqui abraçando tudo */}
    <Router>
      <Header />
      <Principal />
      <Footer />
    </Router>
  </React.StrictMode>
)
