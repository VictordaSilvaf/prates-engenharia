import { Gallery } from "../components/Gallery/index";

import BgImage from "../assets/img/home/bannerImage.jpg";
import { Footer } from "../components/Footer/index";
import { WhatsappLogo } from "phosphor-react";
import { Menu } from "../components/Menu";

export function Home() {
  return (
    <div className="">
      <Menu />

      <section className="fixed z-30 flex items-end justify-end float-left w-screen h-screen px-10 py-8 lg:hidden ">
        <a
          href="https://wa.me/message/FVM4ZOCX7LYFM1"
          className="z-40 p-2 font-black text-green-500 transition-all bg-white rounded-full shadow-lg pointer-events-auto hover:bg-slate-100"
        >
          <WhatsappLogo size={28} />
        </a>
      </section>

      {/* BG Image */}
      <section className="w-full min-h-screen bg-white">
        <img src={BgImage} alt="" className="object-cover w-screen h-screen" />
      </section>

      <div className="flex flex-col justify-center px-20">
        <section
          className="my-16 text-center md:w-2/4 sm:w-full"
          style={{ margin: "4rem auto" }}
        >
          <p className="font-thin text-center">
            Desde 2003, a PRATES é uma engenharia e construtora que executa
            projetos residenciais, comerciais e corporativos,
            obras rápidas e complexas, em diversas localidades, promovendo a
            gestão e excelência de todas as etapas da obra, que vão do
            planejamento à entrega.
          </p>

          <p className="mt-1 font-thin text-center">
            Sempre consciente do tamanho da responsabilidade que carrega com a
            transformação de sonhos em realidade, oferece soluções sob medida
            para cada obra, com foco exclusivamente na satisfação do cliente.
          </p>
        </section>
      </div>
      <div className="w-full">
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
  );
}
