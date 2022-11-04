import { Block } from './Block'

import Img1 from '../../assets/img/home/1.jpeg'
import Img2 from '../../assets/img/home/2.jpg'
import Img3 from '../../assets/img/home/3.jpg'
import Img4 from '../../assets/img/home/4.jpg'
import Img5 from '../../assets/img/home/5.png'
import Img6 from '../../assets/img/home/6.jpg'
import Img7 from '../../assets/img/home/7.jpeg'
import Img8 from '../../assets/img/home/8.jpg'
import Img9 from '../../assets/img/home/9.jpeg'
import Img10 from '../../assets/img/home/10.jpeg'
import Img11 from '../../assets/img/home/11.jpeg'
import Img12 from '../../assets/img/home/12.jpg'
import Img13 from '../../assets/img/home/13.jpeg'
import Img14 from '../../assets/img/home/14.jpg'
import Img15 from '../../assets/img/home/15.jpeg'

export function Gallery() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center min-h-8">
        <Block url={Img1} alt="" />
        {/* <Block url={Img2} alt="" />  */}
        <Block url={Img3} alt="" />
        <Block url={Img4} alt="" />
        {/* <Block url={Img5} alt="" /> */}
        <Block url={Img6} alt="" />
        {/* <Block url={Img7} alt="" /> */}
        {/* <Block url={Img8} alt="" /> */}
        <Block url={Img9} alt="" />
        <Block url={Img10} alt="" />
        <Block url={Img11} alt="" />
        <Block url={Img12} alt="" />
        <Block url={Img13} alt="" />
        {/* <Block url={Img14} alt="" /> */}
        <Block url={Img15} alt="" />
      </div>
    </div>
  )
}
