import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = { title: "Minimal" };

export default function MinimalLayout({ children }: LayoutProps<"/minimal">) {
  return <div className={serif.variable}>{children}</div>;
}
