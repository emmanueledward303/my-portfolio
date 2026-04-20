import './Skills.css'

const categories = [
  {
    name: 'Data & Querying',
    skills: [
      { name: 'SQL', level: 10 },
      { name: 'Python (pandas, numpy)', level: 15 },
      { name: 'dbt', level: 4 },
      { name: 'BigQuery / Snowflake', level: 0 },
    ],
  },
  {
    name: 'Visualisation',
    skills: [
      { name: 'Power BI', level: 52 },
      { name: 'Tableau', level: 45 },
      { name: 'Excel / Google Sheets', level: 16 },
      { name: 'Matplotlib / Seaborn', level: 3 },
    ],
  },
  {
    name: 'Analytics & Methods',
    skills: [
      { name: 'Statistical analysis', level: 11 },
      { name: 'A/B testing', level: 6 },
      { name: 'Cohort & funnel analysis', level: 8 },
      { name: 'Machine learning basics', level: 5 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 — Skills</span>
          <h2 className="section-title">What I work with</h2>
        </div>

        <div className="skills__grid">
          {categories.map(cat => (
            <div className="skill-group" key={cat.name}>
              <h3 className="skill-group__name">{cat.name}</h3>
              <div className="skill-list">
                {cat.skills.map(s => (
                  <div className="skill-item" key={s.name}>
                    <div className="skill-item__top">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar__fill"
                        style={{ '--w': `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
