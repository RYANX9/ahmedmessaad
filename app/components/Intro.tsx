import { navItems } from "@/lib/data"

export function Intro() {
  return (
    <header className="intro" id="top">
      <div className="intro-rail">
        <span>Algeria</span>
      </div>

      <div className="topline">
        <span>AM / 01</span>

        <span className="status">
          <span>2026</span>
          <span>Systems / Intelligence / Products</span>
          <span>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </span>
        </span>
      </div>

      <div className="intro-main">
        <div className="kicker">
          A working portfolio — not a résumé <b>↘</b>
        </div>

        <h1 className="hero-word">
          <span className="ghost">Ahmed</span>
          <span className="solid">Messaad</span>
        </h1>

        <p className="hero-copy">
          I build the model.
          <br />
          <em>Then the system.</em>
        </p>
      </div>

      <aside className="intro-aside">
        <div className="big">AI / ML engineer</div>
        Full-stack developer
        <br />
        Researcher
        <br />
        <br />
        <span className="mono">Algeria</span>
      </aside>

      <div className="scroll-note">
        <span>Scroll to inspect ↓</span>
        <span>Systems / Intelligence / Products</span>
      </div>
    </header>
  )
}
