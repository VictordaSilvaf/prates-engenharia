import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/1.png'
import Img4 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/4.png'
import Img5 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/5.png'
import Img10 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/10.png'
import Img11 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/11.png'
import Img12 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/12.png'
import Img14 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/14.png'
import Img19 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/19.png'
import Img20 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/20.png'
import Img21 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/21.png'
import Img22 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/22.png'
import Img23 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/23.png'
import Img25 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/25.png'
import Img26 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/26.png'
import Img27 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/27.png'

export default function SimpleSlider12() {
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
      <Images url={Img4} alt="" />
      <Images url={Img5} alt="" />
      <Images url={Img10} alt="" />
      <Images url={Img11} alt="" />
      <Images url={Img12} alt="" />
      <Images url={Img14} alt="" />
      <Images url={Img19} alt="" />
      <Images url={Img20} alt="" />
      <Images url={Img21} alt="" />
      <Images url={Img22} alt="" />
      <Images url={Img23} alt="" />
      <Images url={Img25} alt="" />
      <Images url={Img26} alt="" />
      <Images url={Img27} alt="" />
    </Slider>
  )
}
