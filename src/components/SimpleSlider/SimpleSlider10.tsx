import Slider from 'react-slick'
import { Images } from './Images'

import Img3 from '../../assets/img/portfolio/10M_B/3.png'
import Img4 from '../../assets/img/portfolio/10M_B/4.png'
import Img5 from '../../assets/img/portfolio/10M_B/5.png'
import Img6 from '../../assets/img/portfolio/10M_B/6.png'

export default function SimpleSlider10() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <Slider {...settings}>
      <Images url={Img3} alt="" />
      <Images url={Img4} alt="" />
      <Images url={Img5} alt="" />
      <Images url={Img6} alt="" />
    </Slider>
  )
}
