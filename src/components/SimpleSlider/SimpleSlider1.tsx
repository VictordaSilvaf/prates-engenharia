import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/1AK-SALA2/1.png'
import Img2 from '../../assets/img/portfolio/1AK-SALA2/2.png'
import Img3 from '../../assets/img/portfolio/1AK-SALA2/3.png'
import Img4 from '../../assets/img/portfolio/1AK-SALA2/4.png'
import Img5 from '../../assets/img/portfolio/1AK-SALA2/5.png'
import Img7 from '../../assets/img/portfolio/1AK-SALA2/7.png'
import Img8 from '../../assets/img/portfolio/1AK-SALA2/8.png'
import Img9 from '../../assets/img/portfolio/1AK-SALA2/9.png'
import Img10 from '../../assets/img/portfolio/1AK-SALA2/10.png'
import Img11 from '../../assets/img/portfolio/1AK-SALA2/11.png'
import Img12 from '../../assets/img/portfolio/1AK-SALA2/12.png'
import Img13 from '../../assets/img/portfolio/1AK-SALA2/13.png'
import Img14 from '../../assets/img/portfolio/1AK-SALA2/14.png'
import Img15 from '../../assets/img/portfolio/1AK-SALA2/15.png'
import Img16 from '../../assets/img/portfolio/1AK-SALA2/16.png'
import Img17 from '../../assets/img/portfolio/1AK-SALA2/17.png'
import Img18 from '../../assets/img/portfolio/1AK-SALA2/18.png'

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
      <Images url={Img5} alt="" />
      <Images url={Img7} alt="" />
      <Images url={Img8} alt="" />
      <Images url={Img9} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
      <Images url={Img13} alt="" />
      <Images url={Img14} alt="" />
      <Images url={Img15} alt="" />
      <Images url={Img16} alt="" />
      <Images url={Img17} alt="" />
      <Images url={Img18} alt="" />
    </Slider>
  )
}
