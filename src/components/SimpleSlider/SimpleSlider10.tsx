import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/10M_B/1.png'
import Img2 from '../../assets/img/portfolio/10M_B/2.png'
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
      <Images url={Img1} alt="" />
      <Images url={Img2} alt="" />
      <Images url={Img3} alt="" />
      <Images url={Img4} alt="" />
      <Images url={Img5} alt="" />
      <Images url={Img6} alt="" />
    </Slider>
  )
}
