import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

interface ImageProps {
  url: string;
  alt: string;
}

export function Images({ url, alt }: ImageProps) {
  return (
    <>
      <div className="relative overflow-hidden sm:h-44 md:h-52 lg:h-72">
        <span
          style={{
            height: "100%",
          }}
        >
          <LazyLoadImage
            className="p-0.5"
            src={url}
            effect="black-and-white"
            alt={alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </span>
      </div>
    </>
  );
}
