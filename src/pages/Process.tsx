import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'
import { ProjectsGallery } from '../components/ProjectsGallery/index'
import { Footer } from '../components/Footer/index'

export function Process() {
  return (
    <>
      <section className="pt-20 px-8">
        <h2 className="text-center mt-10 text-lg font-bold">
          Ferramentas de Gestão de Obra
        </h2>
        <ProjectsGallery />
      </section>
      <Footer />
    </>
  )
}
