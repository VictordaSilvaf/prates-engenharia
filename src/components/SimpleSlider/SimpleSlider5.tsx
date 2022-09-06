import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/5M_V-ISABELAFRAIA/1.png'
import Img2 from '../../assets/img/portfolio/5M_V-ISABELAFRAIA/2.png'
import Img4 from '../../assets/img/portfolio/5M_V-ISABELAFRAIA/4.png'

export default function SimpleSlider5() {
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
      <Images url={Img4} alt="" />
    </Slider>
  )
}
