import Slider from 'react-slick'
import { Images } from './Images'

import {Img1, Img2, Img3, Img4} from '../../assets/img/portfolio/1AK-SALA2'


export default function SimpleSlider1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <Slider {...settings} >
      <Images url={Img1} alt="" />
      <Images url={Img2} alt="" />
      <Images url={Img3} alt="" />
      <Images url={Img4} alt="" />
    </Slider>
  )
}
