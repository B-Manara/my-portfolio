import { profile } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>Manar Boulahouanet</span>
          <span className={styles.sep}>·</span>
          <span className={styles.sub}>AI Engineer · Full-Stack Developer · Renewable Energy Researcher</span>
        </div>
        <div className={styles.right}>
          <a href={profile.github} target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
          <a href={`mailto:${profile.email}`} className={styles.link}>Email</a>
          <span className={styles.year}>© {year}</span>
        </div>
      </div>
    </footer>
  )
}
