// Every design reads from this file, so content changes once and every route
// picks it up. Media paths are relative to the media root (see lib/media.ts).

export type Media =
  | { kind: "image"; src: string; width: number; height: number; alt: string }
  | {
      kind: "video";
      src: string;
      poster: string;
      width: number;
      height: number;
      alt: string;
    };

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  kind: "research" | "side-project";
  year?: number;
  doi?: string;
  links: Link[];
  media: Media;
};

export const profile = {
  name: "Martin Hedlund",
  role: "PhD candidate in Human-Computer Interaction",
  affiliation: "KTH Royal Institute of Technology, Stockholm",
  photo: {
    kind: "image",
    src: "profile.jpg",
    width: 2125,
    height: 2063,
    alt: "Portrait of Martin Hedlund",
  } satisfies Media,
  email: "marthed@kth.se",
  socials: {
    github: "https://github.com/marthed",
    linkedin: "https://www.linkedin.com/in/martin-hedlund-94186011/",
    orcid: "https://orcid.org/0009-0002-0080-3113",
  },
};

export const about = [
  "I'm doing a PhD in Human-Computer Interaction at KTH Royal Institute of Technology in Stockholm. My research is on physical locomotion techniques in mixed reality. Alongside that I've worked on the design of low-code platforms for web applications.",
  "Other interests include meta-science, philosophy, economics, neuroscience, and animal (including human) behavior.",
];

export const teaching = {
  summary:
    "At KTH I developed and taught DH2643 Advanced Interaction Programming, a final-year master's course on full-stack web development: front-end and back-end frameworks, deployment with Docker, and DevOps. I was also head teaching assistant for DH2642 Interaction Programming and have supervised eight master's theses.",
  course: {
    label: "DH2643 Advanced Interaction Programming",
    href: "https://www.kth.se/student/kurser/kurs/DH2643?l=en",
  },
};

export const projects: Project[] = [
  {
    slug: "rowing-beyond",
    title: "Rowing Beyond",
    summary: "Locomotion control for a rowing machine in virtual reality.",
    kind: "research",
    year: 2024,
    doi: "10.1145/3613904.3642192",
    links: [],
    media: {
      kind: "image",
      src: "rowing.jpg",
      width: 2298,
      height: 1080,
      alt: "Rowing machine fitted with motion sensors",
    },
  },
  {
    slug: "blocklyvr",
    title: "BlocklyVR",
    summary: "A block-based programming environment in virtual reality.",
    kind: "research",
    year: 2023,
    doi: "10.1145/3626705.3627779",
    links: [],
    media: {
      kind: "video",
      src: "blocklyvr.mp4",
      poster: "blocklyvr-poster.jpg",
      width: 1920,
      height: 1080,
      alt: "Duplicating a block in BlocklyVR",
    },
  },
  {
    slug: "jogging-in-place",
    title: "Jogging-in-place",
    summary: "Locomotion control for jogging in virtual reality.",
    kind: "research",
    year: 2023,
    doi: "10.1145/3626705.3627778",
    links: [],
    media: {
      kind: "image",
      src: "jogging.png",
      width: 960,
      height: 540,
      alt: "A person jogging in place while wearing a VR headset",
    },
  },
  {
    slug: "advance-wars",
    title: "Advance Wars (sort of)",
    summary:
      "A work-in-progress, browser-based hobby game inspired by Advance Wars.",
    kind: "side-project",
    links: [
      { label: "GitHub", href: "https://github.com/marthed/advance_wars" },
      { label: "Play", href: "https://marthed.github.io/advance_wars/" },
    ],
    media: {
      kind: "image",
      src: "advance-wars.png",
      width: 1828,
      height: 1382,
      alt: "Tile map from the Advance Wars clone",
    },
  },
  {
    slug: "queens",
    title: "Queens Game",
    summary: "A logic puzzle game based on the one on LinkedIn.",
    kind: "side-project",
    links: [
      { label: "GitHub", href: "https://github.com/marthed/queens" },
      { label: "Play", href: "https://queensgame.eu" },
    ],
    media: {
      kind: "image",
      src: "queens.png",
      width: 1194,
      height: 1162,
      alt: "A Queens puzzle board",
    },
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
