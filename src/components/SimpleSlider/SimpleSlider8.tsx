import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/8A_C-FSTUDIO/1.jpeg'
import Img2 from '../../assets/img/portfolio/8A_C-FSTUDIO/2.jpeg'
import Img3 from '../../assets/img/portfolio/8A_C-FSTUDIO/3.jpeg'

export default function SimpleSlider8() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4
  }
  return (
    <Slider {...settings}>
      <Images url={Img1} alt="" />
      <Images url={Img2} alt="" />
      <Images url={Img3} alt="" />
    </Slider>
  )
}
