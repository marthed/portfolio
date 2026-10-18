import Link from "next/link";
import styles from "./page.module.css";

// Design picker. Once a design is chosen, move its page here and delete the
// others.

const designs = [
  {
    href: "/minimal",
    name: "Minimal",
    blurb:
      "An academic home page: one serif column, publications first, almost no chrome.",
  },
  {
    href: "/editorial",
    name: "Editorial",
    blurb:
      "Magazine-style: a large portrait hero and a project grid led by images.",
  },
  {
    href: "/terminal",
    name: "Terminal",
    blurb: "Dark and monospaced, laid out like a shell session.",
  },
  {
    href: "/showcase",
    name: "Showcase",
    blurb:
      "Full-screen slides, one flat color per project, the work in the middle and a few lines of white text in the corners.",
  },
] as const;

export default function DesignPicker() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Design proposals</h1>
        <p className={styles.lede}>
          Same content, four directions. Each one is its own route.
        </p>
        <ul className={styles.list}>
          {designs.map((d) => (
            <li key={d.href}>
              <Link href={d.href} className={styles.card}>
                <span className={styles.name}>{d.name}</span>
                <span className={styles.path}>{d.href}</span>
                <span className={styles.blurb}>{d.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
