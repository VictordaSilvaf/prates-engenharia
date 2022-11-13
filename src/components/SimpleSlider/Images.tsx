import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

interface ImageProps {
  url: string;
  alt: string;
}

export function Images({ url, alt }: ImageProps) {
  return (
    <>
      <div className="relative overflow-hidden">
        <LazyLoadImage
          className="p-0.5 object-contain"
          src={url}
          effect="black-and-white"
          alt={alt}
          loading="lazy"
        />
      </div>
    </>
  );
}
