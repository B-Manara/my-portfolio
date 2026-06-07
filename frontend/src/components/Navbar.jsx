import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={() => setActive('')}>
          <span className={styles.logoText}>M.</span>
          <span className={styles.logoDot} />
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                className={`${styles.link} ${active === href ? styles.activeLink : ''}`}
                onClick={() => handleClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://linkedin.com/in/manar-boulahouanet-886aab327/"
              target="_blank"
              rel="noreferrer"
              className={styles.cta}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
          <span className={menuOpen ? styles.burgerLineOpen : ''} />
        </button>
      </div>
    </nav>
  )
}
