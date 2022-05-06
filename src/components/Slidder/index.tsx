interface SlidderProps {
  url: string
  alt: string
  url2: string
  alt2: string
  reverse: boolean
}

export function Slidder({ url, alt, url2, alt2, reverse }: SlidderProps) {
  return (
    <div className="h-72 flex flex-row mt-16">
      {reverse ? (
        <>
          <div className="w-1/3 h-full">
            <img className="object-cover h-full w-full" src={url} alt={alt} />
          </div>
          <div className="w-2/3 h-full ml-2">
            <img className="object-cover h-full w-full" src={url2} alt={alt2} />
          </div>
        </>
      ) : (
        <>
          <div className="w-2/3 h-full mr-2">
            <img className="object-cover h-full w-full" src={url2} alt={alt2} />
          </div>
          <div className="w-1/3 h-full">
            <img className="object-cover h-full w-full" src={url} alt={alt} />
          </div>
        </>
      )}
    </div>
  )
}
