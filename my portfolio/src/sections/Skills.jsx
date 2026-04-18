import './Skills.css'

const categories = [
  {
    name: 'Data & Querying',
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'Python (pandas, numpy)', level: 88 },
      { name: 'dbt', level: 72 },
      { name: 'BigQuery / Snowflake', level: 78 },
    ],
  },
  {
    name: 'Visualisation',
    skills: [
      { name: 'Power BI', level: 92 },
      { name: 'Tableau', level: 85 },
      { name: 'Excel / Google Sheets', level: 90 },
      { name: 'Matplotlib / Seaborn', level: 75 },
    ],
  },
  {
    name: 'Analytics & Methods',
    skills: [
      { name: 'Statistical analysis', level: 82 },
      { name: 'A/B testing', level: 76 },
      { name: 'Cohort & funnel analysis', level: 88 },
      { name: 'Machine learning basics', level: 65 },
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
