import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className="hidden md:flex text-white">
        <li className="mr-4">
          <NavLink
            to=".."
            className={({ isActive }) => (isActive ? 'border-b-red-color-v1 border-b-[1px] pb-1 ' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink>About US</NavLink>
        </li>
        <li className="mr-4">
          <NavLink>Service</NavLink>
        </li>
        <li className="mr-4">
          <NavLink>Project</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
