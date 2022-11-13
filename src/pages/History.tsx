import Cesar from "../assets/img/historia/cesar.jpg";
import Mariana from "../assets/img/historia/mariana.jpg";

import Img1 from "../assets/img/historia/galeria/1.png";
import Img2 from "../assets/img/historia/galeria/2.png";
import Img3 from "../assets/img/historia/galeria/3.png";
import Img4 from "../assets/img/historia/galeria/4.png";
import Img6 from "../assets/img/historia/galeria/5.png";
import { Footer } from "../components/Footer/index";

export function History() {
  return (
    <>
      <section className="pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Quem somos</h2>
        <div className="w-full">
          <div className="flex flex-col w-full grid-cols-12 px-5 mt-2 lg:grid lg:mt-8 lg:gap-4">

            <div className="flex justify-center col-span-3">
              <img
                src={Cesar}
                alt="Foto Cesar"
                className="object-cover w-64 h-64 overflow-hidden rounded-full "
              />
            </div>
            
            <div className="flex justify-center col-span-6">
              <div className="flex flex-col items-center justify-end w-full px-10 mt-4 text-center lg:p-0 lg:mt-0">
                <p className="mb-5">
                  Apaixonados por obras, desafios e processos, os sócios Cesar
                  Prates e Mariana Schuindt apostam nas soluções que a
                  engenharia civil promove para tornar palpável projetos de
                  design e arquitetura de maneira responsável, eficiente e segura,
                  de acordo com a realidade e necessidade de cada cliente. O
                  processo de criação ou transformação de ambientes começa na
                  escolha de um time de profissionais competente, que acredita,
                  se compromete e faz com que a PRATES torne possível a
                  realização de sonhos por meio da construção e reforma de lares
                  e negócios.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center col-span-3">
              <img  
                src={Mariana}
                alt="Foto Mariana"
                className="object-cover w-64 h-64 overflow-hidden rounded-full"
              />
            </div>
            
          </div>
        </div>
      </section>

      <h2 className="mt-10 text-lg font-bold text-center">Inicio da nossa história</h2>

      {/* New History */}
      <section
        className="flex w-full mt-20"
        style={{
          fontFamily: "Oooh Baby",
        }}
      >
        <div className="grid w-full h-auto grid-cols-12">
          <div className="col-start-0 col-span-12 flex my-4 md:col-span-7 h-[60vh] md:h-[90vh] md:bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-fill w-full h-full transition-all duration-150 -z-10 grayscale hover:grayscale-0"
              src={Img2}
              alt=""
            />
          </div>

          <div className="col-start-0 col-span-12 md:col-start-6 flex my-4 justify-end md:col-span-7 h-[60vh] md:h-[90vh] md:bg-gradient-to-r from-white via-transparent to-transparent">
            <img
              className="object-fill w-full h-full transition-all duration-150 -z-10 grayscale hover:grayscale-0"
              src={Img3}
              alt=""
            />
          </div>

          <div className="col-start-0 col-span-12 flex my-4 md:col-span-7 h-[60vh] md:h-[90vh] md:bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-fill w-full h-full transition-all duration-150 -z-10 grayscale hover:grayscale-0"
              src={Img4}
              alt=""
            />
          </div>
          
          <div className="col-start-0 col-span-12 md:col-start-6 flex my-4 justify-end md:col-span-7 h-[60vh] md:h-[90vh] md:bg-gradient-to-r from-white via-transparent to-transparent">
            <img
              className="object-fill w-full h-full transition-all duration-150 -z-10 grayscale hover:grayscale-0"
              src={Img1}
              alt=""
            />
          </div>

          <div className="col-start-0 col-span-12 flex my-4 md:col-span-7 h-[60vh] md:h-[90vh] md:bg-gradient-to-r from-transparent via-transparent to-white">
            <img
              className="object-fill w-full h-full transition-all duration-150 -z-10 grayscale hover:grayscale-0"
              src={Img6}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
