import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import Container from '../layout/Container'
import Button from './Button'
import Nav from './Nav'
import NavMobile from './NavMobile'
const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="p-[36px] bg-black-color-v1">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-red-color-v1 capitalize text-2xl"> jaro dom-bud</div>
          <Nav />
          <NavMobile toggled={isOpen} />
          <div className="hidden md:block">
            <Button type="button">Contact us</Button>
          </div>
          <div className="md:hidden">
            <Hamburger color="#C73659" toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
