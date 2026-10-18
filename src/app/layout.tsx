import type { Metadata } from "next";
import { profile } from "@/content/site";
import "./globals.css";

// Fonts are loaded per design (in each design's layout), so a route only
// downloads the fonts it actually uses.

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: `${profile.role}, ${profile.affiliation}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
