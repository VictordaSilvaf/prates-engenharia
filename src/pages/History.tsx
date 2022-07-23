import Cesar from '../assets/img/historia/cesar.jpeg'
import Mariana from '../assets/img/historia/mariana.jpeg'
import { Slidder } from '../components/Slidder/index'

import Img1 from '../assets/img/historia/galeria/1-1.jpg'
import Img2 from '../assets/img/historia/galeria/1-2.jpg'
import Img3 from '../assets/img/historia/galeria/2-1.jpg'
import Img4 from '../assets/img/historia/galeria/2-2.jpg'
import Img5 from '../assets/img/historia/galeria/3-1.jpg'
import Img6 from '../assets/img/historia/galeria/3-2.jpg'
import Img7 from '../assets/img/historia/galeria/4-1.jpeg'
import Img8 from '../assets/img/historia/galeria/4-2.jpg'
import Img9 from '../assets/img/historia/galeria/5.jpg'
import { Footer } from '../components/Footer/index'

export function History() {
  return (
    <>
      <section className="pt-20 lg:px-8">
        <h2 className="mt-10 text-lg font-bold text-center">Nossa História</h2>
        <div className="w-full px-10 lg:px-48">
          <div className="grid w-full mt-8 lg:gap-4 lg:grid-cols-12 ">
            <div className="flex justify-center w-auto lg:w-full col-span-12 lg:col-span-3 lg:col-start-2 lg:block max-h-[330px]">
              <img src={Cesar} alt="Foto Cesar" className="object-contain" />
            </div>
            <div className="flex items-center justify-center w-full col-span-7">
              <div className="flex flex-col items-center w-full pl-0 mt-4 text-center lg:mt-0 ">
                <p className="mb-5">
                  Cesar Prates, graduado em engenharia civil pela FAAP e
                  pós-graduado pela USP, fundou em 2002 a PRATES Engenharia e
                  Construtora, que se tornou uma importante empresa de
                  engenharia no segmento.
                </p>
                <p className="mb-5">
                  Com o objetivo de proporcionar uma experiência especial ao
                  cliente, a PRATES se destacou por oferecer atendimento
                  personalizado, de acordo com a realidade e necessidade de cada
                  cliente.
                </p>
                <p>
                  “Contamos com um time de profissionais e parceiros que
                  acredita e se compromete com o nosso trabalho, que faz com que
                  a PRATES torne possível a realização de sonhos por meio da
                  construção e reforma de lares e negócios.”
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full gap-4 mt-8 lg:p-4 lg:grid-cols-12">
            <div className="lg:order-last flex justify-center object-cover w-full  col-span-12 lg:col-span-3 lg:block h-[330px]">
              <img
                src={Mariana}
                alt="Foto Mariana"
                className="h-full lg:w-full lg:object-cover"
              />
            </div>
            <div className="flex items-center justify-center col-span-12 lg:col-start-2 lg:col-span-7">
              <div className="flex flex-col items-center justify-end w-full pl-0 mt-4 text-center lg:mt-0 ">
                <p className="mb-5">
                  Mariana Schuindt, graduou-se nos cursos de Direito e Gestão
                  Comercial, sendo desde sempre uma grande apaixonada pela
                  comunicação.
                </p>
                <p className="mb-5">
                  Assumiu as áreas comercial e de marketing da PRATES Engenharia
                  e Construtora, com o ideal de trazer uma nova identidade à
                  empresa que está no mercado há 20 anos.
                </p>
                <p>
                  “Somos apaixonados por obras, desafios e processos e
                  entendemos que em nossas mãos há muito mais do que isso:
                  existem sonhos a serem concretizados, que se transformarão em
                  lares e negócios, que para alguém, será parte de um futuro
                  magnífico.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Slidder
            url={Img1}
            alt="Inicio construção 1"
            url2={Img2}
            alt2="Inicio construção 2"
            reverse={true}
          />

          <Slidder
            url={Img3}
            alt="Inicio construção 3"
            url2={Img4}
            alt2="Inicio construção 4"
            reverse={false}
          />
        </div>
        <div className="">
          <Slidder
            url={Img9}
            alt="Inicio construção 1"
            url2={Img6}
            alt2="Inicio construção 2"
            reverse={true}
          />

          <Slidder
            url={Img7}
            alt="Inicio construção 3"
            url2={Img8}
            alt2="Inicio construção 4"
            reverse={false}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
