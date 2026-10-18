import { Fraunces, Inter } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = { title: "Editorial" };

export default function EditorialLayout({
  children,
}: LayoutProps<"/editorial">) {
  return (
    <div className={`${display.variable} ${body.variable}`}>{children}</div>
  );
}
