import { useState, useEffect } from 'react'
import './Nav.css'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">YN<span>.</span></a>
        <ul className="nav__links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav__link">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
