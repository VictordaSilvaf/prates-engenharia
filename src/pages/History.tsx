import Cesar from "../assets/img/historia/cesar.jpeg";
import Mariana from "../assets/img/historia/mariana.jpeg";

import Img1 from "../assets/img/historia/galeria/1.png";
import Img2 from "../assets/img/historia/galeria/2.png";
import Img3 from "../assets/img/historia/galeria/3.png";
import Img4 from "../assets/img/historia/galeria/4.png";
import Img5 from "../assets/img/historia/galeria/6.png";
import Img6 from "../assets/img/historia/galeria/5.png";
import Img7 from "../assets/img/historia/galeria/7.png";
import Img8 from "../assets/img/historia/galeria/8.png";
import { Footer } from "../components/Footer/index";

export function History() {
  return (
    <>
      <section className="pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Nossa História</h2>
        <div className="w-full">
          <div className="grid w-full grid-cols-12 mt-8 lg:gap-4">
            <div className="flex justify-center w-auto lg:w-full object-scale-down col-span-12 lg:col-span-3 lg:block max-h-[260px]">
              <img
                src={Cesar}
                alt="Foto Cesar"
                className="object-scale-down h-full lg:w-full"
              />
            </div>
            <div className="flex items-center justify-center w-full col-span-6 px-2 lg:px-5">
              <div className="flex flex-col items-center w-full pl-0 mt-4 text-center lg:mt-0 ">
                <p className="mb-5">
                  <b>Cesar Prates</b>, graduado em engenharia civil pela FAAP e
                  pós-graduado gerenciamento de obras pela USP, fundou em 2003 a
                  PRATES Engenharia e Construtora, que se tornou uma importante
                  empresa de engenharia no segmento. Com o objetivo de
                  proporcionar uma experiência especial ao cliente, a PRATES se
                  destacou por oferecer atendimento personalizado, de acordo com
                  a realidade e necessidade de cada obra.
                </p>
                <p className="mb-5">
                  “Contamos com um time de profissionais e parceiros que
                  acreditam e se comprometem com o nosso trabalho, QUE COM
                  PLANEJAMENTO E MUITA DEDICAÇÃO faz com que a PRATES execute
                  projetos respeitando cada detalhe.”
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-12 mt-8 lg:gap-4">
            <div className="lg:order-last flex justify-center w-auto lg:w-full col-span-12 lg:col-span-3 lg:block max-h-[260px]">
              <img
                src={Mariana}
                alt="Foto Mariana"
                className="object-scale-down h-full lg:w-full"
              />
            </div>
            <div className="flex items-center justify-center col-span-12 lg:col-start-4 lg:col-span-6">
              <div className="flex flex-col items-center justify-end w-full pl-0 mt-4 text-center lg:mt-0 ">
                <p className="mb-5">
                  <b>Mariana Schuindt</b>, graduou-se nos cursos de Direito e
                  Gestão Comercial, sendo desde sempre uma grande apaixonada
                  pela comunicação.
                </p>
                <p className="mb-5">
                  Assumiu as áreas comercial e de marketing da PRATES Engenharia
                  e Construtora, com o ideal de trazer uma nova identidade à
                  empresa que está no mercado há 20 anos. “Somos apaixonados por
                  obras, desafios e processos e entendemos que em nossas mãos há
                  muito mais do que UMA OBRA: existem sonhos a serem
                  REALIZADOS!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* style={{font-family: 'Oooh Baby', cursive;}} */}
      {/* New History */}
      <section
        className="flex w-full mt-20"
        style={{
          fontFamily: "Oooh Baby",
        }}
      >
        <div className="grid w-full h-auto grid-cols-12">
          <div className="flex my-4 col-span-7 h-[90vh] bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-cover w-full h-full -z-10"
              src={Img2}
              alt=""
            />
          </div>
          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>

          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>
          <div className="flex my-4 justify-end col-span-7 h-[90vh] bg-gradient-to-r from-white via-transparent to-transparent">
            <img
              className="object-cover w-auto h-full -z-10"
              src={Img3}
              alt=""
            />
          </div>

          <div className="flex my-4 col-span-7 h-[90vh] bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-cover w-auto h-full -z-10"
              src={Img4}
              alt=""
            />
          </div>
          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>

          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>
          <div className="flex my-4 justify-end col-span-7 h-[90vh] bg-gradient-to-r from-white via-transparent to-transparent">
            <img
              className="object-cover w-auto h-full -z-10"
              src={Img1}
              alt=""
            />
          </div>

          <div className="flex my-4 col-span-7 h-[90vh] bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-cover w-auto h-full -z-10"
              src={Img6}
              alt=""
            />
          </div>
          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>

          <div className="flex my-4 justify-center items-center col-span-5 h-[90vh]">
            <div className="max-w-sm text-2xl text-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat omnis inventore vitae. Aliquam possimus consectetur,
                dolorum explicabo accusantium incidunt totam harum ad debitis
                eius deserunt. Dolores odit dicta quo molestias.
              </p>
            </div>
          </div>
          <div className="flex my-4 justify-end col-span-7 h-[90vh] bg-gradient-to-r from-white via-transparent to-transparent">
            <img
              className="object-cover w-auto h-full -z-10"
              src={Img8}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
