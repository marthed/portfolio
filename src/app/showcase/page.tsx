import type { CSSProperties, ReactNode } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { about, doiUrl, profile, projects, teaching } from "@/content/site";
import styles from "./showcase.module.css";

// One full-screen slide per project, each on its own flat color, with the
// work centered and a few lines of white text pinned to the corners.
// Every color keeps white 17px text above WCAG AA (4.5:1).
const colors: Record<string, string> = {
  intro: "#6229ff",
  "rowing-beyond": "#c8331b",
  blocklyvr: "#0f6e4a",
  "jogging-in-place": "#1d4fd6",
  "advance-wars": "#9c1a7c",
  queens: "#141414",
  about: "#6229ff",
};

const total = projects.length + 2;

function Slide({
  id,
  index,
  color,
  label,
  headline,
  links,
  credit,
  children,
}: {
  id: string;
  index: number;
  color: string;
  label: string;
  headline: ReactNode;
  links?: ReactNode;
  credit?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={styles.slide}
      style={{ "--slide-bg": color } as CSSProperties}
    >
      <header className={styles.top}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.headline}>{headline}</h2>
        {links && <p className={styles.links}>{links}</p>}
      </header>
      <div className={styles.stage}>{children}</div>
      <footer className={styles.bottom}>
        <p>{credit}</p>
        <p className={styles.counter}>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </footer>
    </section>
  );
}

export default function Showcase() {
  return (
    <main className={styles.page}>
      <Slide
        id="intro"
        index={0}
        color={colors.intro}
        label={profile.name}
        headline={
          <>{profile.role}, researching physical locomotion in mixed reality</>
        }
        links={<a href="#about">About and contact</a>}
        credit={profile.affiliation}
      >
        <ProjectMedia
          media={profile.photo}
          sizes="(max-width: 700px) 70vw, 420px"
          preload
          className={styles.portrait}
        />
      </Slide>

      {projects.map((p, i) => (
        <Slide
          key={p.slug}
          id={p.slug}
          index={i + 1}
          color={colors[p.slug] ?? colors.intro}
          label={p.kind === "research" ? `Research, ${p.year}` : "Side project"}
          headline={
            <>
              {p.title}. {p.summary}
            </>
          }
          links={
            <>
              {p.doi && <a href={doiUrl(p.doi)}>Read the paper</a>}
              {p.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label === "Play" ? "Play it" : `See on ${l.label}`}
                </a>
              ))}
            </>
          }
          credit={
            p.kind === "research"
              ? `Research at ${profile.affiliation.split(",")[0]}`
              : "Built in spare time"
          }
        >
          <ProjectMedia
            media={p.media}
            sizes="(max-width: 700px) 92vw, 70vw"
            className={styles.work}
          />
        </Slide>
      ))}

      <section
        id="about"
        className={`${styles.slide} ${styles.textSlide}`}
        style={{ "--slide-bg": colors.about } as CSSProperties}
      >
        <header className={styles.top}>
          <p className={styles.label}>About</p>
        </header>
        <div className={styles.prose}>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            {teaching.summary} <a href={teaching.course.href}>Course page</a>
          </p>
        </div>
        <footer className={styles.bottom}>
          <p className={styles.links}>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.socials.github}>GitHub</a>
            <a href={profile.socials.linkedin}>LinkedIn</a>
            <a href={profile.socials.orcid}>ORCID</a>
          </p>
          <p className={styles.counter}>
            {String(total).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </footer>
      </section>
    </main>
  );
}
