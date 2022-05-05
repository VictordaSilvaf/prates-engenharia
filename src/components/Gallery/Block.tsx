interface BlockProps {
  alt: string
  url: string
}

export function Block({ url, alt }: BlockProps) {
  return (
    <a
      href="#"
      className="w-80 h-80 hover:drop-shadow-lg p-1 grayscale hover:grayscale-0 hover:p-0 transition-all"
    >
      <img src={url} alt={alt} />
    </a>
  )
}
