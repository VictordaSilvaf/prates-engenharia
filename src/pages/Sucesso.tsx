import { Link } from 'react-router-dom'

export function Sucesso() {
  return (
    <section className="min-h-screen w-screen pt-20 flex justify-center items-center">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Email enviado com sucesso!</h2>
        <p className="mb-5">
          Aguarde um pouco, assim que possivel entraremos em contato.
        </p>
        <Link
          to={'/'}
          className="w-full bg-gray-650 py-2 px-5 rounded-md text-white hover:opacity-90 transition-opacity duration-200"
        >
          Voltar para página inicial
        </Link>
      </div>
    </section>
  )
}
