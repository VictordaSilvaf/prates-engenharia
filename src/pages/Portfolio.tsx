import { Menu } from '../components/Menu'
import { Slidder } from '../components/Slidder/index'
import ImgSlider3 from '../assets/portfolioImg3.png'
import ImgSlider4 from '../assets/portfolioImg4.png'
import { Footer } from '../components/Footer/index'
import { SlidderPortfolio } from '../components/SlidderPortfolio/index'

export function Portfolio() {
  return (
    <>
      <section className="px-8 pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Portfólio</h2>

        <h3 className="mt-8 text-center">Obra: B&R</h3>
        <p className="-mb-12 text-center">Arquitetura: SALA2 Arquitetura</p>

        <div className="px-10 py-3 2xl:container 2xl:mx-auto 2xl:px-0">
          <SlidderPortfolio />
        </div>

        <h3 className="mt-16 text-center">Obra: B&R</h3>
        <p className="-mb-12 text-center">Arquitetura: SALA2 Arquitetura</p>
        <Slidder
          url={ImgSlider3}
          alt="Inicio construção 1"
          url2={ImgSlider4}
          alt2="Inicio construção 2"
          reverse={true}
        />
      </section>
      <Footer />
    </>
  )
}
