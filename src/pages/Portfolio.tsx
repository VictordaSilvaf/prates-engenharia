import { Footer } from "../components/Footer";
import { CustomSlider } from "../components/CustomSlider";

export function Portfolio() {
  const slider1 = import.meta.globEager(
    "/public/portfolio/1AK-SALA2/*.(jpg|png|jpeg)"
  );
  const slider2 = import.meta.globEager(
    "/portfolio/2G_M-FelipeKilares/*.(jpg|png|jpeg)"
  );
  const slider3 = import.meta.globEager(
    "/portfolio/3B_R-SALA2/*.(jpg|png|jpeg)"
  );
  const slider4 = import.meta.globEager(
    "/public/portfolio/4LM-APTO41/*.(jpg|png|jpeg)"
  );
  const slider5 = import.meta.globEager(
    "/public/portfolio/5M_V-ISABELAFRAIA/*.(jpg|png|jpeg)"
  );
  // const slider6 = import.meta.globEager("/public/portfolio/7JR-DUDASENNA/*.(jpg|png|jpeg)");
  const slider7 = import.meta.globEager(
    "/public/portfolio/8A_C-FSTUDIO/*.(jpg|png|jpeg)"
  );
  const slider8 = import.meta.globEager(
    "/public/portfolio/9B_G-SALA2/*.(jpg|png|jpeg)"
  );
  const slider9 = import.meta.globEager(
    "/public/portfolio/10M_B/*.(jpg|png|jpeg)"
  );
  const slider10 = import.meta.globEager(
    "/public/portfolio/12L_G-FIGUEIREDO_FISCHER/*.(jpg|png|jpeg)"
  );
  const slider11 = import.meta.globEager(
    "/public/portfolio/13LABORATORIO_GUARULHOS/*.(jpg|png|jpeg)"
  );
  const slider12 = import.meta.globEager(
    "/public/portfolio/14WENTZ-FELIPE_HESS/*.(jpg|png|jpeg)"
  );
  const slider13 = import.meta.globEager(
    "/public/portfolio/15RESTAURANTE-ESTUDIO_PENHA/*.(jpg|png|jpeg)"
  );
  
  console.log(slider1)

  return (
    <>
      <section className="px-8 pt-20">
      

        <h2 className="mt-10 text-lg font-bold text-center">Portfólio</h2>

        <h3 className="mt-5 mb-5 text-center">COPAN - SALA2 ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider1} />
        </div>
        <h3 className="mt-16 mb-5 text-center">
          G&M - FELIPE KILARIS ARQUITETURA
        </h3>

        <div>
          <CustomSlider images={slider2} />
        </div>
        <h3 className="mt-16 mb-5 text-center">B&R - SALA2 ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider3} />
        </div>
        <h3 className="mt-16 mb-5 text-center">LM - APTO41 ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider4} />
        </div>
        <h3 className="mt-16 mb-5 text-center">CLÍNICA - ISABELA FRAIA</h3>
        <div>
          <CustomSlider images={slider5} />
        </div>
        <h3 className="mt-16 mb-5 text-center">JR - DUDA SENNA ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider7} />
        </div>
        <h3 className="mt-16 mb-5 text-center">ANAS - F.STUDIO ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider8} />
        </div>
        <h3 className="mt-16 mb-5 text-center">B&G - SALA2 ARQUITETURA</h3>
        <div>
          <CustomSlider images={slider9} />
        </div>
        <h3 className="mt-16 mb-5 text-center">
          GHI - FIGUEIREDO FISCHER ARQUITETOS
        </h3>
        <div>
          <CustomSlider images={slider10} />
        </div>
        <h3 className="mt-16 mb-5 text-center">
          LABGRU - PIETRO TERLIZZI ARQUITETURA
        </h3>
        <div>
          <CustomSlider images={slider11} />
        </div>
        <h3 className="mt-16 mb-5 text-center">
          WENTZ - FELIPE HESS ARQUITETOS
        </h3>
        <div>
          <CustomSlider images={slider12} />
        </div>
        <h3 className="mt-16 mb-5 text-center">
          JC RESTAURANTE - ESTÚDIO PENHA ARQUITETOS
        </h3>
        <div>
          <CustomSlider images={slider13} />
        </div>
      </section>
      <Footer />
    </>
  );
}
