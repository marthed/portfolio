import { Instrument_Sans } from "next/font/google";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = { title: "Showcase" };

export default function ShowcaseLayout({ children }: LayoutProps<"/showcase">) {
  return <div className={sans.variable}>{children}</div>;
}
