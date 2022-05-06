import { Menu } from '../components/Menu'
import { Slidder } from '../components/Slidder/index'
import ImgSlider1 from '../assets/portfolioImgInicio.png'
import ImgSlider2 from '../assets/portfolioImg1.png'
import ImgSlider3 from '../assets/portfolioImg3.png'
import ImgSlider4 from '../assets/portfolioImg4.png'
import { Footer } from '../components/Footer/index'

export function Portfolio() {
  return (
    <>
      <section className="pt-20 px-8">
        <h2 className="text-center mt-10 text-lg font-bold">Portfólio</h2>

        <h3 className="text-center mt-8">Obra: B&R</h3>
        <p className="text-center -mb-12">Arquitetura: SALA2 Arquitetura</p>
        <Slidder
          url={ImgSlider1}
          alt="Inicio construção 1"
          url2={ImgSlider2}
          alt2="Inicio construção 2"
          reverse={true}
        />

        <h3 className="text-center mt-16">Obra: B&R</h3>
        <p className="text-center -mb-12">Arquitetura: SALA2 Arquitetura</p>
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
