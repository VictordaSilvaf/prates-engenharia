import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/1.png'
import Img2 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/2.png'
import Img3 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/3.png'
import Img4 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/4.png'
import Img5 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/5.png'
import Img7 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/7.png'
import Img8 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/8.png'
import Img9 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/9.png'
import Img10 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/10.png'
import Img11 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/11.png'
import Img12 from '../../assets/img/portfolio/15RESTAURANTE-ESTÚDIO_PENHA/12.png'

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
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img9} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
    </Slider>
  )
}
