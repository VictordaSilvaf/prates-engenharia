import { Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu/index'

export function AppLayout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
