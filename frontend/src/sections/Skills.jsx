import { useInView } from '../hooks/useInView'
import { skills, certifications } from '../data/portfolio'
import styles from './Skills.module.css'

function SkillGroup({ category, items, index }) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.group} fade-up stagger-${index + 1} ${isInView ? 'visible' : ''}`}
    >
      <h3 className={styles.groupTitle}>{category}</h3>
      <div className={styles.pills}>
        {items.map((skill) => (
          <span key={skill} className={styles.pill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, isInView } = useInView()
  const { ref: certRef, isInView: certInView } = useInView()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className={`fade-up ${isInView ? 'visible' : ''}`}>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Skills &amp; <em>Certifications</em></h2>
          <p className={styles.intro}>
            A broad technical stack refined through competitions, client work, and formal study.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items], i) => (
            <SkillGroup key={category} category={category} items={items} index={i} />
          ))}
        </div>

        <div
          ref={certRef}
          className={`${styles.certsBlock} fade-up ${certInView ? 'visible' : ''}`}
        >
          <p className={styles.certsLabel}>Industry &amp; Academic Certifications</p>
          <div className={styles.certsGrid}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.certCard}>
                <div className={styles.certTop}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certDate}>{cert.date}</span>
                </div>
                <p className={styles.certTitle}>{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
