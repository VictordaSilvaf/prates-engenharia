interface ImageProps {
  url: string
  alt: string
}

export function Images({ url, alt }: ImageProps) {
  return (
    <>
      <div className="w-full h-72">
        <img
          className="object-fill w-full h-full p-0.5 hover:p-0 duration-150"
          src={url}
          alt={alt}
        />
      </div>
    </>
  )
}
