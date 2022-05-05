import { BtnMenu } from './BtnMenu'

export function Menu() {
  return (
    <div className="h-20 w-full bg-white flex items-center px-8 fixed relative text-gray-650 overflow-hidden">
      <a href="#" className="text-xl font-thin">
        <h1>PRATES Engenharia e Construtora</h1>
      </a>
      <div className="flex absolute w-full justify-center">
        <nav className="flex flex-row gap-8">
          <BtnMenu text="Home" route="/" />
          <BtnMenu text="História" route="/historia" />
          <BtnMenu text="Portfolio" route="/portfolio" />
          <BtnMenu text="Processos" route="/processos" />
          <BtnMenu text="Contato" route="/contato" />
        </nav>
      </div>
      {/* BtnWhats */}
      <div className=""></div>
    </div>
  )
}
