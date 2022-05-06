import { Popover } from '@headlessui/react'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { CustomLink } from './CustomLink'
import { CustomLinkCol } from './CustomLinkCol'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function ToggleVisibility() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      <div className="h-20 w-full bg-white flex items-center px-8 fixed text-gray-650 overflow-x-hidden drop-shadow-md z-10">
        <a href="/" className="text-xl font-thin">
          <h1>PRATES Engenharia e Construtora</h1>
        </a>

        <div className="hidden absolute w-full justify-center md:hidden lg:flex">
          <nav className="">
            <ul className="flex flex-row gap-8">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/historia">História</CustomLink>
              </li>
              <li>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
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

      <Popover className="flex absolute w-full justify-end sm:flex md:flex lg:hidden pr-12 ">
        <Popover.Button
          className="z-20 mt-7 fixed"
          title="Botão menu"
          onClick={ToggleVisibility}
        >
          <List className="h-7 w-7" />
        </Popover.Button>
        <Popover.Panel className="w-52 bg-white r-1 z-50 fixed right-0 mt-20 drop-shadow-md transition-all duration-300">
          <ul className="flex flex-col text-center">
            <li className="p-1 border-b border-opacity-20 hover:bg-gray-100 transition-all duration-300">
              <CustomLinkCol to={'/'}>Home</CustomLinkCol>
            </li>
            <li className="p-1 border-b border-opacity-20 hover:bg-gray-100 transition-all duration-300">
              <CustomLinkCol to="/historia">História</CustomLinkCol>
            </li>
            <li className="p-1 border-b border-opacity-20 hover:bg-gray-100 transition-all duration-300">
              <CustomLinkCol to="/portfolio">Portfolio</CustomLinkCol>
            </li>
            <li className="p-1 border-b border-opacity-20 hover:bg-gray-100 transition-all duration-300">
              <CustomLinkCol to="/processos">Processos</CustomLinkCol>
            </li>
            <li className="p-1 border-b border-opacity-20 hover:bg-gray-100 transition-all duration-300">
              <CustomLinkCol to="/contato">Contato</CustomLinkCol>
            </li>
          </ul>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
