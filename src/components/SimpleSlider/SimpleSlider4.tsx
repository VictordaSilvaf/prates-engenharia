import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/4LM-APTO41/1.png'
import Img2 from '../../assets/img/portfolio/4LM-APTO41/2.png'
import Img3 from '../../assets/img/portfolio/4LM-APTO41/3.png'
import Img4 from '../../assets/img/portfolio/4LM-APTO41/4.png'
import Img5 from '../../assets/img/portfolio/4LM-APTO41/5.png'
import Img6 from '../../assets/img/portfolio/4LM-APTO41/6.png'
import Img7 from '../../assets/img/portfolio/4LM-APTO41/7.png'
import Img10 from '../../assets/img/portfolio/4LM-APTO41/10.png'
import Img11 from '../../assets/img/portfolio/4LM-APTO41/11.png'
import Img12 from '../../assets/img/portfolio/4LM-APTO41/12.png'
import Img13 from '../../assets/img/portfolio/4LM-APTO41/13.png'
import Img14 from '../../assets/img/portfolio/4LM-APTO41/14.png'

export default function SimpleSlider4() {
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
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
      <Images url={Img13} alt="" />
      <Images url={Img14} alt="" />
    </Slider>
  )
}
