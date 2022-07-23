import Slider from 'react-slick'
import { Images } from './Images'

import Img1 from '../../assets/img/portfolio/7JR-DUDASENNA/1.jpg'
import Img2 from '../../assets/img/portfolio/7JR-DUDASENNA/2.jpg'
import Img3 from '../../assets/img/portfolio/7JR-DUDASENNA/3.jpg'
import Img4 from '../../assets/img/portfolio/7JR-DUDASENNA/4.jpg'
import Img5 from '../../assets/img/portfolio/7JR-DUDASENNA/5.jpg'
import Img7 from '../../assets/img/portfolio/7JR-DUDASENNA/7.jpg'
import Img8 from '../../assets/img/portfolio/7JR-DUDASENNA/8.jpg'
import Img9 from '../../assets/img/portfolio/7JR-DUDASENNA/9.jpg'
import Img10 from '../../assets/img/portfolio/7JR-DUDASENNA/10.jpg'
import Img11 from '../../assets/img/portfolio/7JR-DUDASENNA/11.jpg'
import Img12 from '../../assets/img/portfolio/7JR-DUDASENNA/12.jpg'
import Img13 from '../../assets/img/portfolio/7JR-DUDASENNA/13.jpg'
import Img14 from '../../assets/img/portfolio/7JR-DUDASENNA/14.jpg'
import Img15 from '../../assets/img/portfolio/7JR-DUDASENNA/15.jpg'
import Img16 from '../../assets/img/portfolio/7JR-DUDASENNA/16.jpg'
import Img17 from '../../assets/img/portfolio/7JR-DUDASENNA/17.jpg'
import Img18 from '../../assets/img/portfolio/7JR-DUDASENNA/18.jpg'
import Img19 from '../../assets/img/portfolio/7JR-DUDASENNA/19.jpg'

export default function SimpleSlider7() {
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
      <Images url={Img19} alt="" />
    </Slider>
  )
}