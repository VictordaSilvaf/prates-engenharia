interface BlockProps {
  alt: string
  url: string
}

export function Block({ url, alt }: BlockProps) {
  return (
    <a
      href="#"
      className="p-1 transition-all w-72 h-72 hover:drop-shadow-lg grayscale hover:grayscale-0 hover:p-0"
    >
      <img src={url} alt={alt} className="object-cover w-full h-full" />
    </a>
  )
}
