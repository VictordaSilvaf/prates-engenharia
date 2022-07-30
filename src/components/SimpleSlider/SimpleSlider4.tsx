import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/4LM-APTO41/1.png'
import Img2 from '../../assets/img/portfolio/4LM-APTO41/2.png'
import Img3 from '../../assets/img/portfolio/4LM-APTO41/3.png'
import Img4 from '../../assets/img/portfolio/4LM-APTO41/4.png'
import Img5 from '../../assets/img/portfolio/4LM-APTO41/5.png'
import Img6 from '../../assets/img/portfolio/4LM-APTO41/6.png'
import Img7 from '../../assets/img/portfolio/4LM-APTO41/7.png'
import Img8 from '../../assets/img/portfolio/4LM-APTO41/8.png'
import Img9 from '../../assets/img/portfolio/4LM-APTO41/9.png'
import Img10 from '../../assets/img/portfolio/4LM-APTO41/10.png'
import Img11 from '../../assets/img/portfolio/4LM-APTO41/11.png'
import Img12 from '../../assets/img/portfolio/4LM-APTO41/12.png'
import Img13 from '../../assets/img/portfolio/4LM-APTO41/13.png'
import Img14 from '../../assets/img/portfolio/4LM-APTO41/14.png'
import Img15 from '../../assets/img/portfolio/4LM-APTO41/15.png'
import Img16 from '../../assets/img/portfolio/4LM-APTO41/16.png'
import Img17 from '../../assets/img/portfolio/4LM-APTO41/17.png'
import Img18 from '../../assets/img/portfolio/4LM-APTO41/18.png'
import Img19 from '../../assets/img/portfolio/4LM-APTO41/19.png'
import Img20 from '../../assets/img/portfolio/4LM-APTO41/20.png'
import Img21 from '../../assets/img/portfolio/4LM-APTO41/21.png'
import Img22 from '../../assets/img/portfolio/4LM-APTO41/22.png'
import Img23 from '../../assets/img/portfolio/4LM-APTO41/23.png'
import Img24 from '../../assets/img/portfolio/4LM-APTO41/24.png'
import Img25 from '../../assets/img/portfolio/4LM-APTO41/25.png'
import Img26 from '../../assets/img/portfolio/4LM-APTO41/26.png'

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
      <Images url={Img19} alt="" />
      <Images url={Img20} alt="" />
      <Images url={Img21} alt="" />
      <Images url={Img22} alt="" />
      <Images url={Img23} alt="" />
      <Images url={Img24} alt="" />
      <Images url={Img25} alt="" />
      <Images url={Img26} alt="" />
    </Slider>
  )
}
