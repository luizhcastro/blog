import type { Metadata } from "next";
import { Karla, Newsreader } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Luiz Castro",
  description: "Luiz Castro's personal website",
  icons: {
    icon: "/smile.png",
  },
};

const Italic = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-italic",
});

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark min-h-screen">
      <body className={`${karla.className} ${Italic.variable} min-h-full px-6`}>
        {/*<Analytics />*/}
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-zinc-400 underline-offset-4 transition-transform sm:hover:underline"
              href="https://github.com/luizhcastro/blog"
              target="_blank"
            >
              Code
            </a>
            <a
              className="decoration-zinc-400 underline-offset-4 transition-transform sm:hover:underline"
              href="https://x.com/loez__"
              target="_blank"
            >
              @loez__
            </a>
          </div>
          <blockquote className="text-zinc-300">just have fun :)</blockquote>
        </footer>
      </body>
    </html>
  );
}
