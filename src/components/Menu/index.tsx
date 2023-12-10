import { Popover } from "@headlessui/react";
import { List, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { CustomLink } from "./CustomLink";
import { CustomLinkCol } from "./CustomLinkCol";

import Logo from "../../assets/img/logo/logo.png";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleVisibility() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex">
      <div className="fixed z-10 flex items-center w-full h-20 px-8 overflow-x-hidden bg-white text-gray-650 drop-shadow-md">
        <a href="/" className="z-20 text-xl font-thin w-36">
          <img src={Logo} alt="Logo prates" />
        </a>

        <div className="absolute justify-center hidden w-full md:hidden lg:flex">
          <nav className="flex flex-row">
            <ul className="flex flex-row gap-8">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/historia">Quem somos</CustomLink>
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
        <div className="justify-end hidden w-full lg:flex">
          <a target='_blank'
            href="https://wa.me/message/FVM4ZOCX7LYFM1"
            className="z-20 text-green-500 transition-all pointer-events-auto hover:opacity-60"
          >
            <WhatsappLogo size={28} />
          </a>
        </div>
      </div>

      <Popover className="fixed z-50 flex items-center justify-end w-full h-20 pr-12 sm:flex md:flex lg:hidden">
        <Popover.Button
          className="h-5"
          title="Botão menu"
          onClick={ToggleVisibility}
        >
          <List className="h-7 w-7" />
        </Popover.Button>
        <Popover.Panel className="fixed right-0 z-50 w-full transition-all duration-300 bg-white mt-60 r-1 drop-shadow-md">
          <ul className="flex flex-col text-center">
            <CustomLinkCol to="/">
              <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
                Home
              </li>
            </CustomLinkCol>
            <CustomLinkCol to="/historia">
              <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
                História
              </li>
            </CustomLinkCol>
            <CustomLinkCol to="/portfolio">
              <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
                Portfolio
              </li>
            </CustomLinkCol>
            <CustomLinkCol to="/processos">
              <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
                Processos
              </li>
            </CustomLinkCol>
            <CustomLinkCol to="/contato">
              <li className="p-1 transition-all duration-300 border-b border-opacity-20 hover:bg-gray-100">
                Contato
              </li>
            </CustomLinkCol>
          </ul>
        </Popover.Panel >
      </Popover >
    </div >
  );
}
