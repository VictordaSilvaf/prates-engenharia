import { Menu } from '../components/Menu'
import { Gallery } from '../components/Gallery/index'

import BgImage from '../assets/firstImageBg.png'
import { Footer } from '../components/Footer/index'

export function Home() {
  return (
    <div className="">
      {/* BG Image */}
      <section className="w-full min-h-screen bg-white">
        <img src={BgImage} alt="" className="h-screen w-screen object-cover" />
      </section>
      <div className="px-20 flex justify-center flex-col">
        <section
          className="my-16 text-center md:w-2/4 sm:w-full"
          style={{ margin: '4rem auto' }}
        >
          <h2 className="mb-4 font-bold text-lg text-center">Quem somos</h2>
          <p className="font-thin  text-center">
            Fundada em 2002, a PRATES é uma engenharia e construtora completa,
            que executa projetos de arquitetura para clientes exigentes de
            construções e reformas residenciais e comerciais, sempre promovendo
            a gestão e excelência da execução de todas as etapas da obra, que
            vão do planejamento à entrega.
          </p>
        </section>

        <Gallery />

        <section className="my-20 w-full px-0 sm:px-10">
          <h2 className="text-center mb-6 font-bold">NOVIDADES em breve!</h2>
          <div className="w-full flex flex-wrap flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-full p-1 ">
              <div className="w-full bg-black bg-opacity-10 py-5 px-10">
                <h3 className="font-bold text-lg">Software</h3>
                <p className="font-thin mt-1">
                  Poderoso software de gestão de obras onde Arquitetos e
                  Clientes poderão acessar o andamento da obra em tempo real.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-full p-1">
              <div className="w-full bg-black bg-opacity-10 py-5 px-10">
                <h3 className="font-bold text-lg">Aplicativo</h3>
                <p className="font-thin mt-1">
                  Em breve um aplicativo onde estarão disponíveis todas as
                  ferramentas de gestão de obra de uma forma moderna e amigável.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-full p-1">
              <div className="w-full bg-black bg-opacity-10 py-5 px-10">
                <h3 className="font-bold text-lg">Canal Arquiteto</h3>
                <p className="font-thin mt-1">
                  Criar relacionamentos significativos com o Arquiteto. Este
                  canal permite a troca de conhecimentos entre Arquitetura e
                  Engenharia.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-full p-1">
              <div className="w-full bg-black bg-opacity-10 py-5 px-10">
                <h3 className="font-bold text-lg">E-books</h3>
                <p className="font-thin mt-1">
                  E-books criados através de Workshops que são disponibilizados
                  explicando as principais técnicas construtivas de uma obra.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
