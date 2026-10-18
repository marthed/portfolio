import type { ReactNode } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { about, doiUrl, profile, projects, teaching } from "@/content/site";
import styles from "./terminal.module.css";

function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className={styles.prompt}>
      <span className={styles.user}>martin@kth</span>
      <span className={styles.dim}>:~$ </span>
      {children}
    </p>
  );
}

export default function Terminal() {
  return (
    <div className={styles.page}>
      <main className={styles.window}>
        <div className={styles.titlebar} aria-hidden>
          <span />
          <span />
          <span />
          <p>~/martin-hedlund — zsh</p>
        </div>

        <div className={styles.body}>
          <Prompt>whoami</Prompt>
          <div className={styles.whoami}>
            <ProjectMedia
              media={profile.photo}
              sizes="96px"
              preload
              className={styles.portrait}
            />
            <div>
              <h1 className={styles.name}>{profile.name}</h1>
              <p>{profile.role}</p>
              <p className={styles.dim}>{profile.affiliation}</p>
            </div>
          </div>

          <Prompt>cat about.md</Prompt>
          {about.map((p) => (
            <p key={p.slice(0, 24)} className={styles.out}>
              {p}
            </p>
          ))}

          <Prompt>cat teaching.md</Prompt>
          <p className={styles.out}>
            {teaching.summary}{" "}
            <a href={teaching.course.href}>[{teaching.course.label}]</a>
          </p>

          <Prompt>ls -l projects/</Prompt>
          <ul className={styles.projects}>
            {projects.map((p) => (
              <li key={p.slug} className={styles.project}>
                <ProjectMedia
                  media={p.media}
                  sizes="(max-width: 640px) 100vw, 320px"
                  className={styles.projectMedia}
                />
                <div>
                  <h2>
                    <span className={styles.dim}>
                      {p.kind === "research" ? "drwxr-xr-x" : "-rw-r--r--"}
                    </span>{" "}
                    {p.slug}/
                  </h2>
                  <p>{p.summary}</p>
                  <p className={styles.links}>
                    {p.doi && <a href={doiUrl(p.doi)}>doi:{p.doi}</a>}
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href}>
                        {l.label.toLowerCase()}
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Prompt>cat contact.txt</Prompt>
          <dl className={styles.contact}>
            <dt>email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
            <dt>github</dt>
            <dd>
              <a href={profile.socials.github}>marthed</a>
            </dd>
            <dt>linkedin</dt>
            <dd>
              <a href={profile.socials.linkedin}>martin-hedlund</a>
            </dd>
            <dt>orcid</dt>
            <dd>
              <a href={profile.socials.orcid}>0009-0002-0080-3113</a>
            </dd>
          </dl>

          <Prompt>
            <span className={styles.cursor} aria-hidden />
          </Prompt>
        </div>
      </main>
    </div>
  );
}
