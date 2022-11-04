import { Block } from './Block'

import { LazyBlock } from '../LazyBlock'

const images = import.meta.glob("/public/home/*.\(jpg|png|jpeg)")
console.log(images)

export function Gallery() {
  const blockImages = Object.keys(images)

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center min-h-8">
        {blockImages.map((image, index) => (
          <LazyBlock url={image} key={index} />
        ))}
      </div>
    </div>
  )
}
