import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
  YoutubeLogo
} from 'phosphor-react'

export function Footer() {
  return (
    <footer className="w-full flex justify-center flex-col my-20">
      <div style={{ margin: '0 auto' }} className="flex flex-row gap-4 my-10">
        <a href="#" className="hover:opacity-60 transition-all">
          <FacebookLogo size={28} />
        </a>
        <a href="#" className="hover:opacity-60 transition-all">
          <InstagramLogo size={28} />
        </a>
        <a href="#" className="hover:opacity-60 transition-all">
          <YoutubeLogo size={28} />
        </a>
        <a href="#" className="hover:opacity-60 transition-all">
          <WhatsappLogo size={28} />
        </a>
        <a href="#" className="hover:opacity-60 transition-all">
          <TelegramLogo size={28} />
        </a>
        <a href="#" className="hover:opacity-60 transition-all">
          <LinkedinLogo size={28} />
        </a>
      </div>
      <div style={{ margin: '2rem auto' }}>
        <span>
          Copyright © 2022 Prates Engenharia. Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
