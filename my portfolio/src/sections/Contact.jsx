import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to your email service (EmailJS, Formspree, etc.)
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="section-tag">04 — Contact</span>
          <h2 className="contact__title">
            Let's work<br /><em>together</em>.
          </h2>
          <p className="contact__sub">
            Open to full-time roles, freelance projects, and data consultancy.
            Drop me a message and I'll get back within 48 hours.
          </p>

          <div className="contact__links">
            <a href="mailto:you@email.com" className="contact__link">
              <span className="link-icon">✉</span>
              you@email.com
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact__link">
              <span className="link-icon">in</span>
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact__link">
              <span className="link-icon">gh</span>
              GitHub
            </a>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__thanks">
              <span className="thanks-icon">✓</span>
              <p>Message sent! I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn--primary">Send message</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="container footer__inner">
          <span>© 2025 Your Name. Built with React + Vite.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </section>
  )
}
