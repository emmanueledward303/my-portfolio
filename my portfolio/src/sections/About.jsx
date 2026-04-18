import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__label">
          <span className="section-tag">01 — About</span>
        </div>

        <div className="about__content">
          <h2 className="about__title">
            I make data <em>legible</em> for the people who need it most.
          </h2>

          <div className="about__body">
            <p>
              I'm a data analyst based in Lagos, Nigeria with a passion for extracting
              meaningful insights from messy datasets. Whether it's building dashboards
              for executive teams or writing SQL queries that surface buried patterns,
              I thrive at the intersection of data and decision-making.
            </p>
            <p>
              When I'm not deep in a dataset, I'm usually exploring new visualization
              techniques, contributing to open data projects, or mentoring aspiring
              analysts in my community.
            </p>

            <div className="about__tools">
              <span className="tools-label">Day-to-day stack</span>
              <div className="tools-list">
                {['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'dbt', 'BigQuery'].map(t => (
                  <span className="tool-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
