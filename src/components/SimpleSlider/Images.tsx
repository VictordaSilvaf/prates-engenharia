interface ImageProps {
  url: string
  alt: string
}

export function Images({ url, alt }: ImageProps) {
  return (
    <>
      <div className="w-full h-32 sm:h-44 md:h-52 lg:h-72">
        <img
          className="object-fill w-full h-full p-0.5 hover:p-0 duration-150"
          src={url}
          alt={alt}
        />
      </div>
    </>
  )
}
