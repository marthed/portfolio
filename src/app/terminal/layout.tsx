import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = { title: "Terminal" };

export default function TerminalLayout({ children }: LayoutProps<"/terminal">) {
  return <div className={mono.variable}>{children}</div>;
}
