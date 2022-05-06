import { Menu } from '../components/Menu'

export function Contacts() {
  return (
    <>
      <section className="pt-64 px-8 md:pt-56 lg:px-36 flex justify-center flex-col lg:flex-row h-[550px]">
        <div className="lg:w-2/6 p-8 flex justify-center flex-col">
          <h2 className="font-bold text-4xl leading-normal text-center lg:text-left">
            Vamos conversar?
          </h2>
          <h2 className="font-bold text-4xl leading-normal text-center lg:text-left">
            Me de mais detalhes sobre seu projeto.
          </h2>
          <p className="text-xl font-thin leading-normal text-center lg:text-left">
            Vamos realizar seu sonho juntos!
          </p>
        </div>
        <div className="lg:w-2/6">
          <form
            action="https://formsubmit.co/victordasilvafernandes@gmail.com"
            method="POST"
            className="w-full rounded-xl border-2 flex flex-col p-5 shadow-lg"
          >
            <h2 className="text-center font-thin mb-4">
              Nos envie uma mensagem
            </h2>
            <input type="hidden" name="_template" value="box"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contato/sucesso"
            ></input>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nome completo *"
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

            <label htmlFor="mensagem" className="mt-2 font-thin text-sm">
              Fale um pouco mais sobre seu projeto:
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
      </section>
    </>
  )
}
