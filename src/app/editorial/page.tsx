import { ProjectMedia } from "@/components/ProjectMedia";
import { about, doiUrl, profile, projects, teaching } from "@/content/site";
import styles from "./editorial.module.css";

export default function Editorial() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>{profile.affiliation}</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <nav className={styles.nav} aria-label="Contact">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.socials.github}>GitHub</a>
            <a href={profile.socials.linkedin}>LinkedIn</a>
            <a href={profile.socials.orcid}>ORCID</a>
          </nav>
        </div>
        <ProjectMedia
          media={profile.photo}
          sizes="(max-width: 800px) 100vw, 45vw"
          preload
          className={styles.portrait}
        />
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.columns}>
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              {teaching.summary}{" "}
              <a href={teaching.course.href}>Course page →</a>
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Work</h2>
          <ul className={styles.grid}>
            {projects.map((p, i) => (
              <li
                key={p.slug}
                className={
                  i === 0 ? `${styles.card} ${styles.feature}` : styles.card
                }
              >
                <ProjectMedia
                  media={p.media}
                  sizes={
                    i === 0
                      ? "(max-width: 800px) 100vw, 1100px"
                      : "(max-width: 800px) 100vw, 540px"
                  }
                  className={styles.cardMedia}
                />
                <div className={styles.cardBody}>
                  <p className={styles.tag}>
                    {p.kind === "research"
                      ? `Research · ${p.year}`
                      : "Side project"}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <p className={styles.cardLinks}>
                    {p.doi && <a href={doiUrl(p.doi)}>Paper</a>}
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

      <footer className={styles.footer}>
        {profile.name} · {profile.email}
      </footer>
    </div>
  );
}
