import React from 'react'
import LazyLoad from 'react-lazyload'
import Slider from 'react-slick'

interface Props {
  images: any
}

export function CustomSlider({ images }: Props){
  return (
    <LazyLoad>
      <Slider dots={true}  infinite={true} speed={500} slidesToShow={4} slidesToScroll={4}></Slider>
    </LazyLoad>
  );
}