import Img1 from '../../assets/pratesPort1.png'
import { Footer } from '../Footer/index'

export function ProjectsGallery() {
  return (
    <>
      <div className=" mt-5">
        <div className=" w-ful flex justify-start flex-wrap">
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">CFO</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">RDO</h2>
            <p className="mt-2">
              Relatório Diário de Obras contendo todas as atividades que
              aconteceram no dia, recebimento de materiais, ocorrências e fotos
              de todos os ambientes. Enviamos o RDO diariamente para os nossos
              clientes.
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">Controller</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">Painel</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">Planilha Orçamentária</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">Checklist</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">Histograma</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
          <div className="sm:w-1/3 lg:w-1/4 p-4">
            <img src={Img1} className="w-full h-auto"></img>
            <h2 className="mt-4 font-bold text-lg">QCs</h2>
            <p className="mt-2">
              Cronograma Financeiro de Obras, contendo todos os serviços, o
              previsto e realizado,
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
