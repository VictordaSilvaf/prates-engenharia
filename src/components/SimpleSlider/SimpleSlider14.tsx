import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/1.jpg'
import Img2 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/2.jpg'
import Img3 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/3.jpg'
import Img4 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/4.jpg'
import Img5 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/5.jpg'
import Img6 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/6.jpg'
import Img7 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/7.jpg'
import Img8 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/8.jpg'
import Img9 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/9.jpg'
import Img10 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/10.jpg'
import Img11 from '../../assets/img/portfolio/14WENTZ-FELIPE_HESS/11.jpg'

export default function SimpleSlider14() {
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
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img9} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
    </Slider>
  )
}
