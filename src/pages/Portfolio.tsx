import { Footer } from "../components/Footer";
import { CustomSlider } from "../components/CustomSlider";

import { PortfolioImgs } from "../assets/img/portfolio";

export function Portfolio() {
  console.log(PortfolioImgs);
  return (
    <>
      <section className="px-8 pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Portfólio</h2>
        {PortfolioImgs.map((portfolioImg) => {
          return (
            <CustomSlider
              title={portfolioImg.title}
              images={portfolioImg.images}
            />
          );
        })}
        ================================================================
        <h3 className="mt-16 mb-5 text-center">COPAN - SALA2 ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider1} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">
          G&M - FELIPE KILARIS ARQUITETURA
        </h3>
        <div>{/* <CustomSlider images={slider2} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">B&R - SALA2 ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider3} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">LM - APTO41 ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider4} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">CLÍNICA - ISABELA FRAIA</h3>
        <div>{/* <CustomSlider images={slider5} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">JR - DUDA SENNA ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider7} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">ANAS - F.STUDIO ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider8} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">B&G - SALA2 ARQUITETURA</h3>
        <div>{/* <CustomSlider images={slider9} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">
          GHI - FIGUEIREDO FISCHER ARQUITETOS
        </h3>
        <div>{/* <CustomSlider images={slider10} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">
          LABGRU - PIETRO TERLIZZI ARQUITETURA
        </h3>
        <div>{/* <CustomSlider images={slider11} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">
          WENTZ - FELIPE HESS ARQUITETOS
        </h3>
        <div>{/* <CustomSlider images={slider12} /> */}</div>
        <h3 className="mt-16 mb-5 text-center">
          JC RESTAURANTE - ESTÚDIO PENHA ARQUITETOS
        </h3>
        <div>{/* <CustomSlider images={slider13} /> */}</div>
      </section>
      <Footer />
    </>
  );
}
