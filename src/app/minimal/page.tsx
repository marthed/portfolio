import { ProjectMedia } from "@/components/ProjectMedia";
import { about, doiUrl, profile, projects, teaching } from "@/content/site";
import styles from "./minimal.module.css";

const research = projects.filter((p) => p.kind === "research");
const sideProjects = projects.filter((p) => p.kind === "side-project");

export default function Minimal() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <ProjectMedia
            media={profile.photo}
            sizes="112px"
            preload
            className={styles.portrait}
          />
          <div>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.role}>
              {profile.role}
              <br />
              {profile.affiliation}
            </p>
            <p className={styles.links}>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.socials.github}>GitHub</a>
              <a href={profile.socials.linkedin}>LinkedIn</a>
              <a href={profile.socials.orcid}>ORCID</a>
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2>About</h2>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Publications</h2>
          <ol className={styles.entries}>
            {research.map((p) => (
              <li key={p.slug} className={styles.entry}>
                <ProjectMedia
                  media={p.media}
                  sizes="(max-width: 480px) 100vw, 128px"
                  className={styles.thumb}
                />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  {p.doi && (
                    <p className={styles.meta}>
                      {p.year} · DOI <a href={doiUrl(p.doi)}>{p.doi}</a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Teaching</h2>
          <p>{teaching.summary}</p>
          <p className={styles.meta}>
            <a href={teaching.course.href}>{teaching.course.label}</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Side projects</h2>
          <ul className={styles.entries}>
            {sideProjects.map((p) => (
              <li key={p.slug} className={styles.entry}>
                <ProjectMedia
                  media={p.media}
                  sizes="(max-width: 480px) 100vw, 128px"
                  className={styles.thumb}
                />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <p className={styles.meta}>
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href}>
                        {l.label}
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
