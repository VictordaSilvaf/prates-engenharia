import { Popover } from '@headlessui/react'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { CustomLink } from './CustomLink'
import { CustomLinkCol } from './CustomLinkCol'

import Logo from '../../assets/img/logo/logo.png'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function ToggleVisibility() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      <div className="fixed z-10 flex items-center w-full h-20 px-8 overflow-x-hidden bg-white text-gray-650 drop-shadow-md">
        <a href="/" className="text-xl font-thin w-36">
          <img src={Logo} alt="Logo prates" />
        </a>

        <div className="absolute justify-center hidden w-full md:hidden lg:flex">
          <nav className="">
            <ul className="flex flex-row gap-8">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/historia">Que somos</CustomLink>
              </li>
              <li>
                <CustomLink to="/portfolio">Portfólio</CustomLink>
              </li>
              <li>
                <CustomLink to="/processos">Processos</CustomLink>
              </li>
              <li>
                <CustomLink to="/contato">Contato</CustomLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* BtnWhats */}
        <div className=""></div>
      </div>

      <Popover className="absolute flex justify-end w-full pr-12 sm:flex md:flex lg:hidden ">
        <Popover.Button
          className="fixed z-20 mt-7"
          title="Botão menu"
          onClick={ToggleVisibility}
        >
          <List className="h-7 w-7" />
        </Popover.Button>
        <Popover.Panel className="fixed right-0 z-50 mt-20 transition-all duration-300 bg-white w-52 r-1 drop-shadow-md">
          <ul className="flex flex-col text-center">
            <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
              <CustomLinkCol to={'/'}>Home</CustomLinkCol>
            </li>
            <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
              <CustomLinkCol to="/historia">História</CustomLinkCol>
            </li>
            <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
              <CustomLinkCol to="/portfolio">Portfolio</CustomLinkCol>
            </li>
            <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
              <CustomLinkCol to="/processos">Processos</CustomLinkCol>
            </li>
            <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
              <CustomLinkCol to="/contato">Contato</CustomLinkCol>
            </li>
          </ul>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
