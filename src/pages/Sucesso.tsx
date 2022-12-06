import { Link } from 'react-router-dom'

export function Sucesso() {
  return (
    <section className="flex items-center justify-center w-screen min-h-screen pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Email enviado com sucesso!</h2>
        <p className="mb-5">
          Aguarde um pouco, assim que possivel entraremos em contato.
        </p>
        <Link
          to={'/'}
          className="w-full px-5 py-2 text-white transition-opacity duration-200 rounded-md bg-gray-650 hover:opacity-90"
        >
          Voltar para página inicial
        </Link>
      </div>
    </section>
  )
}
