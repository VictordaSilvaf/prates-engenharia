import { Footer } from '../components/Footer/index'
import SimpleSlider1 from '../components/SimpleSlider/SimpleSlider1'
import SimpleSlider2 from '../components/SimpleSlider/SimpleSlider2'
import SimpleSlider3 from '../components/SimpleSlider/SimpleSlider3'
import SimpleSlider4 from '../components/SimpleSlider/SimpleSlider4'
import SimpleSlider5 from '../components/SimpleSlider/SimpleSlider5'
import SimpleSlider7 from '../components/SimpleSlider/SimpleSlider7'
import SimpleSlider8 from '../components/SimpleSlider/SimpleSlider8'
import SimpleSlider9 from '../components/SimpleSlider/SimpleSlider9'
import SimpleSlider12 from '../components/SimpleSlider/SimpleSlider12'
import SimpleSlider14 from '../components/SimpleSlider/SimpleSlider14'
import SimpleSlider13 from '../components/SimpleSlider/SimpleSlider13'
import SimpleSlider15 from '../components/SimpleSlider/SimpleSlider15'

export function Portfolio() {
  return (
    <>
      <section className="px-8 pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Portfólio</h2>

        <h3 className="mt-5 mb-5 text-center">COPAN - SALA2 ARQUITETURA</h3>
        <SimpleSlider1 />

        <h3 className="mt-16 mb-5 text-center">
          G&M - FELIPE KILARIS ARQUITETURA
        </h3>
        <SimpleSlider2 />

        <h3 className="mt-16 mb-5 text-center">B&R - SALA2 ARQUITETURA</h3>
        <SimpleSlider3 />

        <h3 className="mt-16 mb-5 text-center">LM - APTO41 ARQUITETURA</h3>
        <SimpleSlider4 />

        <h3 className="mt-16 mb-5 text-center">CLÍNICA - ISABELA FRAIA</h3>
        <SimpleSlider5 />

        <h3 className="mt-16 mb-5 text-center">JR - DUDA SENNA ARQUITETURA</h3>
        <SimpleSlider7 />

        <h3 className="mt-16 mb-5 text-center">ANAS - F.STUDIO ARQUITETURA</h3>
        <SimpleSlider8 />


        <h3 className="mt-16 mb-5 text-center">B&G - SALA2 ARQUITETURA</h3>
        <SimpleSlider9 />

{/*         <h3 className="mt-16 mb-5 text-center">MB - ARQUITETURA</h3>
        <SimpleSlider10 /> */}

        <h3 className="mt-16 mb-5 text-center">GHI - FIGUEIREDO FISCHER ARQUITETOS</h3>
        <SimpleSlider12 />

        <h3 className="mt-16 mb-5 text-center">LABGRU - PIETRO TERLIZZI ARQUITETURA</h3>
        <SimpleSlider13 />

        <h3 className="mt-16 mb-5 text-center">WENTZ - FELIPE HESS ARQUITETOS</h3>
        <SimpleSlider14 />

        <h3 className="mt-16 mb-5 text-center">JC RESTAURANTE - ESTÚDIO PENHA ARQUITETOS</h3>
        <SimpleSlider15 />
      </section>
      <Footer />
    </>
  )
}
