import { Block } from './Block'

import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img6 from '../../assets/img6.png'
import Img7 from '../../assets/img7.png'
import Img8 from '../../assets/img8.png'

export function Gallery() {
  return (
    <div className="w-full flex justify-center justify-center">
      <div className="min-h-8 flex flex-wrap justify-center">
        <Block url={Img1} alt="" />
        <Block url={Img2} alt="" />
        <Block url={Img3} alt="" />
        <Block url={Img4} alt="" />
        <Block url={Img5} alt="" />
        <Block url={Img6} alt="" />
        <Block url={Img7} alt="" />
        <Block url={Img8} alt="" />
      </div>
    </div>
  )
}
