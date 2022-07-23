import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/1.jpeg'
import Img2 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/2.jpeg'
import Img3 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/3.jpeg'
import Img4 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/4.jpeg'
import Img5 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/5.jpeg'
import Img6 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/6.jpeg'
import Img7 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/7.jpeg'
import Img8 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/8.jpeg'
import Img9 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/9.jpeg'
import Img10 from '../../assets/img/portfolio/13LABORATÓRIO_GUARULHOS/10.jpeg'

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
