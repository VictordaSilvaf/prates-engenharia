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
      </section>
      <Footer />
    </>
  );
}
