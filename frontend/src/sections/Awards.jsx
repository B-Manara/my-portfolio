import { useInView } from '../hooks/useInView'
import { awards } from '../data/portfolio'
import styles from './Awards.module.css'

function AwardRow({ award, index }) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.row} fade-up stagger-${(index % 5) + 1} ${isInView ? 'visible' : ''}`}
    >
      <div className={styles.medal}>
        <span className={award.place === '1st' ? styles.gold : styles.silver}>
          {award.place === '1st' ? '🥇' : '🥈'}
        </span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.event}>{award.event}</h3>
        <p className={styles.detail}>{award.detail}</p>
        <p className={styles.context}>{award.context}</p>
      </div>
      <span className={styles.year}>{award.year}</span>
    </div>
  )
}

export default function Awards() {
  const { ref, isInView } = useInView()

  const firstPlaces = awards.filter((a) => a.place === '1st')
  const secondPlaces = awards.filter((a) => a.place === '2nd')

  return (
    <section id="awards" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`fade-up ${isInView ? 'visible' : ''}`}>
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            Competing &amp; <em>winning</em>
          </h2>
          <p className={styles.intro}>
            6 national podium finishes across AI, robotics, and programming disciplines —
            including 3 national first-place victories.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.columnLabel}>🥇 First Place</p>
            <div className={styles.list}>
              {firstPlaces.map((a, i) => (
                <AwardRow key={a.event} award={a} index={i} />
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <p className={styles.columnLabel}>🥈 Second Place</p>
            <div className={styles.list}>
              {secondPlaces.map((a, i) => (
                <AwardRow key={a.event} award={a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
