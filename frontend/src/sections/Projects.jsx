import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import Tag from '../components/Tag'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const { ref, isInView } = useInView()

  return (
    <article
      ref={ref}
      className={`${styles.card} fade-up stagger-${index + 1} ${isInView ? 'visible' : ''}`}
    >
      <div className={styles.cardTop}>
        <span className={styles.category}>{project.category}</span>
        <span className={styles.highlight}>{project.highlight}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.year}>{project.year}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className={styles.role}>{project.role}</span>
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className={`fade-up ${isInView ? 'visible' : ''}`}>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Projects that <em>matter</em>
          </h2>
          <p className={styles.intro}>
            Real-world AI systems, competition-winning platforms, and production
            web applications — built for clients, competitions, and research.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
