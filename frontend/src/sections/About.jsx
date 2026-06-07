import { useInView } from '../hooks/useInView'
import { experience, education, profile } from '../data/portfolio'
import styles from './About.module.css'

function TimelineItem({ title, sub, location, period, bullets, note, index }) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.item} fade-up stagger-${(index % 4) + 1} ${isInView ? 'visible' : ''}`}
    >
      <div className={styles.itemLeft}>
        <span className={styles.period}>{period}</span>
        {location && <span className={styles.location}>{location}</span>}
      </div>
      <div className={styles.itemDivider}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>
      <div className={styles.itemRight}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemSub}>{sub}</p>
        {note && <p className={styles.itemNote}>{note}</p>}
        {bullets && (
          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={ref} className={`fade-up ${isInView ? 'visible' : ''}`}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience &amp; <em>Education</em></h2>
        </div>

        <div className={styles.layout}>
          {/* Experience */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Work Experience</p>
            <div className={styles.timeline}>
              {experience.map((exp, i) => (
                <TimelineItem
                  key={exp.role}
                  title={exp.role}
                  sub={exp.company}
                  location={exp.location}
                  period={exp.period}
                  bullets={exp.bullets}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={styles.block}>
            <p className={styles.blockLabel}>Education</p>
            <div className={styles.timeline}>
              {education.map((edu, i) => (
                <TimelineItem
                  key={edu.degree}
                  title={edu.degree}
                  sub={edu.school}
                  period={edu.period}
                  note={edu.note}
                  index={i}
                />
              ))}
            </div>

            <div className={styles.languagesCard}>
              <p className={styles.langLabel}>Languages</p>
              <div className={styles.langs}>
                {[
                  { lang: 'Arabic', level: 'Native' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'French', level: 'Intermediate' },
                ].map(({ lang, level }) => (
                  <div key={lang} className={styles.lang}>
                    <span className={styles.langName}>{lang}</span>
                    <span className={styles.langLevel}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
