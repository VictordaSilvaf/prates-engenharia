import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer/index'
import { ProjectsGallery } from '../components/ProjectsGallery'

export function Process() {
  return (
    <>
      <Menu />

      <section className="px-8 pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">
          Ferramentas de Gestão de Obra
        </h2>
        <ProjectsGallery />
      </section>
      <Footer />
    </>
  )
}
