import { Menu } from '../components/Menu'
import { Gallery } from '../components/Gallery/index'

import BgImage from '../assets/firstImageBg.png'
import { Footer } from '../components/Footer/index'

export function Home() {
  return (
    <div className="">
      {/* BG Image */}
      <section className="w-full min-h-screen bg-white">
        <img src={BgImage} alt="" className="object-cover w-screen h-screen" />
      </section>
      <div className="flex flex-col justify-center px-20">
        <section
          className="my-16 text-center md:w-2/4 sm:w-full"
          style={{ margin: '4rem auto' }}
        >
          <h2 className="mb-4 text-lg font-bold text-center">Quem somos</h2>
          <p className="font-thin text-center">
            Há 20 anos a PRATES é uma engenharia e construtora que executa
            projetos residenciais, comerciais e corporativos, executando obras
            rápidas e complexas, em diversas localidades, sempre promovendo a
            gestão da execução de todas as etapas da obra, que vão do
            planejamento à entrega.
          </p>

          <p className="mt-1 font-thin text-center">
            Sempre conscientes do tamanho da responsabilidade que carregamos com
            a transformação de sonhos em realidade, oferecemos soluções sob
            medida para cada obra, com foco exclusivamente na satisfação do
            cliente.
          </p>
        </section>
      </div>
      <div className="w-full ">
        <Gallery />
      </div>
      <div className="flex flex-col justify-center px-20">
        <section className="w-full px-0 my-20 sm:px-10">
          <h2 className="mb-6 font-bold text-center">NOVIDADES em breve!</h2>
          <div className="flex flex-col flex-wrap w-full sm:flex-row">
            <div className="w-full h-full p-1 sm:w-1/2 ">
              <div className="w-full px-10 py-5 bg-black bg-opacity-10">
                <h3 className="text-lg font-bold">Software</h3>
                <p className="mt-1 font-thin">
                  Poderoso software de gestão de obras onde Arquitetos e
                  Clientes poderão acessar o andamento da obra em tempo real.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-1 sm:w-1/2">
              <div className="w-full px-10 py-5 bg-black bg-opacity-10">
                <h3 className="text-lg font-bold">Aplicativo</h3>
                <p className="mt-1 font-thin">
                  Em breve um aplicativo onde estarão disponíveis todas as
                  ferramentas de gestão de obra de uma forma moderna e amigável.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-1 sm:w-1/2">
              <div className="w-full px-10 py-5 bg-black bg-opacity-10">
                <h3 className="text-lg font-bold">Canal Arquiteto</h3>
                <p className="mt-1 font-thin">
                  Criar relacionamentos significativos com o Arquiteto. Este
                  canal permite a troca de conhecimentos entre Arquitetura e
                  Engenharia.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-1 sm:w-1/2">
              <div className="w-full px-10 py-5 bg-black bg-opacity-10">
                <h3 className="text-lg font-bold">E-books</h3>
                <p className="mt-1 font-thin">
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
