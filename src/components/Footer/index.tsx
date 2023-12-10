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
    <footer className="flex flex-col justify-center w-full my-20">
      <div style={{ margin: '0 auto' }} className="flex flex-row gap-4 my-10">
{/*         <a href="#" className="transition-all hover:opacity-60">
          <FacebookLogo size={28} />
        </a> */}
        <a target='_blank' href="https://www.instagram.com/prates.construtora/?hl=pt-br" className="transition-all hover:opacity-60">
          <InstagramLogo size={28} />
        </a>
{/*         <a href="#" className="transition-all hover:opacity-60">
          <YoutubeLogo size={28} />
        </a> */}
        <a target='_blank' href="https://wa.me/message/FVM4ZOCX7LYFM1" className="transition-all hover:opacity-60">
          <WhatsappLogo size={28} />
        </a>
{/*         <a href="#" className="transition-all hover:opacity-60">
          <TelegramLogo size={28} />
        </a> */}
        <a target='_blank' href="https://www.linkedin.com/company/prates-engenharia-e-construtora-s-s-ltda./about/" className="transition-all hover:opacity-60">
          <LinkedinLogo size={28} />
        </a>
      </div>
      <div style={{ margin: '2rem auto' }} className="text-center">
        <span>
          Copyright © 2022 Prates Engenharia. Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
