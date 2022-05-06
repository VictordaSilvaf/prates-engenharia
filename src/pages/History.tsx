import Foto1 from '../assets/Cesar.png'
import Foto2 from '../assets/Mariana.png'
import { Slidder } from '../components/Slidder/index'

import ImgSlider1 from '../assets/imgSlidder1.png'
import ImgSlider2 from '../assets/imgSlidder2.png'
import ImgSlider3 from '../assets/imgSlidder3.png'
import ImgSlider4 from '../assets/imgSlidder4.png'
import { Footer } from '../components/Footer/index'

export function History() {
  return (
    <>
      <section className="pt-20 px-8">
        <h2 className="text-center mt-10 text-lg font-bold">Nossa História</h2>
        <div className="flex flex-col lg:flex-row mt-8">
          <div className="w-full lg:w-1/3 flex justify-center lg:block">
            <img src={Foto1} alt="Foto Cesar" />
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-2/3 text-center pl-0 lg:pl-8">
            <p className="mb-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
            <p className="mb-5">
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-8">
          <div className="w-full mt-4 lg:mt-0 lg:w-2/3 text-center pl-0 lg:pl-8">
            <p className="mb-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
            <p className="mb-5">
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:block">
            <img src={Foto2} alt="Foto Cesar" />
          </div>
        </div>
        <div className="mt-8">
          <Slidder
            url={ImgSlider3}
            alt="Inicio construção 1"
            url2={ImgSlider1}
            alt2="Inicio construção 2"
            reverse={true}
          />

          <Slidder
            url={ImgSlider4}
            alt="Inicio construção 3"
            url2={ImgSlider2}
            alt2="Inicio construção 4"
            reverse={false}
          />
        </div>
        <div className="mt-8 pt-4">
          <Slidder
            url={ImgSlider3}
            alt="Inicio construção 1"
            url2={ImgSlider1}
            alt2="Inicio construção 2"
            reverse={true}
          />

          <Slidder
            url={ImgSlider4}
            alt="Inicio construção 3"
            url2={ImgSlider2}
            alt2="Inicio construção 4"
            reverse={false}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
