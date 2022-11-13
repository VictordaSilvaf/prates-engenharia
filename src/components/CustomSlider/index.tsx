import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { Images } from "../SimpleSlider/Images";

interface Props {
  images: object;
  title: string;
}

export function CustomSlider({ images, title }: Props) {
  const sliderImages = Object.values(images);

  return (
    <>
      <h3 className="mt-16 mb-5 text-center">{title}</h3>
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
            <Images key={index} url={data} alt="" />
          ))}
        </Slider>
      </LazyLoad>
    </>
  );
}
