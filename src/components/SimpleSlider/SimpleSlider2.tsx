import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/2G_M-FelipeKilares/1.png'
import Img3 from '../../assets/img/portfolio/2G_M-FelipeKilares/3.png'
import Img5 from '../../assets/img/portfolio/2G_M-FelipeKilares/5.png'
import Img6 from '../../assets/img/portfolio/2G_M-FelipeKilares/6.png'
import Img9 from '../../assets/img/portfolio/2G_M-FelipeKilares/9.png'
import Img10 from '../../assets/img/portfolio/2G_M-FelipeKilares/10.png'
import Img11 from '../../assets/img/portfolio/2G_M-FelipeKilares/11.png'
import Img13 from '../../assets/img/portfolio/2G_M-FelipeKilares/13.png'
import Img14 from '../../assets/img/portfolio/2G_M-FelipeKilares/14.png'
import Img16 from '../../assets/img/portfolio/2G_M-FelipeKilares/16.png'
import Img18 from '../../assets/img/portfolio/2G_M-FelipeKilares/18.png'
import Img19 from '../../assets/img/portfolio/2G_M-FelipeKilares/19.png'
import Img28 from '../../assets/img/portfolio/2G_M-FelipeKilares/28.png'

export default function SimpleSlider2() {
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
      <Images url={Img3} alt="" />
      <Images url={Img5} alt="" />
      <Images url={Img6} alt="" />
      <Images url={Img9} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img13} alt="" />
      <Images url={Img14} alt="" />
      <Images url={Img16} alt="" />
      <Images url={Img18} alt="" />
      <Images url={Img19} alt="" />
      <Images url={Img28} alt="" />
    </Slider>
  )
}
