import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { profile } from '../data/portfolio'
import { sendContactMessage } from '../utils/api'
import styles from './Contact.module.css'

const INIT = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { ref, isInView } = useInView()
  const [form, setForm] = useState(INIT)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await sendContactMessage(form)
      setStatus('success')
      setForm(INIT)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div
            ref={ref}
            className={`${styles.left} fade-up ${isInView ? 'visible' : ''}`}
          >
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">
              Let's build<br /><em>something together</em>
            </h2>
            <p className={styles.desc}>
              Open to freelance projects, research collaborations,
              internships, and full-time opportunities. Based in Constantine,
              Algeria — available remotely worldwide.
            </p>

            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.link}>
                <span className={styles.linkIcon}>✉</span>
                <span>{profile.email}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>in</span>
                <span>linkedin.com/in/manar-boulahouanet-886aab327/</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                <span>github.com/B-Manara</span>
              </a>
              <a href={profile.website} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>⬡</span>
                <span>b-manar.vercel.app</span>
              </a>
            </div>
          </div>

          <form
            className={`${styles.form} fade-up stagger-2 ${isInView ? 'visible' : ''}`}
            onSubmit={handleSubmit}
            noValidate
          >
            {status === 'success' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. Manar will get back to you soon.</p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={styles.input}
                    placeholder="Project or opportunity subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                {status === 'error' && (
                  <p className={styles.errorMsg}>{errorMsg}</p>
                )}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className={styles.spinner} />
                  ) : (
                    <>Send Message <span className={styles.arrow}>→</span></>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
