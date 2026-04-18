import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'Sales Performance Dashboard',
    desc: 'Built an interactive Power BI dashboard tracking $2M+ in quarterly revenue, reducing reporting time by 60%. Connected to live SQL Server data with automated refresh.',
    tags: ['Power BI', 'SQL', 'DAX'],
    link: '#',
  },
  {
    num: '02',
    title: 'Customer Churn Prediction',
    desc: 'Developed a Python pipeline that identified at-risk customers with 82% accuracy using historical transaction data, enabling proactive retention campaigns.',
    tags: ['Python', 'pandas', 'scikit-learn'],
    link: '#',
  },
  {
    num: '03',
    title: 'Lagos Market Price Tracker',
    desc: 'Scraped, cleaned, and visualised weekly commodity price data across 12 markets in Lagos. Published findings as an open dataset used by 3 local NGOs.',
    tags: ['Python', 'Tableau', 'BeautifulSoup'],
    link: '#',
  },
  {
    num: '04',
    title: 'HR Analytics Report',
    desc: 'Designed an end-to-end HR analytics solution surfacing attrition drivers, headcount trends, and compensation benchmarks for a 500-person organisation.',
    tags: ['Excel', 'SQL', 'Power BI'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 — Projects</span>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="projects__grid">
          {projects.map(p => (
            <a href={p.link} className="project-card" key={p.num}>
              <div className="project-card__top">
                <span className="project-card__num">{p.num}</span>
                <span className="project-card__arrow">↗</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
