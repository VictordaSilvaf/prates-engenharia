import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'

import { Contacts } from './pages/Contacts'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Process } from './pages/Process'
import { Menu } from './components/Menu/index'
import { Footer } from './components/Footer/index'

export function Web() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/processos" element={<Process />} />
          <Route path="/contatos" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
