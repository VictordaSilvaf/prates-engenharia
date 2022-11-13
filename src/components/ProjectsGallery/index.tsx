import Orcamento from '../../assets/img/historia/processos/Orcamento.jpg' //
import RDO from '../../assets/img/historia/processos/RDO.jpg'
import PlanilhaContratacoes from '../../assets/img/historia/processos/Planilha_Contratacoes.jpg' //
import Painel from '../../assets/img/historia/processos/Painel_Controle.jpg'
import PlanilhaFinanceira from '../../assets/img/historia/processos/Planilha_Financeira.jpg'
import Checklist from '../../assets/img/historia/processos/Checklist.jpg'
import Histograma from '../../assets/img/historia/processos/cronograma.jpg'
import QCs from '../../assets/img/historia/processos/Quadro_Concorrencia.jpg'

export function ProjectsGallery() {
  return (
    <>
      <div className="mt-5 ">
        <div className="flex flex-wrap justify-start w-full text-center">
          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={Orcamento} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Planilha Orçamentária</h2>
            <p className="mt-2">
              A planilha orçamentária discrimina no maior grau de detalhamento
              os insumos e serviços que serão aplicados na obra, para que todos
              os valores e quantitativos sejam objetivamente identificados,
              garantindo a transparência na contratação.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4 ">
            <div className="">
              <img src={QCs} className="object-fill w-full h-[300px]"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Quadro de Concorrência</h2>
            <p className="mt-2">
              Desenvolvido especialmente para o cliente, o quadro de
              concorrência é uma ferramenta que tem o objetivo de garantir a
              melhor decisão comercial, uma vez que auxilia na análise das
              propostas de materiais e serviços de diferentes fornecedores,
              indicando preços, quantidades e prazos de forma equalizada, para a
              melhor contratação.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={PlanilhaContratacoes} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Controle de Contratação</h2>
            <p className="mt-2">
              A Planilha de Controle de Contratações sinaliza de forma prática e
              clara os prazos e datas para compra dos materiais de acabamentos,
              de acordo com o cronograma da obra, facilitando assim as
              contratações por parte do cliente.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={PlanilhaFinanceira} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Controle Financeiro</h2>
            <p className="mt-2">
              Utilizada para indicar com precisão os valores investidos na obra,
              o controle financeiro possibilita verificar também se o consumo de
              recursos está dentro do orçamento.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={RDO} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">RDO</h2>
            <p className="mt-2">
              Para garantir a transparência com cliente, o Relatório Diário de
              Obra é um documento disponibilizado diariamente, no qual informa a
              evolução das atividades do dia, a quantidade de colaboradores em
              obra, bem como fotos de todos os ambientes.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={Histograma} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Cronograma</h2>
            <p className="mt-2">
              Com o cronograma é possível organizar o mapeamento de todas as
              atividades previstas e realizadas, além de listar e priorizar a
              demanda do trabalho, estimando o tempo de cada etapa, a
              necessidade de recursos, entre outras informações primordiais para
              o bom desempenho da obra.
            </p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={Checklist} className="w-full h-[300px] object-cover"></img>
            </div>
            <div className="h-full mt-4">
              <h2 className="text-lg font-bold ">Checklist</h2>
              <p className="mt-2">
                Checklist de início de obra é uma ferramenta usada internamente
                pela equipe de engenharia para organização e ciência de regras
                previstas no regimento interno dos condomínios, com relação à
                barulho, horários de recebimento de materiais, locais para
                estacionamento de caçamba entre outros.
              </p>
              <p className="mt-2">
                Checklist de entrega de obra é utilizado para identificar
                possíveis ajustes que possam ser identificados pela equipe de
                engenharia ou solicitados pela arquitetura e cliente, para
                garantir a qualidade na entrega do projeto.
              </p>
            </div>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4">
            <div className="">
              <img src={Painel} className="w-full h-[300px] object-cover"></img>
            </div>
            <h2 className="mt-4 text-lg font-bold">Painel de Controle</h2>
            <p className="mt-2">
              Um poderoso DASHBOARD interativo e moderno, que permite visualizar
              o desempenho das atividades mais relevantes da obra e a sua
              evolução.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
