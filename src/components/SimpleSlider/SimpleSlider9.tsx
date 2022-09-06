import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/9B_G-SALA2/1.png'
import Img2 from '../../assets/img/portfolio/9B_G-SALA2/2.png'
import Img6 from '../../assets/img/portfolio/9B_G-SALA2/6.png'
import Img7 from '../../assets/img/portfolio/9B_G-SALA2/7.png'
import Img8 from '../../assets/img/portfolio/9B_G-SALA2/8.png'
import Img10 from '../../assets/img/portfolio/9B_G-SALA2/10.png'
import Img11 from '../../assets/img/portfolio/9B_G-SALA2/11.png'
import Img12 from '../../assets/img/portfolio/9B_G-SALA2/12.png'
import Img14 from '../../assets/img/portfolio/9B_G-SALA2/14.png'
import Img15 from '../../assets/img/portfolio/9B_G-SALA2/15.png'
import Img16 from '../../assets/img/portfolio/9B_G-SALA2/16.png'

export default function SimpleSlider9() {
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
      <Images url={Img6} alt="" />
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
      <Images url={Img14} alt="" />
      <Images url={Img15} alt="" />
      <Images url={Img16} alt="" />
    </Slider>
  )
}
