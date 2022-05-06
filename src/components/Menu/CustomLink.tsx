import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <>
      <Link
        to={to}
        {...props}
        className="hover:opacity-75 transition-all group relative duration-[200] ease-in-out"
      >
        <span className="w-full">{children}</span>
        {match ? (
          <div className="w-full bg-gray-650 h-[1.5px] absolute"></div>
        ) : (
          <div className="w-full bg-gray-650 h-0 mt-[-4px] group-hover:mt-[0px] group-hover:h-[1.5px] group-hover:opacity-75 absolute transition-all duration-[200] ease-in-out"></div>
        )}
      </Link>
    </>
  )
}
