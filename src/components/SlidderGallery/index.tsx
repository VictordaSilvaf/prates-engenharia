interface SlidderGalleryProps {
  url: string
  alt: string
  url2: string
  alt2: string
  reverse: boolean
}

export function SlidderGallery({
  url,
  alt,
  url2,
  alt2,
  reverse
}: SlidderGalleryProps) {
  return (
    <div className="flex flex-row mt-16 h-72">
      {reverse ? (
        <>
          <div className="w-1/3 h-full duration-200 hover:drop-shadow-lg grayscale hover:grayscale-0">
            <img className="object-cover w-full h-full" src={url} alt={alt} />
          </div>
          <div className="w-2/3 h-full ml-2 duration-200 hover:drop-shadow-lg grayscale hover:grayscale-0">
            <img className="object-cover w-full h-full" src={url2} alt={alt2} />
          </div>
        </>
      ) : (
        <>
          <div className="w-2/3 h-full mr-2 duration-200 hover:drop-shadow-lg grayscale hover:grayscale-0">
            <img className="object-cover w-full h-full" src={url2} alt={alt2} />
          </div>
          <div className="w-1/3 h-full duration-200 hover:drop-shadow-lg grayscale hover:grayscale-0">
            <img className="object-cover w-full h-full" src={url} alt={alt} />
          </div>
        </>
      )}
    </div>
  )
}
