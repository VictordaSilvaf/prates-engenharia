import { Footer } from "../components/Footer";
import { CustomSlider } from "../components/CustomSlider";

import { PortfolioImgs } from "../assets/img/portfolio";

export function Portfolio() {
  return (
    <>
      <section className="px-8 pt-20">
        <h2 className="mt-10 text-lg font-bold text-center">Portfólio</h2>
        {PortfolioImgs.map((portfolioImg, index) => {
          return (
            <CustomSlider
              title={portfolioImg.title}
              images={portfolioImg.images}
              key={index}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
}
