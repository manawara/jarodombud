import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMobile = ({ toggled }) => {
  let classes =
    'fixed top-0 left-0 bg-black-color-v1 text-white w-screen h-screen md:hidden scale-0 transition-transform duration-500 z-[20] '
  if (toggled) {
    classes += ' scale-100   '
  }
  return (
    <nav className={classes}>
      <ul className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <li className="mb-4">
          <NavLink
            to=".."
            className={({ isActive }) => (isActive ? 'border-b-red-color-v1 border-b-[1px] pb-1 ' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink>About US</NavLink>
        </li>
        <li className="mb-4">
          <NavLink>Service</NavLink>
        </li>
        <li className="mr-4">
          <NavLink>Project</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
