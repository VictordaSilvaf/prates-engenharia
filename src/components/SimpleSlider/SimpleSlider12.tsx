import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/1.jpeg'
import Img2 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/2.jpeg'
import Img3 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/3.jpeg'
import Img4 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/4.jpeg'
import Img5 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/5.jpeg'
import Img6 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/6.jpeg'
import Img7 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/7.jpeg'
import Img8 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/8.jpeg'
import Img9 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/9.jpeg'
import Img10 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/10.jpeg'
import Img11 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/11.jpeg'
import Img12 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/12.jpeg'
import Img13 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/13.jpeg'
import Img14 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/14.jpeg'
import Img15 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/15.jpeg'
import Img16 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/16.jpeg'
import Img17 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/17.jpeg'
import Img18 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/18.jpeg'
import Img19 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/19.jpeg'
import Img20 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/20.jpg'
import Img21 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/21.jpg'
import Img22 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/22.jpg'
import Img23 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/23.jpg'
import Img24 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/24.jpg'
import Img25 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/25.jpg'
import Img26 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/26.jpg'
import Img27 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/27.jpg'
import Img28 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/28.jpg'
import Img29 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/29.jpg'
import Img30 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/30.jpg'
import Img31 from '../../assets/img/portfolio/12L_G-FIGUEIREDO_FISCHER/31.jpg'

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
      <Images url={Img27} alt="" />
      <Images url={Img28} alt="" />
      <Images url={Img29} alt="" />
      <Images url={Img30} alt="" />
      <Images url={Img31} alt="" />
    </Slider>
  )
}
