import { LazyBlock } from "../LazyBlock";

import { HomeImages } from "../../assets/img/home";

export function Gallery() {
  const images = Object.values(HomeImages[0]);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center min-h-8">
        {images.map((image, index) => (
          <LazyBlock url={image} key={index}/>
        ))}
      </div>
    </div>
  );
}
