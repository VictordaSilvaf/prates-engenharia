import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/3B_R-SALA2/1.png'
import Img2 from '../../assets/img/portfolio/3B_R-SALA2/2.png'
import Img3 from '../../assets/img/portfolio/3B_R-SALA2/3.png'
import Img6 from '../../assets/img/portfolio/3B_R-SALA2/6.png'
import Img7 from '../../assets/img/portfolio/3B_R-SALA2/7.png'
import Img8 from '../../assets/img/portfolio/3B_R-SALA2/8.png'
import Img14 from '../../assets/img/portfolio/3B_R-SALA2/14.png'
import Img15 from '../../assets/img/portfolio/3B_R-SALA2/15.png'
import Img16 from '../../assets/img/portfolio/3B_R-SALA2/16.png'
import Img19 from '../../assets/img/portfolio/3B_R-SALA2/19.png'

export default function SimpleSlider3() {
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
      <Images url={Img6} alt="" />
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img14} alt="" />
      <Images url={Img15} alt="" />
      <Images url={Img16} alt="" />
      <Images url={Img19} alt="" />
    </Slider>
  )
}
