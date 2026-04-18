import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__tag fade-up">
          <span className="dot" />
          Available for opportunities
        </div>

        <h1 className="hero__title fade-up fade-up-2">
          Turning data<br />
          into <em>decisions</em>.
        </h1>

        <p className="hero__sub fade-up fade-up-3">
          Hi, I'm <strong>EDWARD EMMANUEL</strong> a data analyst who finds the signal in the noise.<br />
          I work with SQL, Python, and data viz tools to help teams act on what matters.
        </p>

        <div className="hero__cta fade-up fade-up-4">
          <a href="#projects" className="btn btn--primary">View my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__metrics fade-up fade-up-5">
          {[
            { val: '3+', label: 'Years of experience' },
            { val: '20+', label: 'Projects delivered' },
            { val: '5', label: 'Tools mastered' },
          ].map(m => (
            <div className="metric" key={m.label}>
              <span className="metric__val">{m.val}</span>
              <span className="metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__bg-line" aria-hidden="true" />
    </section>
  )
}
