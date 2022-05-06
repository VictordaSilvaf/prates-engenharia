import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

export function CustomLinkCol({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <>
      <Link
        to={to}
        {...props}
        className="hover:opacity-75 transition-all group relative duration-[200] ease-in-out "
        style={{ textDecoration: match ? 'underline' : 'none' }}
      >
        <span className="w-full">{children}</span>
      </Link>
    </>
  )
}
