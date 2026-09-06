import { aboutFacts } from "@/lib/data"

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <span>About / provenance</span>
        <h2>
          Built between
          <br />
          <i>research & reality.</i>
        </h2>
      </div>

      <div className="about-copy">
        <p>
          The work is technical. The through-line is simple: make intelligence
          useful.
        </p>

        <p>
          I am an AI/ML engineer and full-stack developer focused on applied
          deep learning for clinical and diagnostic problems.
        </p>

        <p>
          I tend to work across the whole distance between an idea and a
          working product: data, model architecture, evaluation, interfaces,
          APIs, databases and deployment. A model that cannot survive outside
          a notebook is not the finished work.
        </p>

        <div className="about-facts">
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
              <small>{fact.note}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
