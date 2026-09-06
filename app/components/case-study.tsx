import type { CaseStudy } from "../data";
import { CaseArt } from "./case-art";
import { Reveal } from "./reveal";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Reveal className="case">
      <div className="case-meta">
        <span className="num">{study.num}</span>
        <span>{study.category}</span>
        <span>{study.tag}</span>
      </div>

      <div className="case-title">
        <h3>
          {study.titleLines[0]}
          <br />
          <i>{study.titleLines[1]}</i>
        </h3>
        <div className="summary">
          <b>{study.summary}</b>
          {study.extra && (
            <>
              <br />
              {study.extra}
            </>
          )}
          {study.link && (
            <>
              <br />
              <a className="case-link" href={study.link.href} target="_blank" rel="noopener noreferrer">
                {study.link.label}
              </a>
            </>
          )}
        </div>
      </div>

      <div className="case-body">
        <div className="facts">
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <b>{fact.label}</b>
              {fact.value}
            </div>
          ))}
        </div>
        <div className="details">
          <p>{study.description}</p>
          <div className="metric">
            <div className="big">{study.metric.big}</div>
            <small>{study.metric.small}</small>
          </div>
        </div>
      </div>

      <CaseArt symbol={study.artSymbol} label={study.artLabel} />
    </Reveal>
  );
}
