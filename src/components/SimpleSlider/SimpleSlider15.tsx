import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/1.jpeg'
import Img2 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/2.jpeg'
import Img3 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/3.jpeg'
import Img4 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/4.jpeg'
import Img5 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/5.jpeg'
import Img6 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/6.jpeg'
import Img7 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/7.jpeg'
import Img8 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/8.jpeg'
import Img9 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/9.jpeg'
import Img10 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/10.jpeg'
import Img11 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/11.jpeg'
import Img12 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/12.jpeg'
import Img13 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/13.jpeg'
import Img14 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/14.jpeg'

export default function SimpleSlider15() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <Slider {...settings}>
      <Images url={Img1} alt="" />
      <Images url={Img2} alt="" />
      <Images url={Img3} alt="" />
      <Images url={Img4} alt="" />
      <Images url={Img5} alt="" />
      <Images url={Img6} alt="" />
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img9} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
      <Images url={Img13} alt="" />
      <Images url={Img14} alt="" />
    </Slider>
  )
}
