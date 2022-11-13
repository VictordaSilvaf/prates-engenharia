import { LazyBlock } from "../LazyBlock";

import { HomeImages } from "../../assets/img/home";

export function Gallery() {
  const images = Object.values(HomeImages[0]);
  console.log(images);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center min-h-8">
        {images.map((image) => (
          <LazyBlock url={image} />
        ))}
      </div>
    </div>
  );
}
