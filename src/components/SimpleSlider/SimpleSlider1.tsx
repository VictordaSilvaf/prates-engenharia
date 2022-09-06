import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/1AK-SALA2/1.png'
import Img2 from '../../assets/img/portfolio/1AK-SALA2/2.png'
import Img3 from '../../assets/img/portfolio/1AK-SALA2/3.png'
import Img4 from '../../assets/img/portfolio/1AK-SALA2/4.png'
export default function SimpleSlider1() {
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
    </Slider>
  )
}
