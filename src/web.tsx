import { Contacts } from './pages/Contacts'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Process } from './pages/Process'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { Sucesso } from './pages/Sucesso'

export function Web() {
  return (
    <>
      {/* <Menu /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="historia" element={<History />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="processos" element={<Process />} />
            <Route path="contato" element={<Contacts />} />
            <Route path="contato/sucesso" element={<Sucesso />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
