import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/1.png'
import Img2 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/2.png'
import Img3 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/3.png'
import Img4 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/4.png'
import Img5 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/5.png'
import Img6 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/6.png'
import Img7 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/7.png'
import Img8 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/8.png'
import Img9 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/9.png'
import Img10 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/10.png'

export default function SimpleSlider13() {
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
    </Slider>
  )
}
