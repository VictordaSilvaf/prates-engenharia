import { useState } from 'react'

interface BtnMenuProps {
  text: string
  route: string
}

export function BtnMenu({ text, route }: BtnMenuProps) {
  const [isSelected, setIsSelected] = useState(false)

  function btnSelected() {
    setIsSelected(true)
  }

  return (
    <a
      href={route}
      onClick={btnSelected}
      className="hover:opacity-75 transition-all group relative duration-[200] ease-in-out"
    >
      <span className="text-gray-650 text-base">{text}</span>
      {isSelected ? (
        <>
          <div className="w-full bg-gray-650 h-[1.5px] absolute"></div>
        </>
      ) : (
        <>
          <div className="w-full bg-gray-650 h-0 mt-[-4px] group-hover:mt-[0px] group-hover:h-[1.5px] group-hover:opacity-75 absolute transition-all duration-[200] ease-in-out"></div>
        </>
      )}
    </a>
  )
}
