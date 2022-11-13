
import LazyLoad from 'react-lazyload'
import Slider from 'react-slick'
import { Images } from '../SimpleSlider/Images';

interface Props {
  images: any
}

export function CustomSlider({ images }: Props){
  const sliderImages = Object.keys(images);

  return (
    <>
    <LazyLoad once height="200">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={sliderImages.length < 4 ? sliderImages.length : 4}
        slidesToScroll={4}
        className=""
      >
        {sliderImages.map((data, index) => (
          <Images key={index} url={data}  alt=""/>
        ))}
      </Slider>
    </LazyLoad>
    </>
  );
}