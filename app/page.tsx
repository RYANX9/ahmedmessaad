import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Intro } from "@/components/Intro"
import { ProjectVisual } from "@/components/ProjectVisual"
import { projects } from "@/lib/data"

export default function Page() {
  return (
    <>
      <Intro />

      <main className="atlas" id="work">
        <div className="axis" aria-hidden="true" />

        <section className="section-head">
          <h2>
            My work sits
            <br />
            <i>between intelligence and systems.</i>
          </h2>
          <p>
            I build the model. Then I build what runs it.
            <br />
            <br />
            My work sits between machine learning research and the software
            that makes a model useful: clinical AI, medical imaging, decision
            support, and full-stack products.
          </p>
        </section>

        <section className="method-strip">
          <div>
            <span>Method / 01</span>
            <strong>Observe the problem.</strong>
          </div>
          <div><strong>Build the intelligence.</strong></div>
          <div><strong>Ship the interface.</strong></div>
          <div><strong>Measure what happened.</strong></div>
        </section>

        <section className="work-intro">
          <div>
            <span>Selected work</span>
            <h2>
              Research becomes interesting when it survives contact with a
              real workflow.
            </h2>
          </div>
          <div>
            <span>Case<br />files.</span>
            <p>
              Not a gallery of screenshots. A record of problems, systems,
              decisions and outcomes.
              <br />
              Nine projects across clinical intelligence, applied ML, products
              and research.
            </p>
          </div>
        </section>

        {projects.map((project) => (
          <article className={`project project-${project.id}`} key={project.id}>
            <div className="project-index">
              <span>{project.rail}</span>
            </div>

            <div className="project-body">
              <div>
                <div className="project-type">
                  {project.id} / {project.type}
                </div>

                <h3 className="project-title">
                  {project.title}
                  {project.titleItalic && (
                    <>
                      <br />
                      <i>{project.titleItalic}</i>
                    </>
                  )}
                </h3>

                <p className="project-desc">{project.description}</p>
              </div>

              <div>
                <div className="project-meta">
                  {project.meta.map((item) => (
                    <span key={item.label}>
                      {item.label} <b>{item.value}</b>
                    </span>
                  ))}
                </div>

                <p className="project-desc project-long">
                  {project.longDescription}
                </p>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                </a>

                <div className="project-result">
                  <strong>{project.result}</strong>
                  <span>{project.resultLabel}</span>
                  <small>{project.resultNote}</small>
                </div>
              </div>
            </div>

            <ProjectVisual projectId={project.id} label={project.artLabel} coord={project.artCoord} />
          </article>
        ))}

        <section className="interlude">
          <h3>
            The interesting part is not the <em>model.</em>
            <br />
            It&apos;s what happens after it works.
          </h3>
          <div className="tiny">
            RESEARCH → ENGINEERING → INTERFACE → REAL USE
          </div>
        </section>
      </main>

      <About />
      <Contact />
    </>
  )
}
