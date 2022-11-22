import { Menu } from "../components/Menu";
import { Phone, EnvelopeSimple } from "phosphor-react";
import { Footer } from "../components/Footer/index";
import { MapComponent } from '../components/MapComponent/index';

export function Contacts() {
  return (
    <>
      <div className="flex flex-col h-auto mt-20 lg:mt-0">
        <section className="flex flex-col px-8 pt-10 md:pt-20 lg:px-24 lg:flex-col lg:h-auto">
          <div className="w-full">
            <div className="flex flex-col gap-4 p-8 lg:w-3/8">
              <h2 className="text-xl font-thin leading-normal text-center lg:text-left">
                Quer entrar em contato conosco e saber mais sobre a PRATES?
              </h2>
              <h2 className="text-xl font-thin leading-normal text-center lg:text-left">
                Preencha o formulário e envie uma mensagem. Retornaremos para
                você em breve!
              </h2>

              <p className="flex flex-row items-center gap-2 mt-4 text-lg font-thin leading-normal text-center lg:text-left text-opacity-30">
                <Phone size={20} /> (11) 99497-7880
              </p>

              <p className="flex flex-row items-center gap-2 text-lg font-thin leading-normal text-center lg:text-left text-opacity-30">
                <Phone size={20} /> (11) 95998-2963
              </p>

              <p className="flex flex-row items-center gap-2 text-lg font-thin leading-normal text-center lg:text-left text-opacity-30">
                <EnvelopeSimple size={20} /> contato@pratesconstrutora.com.br
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-8 lg:flex-row">
            <div className="w-full h-[450px] bg-purple-700 rounded-xl lg:w-4/6 z-0">
              <MapComponent />
            </div>
            <div className="w-full lg:w-2/6">
              <form
                action="https://formsubmit.co/victordasilvafernandes@gmail.com"
                method="POST"
                className="flex flex-col w-full p-5 text-center border-2 shadow-lg rounded-xl"
              >
                <h2 className="mb-4">FALE CONOSCO</h2>
                <input type="hidden" name="_template" value="box"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/contato/sucesso"
                ></input>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nome *"
                  name="name"
                />
                <input
                  type="email"
                  className="form-control block w-full px-3 mt-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Endereço de email *"
                  name="email"
                />

                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 mt-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Assunto"
                  name="_subject"
                />

                <label htmlFor="mensagem" className="mt-2 text-sm font-thin">
                  Nos envie uma mensagem:
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <div className="flex justify-end">
                  <button className="bg-gray-650 rounded p-1.5 w-[110px] block mt-2 text-white hover:bg-opacity-90 transition-all">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="mt-5 bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
